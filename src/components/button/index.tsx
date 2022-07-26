import React from "react";
import style from './Botao.module.scss';


class Button extends React.Component  <any,{ //botao que extende um botao react
    type?: "button" | "submit" | "reset" | undefined 
}> {
    render() { //o render é obrigatorio
        const { type = "button"} = this.props;
        return ( //retorna nosso HTML 
            <button type={type} className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Button; //sempre terá que exportar o arquivo

//PROP é sempre um objeto ou seja tem chaves <{}>