import React from "react"
import {BottomText} from "../components/commonComponents/BottomText";
import {BottomPart} from "../components/commonComponents/BottomPart";
import {TopPart} from "../components/commonComponents/TopPart";
import {Link} from "react-router-dom";
const style = require('../components/mainPage/main.module.css')

export const MainPage = () => {

    const btn = () => {
        let data = localStorage.getItem("currentUser")
        data = JSON.parse(data)

        if (data && data.token){
            return (
                <Link to="/profile">Відкрити профіль</Link>
            )
        }
        else {
            return (
                <Link to="/registration">Зареєструватися</Link>
            )
        }
    }

    return (
        <div className={style.imgBackground}>
            <TopPart />
            <div className={`${style.row} row`}>
                <div className="col-md-1 col-lg-1"></div>
                <div className="col-12 col-sm-12 col-md-10 col-lg-10">
                    <div className={style.box}>
                        <h4>Можливості сервісу "МояНяня"</h4>
                        <div className={`${style.row} row`}>
                            <div className="col-md-1 col-lg-1"></div>
                            <div className={`${style.listLeft} col-12 col-sm-12 col-md-5 col-lg-5`}>
                                <h6>Для Няні:</h6>
                                <p>1) Створити профіль</p>
                                <p>2) Розмістити анкету на сайті</p>
                                <p>3) Розглянути всі можливі вакансії</p>
                            </div>
                            <div className="col-md-1 col-lg-1"></div>
                            <div className={`${style.boxP} col-md-5 col-lg-5`}>
                                <h6>Для батьків:</h6>
                                <p>1) Створити профіль</p>
                                <p>2) Розмістити вакансію на сайті</p>
                                <p>3) Розглянути всі можливі анкети</p>
                            </div>
                        </div>
                        <div className={`${style.row} ${style.boxReg} justify-content-center`}>
                            {btn()}
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