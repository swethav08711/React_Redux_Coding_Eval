import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
export const Login = () => {
  return (
    <div>
      <TextField id="standard-basic" label="Email" />
      <TextField id="standard-basic" label="Password" />

      <Button variant="contained" color="primary">
        Login
      </Button>
    </div>
  )
}
