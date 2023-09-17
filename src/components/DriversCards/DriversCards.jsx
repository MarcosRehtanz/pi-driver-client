import axios from 'axios'
import { useState, useEffect } from 'react'
import { DriverCard } from '../DriverCard/DriverCard'
import { useSelector } from 'react-redux'

import './DriversCards.css'
import image from '../../assets/Formula-One.png'
import { ErrorSection } from '../ErrorSection/ErrorSection'

export const DriversCards = () => {

    const [pages, setPages] = useState(0)
    const [selector, setSelector] = useState(1)
    const [drivers, setDrivers] = useState([])
    const [error, setError] = useState('')
    const filterDrivers = useSelector(state => state.filterDrivers)

    const renderCards = () => {
        const arr = drivers.slice(selector * 9 - 9, selector * 9);
        return arr.map(({ id, name, surname, image, teams, birthdate }) => {

            return <DriverCard
                key={id}
                id={id}
                name={name}
                surname={surname}
                image={image ? image : 'https://cdn.pixabay.com/photo/2013/07/12/15/36/motorsports-150157_960_720.png'}
                teams={teams ? teams.sort((a, b) => a.id - b.id) : [teams]}
                birthdate={birthdate}
            />
        })
    }


    const handlePage = (page) => {
        setSelector(page)
    }

    useEffect(() => {
        setDrivers(filterDrivers)
        setPages(Math.ceil(filterDrivers.length / 9))
        setSelector(1)
    }, [filterDrivers])

    return (
        <div id='DriversCards-container'>
            {error ? <label className='error-message'>{error}</label> : <br />}

            <section id='selector-container' >
                {selector <= 2
                    ? <button disabled className='button-left enabled-button' onClick={() => handlePage(1)} >1</button>
                    : <button className='button-left button-selector' onClick={() => handlePage(1)} >1</button>}
                {selector <= 1
                    ? <button disabled className='button-left enabled-button' onClick={() => handlePage(selector - 1)} >◄</button>
                    : <button className='button-left button-selector' onClick={() => handlePage(selector - 1)} >◄</button>}
                <span>{selector}</span>
                {selector >= pages
                    ? <button disabled className='button-right enabled-button' onClick={() => handlePage(selector + 1)} >►</button>
                    : <button className='button-right button-selector' onClick={() => handlePage(selector + 1)} >►</button>}
                {selector >= pages - 1
                    ? <button disabled className='button-right enabled-button' onClick={() => handlePage(pages)} >{pages}</button>
                    : <button className='button-right button-selector' onClick={() => handlePage(pages)} >{pages}</button>}
            </section>

            <section id='cards-section' >
                {drivers.length
                    ? renderCards()
                    : <ErrorSection
                    message={`Don't matched results`}
                    url={image}
                    />
            }
            </section>

        </div>
    )

}