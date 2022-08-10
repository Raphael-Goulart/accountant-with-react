import Button from "../button";
import Relogio from "../cronometro/relogio/index";
import style from './cronometro.module.scss';
import { tempoParaSegundos } from "../../common/utils/date";
import ITarefa from "../../types/tarefas";
import { useEffect, useState } from 'react';

interface Props {
    selecionado: ITarefa | undefined,
    finalizarTarefa: () => void;
}

export default function Cronometro ({ selecionado, finalizarTarefa }: Props) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if(selecionado?.tempo) {
        setTempo(tempoParaSegundos(selecionado.tempo));
        }
    },[selecionado]);

    function regressiva(contador: number = 0 ) {
        setTimeout(() => {
            if(contador > 0) { 
            setTempo(contador - 1);
            return regressiva(contador - 1);
        }
        finalizarTarefa();
    }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Selecione o que deseja estudar inicie o Cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Button onClick={() => regressiva(tempo)}>
                Começar!
            </Button>
        </div>
    )
}