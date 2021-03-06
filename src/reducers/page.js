import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAIL
} from "../actions/PageActions";

const initialSate = {
  year: 2018,
  photos: [],
  isFetching: false,
  error: ""
};

export function pageReducer(state = initialSate, action) {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return { ...state, year: action.payload, isFetching: true, error: "" };
    case GET_PHOTOS_SUCCESS:
      return { ...state, photos: action.payload, isFetching: false, error: "" };
    case GET_PHOTOS_FAIL:
      return { ...state, isFetching: false, error: action.payload.message };
    default:
      return state;
  }
}
