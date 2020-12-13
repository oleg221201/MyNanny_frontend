import React from "react"
const style = require('../commonComponents/common.module.css')

export const BottomPart = () => {

    return (
        <div className={`${style.row} row ${style.lineDown}`}>
            <div className="col-md-1 col-lg-1"></div>
            <div className="col-12 col-sm-12 col-md-8 col-lg-8 social-networks">
                {/*<a href="#"><img src="Img/iconfinder_Social_networks_Facebook_492135.svg" alt=""></a>*/}
                {/*<a href="#"><img src="Img/iconfinder_Social_networks_Google_Plus_492133.svg" alt=""></a>*/}
                {/*<a href="#"><img src="Img/iconfinder_Social_networks_Instagram_492078.svg" alt=""></a>*/}
                {/*<a href="#"><img src="Img/iconfinder_Social_networks_Twitter_492131.svg" alt=""></a>*/}
            </div>
            <div className={`${style.textC2019} col-12 col-sm-12 col-md-3 col-lg-3`}>
                <p>2019 МояНяня</p>
            </div>
        </div>
    )
}