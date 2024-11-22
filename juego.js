//Arreglo que contiene las preguntas
const preguntas = [
    {
        id:1,
        categoria:"general",
        titulo:"First, what should you check before starting your car engine?",
        opcionA:"The windshield wipers",
        opcionB:"The air conditioning",
        opcionC:"Your seatbelt",
        opcionD:"The radio station",
        correcta:"c"
    },
    {
        id:2,
        categoria:"general",
        titulo:"Then, once you've checked your seatbelt, what should be the next step?",
        opcionA:" Check your mirrors",
        opcionB:"Adjust the stereo volume",
        opcionC:"Turn on the headlights",
        opcionD:"Check the trunk",
        correcta:"a"
    },
    {
        id:3,
        categoria:"general",
        titulo:"Before you start the engine, which car components should you ensure are in good condition?",
        opcionA:"The glove compartment",
        opcionB:"The floor mats",
        opcionC:"The tires",
        opcionD:"The interior lights",
        correcta:"c"
    },
    {
        id:4,
        categoria:"general",
        titulo:"After that, once you're seated comfortably, what else should you adjust before driving?",
        opcionA:"The floor mats",
        opcionB:"he rear windshield wipers",
        opcionC:"Your seat and mirrors",
        opcionD:"The backseat",
        correcta:"c"
    },
    {
        id:4,
        categoria:"general",
        titulo:"Finally, once everything is set, what is the last check to ensure a safe drive?",
        opcionA:"Your GPS location",
        opcionB:"The radio frequency",
        opcionC:"The position of your mirrors and seatbelt",
        opcionD:"The volume of the car stereo",
        correcta:"c"
    },
    {
        id: 6,
        categoria: "musica",
        titulo: "Even though it’s allowed to turn at the next intersection, which directions are permitted?",
        opcionA: "Only straight ahead",
        opcionB: "Left or right",
        opcionC: "U-turn only",
        opcionD: "Only left",
        correcta: "b"
    },
    {
        id: 7,
        categoria: "musica",
        titulo: "Although you wanted to drive faster, what prevented you from doing so?",
        opcionA: "A traffic light",
        opcionB: "A stop sign",
        opcionC: "A school zone",
        opcionD: "The speed limit",
        correcta: "d"
    },
    {
        id: 8,
        categoria: "musica",
        titulo: "While you can park in that spot, what should you make sure of?",
        opcionA: "Not blocking the driveway",
        opcionB: "Not blocking a crosswalk",
        opcionC: "Not parking next to a fire hydrant",
        opcionD: "Not blocking a pedestrian lane",
        correcta: "a"
    },
    {
        id: 9,
        categoria: "musica",
        titulo: "However, what should you remember if you plan to park near the driveway?",
        opcionA: "The parking meter rules",
        opcionB: "Not to block the driveway",
        opcionC: "To leave your headlights on",
        opcionD: "o check your tire pressure",
        correcta: "b"
    },
    {
        id: 10,
        categoria: "musica",
        titulo: "But if the speed limit is 55 mph, what should you do even if you feel like going faster?",
        opcionA: "Ignore it if there’s no police around",
        opcionB: "Follow the speed limit",
        opcionC: "Drive at whatever speed feels safe",
        opcionD: "Drive 5 mph over the limit",
        correcta: "b"
    },
    {
        id: 11,
        categoria: "deportes",
        titulo: "What should you always remember to do when pedestrians are crossing?",
        opcionA: "Speed up",
        opcionB: "Yield to pedestrians",
        opcionC: "Ignore them if you're in a hurry",
        opcionD: "Stop only if there’s a red light",
        correcta: "b"
    },
    {
        id: 12,
        categoria: "deportes",
        titulo: "When can we take a coffee break?",
        opcionA: "Before we start driving",
        opcionB: "Later",
        opcionC: "After we’ve reached home",
        opcionD: "During the trip",
        correcta: "b"
    },
    {
        id: 13,
        categoria: "deportes",
        titulo: "And what is a key rule to follow when you see pedestrians near the crosswalk?",
        opcionA: " Always yield to them",
        opcionB: "Wave at them to move faster",
        opcionC: "Stop only if they’re on your side of the road",
        opcionD: "Honk to let them know you’re approaching",
        correcta: "a"
    },
    {
        id: 14,
        categoria: "deportes",
        titulo: "Later, what could we plan to do during our journey?",
        opcionA: "Stop for a coffee break",
        opcionB: "Take a napt",
        opcionC: "Change the tires",
        opcionD: "Wash the car",
        correcta: "a"
    },
    {
        id: 15,
        categoria: "deportes",
        titulo: "What should drivers always keep in mind when approaching crosswalks?",
        opcionA: "Look for traffic lights",
        opcionB: "Yield to pedestrians",
        opcionC: "Check their rearview mirror",
        opcionD: "Speed up to cross quickly",
        correcta: "b"
    },
    {
        id: 16,
        categoria: "programacion",
        titulo: "Before you start your car, what should you make sure to have with you?",
        opcionA: "A map and snacks",
        opcionB: "Your driver’s license and registration",
        opcionC: "Your sunglasses and wallet",
        opcionD: "Your car manual",
        correcta: "b"
    },
    {
        id: 17,
        categoria: "programacion",
        titulo: "Then, what is the next step after ensuring you have your documents?",
        opcionA: "Start the engine",
        opcionB: "Adjust the mirrors",
        opcionC: "Check your car for any damage",
        opcionD: "Fasten your seatbelt",
        correcta: "C"
    },
    {
        id: 18,
        categoria: "programacion",
        titulo: "After that, what should you adjust before driving?",
        opcionA: "Your mirrors and seat",
        opcionB: "Your radio station",
        opcionC: "Your air conditioning",
        opcionD: "The trunk",
        correcta: "a"
    },
    {
        id: 19,
        categoria: "programacion",
        titulo: "Finally, what is the last step to prepare for driving?",
        opcionA: "Turn on the headlights",
        opcionB: "Fasten your seatbelt",
        opcionC: "Check the tires",
        opcionD: "Look for your phone",
        correcta: "b"
    },
    {
        id: 20,
        categoria: "programacion",
        titulo: "If you don’t see completely while driving, what should you do?",
        opcionA: "Keep driving carefully",
        opcionB: "Stop until you have a clear view",
        opcionC: "Turn on your hazard lights and drive slowly",
        opcionD: "Use your phone’s GPS for assistance",
        correcta: "b"
    },
    {
        id: 21,
        categoria: "juegos",
        titulo: "INTEGRANTES",
        opcionA: "Meza García Juan Ricardo",
        opcionB: "Quijano Jiménez Leonardo Gabriel",
        opcionC: "Mendez Hernández Pablo Alexander",
        opcionD: "Ruiz Cruz Javier",
        correcta: ""
    },
    {
        id: 22,
        categoria: "juegos",
        titulo: "Mantenimiento automotriz",
        opcionA: "3°",
        opcionB: "1998",
        opcionC: "B",
        opcionD: "",
        correcta: ""
    },
    {
        id: 26,
        categoria: "peliculas",
        titulo: " Why did i decide to drive instead of walking?",
        opcionA: "Because it was raining heavily",
        opcionB: "Because it was sunny",
        opcionC: "Because i forgot my umbrella",
        opcionD: "Because i was late",
        correcta: "a"
    },
    {
        id: 27,
        categoria: "peliculas",
        titulo: "Why didn’t I see the stop sign?",
        opcionA: "Because the sign was missing",
        opcionB: " Because the sun was in my eyes",
        opcionC: "Because it was raining",
        opcionD: "Because I wasn’t paying attention",
        correcta: "b"
    },
    {
        id: 28,
        categoria: "peliculas",
        titulo: "What caused the woman to crash into another car?",
        opcionA: "She was speeding",
        opcionB: "She was texting while driving",
        opcionC: "She didn’t see the traffic light",
        opcionD: "She was talking to a passenger",
        correcta: "b"
    },
    {
        id: 29,
        categoria: "peliculas",
        titulo: "What happened as a result of the heavy rain?",
        opcionA: "I stayed home",
        opcionB: "I decided to ride a bike",
        opcionC: "I decided to drive",
        opcionD: "I went for a walk",
        correcta: "c"
    },
    {
        id: 30,
        categoria: "peliculas",
        titulo: "Why is texting while driving dangerous?",
        opcionA: "It’s illegal in many places",
        opcionB: "Because it can lead to accidents",
        opcionC: "Because it makes driving slower",
        opcionD: "Because it drains your phone battery",
        correcta: "b"
    }
]




//tomamos los elementos html
const txtPuntaje = document.querySelector("#puntos");
const nombre = document.querySelector("#nombre");

nombre.innerHTML = localStorage.getItem("nombre");
let numPreguntaActual = 0;

//Recupero el puntaje en caso que ya este jugando
let puntajeTotal = 0;
if(!localStorage.getItem("puntaje-total")){
    puntajeTotal = 0;
    txtPuntaje.innerHTML = puntajeTotal
}else{
    puntajeTotal = parseInt(localStorage.getItem("puntaje-total"));
    txtPuntaje.innerHTML = puntajeTotal;
}

//cargar las preguntas del tema que eligió
const categoriaActual = localStorage.getItem("categoria-actual");
const preguntasCategoria = preguntas.filter(pregunta => pregunta.categoria === categoriaActual);

function cargarSiguientePregunta(num){
    //tomo los elementos donde se cargaran los datos de la pregunta
    const numPregunta = document.querySelector("#num-pregunta");
    const txtPregunta = document.querySelector("#txt-pregunta");
    const opcionA = document.querySelector("#a");
    const opcionB = document.querySelector("#b");
    const opcionC = document.querySelector("#c");
    const opcionD = document.querySelector("#d");

    numPregunta.innerHTML = num + 1;
    txtPregunta.innerHTML = preguntasCategoria[num].titulo;
    opcionA.innerHTML = preguntasCategoria[num].opcionA;
    opcionB.innerHTML = preguntasCategoria[num].opcionB;
    opcionC.innerHTML = preguntasCategoria[num].opcionC;
    opcionD.innerHTML = preguntasCategoria[num].opcionD;

    

    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen y las clases
    botonesRespuesta.forEach(opcion=>{
        opcion.removeEventListener("click", (e)=>{});
        opcion.classList.remove("correcta");
        opcion.classList.remove("incorrecta");
        opcion.classList.remove("no-events");
    })

    botonesRespuesta.forEach(opcion=>{
        opcion.addEventListener("click", agregarEventListenerBoton);
    })

    txtPuntaje.classList.remove("efecto");
}

function agregarEventListenerBoton(e){
    console.log(e.currentTarget.id);
    console.log(numPreguntaActual);
    console.log(preguntas[numPreguntaActual].correcta);
    //Controlo si la respuesta es correcta
    if(e.currentTarget.id === preguntasCategoria[numPreguntaActual].correcta){
        e.currentTarget.classList.add("correcta");
        puntajeTotal = puntajeTotal + 100;
        txtPuntaje.innerHTML = puntajeTotal;
        localStorage.setItem("puntaje-total", puntajeTotal);
        txtPuntaje.classList.add("efecto");
    }else{
        e.currentTarget.classList.add("incorrecta");
        const correcta = document.querySelector("#"+preguntasCategoria[numPreguntaActual].correcta);
        correcta.classList.add("correcta");
    }
    //Agrego un eventlistener a cada boton de respuesta
    const botonesRespuesta = document.querySelectorAll(".opcion");
    //Quito los eventListen para que no pueda seguir haciendo clic
    console.log(botonesRespuesta)
    botonesRespuesta.forEach(opcion=>{
        opcion.classList.add("no-events");
    })
}

cargarSiguientePregunta(numPreguntaActual);

//tomo el boton siguiente
const btnSiguiente = document.querySelector("#siguiente")
btnSiguiente.addEventListener("click",()=>{
    numPreguntaActual++;
    if(numPreguntaActual<=4){
        cargarSiguientePregunta(numPreguntaActual);
    }
    else{
        const categoriasJugadasLS = JSON.parse(localStorage.getItem("categorias-jugadas"));
       
        console.log(categoriasJugadasLS.length);
        if(parseInt(categoriasJugadasLS.length) < 6){
            //alert(categoriasJugadasLS.length);
            location.href = "menu.html";
        }else{
            //lo mando a la pantalla final
            location.href = "Final.html";
        }
        
    }
    
})
