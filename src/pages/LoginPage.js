import React, {useContext, useState} from "react"
import {BottomText} from "../components/commonComponents/BottomText";
import {BottomPart} from "../components/commonComponents/BottomPart";
import {TopPart} from "../components/commonComponents/TopPart";
import {AuthContext} from "../context/AuthContext";
import axios from '../API'
import {useAlert} from 'react-alert'
const style = require('../components/registration/registration.module.css')

export const LoginPage = () => {
    const alert = useAlert()
    const [data, setData] = useState({
        email: "", password: ""
    })
    const auth = useContext(AuthContext)

    const changeData = event => {
        setData({...data, [event.target.name]: event.target.value})
    }

    const login = async () => {
        try {
            await axios.post('/auth/login', {...data}).then(login_data => {
                if (login_data.data.message) {
                    if (login_data.data.err) {
                        login_data.data.err.forEach(err=>{
                            alert.error(err.msg)
                        })
                    }
                    else {
                        alert.error(login_data.data.message)
                    }
                }
                else {
                    auth.login(login_data.data.token, login_data.data.userId, login_data.data.type)
                    window.location.reload(false)
                }
            })
        } catch (err) {}
    }

    return (
        <div>
            <div className={style.imgBackground}>
                <TopPart />
                <div className={`${style.row} row`}>
                    <div className="col-md-1 col-lg-1"></div>
                    <div className="col-12 col-sm-12 col-md-10 col-lg-10">
                        <div className={style.box}>
                            <h4>Вхід до аккаунту</h4>
                            <div className={`${style.row} row`}>
                                <div className={`${style.searchItem} col-md-6 col-lg-6`}>
                                    <p>Вкажіть ваш email :</p>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <input
                                        className={style.searchItemInput}
                                        type="text"
                                        name="email"
                                        onChange={changeData}
                                    />
                                </div>
                            </div>
                            <div className={`${style.row} row`}>
                                <div className={`${style.searchItem} col-md-6 col-lg-6`}>
                                    <p>Придумайте пароль :</p>
                                </div>
                                <div className="col-md-6 col-lg-6">
                                    <input
                                        className={style.searchItemInput}
                                        type="password"
                                        name="password"
                                        onChange={changeData}
                                    />
                                </div>
                            </div>
                            <div className={`${style.row} row justify-content-center ${style.regButton}`}>
                                <button
                                    onClick={login}
                                >Ввійти</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-1 col-lg-1"></div>
                </div>

                <BottomText />
                <BottomPart />
            </div>
        </div>
    )
}