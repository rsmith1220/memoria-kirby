//import SingleCard from "./singleCard"

const FotoCarta=[
    //{"src":"cover.png"},
    {"src":"dedede.png"},
    {"src":"kirby.png"},
    {"src":"metaknight.png"},
    {"src":"tomato.png"},
    {"src":"wd.png"},
    {"src":"whispywoods.png"}
]

const App = () => {

    const[cartas, setcartas]= React.useState([])
    const [turnos, setTurnos]= React.useState(0)
    const [choiceOne, setChoiceOne] = React.useState(null)
    const [choiceTwo, setChoiceTwo] = React.useState(null)


    //mezclar
    const mezclarCartas =()=>{
        const mezclarCartas= [...FotoCarta, ...FotoCarta]
         .sort(() => Math.random() -0.5)
         .map((card)=> ({...card, id: Math.random() }))

    setcartas(mezclarCartas)
    setTurnos(0)



    }

    console.log(cartas, turnos)

    const handleClick = () => {
        handleChoice(card)
    }

    const handleChoice = (card) => {
        console.log(card)
    }


    return(
        <div className='App'>
            <h1>Kirby memory game</h1>
            <button onClick={mezclarCartas}>Nuevo Juego</button>

            <div className="card-grid">
                {cartas.map(card=>(

                   


                   <div className="card" key={card.id}>
                   <div>
                       <img className="front" src={card.src} alt="card front"/>
                       <img className="back" src="cover.png" onClick={handleClick} alt="card back" />
                   </div>
               </div>

                ))}
            </div>
        </div>

        
    );
}







ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
    

