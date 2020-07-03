/* Variables globales*/
var main=document.getElementById("main")
var question=document.getElementById("question")
var button=document.getElementById("button")
var buttona=document.getElementById("button-a")
var category
var question
var correct_answer=0
var incorrect_answers=0
var cont=0
button.addEventListener("click",quiz);
buttona.addEventListener("click",answer);

/*Manipulación del Dom*/
question.style.display = 'none';

APICALL()

//Funciones
function quiz(){
    main.style.display = 'none';
    question.style.display = 'block';
    question.innerHTML = `
        <h1>${category}</h1>
        <h3>${question}</h3>
        <button value="True" id="button-a">TRUE</button>
        <button value="False" id="button-a">FALSE</button>
    `
    cont=cont+1
}

function answer(){
    if(buttona.value==correct_answer){
        correct_answer=correct_answer+1
    }
    else{
        incorrect_answers=incorrect_answers+1
    }
}

/*Llamado a la API */
function APICALL(){
    fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
     .then(function(respuesta) {
       console.log(respuesta);
       category=respuesta.results[cont].category
       question=respuesta.results[cont].question
       correct_answer=respuesta.results[cont].correct_answer
       
     });
}

  

