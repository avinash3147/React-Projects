import { FaTimes } from "react-icons/fa";
import { links, social } from "./data";
import logo from './logo.svg'

import { useGlobalContext } from "./Context";

const SideBar = () => {
    const { isSideBarOpen, closeSidebar } = useGlobalContext()

    return (
        <aside className={`${isSideBarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
            <div className='sidebar-header'>
                <img src={logo} className='logo' alt='Coding Addict' />
                <button className='close-btn' onClick={closeSidebar}>
                    <FaTimes />
                </button>
            </div>

            <ul className="links">
                {
                    links.map((link) => {
                        const { id, url, text, icon } = link
                        return (
                            <li key={id}>
                                <a herf={url}>{icon}{text}</a>
                            </li>
                        )
                    })
                }
            </ul>

            <ul className='social-icons'>
                {
                    social.map((link) => {
                        const { id, url, icon } = link
                        return (
                            <li key={id}>
                                <a href={url}>{icon}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </aside>
    )
}

export default SideBar;