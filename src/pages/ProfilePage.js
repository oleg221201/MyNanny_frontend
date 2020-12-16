import React, {useCallback, useContext, useEffect, useState} from "react"
import {AuthContext} from "../context/AuthContext";
import axios from '../API'
import {CreateProfilePage} from "../components/profile/createProfile/CreateProfilePage";
import {BottomText} from "../components/commonComponents/BottomText";
import {BottomPart} from "../components/commonComponents/BottomPart";
import {InfoView} from "../components/profile/InfoView";
import {Button} from "../components/profile/Button";
const style = require('../components/profile/profile.module.css')


export const ProfilePage = () => {
    const [userData, setUserData] = useState(null)
    const auth = useContext(AuthContext)

    const getData = useCallback(async () => {
        try {
            await axios.get('/profile', {
                headers: {
                    "Authorization": `Bearer ${auth.token}`
                }
            }).then(user => {
                setUserData(user.data)
            })
        } catch (err) {}
    }, [auth])

    useEffect(() => {
        getData()
    }, [getData])

    if (!userData){
        return (<></>)
    }

    if (!userData.isCreated){
        return (<CreateProfilePage />)
    }

    return (
        <div className={style.imgBackground}>
            <div className={`${style.row} row`}>
                <div className="col-md-1 col-lg-1"></div>
                <div className="col-12 col-sm-12 col-md-10 col-lg-10">
                    <div className={`${style.box}`}>
                        <div className={`${style.row} row`}>
                            <div className="col-12 col-sm-12 col-md-5 col-lg-4 ">
                                User photo
                            </div>
                            <div className="col-12 col-sm-12 col-md-7 col-lg-8">
                                <InfoView user={userData.user}/>
                            </div>
                        </div>
                        <div className={`${style.row} row`}>
                            <p>{userData.user.description}</p>
                        </div>
                        <div className={`${style.row} row`}>
                            <Button />
                        </div>
                    </div>
                </div>
                <div className="col-md-1 col-lg-1"></div>
            </div>

            <BottomText />
            <BottomPart />
        </div>
    )
}