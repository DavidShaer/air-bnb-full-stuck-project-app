export const SET_STAYS = 'SET_STAYS'
export const SET_STAY = 'SET_STAY'
// ... other action types ...

const initialState = {
    stays: [],
    currentStay: null,
    // ... other initial state properties ...
}

export function stayReducer(state = initialState, action) {
    switch (action.type) {
        case SET_STAYS:
            return { ...state, stays: action.stays }
        case SET_STAY:
            return { ...state, currentStay: action.stay }
        // ... other cases ...
        default:
            return state
    }
}

