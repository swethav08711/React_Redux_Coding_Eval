import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./actionTypes"

const initState = {
  todos: [],
  isLoading: false,
  isError: false,
}
function reducer(state = initState, { type, payload }) {
  switch (type) {
    case GET_DATA_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    }
    case GET_DATA_SUCCESS: {
      return {
        ...state,
        todos: payload,
        isLoading: false,
      }
    }
    case GET_DATA_FAILURE: {
      return {
        ...state,
        isError: true,
      }
    }
    default:
      return state
  }
}
export default reducer
