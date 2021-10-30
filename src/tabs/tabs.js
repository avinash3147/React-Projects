import { useEffect, useState } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

import './tabs.css'

const url = 'https://course-api.com/react-tabs-project'

function Tabs() {
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
    const [experienceData, setExperienceData] = useState([])
    const [value, setValue] = useState(0)

    useEffect(() => {
        // console.log("Test");
        fetch(url)
            .then((response) => {
                console.log(response.status);
                if (response.status >= 200 && response.status <= 299) {
                    return response.json()
                } else {
                    setIsLoading(false)
                    setIsError(true)
                    throw new Error(response.statusText)
                }
            })
            .then((data) => {
                // console.log(data);
                setExperienceData(data)
                setIsLoading(false)
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    if (isLoading) {
        return (
            <section className='section loading'>
                <h1>Loading...</h1>
            </section>
        )
    }

    if (isError) {
        return (
            <section className='section loading'>
                <h1>Error Ocurred while Fetching Data...</h1>
            </section>
        )
    }

    console.log(experienceData[value]);
    const { title, dates, company, duties } = experienceData[value]
    
    return (
        <section>
            <div className='title'>
                <h2>Experience</h2>
                <div className='underline'></div>
            </div>

            <div className='jobs-center'>
                <div className='btn-container'>
                    {
                        experienceData.map((data, index) => {
                            return (
                                <button
                                    type='button'
                                    key={data.id}
                                    className='job-btn'
                                    onClick={() => setValue(index)}
                                    className={`job-btn ${index === value && 'active-btn'}`}
                                >
                                    {data.company}
                                </button>
                            )
                        })
                    }
                </div>

                <article className='job-info'>
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className='job-date'>{dates}</p>
                    {
                        duties.map((duty, index) => {
                            return (
                                <div className='job-desc' key={index}>
                                    <FaAngleDoubleRight className='job-icon'></FaAngleDoubleRight>
                                    <p>{duty}</p>
                                </div>
                            )
                        })
                    }
                </article>
            </div>
            <button type='button' className='btn'>
                More Info
            </button>
        </section>
    )
}

export default Tabs;