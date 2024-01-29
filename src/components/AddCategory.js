import { useState } from "react"

const AddCategory = ({ handleAddCategory}) => {
    const [categoryName, setCategoryName] = useState("");

    const handleName = (event) => {
        setCategoryName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleAddCategory(categoryName)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Category Name" onChange={handleName}/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}
export default AddCategory