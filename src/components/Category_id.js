import { useParams, useNavigate} from 'react-router-dom'

function CategoryId({ list, handleSubmitItems }) { 
    const { id } = useParams();
    handleSubmitItems(id)
    const navigate = useNavigate();


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

