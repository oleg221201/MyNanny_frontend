import React, {useCallback, useEffect, useState} from "react"
import axios from '../../../API'
import style from "../advertisementsPages.module.css";

export const ParentFilter = ({set}) => {
    const [info, setInfo] = useState(null)
    const [data, setData] = useState({
        age: null, city: null, salaryFrom: null, salaryTo: null
    })

    const getInfo = useCallback(async () => {
        try {
            await axios.get('/filter/parent').then(result => {
                setInfo(result.data)
            })
        } catch (err) {}
    }, [])

    useEffect(() => {
        getInfo()
    }, [getInfo])

    if (!info) {
        return <div>loading...</div>
    }

    const changeHandler = event => {
        setData({...data, [event.target.name]: event.target.value})
    }

    const find = async () => {
        if (data.age === "") data.age = null
        if (data.city === "") data.city = null
        try {
            await axios.post("/filter/parent", {...data}).then(result => {
                set(result.data)
            })
        } catch (err) {}
    }

    return (
        <div className={`${style.row} row`}>
            <div className="col-md-1 col-lg-1"></div>
            <div className="col-12 col-sm-12 col-md-10 col-lg-10">
                <div className={`${style.box} box`}>
                    <h4>Пошук</h4>
                    <div className={`${style.row} row`}>
                        <div className="col-md-1 col-lg-1"></div>
                        <div className={`${style.listLeft} col-12 col-sm-12 col-md-3 col-lg-3`}>
                            <h6>Місто:</h6>
                            <select
                                className={style.list}
                                style={{backgroundColor: "white"}}
                                name={"city"}
                                onChange={changeHandler}
                            >
                                <option value={""}>Оберіть місто</option>
                                {info.cities.map(city => {
                                    return (
                                        <option value={city}>{city}</option>
                                    )
                                })}
                            </select>
                        </div>
                        <div className={`${style.listCenter} col-12 col-sm-12 col-md-5 col-lg-5`}>
                            <h6>Оплата:</h6>
                            <div className={`${style.row} row`}>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                    <input
                                        placeholder="Від"
                                        type="number"
                                        style={{width: 150}}
                                        name="salaryFrom"
                                        min={0}
                                        onChange={changeHandler}
                                    />
                                </div>
                                <div className="col-6 col-sm-6 col-md-6 col-lg-6">
                                    <input
                                        placeholder="До"
                                        type="number"
                                        style={{width: 150}}
                                        name="salaryTo"
                                        min={1}
                                        onChange={changeHandler}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={`${style.listRight} col-12 col-sm-12 col-md-3 col-lg-3`}>
                            <h6>Вік дитини:</h6>
                            <select
                                className={style.list}
                                style={{backgroundColor: "white"}}
                                name="age"
                                onChange={changeHandler}
                            >
                                <option value={""}>Оберіть вік</option>
                                <option value={"1"}>менше 1</option>
                                <option value={"2"}>1-3</option>
                                <option value={"3"}>4-5</option>
                                <option value={"4"}>більше 5</option>
                            </select>
                        </div>
                    </div>
                    <div className={`${style.row} ${style.boxSearch} row justify-content-center`}>
                        <button
                            onClick={find}
                        >Пошук</button>
                    </div>
                </div>
            </div>
            <div className="col-md-1 col-lg-1"></div>
        </div>
    )
}