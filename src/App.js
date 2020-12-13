import React from 'react'
import {BrowserRouter} from 'react-router-dom'
import {useRoutes} from "./routes";
import {Navbar} from "./components/navbar/Navbar";
import {useAuth} from "./hooks/auth.hook";
import {AuthContext} from "./context/AuthContext";

function App() {
    const {login, logout, token, userId, type, ready} = useAuth()
    const isAuthenticated = !!token
    const routes = useRoutes(isAuthenticated)

    if (!ready) {
        return (
            <div>loading...</div>
        )
    }

    return (
        <AuthContext.Provider value={{token, userId, type, login, logout, isAuthenticated}}>
            <BrowserRouter>
                <Navbar />
                <div>
                    {routes}
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
