import { useEffect, useState } from "react"
import Paginate from "./utils"

const url = 'https://api.github.com/users/john-smilga/followers?per_page=100'

export const useFetch = () => {

    const [loading, setLoading] = useState(true)
    const [followersData, setFollowersData] = useState([])
    
    const getFollowers = async () => {
        const response = await fetch(url)
        const data = await response.json()

        setFollowersData(Paginate(data))
        setLoading(false)
    }

    useEffect(() => {
        getFollowers()
    }, [])

    return { loading, followersData }
}