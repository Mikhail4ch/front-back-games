import { useState, useEffect } from 'react';
import {useParams, useNavigate} from 'react-router-dom'
import connection from '../api/connection';

const EditCategory= ({handleEditCategory}) => {
    const {id} = useParams()??null;
    const navigate = useNavigate();

    if (!id) {
        navigate('/')
    }
  
    const [categoryName, setCategoryName] = useState();
   
    const getCategory = async(id) => {
        console.log(id)
        try {
            const response = await connection.get(`/categories/${id}`)
            setCategoryName(response.data.name)
        } catch (error) {
            console.log(error.message)
        }
    }

    useEffect(() => {
        getCategory(id)
    },[id])


    const handleName = (event) => {
        setCategoryName(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        handleEditCategory(id, categoryName)
        navigate('/2');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p> Change Category Name </p>
                <input type="text" name="name" placeholder="Category Name" onChange={handleName} value={categoryName}/>
                <button type="submit">Edit</button>
                <button onClick={() => { navigate('/')}}> 
                    Go Back
                </button>
            </form>
        </div>
    )
}
export default EditCategory










