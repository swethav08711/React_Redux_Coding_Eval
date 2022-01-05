import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCESS } from "./actionType"
import axios from "axios"
const loginRequest = () => {
  return {
    type: LOGIN_REQUEST,
  }
}
const loginSucess = token => {
  return {
    type: LOGIN_SUCESS,
    payload: token,
  }
}
const loginFailure = err => {
  return {
    type: LOGIN_FAILURE,
    payload: err,
  }
}
const loginUser = payload => dispatch => {
  const requestAction = loginRequest()
  dispatch(requestAction)
  const { email, password } = payload
  axios
    .post("http://localhost:2022/login", {
      email,
      password,
    })
    .then(res => {
      const successAction = loginSucess(res.data.token)
      dispatch(successAction)
    })
    .catch(err => {
      const failureAction = loginFailure(err.message)
      dispatch(failureAction)
    })
}
export { loginUser, loginSucess, loginFailure, loginRequest }
