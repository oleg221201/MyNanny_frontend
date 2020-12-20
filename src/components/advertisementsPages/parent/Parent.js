import React, {useCallback, useContext, useEffect, useState} from "react"
import axios from '../../../API'
import {useAlert} from 'react-alert'
import style from "../advertisementsPages.module.css";
import {AuthContext} from "../../../context/AuthContext";

export const Parent = ({id}) => {
    const {token} = useContext(AuthContext)
    const [parent, setParent] = useState(null)
    const [userEmail, setUserEmail] = useState(null)
    const alert = useAlert()

    const getData = useCallback(async () => {
        try {
            await axios.get(`/profile/${id}`).then(result => {
                setParent(result.data.user)
            })
            await axios.get(`profile/email/${id}`).then(result => {
                setUserEmail(result.data.email)
            })
        } catch (err) {}
    }, [id])

    useEffect(() => {
        getData()
    }, [getData])

    const respond = async () => {
        try {
            await axios.put(`/advertisement/respond/${id}`, {}, {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then(result => {
                alert.info(result.data.message)
            })
        } catch (err) {}
    }

    if (!parent && !userEmail){
        return <div>loading...</div>
    }

    return (
        <div>
            <hr/>
            <div className={`${style.row} row ${style.nannyBlock}`}>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4">
                    User photo
                </div>
                <div className="col-12 col-sm-12 col-md-8 col-lg-8">
                    <h4>{parent.parentName}</h4>
                    <p>Дитина: {parent.childName} (Вік: {parent.childAge}р.)</p>
                    <p>Місто: {parent.city}</p>
                    <p>{parent.description}</p>
                </div>
            </div>
            <div className={`${style.row} row ${style.nannyBlockDown}`}>
                <div className="col-md-4 col-lg-4">
                    <p>E-mail: {userEmail}</p>
                </div>
                <div className="col-md-4 col-lg-4">
                    <p>Оплата: {parent.salary}  грн./день</p>
                </div>
                <div className="col-md-4 col-lg-4">
                    <button
                        onClick={respond}
                    >Цікавить</button>
                </div>
            </div>
        </div>
    )
}