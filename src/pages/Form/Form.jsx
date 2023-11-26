import axios from "axios"
import { useEffect, useState } from "react"
import { useParams, Link, useNavigate, useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { validate } from './validate'
import './Form.css'

export const Form = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const location = useLocation().pathname
    const allTeams = useSelector(state => state.allTeams)
    const [errors, setErrors] = useState({})
    const [driver, setDriver] = useState({
        name: '',
        surname: '',
        nationality: '',
        image: '',
        birthdate: '',
        description: '',
        teams: [],
        oldTeams: [],
    })

    const changeUpload = async (event) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const base64String = reader.result.split(',')[1];
                setDriver(oldDriver => ({
                    ...oldDriver,
                    image: `data:image/jpeg;base64,${base64String}`
                }
                ));
            };
            reader.readAsDataURL(file);

        }
    }

    const getDriver = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/drivers/${id}`)
            console.log(await {
                ...data,
                teams: data.teams.map((team) => team.name).join(', '),
                oldTeams: data.teams.map((team) => team.name).join(', ')
            });
            setDriver({
                ...data,
                teams: data.teams.map((team) => team.name),
                oldTeams: data.teams.map((team) => team.name)
            })
        } catch (error) {
            navigate('/home')
            console.log(error.message);
        }
    }

    const handleChange = ({ target }) => {

        if (target.name === 'teams') {
            target.value == 0
                ? console.log('Estoy Vacio')
                : setDriver(oldDriver => {
                    console.log(driver.teams === ''
                        ? target.value
                        : !driver.teams.includes(target.value)
                            ? driver.teams.push(target.value)
                            : driver.teams
                    );

                    return {
                        ...oldDriver,
                        teams: !driver.teams
                            ? target.value
                            : !driver.teams.includes(target.value)
                                ? driver.teams.push(target.value)
                                : driver.teams
                    }
                })
        } else {

            setDriver(oldDriver => {
                return {
                    ...oldDriver,
                    [target.name]: target.value
                }
            })
        }
    }
    const removeTeam = ({ target }) => {
        setDriver(oldDriver => ({
            ...oldDriver,
            teams: oldDriver.teams.filter(team => team !== target.name)
        }))
        console.log(target.name);
    }

    const handleUpDate = async () => {
        if (Object.keys(errors).length > 0) return alert('Completa todos los campos para continuar')
        else {
            console.log(driver);
            try {
                await axios.put(`${import.meta.env.VITE_SERVER}/drivers`, driver)
                alert('This driver was updated successfully')
                navigate(`/drivers/${id}`)
            } catch (error) {
                alert(error.message);
            }
        }
    }
    const handleCreate = async () => {
        if (Object.keys(errors).length > 0) return alert('❗ Complete all fields for registration')

        try {
            console.log(driver);
            await axios.post('${import.meta.env.VITE_SERVER}/drivers', driver)
            alert('Successfull registration')
            navigate('/home')
        } catch (err) {
            if (err.response.status === 409) alert('⚠ This driver has already been registered')
            else alert(err.message)
        }
    }


    useEffect(() => {
        validate(driver, setErrors)
    }, [driver])

    useEffect(() => {
        if (location !== '/form') {
            isNaN(+id)
                ? getDriver()
                : navigate('/home')
        }
    }, [])

    return (

        <div id="Detail-container">
            <section id="form-section-container-header">
                <div id="header-image">
                </div>
                <div id="header-title">
                    <div>
                        <div className='input-section' >
                            {!errors.name
                                ? <label style={{ color: 'transparent' }}>⚠</label>
                                : errors.name[0] === 'S'
                                    ? <label title={errors.name} className="alert-message">⚠</label>
                                    : <label title={errors.name} className='error-message'>⚠</label>}
                            <label className='label-name' >Name /</label>
                            {!errors.surname
                                ? <label style={{ color: 'transparent' }}>⚠</label>
                                : errors.surname[0] === 'S'
                                    ? <label title={errors.surname} className="alert-message">⚠</label>
                                    : <label title={errors.surname} className='error-message'>⚠</label>}
                            <label className='label-name' >Surname</label>
                            <input title="Input Name" autoComplete="off" placeholder="name" value={driver.name} onChange={handleChange} name="name" className='input-form input-header input-name' type="text" />
                            <input title="Input Surname" autoComplete="off" placeholder="surname" value={driver.surname} onChange={handleChange} name="surname" className='input-form input-header input-surname' type="text" />
                        </div>
                    </div>
                    <div className='input-section'>
                        {!errors.birthdate
                            ? <label style={{ color: 'transparent' }}>⚠</label>
                            : errors.birthdate[0] === 'Y'
                                ? <label title={errors.birthdate} className="alert-message">⚠</label>
                                : <label title={errors.birthdate} className='error-message'>⚠</label>}
                        <label className='label-name' >DOB</label>
                        <input title="Input DOB" role="textbox" autoComplete="off" placeholder="birthdate" value={driver.birthdate} onChange={handleChange} name="birthdate" className='input-form input-da
                        te input-header' type="date" />

                        {!errors.nationality
                            ? <label style={{ color: 'transparent' }}>⚠</label>
                            : errors.nationality[0] === 'S'
                                ? <label title={errors.nationality} className="alert-message">⚠</label>
                                : <label title={errors.nationality} className='error-message'>⚠</label>}
                        <label className='label-name' >Nacionality</label>
                        <input title="Input Nationality" autoComplete="off" placeholder="nationality" value={driver.nationality} onChange={handleChange} name="nationality" className='input-form input-header' type="text" />
                    </div>
                    <label className='label-name' >Teams</label>
                    <select onChange={handleChange} name="teams" id="">
                        <option value='0'>Select a Team *</option>
                        {allTeams.map(team => <option value={team.name} >{team.name}</option>)}
                    </select>
                    {!driver.teams.length
                        ? <label title={errors.teams} className='error-message'>⚠</label>
                        : <div id="teams-section">
                            {driver.teams.map((team) =>
                                <button onClick={removeTeam} className='team-button input-header' name={team}>{team}</button>
                            )}
                        </div>
                    }
                </div>
            </section>
            <section id="Form-section-container-data">
                <div id="Form-image">
                    <div className='input-section' >
                        <label className='label-name' >Imagen</label>
                        <input title="Input Image" type="file" accept="image/*" autoComplete="off" placeholder="URL" onChange={changeUpload} name="image" className='input-form input-header' />
                    </div>
                    <img id="Detail-image" src={driver.image ? driver.image : 'https://cdn.pixabay.com/photo/2013/07/12/15/36/motorsports-150157_960_720.png'} alt={driver.name} />
                </div>
                <div id="Form-description" className='input-section input-section-date' >
                    <div style={{ display: 'flex', justifyContent: 'center' }} >
                        {!errors.description
                            ? <label style={{ color: 'transparent' }}>⚠</label>
                            : errors.description[0] === 'S'
                                ? <label title={errors.description} className="alert-message">⚠</label>
                                : <label title={errors.description} className='error-message'>⚠</label>}
                        <label className='label-name' >Descripción:</label>
                    </div>
                    <textarea title="Input Description" value={driver.description} onChange={handleChange} placeholder="Description" name="description" id="Detail-textarea-description" className='input-form' cols="30" rows="10" />
                </div>
            </section>
            <section>
                {location === '/form'
                    ? <section>
                        <button title="Button CANCEL" onClick={() => navigate('/home')} id="Detail-edit-button" className="Effect-button">CANCEL</button>
                        <button title="Button SUBMIT" onClick={handleCreate} className="Effect-button" >SUBMIT</button>
                    </section>
                    : isNaN(+id)
                        ? <section>
                            <button onClick={() => navigate(`/drivers/${id}`)} id="Detail-edit-button" className="Effect-button">CANCEL</button>
                            <button onClick={handleUpDate} id="Detail-edit-button" className="Effect-button">UPDATE</button>
                        </section>
                        : <br />
                }
            </section>
        </div>

    )

}