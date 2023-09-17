
const initialState = {
    allDrivers: [],
    filterDrivers: [],
    filters: [],
    allTeams: [],
}



export const reducers = (state = initialState, action) => {

    switch (action.type) {
        case 'GET_TEAMS':
            return {
                ...state,
                allTeams: action.payload,
            }
        case 'GET_ALL_DRIVERS':
            return {
                ...state,
                allDrivers: action.payload,
                filterDrivers: action.payload,
                filters: [],
            }
        case 'ADD_DRIVER':
            return {
                ...state,
                allDrivers: [...state.allDrivers, action.payload],
                filterDrivers: [...state.allDrivers, action.payload],
                filters: []
            }
        case 'FILTER':
            const { origin, teams, order } = action.payload
            let filter = [...state.allDrivers].filter(driver => {
                //action.payload);
                return (
                    (origin === 'ALL'
                        ? true
                        : origin === 'API'
                            ? !isNaN(+driver.id)
                            : isNaN(+driver.id))
                    &&
                    (teams !== '*'
                        ? driver.teams.some(team => team.name === teams)
                        : true)
                )
            })
            const SortArray = (x, y) => {
                const _name = order[0]==='n'?'name':'birthdate'
                return (order[1] === 'a')
                    ? x[_name].localeCompare(y[_name])
                    : y[_name].localeCompare(x[_name])
            }
            return {
                ...state,
                filterDrivers: [...filter].sort(SortArray)
            }
        case 'GET_DRIVERS_FOR_NAME':
            return {
                ...state,
                filterDrivers: action.payload,
                filters: []
            }
        default:
            return {
                ...state
            }
    }

}
