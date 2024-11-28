import { stayService } from '../services/stay.service.remote'
import { SET_STAYS, SET_STAY, SET_FILTER_BY } from './stay.reducer'




// export function filterByIcon(icon) {
//     return async (dispatch) => {
//         try {
//             const stays = await stayService.query({ icon: icon })
//             dispatch({ type: SET_STAYS, stays })
//         } catch (err) {
//             console.error('Error loading stays:', err)
//         }
//     }
// }

// export function filterByWhere(where) {
//     return async (dispatch) => {
//         try {
//             const stays = await stayService.query({ where: where })
//             dispatch({ type: SET_STAYS, stays })
//         } catch (err) {
//             console.error('Error loading stays:', err)
//         }
//     }
// }

export function loadStays(filterBy) {
    return async (dispatch) => {
        try {
            console.log('loadStays...');
            const stays = await stayService.query(filterBy)
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

export function setFilterBy(filterBy) {
    return async (dispatch) => {
        dispatch({ type: SET_FILTER_BY, filterBy })
    }
}