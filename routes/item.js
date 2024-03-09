const router = require('express').Router();

const {
    createItem,
    getItems,
    updateItem,
    deleteItem
} = require('../controllers/item')

router.post('/', createItem)
router.get('/', getItems)
router.put('/:id', updateItem)
router.delete('/:id', deleteItem)

module.exports = router;