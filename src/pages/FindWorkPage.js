import React, {useCallback, useEffect, useState} from "react"
import {TopPart} from "../components/commonComponents/TopPart";
import {BottomText} from "../components/commonComponents/BottomText";
import {BottomPart} from "../components/commonComponents/BottomPart";
import {Parent} from "../components/advertisementsPages/parent/Parent";
import axios from '../API'
import style from '../components/advertisementsPages/advertisementsPages.module.css'
import {ParentFilter} from "../components/advertisementsPages/parent/ParentFilter";

export const FindWorkPage = () => {
    const [data, setData] = useState(null)

    const getAdvertisements = useCallback(async () => {
        try {
            await axios.get('/advertisement/parents').then(result => {
                setData(result.data)
            })
        } catch (err) {}
    }, [])

    useEffect(() => {
        getAdvertisements()
    }, [getAdvertisements])

    if (!data) {
        return (<div>loading...</div>)
    }

    return (
        <div className={style.imgBackground}>

            <TopPart />

            <ParentFilter set={setData}/>

            <div className={`${style.row} row`}>
                <div className="col-md-1 col-lg-1"></div>
                <div className="col-12 col-sm-12 col-md-10 col-lg-10">
                    <div className={style.boxBottom}>
                        <div className={`${style.row} row`}>
                            <h4>Нові оголошення:</h4>
                        </div>
                        {data.parents.map(parent => {
                            return <Parent id={parent.userId} />
                        })}
                    </div>
                </div>
                <div className="col-md-1 col-lg-1"></div>
            </div>

            <BottomText />
            <BottomPart />

        </div>
    )
}