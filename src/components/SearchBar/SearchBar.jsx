import { useDispatch } from "react-redux"
import { getAllDrivers, getDriversForName } from "../../redux/actions"
import { useState } from "react"
import './SearchBar.css'


export const SearchBar = () => {

    const dispatch = useDispatch()
    const [name, setName] = useState()

    const search = () => {
        if (name) {
            dispatch(getDriversForName(name))
            setName('')
        }
    }
    const keyDown = ({ key }) => {
        if (key === 'Enter') search()
    }

    return (
        <div id="SearchBar-container">
            <input id="SearchBar-input" value={name} onChange={({ target }) => setName(target.value)} autoComplete="off" type="text" name="name" onKeyDown={keyDown} />
            <button id="SearchBar-button" onClick={search} >Search</button>

        </div>
    )

}