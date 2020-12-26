import React, {useCallback, useContext, useEffect, useState} from "react"
import axios from '../../../API'
import {AuthContext} from "../../../context/AuthContext";
import {useAlert} from 'react-alert'
import style from "../advertisementsPages.module.css";


export const Nanny = ({id}) => {
    const {token} = useContext(AuthContext)
    const [nanny, setNanny] = useState(null)
    const [userEmail, setUserEmail] = useState(null)
    const alert = useAlert()
    const auth = useContext(AuthContext)

    const getData = useCallback(async () => {
        try {
            await axios.get(`/profile/${id}`).then(result => {
                setNanny(result.data.user)
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

    const btn = () => {
        if (auth.type === "parent"){
            return (
                <button
                    onClick={respond}
                >Цікавить</button>
            )
        } else {
            return (<></>)
        }
    }

    if (!nanny && !userEmail){
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
                    <h4>{nanny.name}</h4>
                    <p>Вік: {nanny.age}р.</p>
                    <p>Місто: {nanny.city}</p>
                    <p>{nanny.description}</p>
                </div>
            </div>
            <div className={`${style.row} row ${style.nannyBlockDown}`}>
                <div className="col-md-4 col-lg-4">
                    <p>E-mail: {userEmail}</p>
                </div>
                <div className="col-md-4 col-lg-4">
                    <p>Оплата: {nanny.salary}  грн./день</p>
                </div>
                <div className="col-md-4 col-lg-4">
                    {btn()}
                </div>
            </div>
        </div>
    )
}