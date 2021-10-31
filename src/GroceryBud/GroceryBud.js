import { useState } from 'react';
import Alert from './Alert';
import './GroceryBud.css'
import GroceryItems from './GroceryItems';

function GroceryBud() {

    const [itemName, setItemName] = useState('')
    const [items, setItems] = useState([])
    const [isEdit, setIsEdit] = useState(false)
    const [editId, setEditId] = useState('')
    const [alert, setAlert] = useState({ show: false, msg: '', type: ''})
    
    const handleChange = (e) => {
        console.log(e.target.name);
        console.log(e.target.value);
        setItemName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (!itemName) {
            showAlert(true, 'danger', 'Please Enter Value')
        }else if (itemName && isEdit) {
            setItems(
                items.map((item) => {
                if (item.id === editId) {
                    return {...item, itemName: itemName}
                }
                return item;
            })
            )
            setItemName('')
            setEditId(null)
            setIsEdit(false)
            showAlert(true, 'success', 'Value Changed')
        } else {
            showAlert(true, 'success', 'Item added to the list')
            const newItem = {id: new Date().getTime().toString(), itemName: itemName}
            setItems([...items, newItem])
            setItemName('')
        }
    }

    const clearItems = () => {
        showAlert(true, 'danger', 'Empty Items List')
        setItems([])
    }

    const editItem = (id) => {
        const specificItem = items.find((item) => item.id === id);
        setIsEdit(true)
        setEditId(id)
        setItemName(specificItem.itemName)
    }

    const removeItem = (id) => {
        console.log("Remove Item: ", id);
        const newItems = items.filter((item) => item.id != id);
        setItems(newItems)
    }

    const showAlert = (show=false, type= '', msg='') => {
        setAlert({ show, type, msg })
    }

    return (
        <section className='section-center'>
            <form className='grocery-form' onSubmit={handleSubmit}>

                { alert.show && <Alert {...alert} removeAlert={showAlert} items={items} /> }

                <h3>Grocery Bud</h3>

                <div className='form-control'>
                    <input
                        type='text'
                        id='itemName'
                        name='itemName'
                        value={itemName}
                        onChange={handleChange}
                        className='grocery'
                    />
                </div>

                <button 
                    type='submit'
                    className='submit-btn'
                >
                    { isEdit ? 'Edit' : 'Submit' }
                </button>
            </form>

            {
                items.length > 0 && (
                    <div className='grocery-container'>
                        <GroceryItems
                            items={items} 
                            editItem={editItem} 
                            removeItem={removeItem}
                        />
                        <button
                            className='clear-btn'
                            onClick={clearItems}
                        >
                            Clear Items
                        </button>
                    </div>
                )
            }
        </section>
    )
}

export default GroceryBud;