import { Link, useLocation } from "react-router-dom"
import { SearchBar } from "../SearchBar/SearchBar"
import './Nav.css'
import { useDispatch } from "react-redux"
import { getAllDrivers } from "../../redux/actions"

export const Nav = () => {
    const location = useLocation().pathname
    const dispatch = useDispatch()

    return (

        <nav>
            <div id="Nav-container" >
                <Link to='/home' >
                    {location === '/home' || location === '/'
                        ? <img id="image-logo" src="/F1.svg" onClick={()=>dispatch(getAllDrivers())} alt="logo" />
                        : <button id="back-button">HOME</button>
                    }
                </Link>

                {location === '/home'
                    ? <SearchBar />
                    : <h1 id="name-location">{location.split('/')[1].toUpperCase()}</h1>
                }

                <ul id="NavBar-contain">
                    {location === '/home'
                        && <Link to='/form' className="navigate-item">
                            <li id="Nav-add-driver">+ Enroll</li>
                        </Link>
                    }
                    {location !== '/'
                        && <Link to='/' className="navigate-item">
                            <li >Exit</li>
                        </Link>
                    }
                </ul>

            </div>
        </nav>

    )

}