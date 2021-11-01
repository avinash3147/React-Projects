import { FaBars } from 'react-icons/fa'
import { useContext } from 'react';

import { useGlobalContext } from './Context';

const Home = () => {
    const { openSidebar, openModal } = useGlobalContext()
    
    return (
        <main>
            <button className='sidebar-toggle' onClick={openSidebar}>
                <FaBars />
            </button>
            <button className='btn' onClick={openModal}>
                Show Modal
            </button>
        </main>
    )
}

export default Home;