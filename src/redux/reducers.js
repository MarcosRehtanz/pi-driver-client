
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
<<<<<<< HEAD
                allDrivers: action.payload, // Ford [ 4 ]
                filterDrivers: action.payload, // [ todos, ... ]
=======
                allDrivers: action.payload,
                filterDrivers: action.payload,
>>>>>>> 2a0c46d49a62f39d3bd396319a1f7bade3a95e0d
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
<<<<<<< HEAD

            let filter = [...state.allDrivers].filter(driver => {

=======
            let filter = [...state.allDrivers].filter(driver => {
>>>>>>> 2a0c46d49a62f39d3bd396319a1f7bade3a95e0d
                //action.payload);
                return (
                    (origin === 'ALL'
                        ? true
                        : origin === 'API'
                            ? !isNaN(+driver.id)
                            : isNaN(+driver.id))
                    &&
<<<<<<< HEAD
                    
=======
>>>>>>> 2a0c46d49a62f39d3bd396319a1f7bade3a95e0d
                    (teams !== '*'
                        ? driver.teams.some(team => team.name === teams)
                        : true)
                )
            })
<<<<<<< HEAD

=======
>>>>>>> 2a0c46d49a62f39d3bd396319a1f7bade3a95e0d
            const SortArray = (x, y) => {
                const _name = order[0]==='n'?'name':'birthdate'
                return (order[1] === 'a')
                    ? x[_name].localeCompare(y[_name])
                    : y[_name].localeCompare(x[_name])
            }
<<<<<<< HEAD

=======
>>>>>>> 2a0c46d49a62f39d3bd396319a1f7bade3a95e0d
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
