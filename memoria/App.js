/*

Rebecca Smith
Laboratorio 6


*/
import { useState } from 'React'
import './App.css'

const cardImage = [
    {"src":"/cover.png"},
    {"src":"/dedede.png"},
    {"src":"/kirby.png"},
    {"src":"/metaknight.png"},
    {"src":"/tomato.png"},
    {"src":"/wd.png"},
    {"src":"/whispywoods.png"}
]





function App() {

    const[cartas, setCartas]=useState([])
    const[turnos, setTurnos]=useState(0)


    //mezclar cartas
    const mezclar = () =>{
        const mezclar = [...cardImage,...cardImage]
            .sort(()=>Math.random - 0.5)
            .map((carta)=> ({...carta, id: Math.random()}))
    
        setCartas(mezclar)
        setTurnos(0)
        }

    return(
    <div classname="App">
        <h1>Memoria</h1>
        <button>Reiniciar</button>
    </div>
);

}

export default App