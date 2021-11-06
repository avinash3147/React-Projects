import Hero from "./Hero";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import SubMenu from "./SubMenu";

import './Stripe.css'

function Stripe() {
    return (
        <>
            <Navbar />
            <Sidebar />
            <Hero />
            <SubMenu />
        </>
    )
}

export default Stripe;