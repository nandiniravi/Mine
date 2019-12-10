console.log('script is working');

// Creating 10 objects for 10 Questions
class Question{
    constructor(questionNumber,shape,color,character){
        this.questionNumber = questionNumber;
        this.shape = shape,
        this.color = color;
        this.character = character;
    }
}

question1 = new Question(1, '&#x26AC;','PALEGREEN','rubble.png');
question2 = new Question(2, '&#x25B2','MEDIUMPURPLE','mickey.png');
question3 = new Question(3, '&#x263E','GOLD','bheem.png');
question4 = new Question(4, '&#x25C6','ORANGERED','minnie.png');
question5 = new Question(5, '&#x25D7','DEEPSKYBLUE','bingo.png');
question6 = new Question(6, '&#x25A0','SIENNA','donald-duck.png');
question7 = new Question(7, '&#x2600','white','rubble.png');
question8 = new Question(8, '&#x2605','HOTPINK','shark.png');
question9 = new Question(9, '&#x2665','MAROON','monkey.png');
question10 = new Question(10, '&#x2602','CRIMSON','elephant.png');

let questions = [question1, question2,question3,question4,question5,question6,question7,question8,question9,question10];

//-------------------------

window.onload = function(){
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('endContainer').style.display = 'none';
}

//to save the username
let userName = [];

//function to launch the page
function launchQuestion(i){
        document.getElementById('question').innerHTML = 'Question ' + questions[i].questionNumber;
        document.getElementById('shapeAns').value = '';
        document.getElementById('colorAns').value = '';
        document.getElementById('cartoonName').value = '';

        if(i>0){
            for(let k=1;k<7;k++){
                let previousShape = document.querySelector('#shape'+k);
                document.getElementById('shapes').removeChild(previousShape);
            }
            for(let m=1;m<3;m++){
                let previousImage = document.querySelector('#img'+m);
                document.getElementById('numbers').removeChild(previousImage);
            }
        }
    
        for(let j=1;j<7;j++){
            let shapeElement = document.createElement('h1');
            shapeElement.innerHTML = questions[i].shape;
            shapeElement.id = 'shape'+j;
            document.getElementById('shapes').appendChild(shapeElement);
        }
        
        document.getElementById('colorbox').style.backgroundColor = questions[i].color;

        for (let n=1;n<3;n++){
            let imgElement = document.createElement('img');
            imgElement.src = questions[i].character;
            imgElement.id = 'img' + n;
            document.getElementById('numbers').appendChild(imgElement);
        }
       
        if(i === 0){
            document.getElementById('previous').style.display = 'none';
            document.getElementById('submit').style.display = 'none';
            document.getElementById('next').style.marginLeft = '83.65%';
            
         }
         else if(i === 9){
            document.getElementById('next').style.display = 'none';
            document.getElementById('submit').style.display = 'inline-block';
        }
         else{
            document.getElementById('previous').style.display = 'inline-block';
            document.getElementById('next').style.marginLeft = '1%';
            document.getElementById('next').style.display = 'inline-block';
            document.getElementById('submit').style.display = 'none';
        }
    }

let counter = [0];

document.getElementById('start').onclick = function(){
    userName[0] = document.getElementById('user').value;
    document.getElementById('startContainer').style.display = 'none';
    document.getElementById('questionContainer').style.display = 'block';
    launchQuestion(0);
    console.log(userName);
}

document.getElementById('next').onclick = function(){
    counter[0] = counter[0] + 1;
    if(counter[0]<10){
        launchQuestion(counter[0]);
        if (counter[0] === 9){
            document.getElementById('next').style.display = 'none';
        }
        else if(counter[0]===0){
            document.getElementById('previous').style.display = 'none';
        }
    }
}

document.getElementById('previous').onclick = function(){
    if(counter[0] == 1){
        for(let k=1;k<7;k++){
                let previousShape = document.querySelector('#shape'+k);
                document.getElementById('shapes').removeChild(previousShape);
            }
            for(let m=1;m<3;m++){
                let previousImage = document.querySelector('#img'+m);
                document.getElementById('numbers').removeChild(previousImage);
            }
    }
    counter[0] = counter[0] - 1;
    if(counter[0]>=0){
        launchQuestion(counter[0]);
        if (counter[0] === 9){
            document.getElementById('next').style.display = 'none';
        }
        else if(counter[0]===0){
            document.getElementById('previous').style.display = 'none';
        }
    }
}

document.getElementById('submit').onclick = function(){
    document.getElementById('questionContainer').style.display = 'none';
    document.getElementById('congrats').innerHTML = 'Congratulations, ' + userName[0] + '!! You have completed this Quiz! :) ' +'<br><br><br><br>'
    document.getElementById('endContainer').style.display = 'inline-block';
}