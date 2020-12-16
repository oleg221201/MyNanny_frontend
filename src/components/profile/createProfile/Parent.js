import React, {useContext, useState} from "react"
import {AuthContext} from "../../../context/AuthContext";
import {useAlert} from 'react-alert'
import axios from "../../../API";
const style = require('./createProfile.module.css')

export const Parent = () => {
    const auth = useContext(AuthContext)
    const alert = useAlert()
    const [data, setData] = useState({
        parentName: "", childName: "", childAge: null, city: "", salary: null, description: ""
    })

    const changeData = event => {
        setData({...data, [event.target.name]: event.target.value})
    }

    const sendData = async () => {
        console.log(data)
        if(data.parentName === "" || data.childName === "" || !data.childAge
            || data.city === "" || !data.salary || data.description === "") {
            alert.error("Заповніть ВСІ поля!")
        }
        else{
            try {
                await axios.post('/profile/create/parent', {...data}, {
                    headers: {"Authorization": `Bearer ${auth.token}`}
                })
                window.location.reload(false)
            } catch (err) {}
        }
    }

    return (
        <div>
            <div className={`${style.row} row`}>
                <div className={`${style.dataItem} col-md-6 col-lg-6`}>
                    <p>Вкажіть Ваше ім'я :</p>
                </div>
                <div className="col-md-6 col-lg-6">
                    <input
                        className={style.dataItemInput}
                        type="text"
                        name="parentName"
                        onChange={changeData}
                    />
                </div>
            </div>
            <div className={`${style.row} row`}>
                <div className={`${style.dataItem} col-md-6 col-lg-6`}>
                    <p>Вкажіть ім'я Вашої дитини :</p>
                </div>
                <div className="col-md-6 col-lg-6">
                    <input
                        className={style.dataItemInput}
                        type="text"
                        name="childName"
                        onChange={changeData}
                    />
                </div>
            </div>
            <div className={`${style.row} row`}>
                <div className={`${style.dataItem} col-md-6 col-lg-6`}>
                    <p>Вкажіть вік Вашої дитини :</p>
                </div>
                <div className="col-md-6 col-lg-6">
                    <input
                        type="number"
                        min="0"
                        max="13"
                        name="childAge"
                        onChange={changeData}
                    />
                </div>
            </div>
            <div className={`${style.row} row`}>
                <div className={`${style.dataItem} col-md-6 col-lg-6`}>
                    <p>Вкажіть своє місто :</p>
                </div>
                <div className="col-md-6 col-lg-6">
                    <input
                        className={style.dataItemInput}
                        type="text"
                        name="city"
                        onChange={changeData}
                    />
                </div>
            </div>
            <div className={`${style.row} row`}>
                <div className={`${style.dataItem} col-md-6 col-lg-6`}>
                    <p>Вкажіть можливу з/п (в день) :</p>
                </div>
                <div className="col-md-6 col-lg-6">
                    <input
                        type="number"
                        name="salary"
                        onChange={changeData}
                    />
                </div>
            </div>
            <div className={`${style.row} row`}>
                <div className={`${style.dataItem} col-md-6 col-lg-6`}>
                    <p>Розкажіть про себе та вкажіть додаткову інформацію :</p>
                </div>
                <div className="col-md-6 col-lg-6">
                   <textarea
                       className={style.dataItemInput}
                       type="text"
                       cols="21"
                       name="description"
                       onChange={changeData}
                   />
                </div>
            </div>
            <div className={`${style.row} row justify-content-center ${style.button}`}>
                <button
                    onClick={sendData}
                >Зберегти дані</button>
            </div>
        </div>
    )
}