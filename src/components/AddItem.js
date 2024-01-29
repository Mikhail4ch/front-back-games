import { useState } from "react"

const AddItem = ({ handleAddName, handleAddPrice, handleAddDescription, handleAddCategory_id}) => {
    const [itemName, setItemName] = useState("");
    const [itemPrice, setItemPrice] = useState("");
    const [itemDescription, setItemDescription] = useState("");
    const [itemCategory_id, setItemCategory_id] = useState("");

    const handleName = (event) => {
        setItemName(event.target.value)
    }

    const handlePrice = (event) => {
        setItemPrice(event.target.value)
    }

    const handleDescription = (event) => {
        setItemDescription(event.target.value)
    }

    const handleCategory_id = (event) => {
        setItemCategory_id(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleAddName(itemName)
        handleAddPrice(itemPrice)
        handleAddDescription(itemDescription)
        handleAddCategory_id(itemCategory_id)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Item Name" onChange={handleName}/>
                <input type="text" name="name" placeholder="Item Price" onChange={handlePrice}/>
                <input type="text" name="name" placeholder="Item Description" onChange={handleDescription}/>
                <input type="text" name="name" placeholder="Item Category_id" onChange={handleCategory_id}/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}
export default AddItem