import React from "react"

import { NavLink } from "react-router-dom"
import style from "./navbar.module.css"
const NavBar = () => {
  return (
    <div>
      <nav className={style.navBar}>
        <NavLink to="/" className={style.navBar1}>
          Home
        </NavLink>
        <NavLink to="/login" className={style.navBar1}>
          Login
        </NavLink>
      </nav>
    </div>
  )
}
export default NavBar
