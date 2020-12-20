import React from "react"
import style from "../advertisementsPages.module.css";

export const ParentFilter = () => {

    return (
        <div className={`${style.row} row`}>
            <div className="col-md-1 col-lg-1"></div>
            <div className="col-12 col-sm-12 col-md-10 col-lg-10">
                <div className={`${style.box} box`}>
                    <h4>Пошук</h4>
                    <div className={`${style.row} row`}>
                        <div className="col-md-1 col-lg-1"></div>
                        <div className={`${style.listLeft} col-12 col-sm-12 col-md-4 col-lg-4`}>
                            <h6>Місто в якому проживаєте:</h6>
                            <select className={style.list}>
                                <option>Місто</option>
                            </select>
                        </div>
                        <div className={`${style.listCenter} col-12 col-sm-12 col-md-4 col-lg-4`}>
                            <h6>Оплата:</h6>
                            <div className={`${style.row} row`}>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                    <select className={style.list}>
                                        <option>Від</option>
                                        <option>8000</option>
                                        <option>9000</option>
                                        <option>10000</option>
                                        <option>11000</option>
                                    </select>
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                    <select className={style.list}>
                                        <option>До</option>
                                        <option>15000</option>
                                        <option>20000</option>
                                        <option>25000</option>
                                        <option>30000</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className={`${style.listRight} col-12 col-sm-12 col-md-3 col-lg-3`}>
                            <h6>Вік няні:</h6>
                            <select className={style.list}>
                                <option>Вік</option>
                                <option>18-20</option>
                                <option>21-25</option>
                                <option>25-30</option>
                                <option>більше 30</option>
                            </select>
                        </div>
                    </div>
                    <div className={`${style.row} ${style.boxSearch} row justify-content-center`}>
                        <button>Пошук</button>
                    </div>
                </div>
            </div>
            <div className="col-md-1 col-lg-1"></div>
        </div>
    )
}