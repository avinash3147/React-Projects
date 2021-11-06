import { useState } from 'react';
import ReactMarkdown from 'react-markdown'

import './MarkDownPreview.css'

function MarkDownPreview() {

    const [markDown, setMarkDown] = useState('## MarkDown Preview')

    return (
        <main>
            <section className='markdown'>
                <textarea 
                    className='input'
                    value={markDown}
                    onChange={(e) => setMarkDown(e.target.value)}
                >
                </textarea>

                <article className='result'>
                    <ReactMarkdown>
                        {markDown}
                    </ReactMarkdown>
                </article>
            </section>
        </main>
    )
}

export default MarkDownPreview;