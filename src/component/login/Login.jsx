import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"

import style from "./login.module.css"
import { NavLink } from "react-router-dom"
export const Login = () => {
  return (
    <div className={style.login_page}>
      <TextField id="standard-basic" label="Email" />
      <br />
      <TextField id="standard-basic" label="Password" />
      <br />
      <Button variant="contained" color="primary">
        <NavLink to="/" className={style.button_btn}>
          Login
        </NavLink>
      </Button>
    </div>
  )
}
