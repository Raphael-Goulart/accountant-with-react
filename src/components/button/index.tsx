import React from "react";
import style from './Botao.module.scss';

class Button extends React.Component { //botao que extende um botao react
    render() { //o render é obrigatorio
        return ( //retorna nosso HTML 
            <button className={style.botao}>
                Botão
            </button>
        )
    }
}

export default Button; //sempre terá que exportar o arquivo