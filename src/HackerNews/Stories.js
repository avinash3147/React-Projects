import { useGlobalContext } from "./context";
import Story from "./Story";

const Stories = () => {

    const { isLoading, stories } = useGlobalContext()

    // const handleRemoveStory = () => {
    //     console.log("Remove Story Button Clicked");
    // }

    if (isLoading) {
        return <div className='loading'></div>
    }

    return (
        <section className='stories-container'>
            {
                stories.map((story) => {
                    return <Story key={story.objectID} {...story} />
                })
            }
        </section>
    )
}

export default Stories;