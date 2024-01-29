const ItemDisplay = ({items}) => {

    return (
        <div>
            <h2>List of Items</h2>
            <table>
                <th>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Description</td>
                    <td>Category_id</td>
                </th>
                {items && 
                    items.map((item) => {
                        return<tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td>{item.category_id}</td>
                        </tr>
                    })
                }
            </table>
        </div>
    )
}
export default ItemDisplay