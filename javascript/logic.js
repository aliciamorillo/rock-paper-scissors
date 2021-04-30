let userScore = document.getElementById('userScore');
let userCounter = 1;
let machineScore = document.getElementById('machineScore');
let machineCounter = 1;

let buttons = document.querySelectorAll('.buttons button');
let userIcon = document.querySelector('.icon i');
let machineIcon = document.querySelector('.machine i');

let randomIcon = ['fas fa-hand-rock', 'fas fa-hand-paper', 'fas fa-hand-scissors'];

let text1 = document.getElementById('play');
let text2 = document.getElementById('choose');

let game = () => {
    document.addEventListener('keydown', (event) => {
        const keyName = event.key
        if(keyName == "a"){
            userIcon.className = "fas fa-hand-rock"
        } else if(keyName == "s"){
            userIcon.className = "fas fa-hand-paper"
        } else if(keyName == "d"){
            userIcon.className = "fas fa-hand-scissors"
        }
        
        //PUNTUACIÓN:
        
        //-> Empate:
        if(userIcon.className === machineIcon.className){
            userScore.innerHTML = userScore.innerHTML;
            machineScore.innerHTML = machineScore.innerHTML;
            text1.innerHTML = "¡Empate!";
            text1.style.color = 'orange';
            text2.innerHTML = text1.innerHTML;
            text2.style.color = 'orange';
        
        //-> No Empate:
        
        } else if(userIcon.className === randomIcon[0] && machineIcon.className === randomIcon[2]){
            userScore.innerHTML = userCounter;
            userCounter++;
            text1.innerHTML = "¡Ganaste!";
            text1.style.color = 'green';
            text2.innerHTML = "¡Perdiste!";
            text2.style.color = 'red';
        }
    });
    
    buttons.forEach(boton => {
        button.addEventListener('click', (event) => {
            
            //icono usuario
            let buttonClick = event.target.className;
            userIcon.className = buttonClick;
            
            //icono usuario random:
            let randomNum = Math.floor(Math.random()*randomIcon.length);
            machineIcon.className = randomIcon[randomNum];
            
            //-> PUNTUACIÓN:
            
            //Empate:
            if(userIcon.className === machineIcon.className){
                userScore.innerHTML = userScore.innerHTML;
                machineScore.innerHTML = machineScore.innerHTML;
                text1.innerHTML = "¡Empate!";
                text1.style.color = 'orange'
                text2.innerHTML = text1.innerHTML;
                text2.style.color = 'orange';
            
            //No Empate
            } else if (userIcon.className === randomIcon[0] && machineIcon.className === randomIcon){
                
            }
        })
    })
}

