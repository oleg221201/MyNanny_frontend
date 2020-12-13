import React from "react"
const style = require('../commonComponents/common.module.css')

export const TopPart = () => {

    return (
        <div className={`${style.row} row`}>
            <div className="col-md-2 col-lg-2"></div>
            <div className={`${style.title} col-12 col-sm-12 col-md-8 col-lg-8`}>
                <h3>Знаходьте надійну няню швидко та без посередників!</h3>
                {/*<div id="typed-strings">*/}
                {/*    <p>Найкращий сервіс з пошуку нянь в Україні!</p>*/}
                {/*</div>*/}
                {/*<span id="typed"></span>*/}
            </div>
            <div className="col-md-2 col-lg-2"></div>
        </div>
    )
}