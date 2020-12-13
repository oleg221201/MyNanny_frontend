import React from "react"
import {NavLink, useHistory} from "react-router-dom";
import {useAuth} from "../../hooks/auth.hook";
const style = require('../navbar/navbar.module.css')

export const Navbar = () => {
    const auth = useAuth()
    const history = useHistory()

    const logout = event => {
        event.preventDefault()
        auth.logout()
        history.push('/')
        window.location.reload(false)
    }

    const login_logout = () => {
        let data = localStorage.getItem("currentUser")
        data = JSON.parse(data)

        if (data && data.token){
            return (
                <div className={style.signIn}>
                    <a href="/logout" onClick={logout}>Вихід</a>
                </div>
            )
        }
        else {
            return (
                <div className={style.signIn}>
                    <NavLink to="/registration">Зареєструватися</NavLink>
                    <p> | </p>
                    <NavLink to="/login">Вхід</NavLink>
                </div>
            )
        }
    }


    return (
        <nav className={`${style.top} navbar navbar-expand-lg navbar-light sticky-top`}>
            <div className="container-fluid">
                <div className="col-6 col-md-2">
                    <NavLink className="navbar-brand d-flex justify-content-left" to="/">
                        <div className={`${style.logo}`}>
                            <h4>МояНяня</h4>
                        </div>
                    </NavLink>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav col-12 col-sm-12 col-md-7 col-lg-8 menu">
                        <NavLink className="nav-item nav-link" to="/">Головна</NavLink>
                        <NavLink className="nav-item nav-link" to="/find_nanny">Пошук няні</NavLink>
                        <NavLink className="nav-item nav-link" to="/find_work">Пошук роботи</NavLink>
                        <NavLink className="nav-item nav-link" to="/profile">Особистий кабінет</NavLink>
                    </div>
                </div>

                <div className={`col-12 col-sm-12 col-md-3 col-lg-2`}>
                    {login_logout()}
                </div>
            </div>
        </nav>
    )
}