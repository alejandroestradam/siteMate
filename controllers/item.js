const mongoose = require('mongoose')
const Item = require('../models/Item')

const createItem = (req, res) => {
    let item = new Item(req.body)
    item
    .save()
    .then((newItem) => {
        res.status(201).send(newItem)
    })
    .catch(() => {
        res.status(500).send('Internal Server Error')
    })
}

const getItems = (req, res) => {
    Item.find()
    .then((items) => {
        res.send(items)
    })
    .catch(() => {
        res.status(404).send('No items found')
    })
}

const updateItem = (req, res) => {
    const itemId = req.params.id
    const updateData = req.body 
    
    Item.findByIdAndUpdate(itemId, updateData, { new: true })
        .then((updatedItem) => {
            if (!updatedItem) {
                return res.status(404).send('Item not found')
            }
            res.status(200).send(updatedItem)
        })
        .catch((error) => {
            res.status(500).send('Internal Server Error')
        })
}

const deleteItem = (req, res) => {
    res.status(200).send(`Item ${req.params.id} deleted`)
}

module.exports = {
    createItem,
    getItems,
    updateItem,
    deleteItem
}
