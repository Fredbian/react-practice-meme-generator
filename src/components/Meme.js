import React from 'react'
import { useState } from 'react'
import memesJson from '../memesData'

export default function Form() {

    const [meme, setMeme] = useState({
        topText: '',
        bottomText: '',
        randomUrl: "http://i.imgflip.com/1bij.jpg"
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setMeme(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    const getMemeImage = () => {
        // console.log(memesJson.data.memes)
        const data = memesJson.data.memes
        // console.log(data[Math.floor(Math.random() * data.length)].url)
        const url = data[Math.floor(Math.random() * data.length)].url
        setMeme(prevImg => {
            return {
                ...prevImg,
                randomUrl: url
            }
        })
    }

    return (
        <>
            <div className='form'>
                <div className='form--input-container'>
                    <input className='form--input1' name='topText' value={meme.topText} onChange={handleChange} />
                    <input className='form--input2' name='bottomText' value={meme.bottomText} onChange={handleChange} />
                </div>
                <button className='form--btn' onClick={getMemeImage}>Get a new meme image &#128444;&#65039;</button>
            </div>
            <div className='meme'>
                <img className='meme--img' alt='meme--img' src={meme.randomUrl} />
                <h3 className='meme--text top'>{meme.topText}</h3>
                <h3 className='meme--text bottom'>{meme.bottomText}</h3>
            </div>
        </>
    )
}