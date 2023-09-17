import { Link } from 'react-router-dom'
import './DriverCard.css'

export const DriverCard = ({ id, name, surname, image, teams, birthdate }) => {

    return (

        <Link to={`/drivers/${id}`} id={id} className='DriverCard-container navigate-item' >
            <div className='DriverCard-name'><h1 className='Driver-name'>{name} {surname}</h1></div>
            <div className='DriverCard-image'>
                <img className='Driver-image' src={image} alt="foto" />
            </div>
            <div>
                <p style={{ color: 'black' }}>{birthdate}</p>
                {teams ? <p className='DriverCard-data'>{teams.map((team) => team.name).join(', ')}</p> : ''}
            </div>
            {/* {teams ? <div className='DiverCard-data'>{teams.map((team, i) => <p key={i}>{team.name}</p>)}</div> : ''} */}
        </Link>

    )

}