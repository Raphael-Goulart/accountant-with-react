import Button from "../button";
import Relogio from "../cronometro/relogio/index";
import style from './cronometro.module.scss'

export default function Cronometro ({ selecionado }: any) {
    const [tempo, setTempo] = useState<number>(tempoParaSegundos(String(selecionado?tempo)));
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha uma Linguagem e inicie o Cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio/>
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}