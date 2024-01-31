import {useNavigate} from 'react-router-dom'

const CategoryDisplay = ({categories, handleDeleteCategory}) => {

    const navigate = useNavigate();

    const handleButtonClick = (event, categoryId) => {
        if (categoryId != null){
            handleDeleteCategory(categoryId)
        }
    }

    const handleEditClick = (event, categoryId) => {
        if (categoryId != null){
            navigate(`/categories/${categoryId}`)
        }
    }

    return (
        <div>
            <h2>List of Categories</h2>
            <table>
                <th>
                    <td>Category Name</td>
                    <td>Actions</td>
                </th>
                {categories && 
                    categories.map((category) => {
                        return<tr key={category.id}>
                            <td>{category.name}</td>
                            <td>
                                <button onClick={(event) => handleButtonClick(event, category.id)}>Delete</button>
                            </td>
                            <td>
                                <button onClick={(event) => handleEditClick(event, category.id)}>Edit</button>
                            </td>
                        </tr>
                    })
                }
            </table>
        </div>
    )
}
export default CategoryDisplay