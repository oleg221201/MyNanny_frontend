import React, {useCallback, useContext, useEffect, useState} from "react"
import axios from '../../API'
import {AuthContext} from "../../context/AuthContext";
import {useAlert} from 'react-alert'
const style = require('./profile.module.css')

export const Button = () => {
    const [advertisement, setAdvertisement] = useState(null)
    const auth = useContext(AuthContext)
    const alert = useAlert()

    const getData = useCallback(async () => {
        try {
            await axios.get(`/advertisement/${auth.userId}`).then(advertisement => {
                setAdvertisement(advertisement.data)
            })
        } catch (err) {}
    }, [auth])

    useEffect(() => {
        getData()
    }, [getData])

    if (!advertisement){
        return (<></>)
    }

    const createAdvertisement = async () => {
        try {
            await axios.post('/advertisement/', {type: auth.type}, {
                headers: {"Authorization": `Bearer ${auth.token}`}}).then(result => {
                    alert.success(result.data.message)

                window.location.reload(false)
            })
        } catch (err) {}
    }

    const deleteAdvertisement = async () => {
        try {
            await axios.delete(`/advertisement/${auth.userId}`, {
                headers: {"Authorization": `Bearer ${auth.token}`}}).then(result => {
                alert.success(result.data.message)

                window.location.reload(false)
            })
        } catch (err) {}
    }

    const btn = () => {
        if (advertisement.responds){
            const responds = advertisement.responds.toString()
            return (
                <div>
                    <button
                        className={style.btn}
                        onClick={deleteAdvertisement}
                    >Зняти оголошення</button>
                    <hr/>
                    <p>Пошти людей, які зацікавилися Вашим оголошенням:</p>
                    <p>{responds || "поки тут нікого нема"}</p>
                </div>
            )
        }
        if (advertisement.message){
            return (
                <button
                    className={style.btn}
                    onClick={createAdvertisement}
                >Опублікувати</button>
            )
        }
    }

    return (
       <div>{btn()}</div>
    )
}