import React, {useCallback, useContext, useEffect, useState} from "react"
import axios from '../../API'
import {AuthContext} from "../../context/AuthContext";


export const ResUserInfo = ({id}) => {
    const [user, setUser] = useState(null)
    const [userEmail, setUserEmail] = useState(null)
    const {type} = useContext(AuthContext)

    const getData = useCallback(async () => {
        try {
            await axios.get(`/profile/${id}`).then(result => {
                setUser(result.data.user)
            })
            await axios.get(`profile/email/${id}`).then(result => {
                setUserEmail(result.data.email)
            })
        } catch (err) {}
    }, [id])

    useEffect(() => {
        getData()
    }, [getData])

    if (!user){
        return (<></>)
    }

    if ((type === "nanny" && user.name) || (type === "parent" && user.parentName)){
        return (<></>)
    }

    return (
       <div>- {user.name || user.parentName} ({user.city}, {user.salary}грн./день, {userEmail})</div>
    )
}