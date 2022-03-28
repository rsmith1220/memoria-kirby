
const FotoCarta=[
    //{"src":"cover.png"},
    {"src":"dedede.png", match:false, turned:false},
    {"src":"kirby.png", match:false, turned:false},
    {"src":"metaknight.png", match:false, turned:false},
    {"src":"tomato.png", match:false, turned:false},
    {"src":"wd.png", match:false, turned:false},
    {"src":"whispywoods.png", match:false, turned:false}
]

const App = () => {

    const[cartas, setcartas]= React.useState([])
    const [turnos, setTurnos]= React.useState(0)
    const [choiceOne, setChoiceOne] = React.useState(null)
    const [choiceTwo, setChoiceTwo] = React.useState(null)
    const [win, setWin]= React.useState(0)


    //mezclar
    const mezclarCartas =()=>{
        const mezclarCartas= [...FotoCarta, ...FotoCarta]
         .sort(() => Math.random() -0.5)
         .map((card)=> ({...card, id: Math.random() }))

    setcartas(mezclarCartas)
    setTurnos(0)
    setWin(0)

    }

    


    function handleClick (card) { 
        choiceOne ? setChoiceTwo(card): setChoiceOne(card)
        card.turned = true

    }

    React.useEffect(() => {
        if(choiceOne && choiceTwo){
            if(choiceOne.src === choiceTwo.src){

                setCartas( verCarta => {
                    return verCarta.map( card => {
                        if(card.src === choiceOne.src){
                            return {...card, match : true}
                        }
                        else{
                            return card
                        }
                    })
                })

                resetTurno()
            }else{
                choiceOne.volteada = false
                choiceTwo.volteada = false
                setTimeout( () => resetTurno(), 1000)
            }
        }
    }, [choiceOne,choiceTwo])


    var winner = false

    //verificador
    React.useEffect(() => {
        for( const card of cartas){
            if(card.match===true){
                setGanar(prevganar => prevganar + 1)
            }
        }
    
        if(win === 30){
            win=true
            document.getElementById("win").className = "banner"
        }
        else{
            win=false
            document.getElementById("win").className = "disp_none"
        }
    }, [cartas])


    
    const resetTurno = () => {
        choiceOne(null)
        choiceTwo(null)       
        setTurnos(prevturnos => prevturnos + 1)
    }


    return(
        <div className="App">
            <h1>Kirby memory game</h1>
                <button onClick={mezclarCartas}>Nuevo Juego</button>
    
                <div className="card-grid">
                {cartas.map( card => (
                    
                    <div className="card" key={card.id}>
                        <div className={card.turned ? "turned" : ""}>
                            <img className="front" src={card.src} alt="card front"/>
                            <img className="back" src="cover.png" alt="card back"  onClick={()=>{click_card(card)}}/>
                        </div>
                    </div>
    
                ))}
                <div className="disp_none" id="win">
                    <h1>Has ganado! Presiona el boton para comenzar otro juego</h1>
                </div>
            </div>
            <div className="footer">
                <p className="foot_element">Movimientos: {turnos}</p>
            </div>
            
    
            
        </div>
    )


    
}





ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
    

