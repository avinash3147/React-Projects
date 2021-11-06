const Follower = ({ avatar_url, htm_url, login }) => {
    return (
        <article className='card'>
            <img src={avatar_url} alt={login} />
            <h4>{login}</h4>
            <a href={htm_url} className='btn'>
                View Profile
            </a>
        </article>
    )
}

export default Follower;