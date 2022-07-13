import React from "react";

class Button extends React.Component { //botao que extende um botao react
    render(): React.ReactNode { //o render é obrigatorio
        return ( //retorna nosso HTML 
            <button>
                Botão
            </button>
        )
    }
}

export default Button; //sempre terá que exportar o arquivo