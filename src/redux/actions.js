import axios from 'axios'


export const getAllTeams = () => {
    return async (dispatch) => {
        try {
            const { data } = await axios.get('/teams')
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
            const { data } = await axios.get('/drivers')
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
            const { data } = await axios.post('/drivers', driver)
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
            const { data } = await axios.get(`/drivers/name?name=${name}`)
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