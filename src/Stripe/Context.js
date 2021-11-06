import React, { useState, useContext } from 'react'

import sublinks from './data';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [isSideBarOpened, setIsSideBarOpened] = useState(false)
    const [isSubMenuOpened, setIsSubMenuOpened] = useState(false)
    const [page, setPage] = useState({ page: '', links: [] })
    const [location, setLocation] = useState({})

    const openSidebar = () => {
        setIsSideBarOpened(true)
    }

    const closeSideBar = () => {
        setIsSideBarOpened(false)
    }

    const openSubMenu = (text, coordinates) => {
        const page = sublinks.find((link) => link.page === text);
        setPage(page)
        setLocation(coordinates)
        setIsSubMenuOpened(true)
    }

    const closeSubMenu = () => {
        setIsSubMenuOpened(false)
    }

    return <AppContext.Provider value={{ 
        isSideBarOpened,
        isSubMenuOpened,
        page,
        location,
        openSidebar,
        closeSideBar,
        openSubMenu,
        closeSubMenu
    }}
    >
        {children}
    </AppContext.Provider>
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppProvider, AppContext };