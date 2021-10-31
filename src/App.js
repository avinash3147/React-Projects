import ColorGeneratorDriver from "./ColorGenerator/ColorGeneratorDriver"
import LoremIpsumDataGenerator from "./LoremIpsum/LoremIpsum"
import Menu from "./menu/Menu"
import Review from "./reviews/Review"
import Slider from "./slider/slider"
import Tabs from "./tabs/tabs"
import Tour from "./tours/Tour"

function App() {
    return (
        <div className='container'>
            {/* <Tour /> */}
            {/* <Review /> */}
            {/* <Menu /> */}
            {/* <Tabs /> */}
            {/* <Slider /> */}
            {/* <LoremIpsumDataGenerator /> */}
            <ColorGeneratorDriver />
        </div>
    )
}

export default App
