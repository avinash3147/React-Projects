import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './Context'
import sublinks from './data'

const Sidebar = () => {
    const { isSideBarOpened, closeSideBar } = useGlobalContext()
    return (
        <div
            className={`${
            isSideBarOpened ? 'sidebar-wrapper show' : 'sidebar-wrapper'
            }`}
        >
            <aside className='sidebar'>
                <button className='close-btn' onClick={closeSideBar}>
                    <FaTimes />
                </button>
                <div className='sidebar-links'>
                    {sublinks.map((item, index) => {
                    const { links, page } = item
                    return (
                        <article key={index}>
                        <h4>{page}</h4>
                        <div className='sidebar-sublinks'>
                            {links.map((link, index) => {
                            const { url, icon, label } = link
                            return (
                                <a key={index} href={url}>
                                {icon}
                                {label}
                                </a>
                            )
                            })}
                        </div>
                        </article>
                    )
                    })}
                </div>
            </aside>
        </div>
    )
}

export default Sidebar
