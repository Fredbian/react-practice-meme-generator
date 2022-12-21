import React from 'react'
import { useState, useEffect } from 'react'
import memesJson from '../memesData'

export default function Form() {
    const [input1, setInput1] = useState('')
    const [input2, setInput2] = useState('')
    const [memeImage, setMemeImage] = useState('')

    const handleChange1 = (e) => {
        setInput1(e.target.value)
        console.log(input1)
    }

    const handleChange2 = (e) => {
        setInput2(e.target.value)
        console.log(input2)
    }

    const getMemeImage = () => {
        // console.log(memesJson.data.memes)
        const data = memesJson.data.memes
        console.log(data[Math.floor(Math.random() * data.length)].url)
        const randomUrl = data[Math.floor(Math.random() * data.length)].url
        setMemeImage(randomUrl)
    }

    return (
        <>
            <div className='form'>
                <div className='form--input-container'>
                    <input className='form--input1' onChange={handleChange1} />
                    <input className='form--input2' onChange={handleChange2} />
                </div>
                <button className='form--btn' onClick={getMemeImage}>Get a new meme image &#128444;&#65039;</button>
            </div>
            <img className='meme--img' alt='meme--img' src={memeImage} />
        </>
    )
}