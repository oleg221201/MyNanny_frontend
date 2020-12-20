import React, {useCallback, useEffect, useState} from "react"
import {TopPart} from "../components/commonComponents/TopPart";
import {Nanny} from "../components/advertisementsPages/nanny/Nanny";
import {BottomText} from "../components/commonComponents/BottomText";
import {BottomPart} from "../components/commonComponents/BottomPart";
import {NannyFilter} from "../components/advertisementsPages/nanny/NannyFilter";
import axios from '../API'
import style from '../components/advertisementsPages/advertisementsPages.module.css'

export const FindNannyPage = () => {
    const [data, setData] = useState(null)

    const getAdvertisements = useCallback(async () => {
        try {
            await axios.get('/advertisement/nannies').then(result => {
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

            <NannyFilter />
            {/*спробуй реалізувати контекст*/}

            <div className={`${style.row} row`}>
                <div className="col-md-1 col-lg-1"></div>
                <div className="col-12 col-sm-12 col-md-10 col-lg-10">
                    <div className={style.boxBottom}>
                        <div className={`${style.row} row`}>
                            <h4>Нові анкети нянь:</h4>
                        </div>
                        {data.nannies.map(nanny => {
                             return <Nanny id={nanny.userId} />
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