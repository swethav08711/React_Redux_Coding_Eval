import { loadData, saveData } from "../../utilsTodo1/localstorage"
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCESS } from "./actionType"
const token = loadData("token")
const initState = {
  isAuth: token ? true : false,
  token: token || "",
  isError: false,
  isLoading: false,
}

const authReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
      }
    }
    case LOGIN_SUCESS: {
      saveData("token", payload)
      return {
        ...state,
        isAuth: true,
        token: payload,
      }
    }
    case LOGIN_FAILURE: {
      return {
        ...state,
        isAuth: false,
        token: "",
        isError: true,
        isLoading: false,
      }
    }
    default:
      return state
  }
}

export { authReducer }
