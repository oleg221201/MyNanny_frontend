import React, {useContext} from "react"
import {TopPart} from "../../commonComponents/TopPart";
import {BottomText} from "../../commonComponents/BottomText";
import {BottomPart} from "../../commonComponents/BottomPart";
import {AuthContext} from "../../../context/AuthContext";
import {Nanny} from "./Nanny";
import {Parent} from "./Parent";
const style = require('./createProfile.module.css')

export const CreateProfilePage = () => {
    const auth = useContext(AuthContext)

    const boxView = () => {
        if (auth.type === "nanny") {
            return (<Nanny />)
        }
        if (auth.type === "parent") {
            return (<Parent />)
        }
    }


    return (
        <div className={style.imgBackground}>
            <TopPart />
            <div className={`${style.row} row`}>
                <div className="col-md-1 col-lg-1"></div>
                <div className="col-12 col-sm-12 col-md-10 col-lg-10">
                    <div className={style.box}>
                        <h4>Створення профіля</h4>
                        <div>
                            <p className={style.paragraph}>Надані Вами дані в подальшому будуть використовуватися при опублікуванні оголошення!</p>
                            {boxView()}
                        </div>
                        <div className={`${style.row} row`}>

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