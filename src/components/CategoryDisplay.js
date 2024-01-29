const CategoryDisplay = ({categories, handleDeleteCategory}) => {

    const handleButtonClick = (event, categoryId) => {
        if (categoryId != null){
            handleDeleteCategory(categoryId)
        }
    }

    return (
        <div>
            <h2>List of Categories</h2>
            <table>
                <th>
                    <td>Category Name</td>
                    <td>Action</td>
                </th>
                {categories && 
                    categories.map((category) => {
                        return<tr key={category.id}>
                            <td>{category.name}</td>
                            <td>
                                <button onClick={(event) => handleButtonClick(event, category.id)}>Delete</button>
                            </td>
                        </tr>
                    })
                }
            </table>
        </div>
    )
}
export default CategoryDisplay