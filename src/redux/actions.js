import axios from 'axios'


export const getAllTeams = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/teams')
            dispatch({
                type: 'GET_TEAMS',
                payload: data,
            })
        } catch (error) {
            dispatch()
        }
    }
}

export const getAllDrivers = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('http://localhost:3001/drivers')
            dispatch({
                type: 'GET_ALL_DRIVERS',
                payload: data
            })
        } catch (error) {
            dispatch()
        }
    }
}

export const addDriver = (driver) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.post('http://localhost:3001/drivers', driver)
            log
            dispatch({
                type: 'ADD_DRIVER',
                payload: data
            })
        } catch (error) {
            dispatch()
        }
    }
}

export const getDriversForName = (name) => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get(`http://localhost:3001/drivers/name?name=${name}`)
            dispatch({
                type: 'GET_DRIVERS_FOR_NAME',
                payload: data
            })
        } catch (error) {
            console.log(error.message);
            dispatch()
        }
    }
}

export const setFilter = (filter) => {
    console.log(filter)
    return {
        type: 'FILTER',
        payload: filter
    }
}