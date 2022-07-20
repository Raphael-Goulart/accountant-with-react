import React from "react";
import style from './relogio.module.scss'

export function Relogio() {
    return (
        <React.Fragment>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>0</span>
            <span className={style.relogioNumero}>:</span>
        </React.Fragment>
    )
}

export default Relogio;