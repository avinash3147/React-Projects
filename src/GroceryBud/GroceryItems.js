import { FaEdit, FaTrash } from "react-icons/fa";

const GroceryItems = ({ items, editItem, removeItem }) => {
    return (
        <div className='grocery-list'>
            {
                items.map((item) => {
                    const { id, itemName } = item;
                    return (
                        <div className='grocery-item' key={id}>
                            <p className='title'>{itemName}</p>
                            <div className='btn-container'>
                                <button
                                    type='button'
                                    className='edit-btn'
                                    onClick={() => editItem(id)}
                                >
                                    <FaEdit />
                                </button>

                                <button
                                    type='button'
                                    className='delete-btn'
                                    onClick={() => removeItem(id)}
                                >
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default GroceryItems;