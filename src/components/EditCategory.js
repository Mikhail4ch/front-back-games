import { useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom'

const EditCategory= ({handleEditCategory}) => {
    const {id} = useParams()??null;
    const [categoryName, setCategoryName] = useState();
    const navigate = useNavigate();
  
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
                <input type="text" name="name" placeholder="Category Name" onChange={handleName}/>
                <button type="submit">Add</button>
                <button onClick={() => {id ? navigate(`/`): navigate('/')}}> 
                Go Back
        </button>
            </form>
        </div>
    )
}
export default EditCategory










