import axios from 'axios'


export const getAllTeams = () => {
    return async (dispatch) => {
        try {
<<<<<<< HEAD
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/teams`)
=======
            const { data } = await axios.get('/teams')
>>>>>>> 2a0c46d49a62f39d3bd396319a1f7bade3a95e0d
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
<<<<<<< HEAD
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/drivers`)
=======
            const { data } = await axios.get('/drivers')
>>>>>>> 2a0c46d49a62f39d3bd396319a1f7bade3a95e0d
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
<<<<<<< HEAD
            const { data } = await axios.post(`${import.meta.env.VITE_SERVER}/drivers`, driver)
=======
            const { data } = await axios.post('/drivers', driver)
>>>>>>> 2a0c46d49a62f39d3bd396319a1f7bade3a95e0d
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
<<<<<<< HEAD
            const { data } = await axios.get(`${import.meta.env.VITE_SERVER}/drivers/name?name=${name}`)
=======
            const { data } = await axios.get(`/drivers/name?name=${name}`)
>>>>>>> 2a0c46d49a62f39d3bd396319a1f7bade3a95e0d
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