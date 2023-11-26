import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import './Detail.css'
import { useDispatch } from "react-redux"
import { getAllDrivers } from "../../redux/actions"

export const Detail = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [driver, setDriver] = useState({})

    const getDriver = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/drivers/${id}`)
            console.log(await {
                ...data,
            });
            setDriver(data)
        } catch (error) {
            console.log(error.message);
        }
    }
    const deleteDriver = async () => {
        let retVal = confirm(`You're about to delete ${driver.name} ${driver.surname}\nAre you sure to continue?`);
        if (retVal) {
            try {
                const { data } = await axios.delete(`${import.meta.env.VITE_SERVER}/drivers/${id}`)
                dispatch(getAllDrivers());
                alert(`${data[0].name} has been dismissed`)
                navigate('/home')
            } catch (error) {
                alert(error.message);
            }
        }
    }

    useEffect(() => {
        getDriver()
    }, [])

    return (

        <div id="Detail-container">
            <section id="section-container-header">
                <div id="header-image">
                </div>
                <div id="header-title">
                    <h1>{driver.name} {driver.surname}</h1>
                    <p>{driver.birthdate} {driver.nationality}</p>
                    {
                        driver?.teams ? <p>{driver?.teams?.map(team => team?.name).join(', ')}</p> : ''
                    }
                </div>
            </section>
            <section id="section-container-data">
                <img id="Detail-image" src={driver.image ? driver.image : 'https://cdn.pixabay.com/photo/2013/07/12/15/36/motorsports-150157_960_720.png'} alt={driver.name} />
                <p id="Detail-description" >{driver.description}</p>
            </section>
            <section>
                {isNaN(+id)
                    ? <section>
                        <Link to={`/drivers/edit/${id}`}>
                            <button id="Detail-edit-button" className="Effect-button">EDIT</button>
                        </Link>
                        {/* <Link to={`/drivers/edit/${id}`}> */}
                        <button onClick={deleteDriver} id="Detail-edit-button" className="Effect-button">DELETE</button>
                        {/* </Link> */}
                    </section>
                    : <br />
                }
            </section>
        </div>

    )

}