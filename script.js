 //alert('hi');
function  ageInDays() {
    var birthYear = prompt('What year were you born... Good Friend');
    var ageInDays = (2018 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are '+ageInDays +' days old.');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();    
}
 
function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-box-generator');
    image.src = "http://icons.iconarchive.com/icons/paomedia/small-n-flat/256/cat-icon.png";
    div.appendChild(image);
}

//challenge 3
function rpsGame(yourChoice){
    console.log(yourChoice);
    var humenChoice, botChoice;
    humenChoice = yourChoice.id;
    
    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer Choice:', botChoice);
    
    result = decideWinner(humenChoice, botChoice);
    console.log(result);
    
    message = finalMessage(result); //{'message': 'You Win!', 'color': 'green'}
    console.log(message);
    
    rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number){
    return['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice){
    var rpsDatabase = {
        'rock': {'scissors': 1, 'rock': 0.5, 'paper': 0},
        'paper': {'rock': 1, 'paper': 0.5, 'scissors': 0},
        'scissors': {'paper': 1, 'scissors': 0.5, 'rock': 0}
        };
        
        
        var yourScore = rpsDatabase[yourChoice][computerChoice];
        var computerScore = rpsDatabase[computerChoice][yourChoice];

        return [yourScore ,computerScore];
}

function finalMessage([yourScore, computerScore]){
    if(yourScore == 0){
        return {'message': 'you lost', 'color': 'red'};    
    } else if ( yourScore == 0.5){
        return { 'message': 'You tied', 'color': 'yellow'};
    } else {
        return { 'message': 'You won', 'color': 'green'};
    }
     
}

function rpsFrontEnd(humenImageChoice, botImageChoice, finalMessage){
    var imagesDatabase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src
    }

    //lets remove all the images
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src='" + imagesDatabase[humenImageChoice] + "' height=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; front-size: 60px; padding: 30px; '>" + finalMessage['message'] + "</h1>"
    humanDiv.innerHTML = "<img src='" + imagesDatabase[botImageChoice] + "' height=150 style='box-shadow: 0px 10px 50px rgba(243 38, 24, 1);'>"
    
     document.getElementById('flex-box-rps-div').appendChild(humanDiv);
     document.getElementById('flex-box-rps-div').appendChild(botDiv);
     document.getElementById('flex-box-rps-div').appendChild(messageDiv);
}

//Challenge 4: Change the color of All Buttons
var all_buttons = document.getElementsByTagName('button');
console.log(all_buttons);

var copyAllButtons = [];
for (let i = 0; i < all_buttons.length; i++){
    copyAllButtons.push(all_buttons);
}

console.log(copyAllButtons);

function buttonColorChange(buttonThingy){
    if (buttonThingy.value === 'red') {
        buttonRed();
    } else if (buttonThingy.value === 'green'){
        buttonGreen();
    } else if (buttonThingy.value === 'reset'){
        buttonColorReset();
    } else if (buttonThingy.value === 'random'){
        randomColors();
    }
}

function buttonRed(){
    for (let a = 0; a < all_buttons.length; a++){
        all_buttons[a].classList.remove(all_buttons[a].classList[1]);
        all_buttons[a].classList.add('btn-danger');
    }
}

function buttonGreen(){
    for (let a = 0; a < all_buttons.length; a++){
        all_buttons[a].classList.remove(all_buttons[a].classList[1]);
        all_buttons[a].classList.add('btn-success');
    }
}

function buttonColorReset(){
    for (let a = 0; a < all_buttons.length; a++){
        all_buttons[a].classList.remove(all_buttons[a].classList[1]);
        all_buttons[a].classList.add(copyAllButtons[a]);
    }
}

function randomColors(){
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning']

    for (let i=0; i<all_buttons.length; i++){
        let randomNumber = Math.floor(Math.random() * 4)
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(choices[randomNumber]);
    }
}

