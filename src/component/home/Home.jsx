import React from "react"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
export const Home = () => {
  return (
    <>
      <div>
        <TextField
          style={{ width: "20%" }}
          label="Search input"
          margin="normal"
          variant="outlined"
        />
        <Button
          style={{ marginTop: "23px", marginLeft: "10px" }}
          variant="contained"
          color="primary"
          href="#contained-buttons"
        >
          Link
        </Button>
      </div>
    </>
  )
}
