import { useDispatch, useSelector } from "react-redux"
import { getAllDrivers, setFilter } from "../../redux/actions"
import { useEffect, useState } from "react"
import './FilterBar.css'

export const FilterBar = () => {

    const [formFilter, setFormFilter] = useState({
        origin: 'ALL',
        teams: '*',
        order: 'na',
    })
    const allTeams = useSelector(state => state.allTeams)
    const dispatch = useDispatch()

    const handlerOrigin = ({ target }) => {
        setFormFilter((old) => ({
            ...old,
            [target.name]: target.value
        }))
    }
<<<<<<< HEAD
    const cleanFilter = () => {
        setFormFilter({
            origin: 'ALL',
            teams: '*',
            order: 'na',
        })
    }

    useEffect(() => {
        dispatch(setFilter(formFilter))
    }, [formFilter])
=======

    useEffect(() => {
        //dispatch(setFilter(formFilter))
    }, [])
>>>>>>> 2a0c46d49a62f39d3bd396319a1f7bade3a95e0d

    return (
        <div id="FilterBar-container">

            <form id="form-filter" onSubmit={e => e.preventDefault()}>
<<<<<<< HEAD
                <section onChange={handlerOrigin} value={formFilter.origin} id='origin' >
=======
                <section onChange={handlerOrigin} id='origin' >
>>>>>>> 2a0c46d49a62f39d3bd396319a1f7bade3a95e0d
                    <input checked={formFilter.origin === 'ALL'} type="radio" id="input-radio-ALL" className="radio-driver" name="origin" value="ALL" />
                    <label for="input-radio-ALL">All Drivers</label>
                    <input checked={formFilter.origin === 'API'} type="radio" id="input-radio-API" className="radio-driver" name="origin" value="API" />
                    <label for="input-radio-API">Clasics</label>
                    <input checked={formFilter.origin === 'DB'} type="radio" id="input-radio-DB" className="radio-driver" name="origin" value="DB" />
                    <label for="input-radio-DB">New drivers</label>
                </section>

<<<<<<< HEAD
                <section value={formFilter.teams} id="teams" >
                    {allTeams
                        ? <select onChange={e => handlerOrigin(e)} value={formFilter.teams} name="teams" >
=======
                <section id="teams" >
                    {allTeams
                        ? <select onChange={e => handlerOrigin(e)} name="teams" >
>>>>>>> 2a0c46d49a62f39d3bd396319a1f7bade3a95e0d
                            <option value='*' >All teams</option>
                            {allTeams.map((team, index) => {
                                return <option key={index} value={team.name} >{team.name}</option>
                            })}
                        </select>
                        : ''}
                </section>

                <section id="order" >
<<<<<<< HEAD
                    <select onChange={(e) => handlerOrigin(e)} value={formFilter.order} name="order">
=======
                    <select onChange={(e) => handlerOrigin(e)} name="order">
>>>>>>> 2a0c46d49a62f39d3bd396319a1f7bade3a95e0d
                        <optgroup label="Name">
                            <option value="na">a - z</option>
                            <option value="nd">z - a</option>
                        </optgroup>
                        <optgroup label="Age">
                            <option value="ad">youngest</option>
                            <option value="aa">oldes</option>
                        </optgroup>
                    </select>
                </section>
                <br />
<<<<<<< HEAD
                {/* <button className="Effect-button" onClick={() => dispatch(setFilter(formFilter))} >Filter</button>
                <hr /> */}
                <button className="Effect-button" onClick={cleanFilter} style={{marginTop:'0px'}}>Clean Filter</button>
=======
                <button className="Effect-button" onClick={() => dispatch(setFilter(formFilter))} >Filter</button>
                <hr />
                <button className="Effect-button" onClick={()=>dispatch(getAllDrivers())} style={{marginTop:'0px'}}>All drivers</button>
>>>>>>> 2a0c46d49a62f39d3bd396319a1f7bade3a95e0d
            </form>

        </div>
    )

}