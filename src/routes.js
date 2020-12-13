import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {MainPage} from "./pages/MainPage";
import {FindNannyPage} from "./pages/FindNannyPage";
import {FindWorkPage} from "./pages/FindWorkPage";
import {ProfilePage} from "./pages/ProfilePage";
import {RegistrationPage} from "./pages/RegistrationPage";
import {LoginPage} from "./pages/LoginPage";


export const useRoutes = isAuthenticated => {
    if (isAuthenticated){
        return (
            <Switch>
                <Route path="/" exact>
                    <MainPage />
                </Route>
                <Route path="/find_nanny" exact>
                    <FindNannyPage />
                </Route>
                <Route path="/find_work" exact>
                    <FindWorkPage />
                </Route>
                <Route path="/profile" exact>
                    <ProfilePage />
                </Route>
                <Redirect to='/'/>
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/" exact>
                <MainPage />
            </Route>
            <Route path="/registration" exact>
                <RegistrationPage />
            </Route>
            <Route path="/login" exact>
                <LoginPage />
            </Route>
            <Redirect to="/registration"/>
        </Switch>
    )
}