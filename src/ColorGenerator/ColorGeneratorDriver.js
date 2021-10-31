import { useState } from "react";
import Values from 'values.js'

import './ColorGenerator.css'

const ColorGeneratorDriver = () => {

    const [colorCode, setColorCode] = useState('')
    const [error, setError] = useState(false)
    const [colorsList, setColorsList] = useState([])

    const handleChange =(e) => {
        const value = e.target.value;
        setColorCode(value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            let colors = new Values(colorCode).all(10)
            setColorsList(colors)
        } catch (error) {
            setError(true)
            console.log(error);
        }
    }

    return (
        <>
            <section className='container'>
                <h3>Color Generator</h3>

                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        id='colorCode'
                        name='colorCode'
                        value={colorCode}
                        placeholder='#f15025'
                        onChange={handleChange}
                        className={`${error ? `error` : null}`}
                    />
                    <button className='btn'>Generate Color</button>
                </form>
            </section>

            <section className='colors'>

            </section>
        </>
    )
}

export default ColorGeneratorDriver;