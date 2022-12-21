import React from 'react'

export default function Header() {
    return (
        <header className='header'>
            <h1 className='brand'><img className='logo' alt='logo' src={require('../images/logo.png')}/><span className='title'>Meme Generator</span></h1>
            <p className='subTitle'>React Course - Project 3</p>
        </header>
    )
}