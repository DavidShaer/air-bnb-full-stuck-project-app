export const SET_STAYS = 'SET_STAYS'
export const SET_STAY = 'SET_STAY'
export const SET_FILTER_BY = 'SET_FILTER_BY'
// ... other action types ...

const initialState = {
    stays: [],
    currentStay: null,
    filterBy: { icon: "", where: "" },
    // ... other initial state properties ...
}

export function stayReducer(state = initialState, action) {
    switch (action.type) {
        case SET_STAYS:
            return { ...state, stays: action.stays }
        case SET_STAY:
            return { ...state, currentStay: action.stay }
        case SET_FILTER_BY:
            return { ...state, filterBy: action.filterBy }
        // ... other cases ...
        default:
            return state
    }
}

