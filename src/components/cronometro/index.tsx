import Button from "../button";
import Relogio from "../cronometro/relogio/index";
import style from './cronometro.module.scss';
import { tempoParaSegundos } from "../../common/utils/date";
import ITarefa from "../../types/tarefas";
import { useEffect, useState } from 'react';

interface Props {
    selecionado: ITarefa | undefined
}

export default function Cronometro ({ selecionado }: Props) {
    const [tempo, setTempo] = useState<number>();

    useEffect(() => {
        if(selecionado?.tempo) {
        setTempo(tempoParaSegundos(selecionado.tempo));
        }
    },[selecionado]);

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha uma Linguagem e inicie o Cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio tempo={tempo}/>
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}