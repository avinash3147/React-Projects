import { useGlobalContext } from "./context";

const Story = ({ objectID, title, num_comments, url, points, author }) => {

    const { handleRemoveStory } = useGlobalContext()

    return (
        <article className='story'>
            <h4 className='title'>{title}</h4>
            <p className='info'>
                {points} points by {author} | {num_comments} Comments
            </p>

            <div>
                <a 
                    href={url} 
                    className='read-link'
                    target='_blank'
                    rel='noopener noreferrer'>
                    Read More
                </a>
                <button className='remove-btn' onClick={() => handleRemoveStory(objectID)}>Remove</button>
            </div>
        </article>

    )
}

export default Story;