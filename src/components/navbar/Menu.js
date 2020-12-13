import React from "react"
import {NavLink, useHistory} from "react-router-dom";
import {useAuth} from "../../hooks/auth.hook";
import {Form, Nav, Navbar} from "react-bootstrap";
const style = require('../navbar/navbar.module.css')

export const Menu = () => {
    const auth = useAuth()
    const history = useHistory()

    const logout = event => {
        event.preventDefault()
        auth.logout()
        history.push('/registration')
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
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="/">
                МояНяня
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">Головна</Nav.Link>
                    <Nav.Link href="/find_nanny">Пошук няні</Nav.Link>
                    <Nav.Link href="/find_work">Пошук роботи</Nav.Link>
                    <Nav.Link href="/profile">Особистий кабінет</Nav.Link>
                </Nav>
                <Form inline>
                    {login_logout()}
                </Form>
            </Navbar.Collapse>
        </Navbar>
    )
}