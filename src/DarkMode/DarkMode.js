
import articles from './data';
import './DarkMode.css'
import Article from './Article';
import { useEffect, useState } from 'react';

function DarkMode() {

    // const [isDarkMode, setIsDarkMode] = useState(false)
    const [theme, setTheme] = useState('light-theme')

    useEffect(() => {
        document.documentElement.className = theme
    }, [theme])

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme')
        } else {
            setTheme('light-theme')
        }
    }

    return (
        <main>
            <nav>
                <div className='nav-center'>
                    <h1>OverReacted</h1>
                    <button className='nav-btn' onClick={toggleTheme}>Toggle</button>
                </div>
            </nav>

            <section className='article'>
                {
                    articles.map((article) => {
                        return <Article key={article.id} {...article} />
                    })
                }
            </section>
        </main>
    )
}

export default DarkMode;