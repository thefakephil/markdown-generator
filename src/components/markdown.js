'use client';

import { markdownText } from '../strings/markdown-strings'
import MarkdownExample from '@/components/markdown.js'
import { useState, useEffect } from 'react'
import useSWR from 'swr'

export default function Markdown() {
    const fetcher = (...args) => fetch(...args).then(res => res.json())

    const [markdown, setMarkdownObj] = useState(markdownText);
    const [headerValue, setHeaderValue] = useState(false)
    const [sizeValue, setSizeValue] = useState('')
    const { data } = useSWR(`/api/hello?addHeader=${headerValue}&sizeRequested=${sizeValue}`, fetcher)
    console.log('sizeValue', sizeValue)
  
    function grabData() {

          const form = document.getElementById("myForm");
            setMarkdownObj(data);
      }

      const handleSizeChange = (e) => {
        console.log('e', e)
        setSizeValue(e.target.value)
      }

    return (
        <><form id='myForm' onSubmit={grabData}>
            {/* <div className={styles.options}> */}
            <label htmlFor="size">Size of Document:</label>
            <select name="size" id="size" value={sizeValue} onChange={handleSizeChange}>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>

            <input type="checkbox" id="header" name="addHeader" value={headerValue} onClick={() => setHeaderValue(!headerValue)} />
            <label htmlFor="header"> Add Header</label><br />


            {/* <input type="checkbox" id="vehicle2" name="vehicle2" value="True " />
    <label htmlFor="vehicle2"> I have a car</label><br />
    <input type="checkbox" id="vehicle3" name="vehicle3" value="True" />
    <label htmlFor="vehicle3"> I have a boat</label><br/> */}
            {/* </div>  */}
        </form><button onClick={grabData}> Click me </button><pre> {markdown} </pre></> 
    )
}