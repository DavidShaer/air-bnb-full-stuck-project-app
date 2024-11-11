// import { stayService } from '../services/stay.service.local'
import { stayService } from '../services/stay.service.remote'
import { store } from './store'
import { SET_STAYS, SET_STAY } from './stay.reducer'

export function filterByIcon(icon) {
    return async (dispatch) => {
        try {
            const stays = await stayService.query({ icon: icon })
            dispatch({ type: SET_STAYS, stays })
        } catch (err) {
            console.error('Error loading stays:', err)
        }
    }
}

export function loadStays() {
    return async (dispatch) => {
        try {
            console.log('loadStays...');
            
            const stays = await stayService.query()
            dispatch({ type: SET_STAYS, stays })
        } catch (err) {
            console.error('Error loading stays:', err)
        }
    }
}

export function getStayById(stayId) {
    return async (dispatch) => {
        try {
            const stay = await stayService.getById(stayId)
            dispatch({ type: SET_STAY, stay })
        } catch (err) {
            console.error('Error getting stay:', err)
        }
    }
}

// ... other action creators ...