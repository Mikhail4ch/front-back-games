import { useEffect, useState } from "react";
import CategoryDisplay from "./components/CategoryDisplay";
import AddCategory from "./components/AddCategory";
import connection from "./api/connection";
import ItemDisplay from "./components/ItemDisplay";
import AddItem from "./components/AddItem";

function App() {
    const [categories, setCategories] = useState([]);

    const getCategories = async() => {
        try {
            const response = await connection.get('/categories')
            setCategories(response.data)
        } catch (error) {
            console.log(error.message)
        }
    }

    const createCategory = async(categoryName) => {
        try {
            const response = await connection.post('/categories', {name: categoryName, role: "admin"})
            console.log(response.data)
            getCategories()
        } catch (error) {
            console.log(error.message)
        }
    }

    const deleteCategory = async(categoryId) => {
        try {
            const response = await connection.delete(`/categories/${categoryId}`)
            console.log(response.data)
            getCategories()
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getCategories()
    },[])

    //Homework

    //1
    const [items, setItems] = useState([]);

    const getItems = async() => {
        try {
            const response = await connection.get('/items')
            setItems(response.data)
        } catch (error) {
            console.log(error.message)
        }
    }

    //2
    const createItem = async(itemName,itemPrice,itemDescription,itemCategory_id) => {
        try {
            const response = await connection.post('/items', {name: itemName, price: itemPrice, description: itemDescription,
                category_id: itemCategory_id, role: "admin"})
            console.log(response.data)
            getItems()
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getItems()
    },[])

    return(
        <div className="App">
            <h1>Category List</h1>
            <AddCategory handleAddCategory={createCategory}/>
            <CategoryDisplay categories={categories} handleDeleteCategory={deleteCategory}></CategoryDisplay>
            <h1> Item List </h1>
            <AddItem handleAddName={createItem} handleAddPrice={createItem} handleAddCategory_id={createItem}
            handleAddDescription={createItem}/> 
            <ItemDisplay items={items}> </ItemDisplay>
        </div>
    )
};
export default App;

