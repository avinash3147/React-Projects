import { useState } from 'react'
import Categories from './Categories'
import './Menu.css'
import MenuData from './MenuData'
import MenuItems from './MenuItems'

const allCategories = ['all', ...new Set(MenuData.map((item) => item.category))]

function Menu() {
    const [menuData, setMenuData] = useState(MenuData)
    const [categories, setCategories] = useState(allCategories)

    const filterCategory = (category) => {
        console.log(category);
        if (category === 'all') {
            setMenuData(MenuData)
            // console.log(menuData);
            return
        }
        const filteredMenuData = MenuData.filter((item) => item.category === category);
        setMenuData(filteredMenuData)
        // console.log(menuData);
    }
    
    return (
        <main>
            <section className='container'>
                <h2>Our Menu</h2>
                <div className='underline'></div>
            
                <Categories
                    categories={categories} 
                    filterCategory={filterCategory}
                />
                <MenuItems menuItems={menuData} />
            </section>
        </main>
    )
}

export default Menu;