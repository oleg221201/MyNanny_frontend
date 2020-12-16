import React, {useContext} from "react"
import {AuthContext} from "../../context/AuthContext";

export const InfoView = ({user}) => {
    const auth = useContext(AuthContext)

    const infoView = () => {
        if (auth.type === "nanny") {
            return (
                <div>
                    <h3>{user.name}</h3>
                    <p>Вік: {user.age} р.</p>
                    <p>Місто: {user.city}</p>
                    <p>Бажана оплата: {user.salary} грн./день</p>
                </div>
            )
        }
        if (auth.type === "parent") {
            return (
                <div>
                    <h3>{user.parentName}</h3>
                    <p>Ім'я дитини: {user.childName}</p>
                    <p>Вік дитини: {user.childAge} р.</p>
                    <p>Місто: {user.city}</p>
                    <p>Згідна на оплату: {user.salary} грн./день</p>
                </div>
            )
        }
    }

    return (
       <div>{infoView()}</div>
    )
}