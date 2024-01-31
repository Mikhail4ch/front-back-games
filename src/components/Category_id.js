import { useParams, useNavigate} from 'react-router-dom';
import { useState, useEffect } from 'react';
import connection from '../api/connection'

function CategoryId() { 
    
    const {id} = useParams()??null;
    const navigate = useNavigate();

    if (!id) {
        navigate('/')
    }
    const [list, setList] = useState([]);

const getItemsByCategory_Id = async(id) => {
    try {
        const response = await connection.get(`/categories/${id}/items`)
        setList(response.data)
    } catch (error) {
        console.log(error.message)
    }
}

useEffect(() => {
    getItemsByCategory_Id(id)
},[id])
   
    return ( 
        <div>
            {list && list.map((item) => {
                return (
                    <>
                        <h3> Categories ID: ${id} </h3>
                        <p>Name: {item.name}</p>
                        <p>Price: {item.price}</p>
                        <p>Description: {item.description}</p>
                        <button onClick={() => {
                            navigate('/')
                        }}> Go Back</button>
                         <button onClick={() => {
                navigate(`/categories/${id}`)
            }}>Edit</button>
                    </>
                )
            })
            }
        </div>

    )
}

export default CategoryId;

