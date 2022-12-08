import React, { useState } from 'react'
import Menu from './Menu'
import Categories from './Categories'
import items from './data'

const allCategories = ['Усі', ...new Set(items.map((item) => item.category))]

function App() {
    const [menuItems, setMenuItems] = useState(items)
    const [categories, setCategories] = useState(allCategories)

    const filterItems = (category) => {
        if (category === 'Усі') {
            setMenuItems(items)
            return
        }
        const newItems = items.filter((item) => item.category === category)
        setMenuItems(newItems)
    }

    return (
        <main>
            <section className='menu section'>
                <div className='title'>
                    <h2>Наше меню</h2>
                </div>
                <Categories categories={categories} filterItems={filterItems} />
                <Menu items={menuItems} />
            </section>
        </main>
    )
}

export default App
