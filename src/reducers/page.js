import { SET_YEAR } from '../actions/PageActions';

const initialSate = {
    year: 2018,
    photos: [],
}

export function pageReducer(state = initialSate, action) {
    switch (action.type) {
        case SET_YEAR:
            return {...state, year: action.payload }

        default:
            return state;
    }
}
