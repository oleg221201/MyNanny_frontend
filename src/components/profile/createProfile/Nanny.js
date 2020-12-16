import React, {useContext, useState} from "react"
import {useAlert} from 'react-alert'
import axios from '../../../API'
import {AuthContext} from "../../../context/AuthContext"
const style = require('./createProfile.module.css')



export const Nanny = () => {
    const alert = useAlert()
    const [data, setData] = useState({
        name: "", age: null, city: "", salary: null, description: ""
    })
    const auth = useContext(AuthContext)

    const changeData = event => {
        setData({...data, [event.target.name]: event.target.value})
    }

    const sendData = async () => {
        console.log(data)
        if(data.name === "" || !data.age || data.city === "" || !data.salary || data.description === "") {
            alert.error("Заповніть ВСІ поля!")
        }
        else{
            try {
                await axios.post('/profile/create/nanny', {...data}, {
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
                       name="name"
                       onChange={changeData}
                   />
               </div>
           </div>
           <div className={`${style.row} row`}>
               <div className={`${style.dataItem} col-md-6 col-lg-6`}>
                   <p>Вкажіть свій вік :</p>
               </div>
               <div className="col-md-6 col-lg-6">
                   <input
                       type="number"
                       min="14"
                       max="100"
                       name="age"
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
                   <p>Вкажіть бажану з/п (в день) :</p>
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