import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {

    const [isSideBarOpen, setIsSideBarOpen] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openSidebar = () => {
        setIsSideBarOpen(true)
    }

    const closeSidebar = () => {
        setIsSideBarOpen(false)
    }

    const openModal = () => {
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }

    return <AppContext.Provider value={{ isSideBarOpen, isModalOpen, openSidebar, closeSidebar, openModal, closeModal }}>{children}</AppContext.Provider>
}

// Custom Hook
export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider}