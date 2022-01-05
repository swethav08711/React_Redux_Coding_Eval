import axios from "axios"
import {
  GET_DATA_FAILURE,
  GET_DATA_REQUEST,
  GET_DATA_SUCCESS,
} from "./actionTypes"

const getTodoRequest = () => {
  return {
    type: GET_DATA_REQUEST,
  }
}

const getTodoSuccess = payload => {
  return {
    type: GET_DATA_SUCCESS,
    payload,
  }
}

const getTodoFailure = error => {
  return {
    type: GET_DATA_FAILURE,
    payload: error,
  }
}

const getTodo = payload => dispatch => {
  dispatch(getTodoRequest())
  return axios
    .get("https://api.github.com/search/repositories?q=masai&page=2&per_page=4")
    .then(res => {
      dispatch(getTodoSuccess(res.data.items))
    })
    .catch(err => {
      dispatch(getTodoFailure())
    })
}
export { getTodo }
