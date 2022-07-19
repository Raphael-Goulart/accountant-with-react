import React from "react";
import style from './Botao.module.scss';

interface IProps {
    children: React.ReactNode;
  }
class Button extends React.Component <IProps> { //botao que extende um botao react
    render() { //o render é obrigatorio
        return ( //retorna nosso HTML 
            <button className={style.botao}>
                {this.props.children}
            </button>
        )
    }
}

export default Button; //sempre terá que exportar o arquivo

//PROP é sempre um objeto ou seja tem chaves <{}>