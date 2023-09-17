import { Link } from 'react-router-dom'
import './Landing.css'
import backImage from '../../assets/BMW.png'
import { useEffect, useState } from 'react'

export const Landing = () => {

    const [phrase, setPhrase] = useState({})
    const _phrases = [
        {
            phrase: '“You should always strive to be the best, but never believe you are the best”',
            by: 'Juan Manuel Fangio',
            flag: 'https://flagcdn.com/w320/ar.png',
        },
        {
            phrase: `“When I'm 50, I'll look at the trophies I've won, but they're useless to me today. I want to win again”`,
            by: 'Fernando Alonso',
            flag: 'https://flagcdn.com/w320/es.png',
        },
        {
            phrase: '“The important thing is to win. Always. That idea that the important thing is to compete is pure demagogy”',
            by: 'Ayrton Senna',
            flag: 'https://flagcdn.com/w320/br.png',
        }
    ]

    const randomPhrase = () => {
        setPhrase(() => _phrases[Math.floor(Math.random() * _phrases.length)])
    }

    useEffect(() => {
        randomPhrase()
    }, [])

    return (

        <div id="Landing-container">

            <img id='backgroundImage' src={backImage} alt="" />

            <div className='Landing-container' >

                <div id='eslogan-container' >
                    {/* <iframe width="480" height="360" src="https://www.youtube.com/embed/D0I5MLmFcAM" title="F1 YPF Gran premio de Argentina 2019 #F1 #ArgentinaGP (Leer descripción)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}

                    <h1 id='eslogan'>{phrase.phrase}</h1>
                    <div id='author-section'>
                        <h3 id='author' >{phrase.by}</h3> <img id='flag' src={phrase.flag} alt="flag" />
                    </div>

                    <Link to='/home'>
                        <button id='button-start' className='Effect-button'>START</button>
                    </Link>
                </div>
            </div>

        </div>

    )

}