import React from "react"
import { Login } from "./component/login/Login"
import { Route, Switch } from "react-router-dom"
import { Home } from "./component/home/Home"
import NavBar from "./component/navbar/NavBar"
function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </div>
  )
}

export default App
