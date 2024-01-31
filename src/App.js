import { useEffect, useState } from "react";
import CategoryDisplay from "./components/CategoryDisplay";
import AddCategory from "./components/AddCategory";
import connection from "./api/connection";
import ItemDisplay from "./components/ItemDisplay";
import AddItem from "./components/AddItem";
import CategoryId from "./components/Category_id";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditCategory from "./components/EditCategory";


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

    
    //4 

      const editCategory = async(id, categoryName) => {
        try {
            const response = await connection.put(`/categories/${id}`, {id: id, name: categoryName})
            console.log(response.data)
            getCategories()
        } catch (error) {
            console.log(error.message)
        }
    }


    return(
        <BrowserRouter>
      <Routes>
        <>
        <Route path="/1" element={<AddCategory handleAddCategory={createCategory}/>}/>
        <Route path="/2" element={<CategoryDisplay categories={categories} handleDeleteCategory={deleteCategory}></CategoryDisplay>}/>
         <Route path="/3" element={<AddItem handleAddItem={createItem}/>} />
         <Route path="/" element={<ItemDisplay items={items}> </ItemDisplay> }/>
         <Route path="/categories/:id/items" element={<CategoryId/>} />
         <Route path="/categories/:id" element={<EditCategory handleEditCategory={editCategory }/>} />
       </>
      </Routes>
        </BrowserRouter>
    );
}
export default App;

