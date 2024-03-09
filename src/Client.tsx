import { useEffect, useState } from "react"
import axios from 'axios'
import { API_URL } from "./utils"

interface Item {
    id: string
    name: string
    description: string
}

const Client = () => {
    const [items, setItems] = useState<Item[]>([])

    useEffect(() => {
        fetchData()
    },[])

    const fetchData = async () => {
        try {
            const response = await axios.get(API_URL)
            setItems(response.data)
        } catch (error) {
            console.error('Error fetching data:', error)
    }}

    const onDelete = async (id: string) => {
        try {
            await axios.delete(API_URL +id)
            fetchData()
        } catch (error) {
            console.error('Error deleting item:', error)
        }
    }

    const onUpdate = async (id: string) => {
        const updatedItem = {
            name: '',
            description: ''
        }
        try {
            await axios.put(API_URL, updatedItem)
            fetchData()
        } catch (error) {
            console.error('Error creating item:', error)
        }
        console.log(`Updating item with id: ${id}`)
    }

    const onCreate = async () => {
        const newItem = {
            name: '',
            description: ''
        }
        try {
            await axios.post(API_URL, newItem)
            fetchData()
        } catch (error) {
            console.error('Error creating item:', error)
        }
    }

    return (
    <div>
        <div className="displayedInfo">
            {items.map((item) => (
                <div key={item.id}>
                    <h2>{item.name}</h2>
                    <span>{item.description}</span>
                    <button onClick={onDelete(item.id)}>Delete</button>
                </div>
            ))}
        </div>
        <div className="buttons">
            <button onClick={onUpdate('')}>Create</button>
            <button onClick={onCreate()}>Update</button>
        </div>
    </div>
    )
}

export default Client