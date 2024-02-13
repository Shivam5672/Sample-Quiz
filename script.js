const question = [
    {
        question:"Question-1: What is the name of the biggest animal?",
        answer:[
            {
                text:"Elephant",
                correct:false
            },
            {
                text:"Blue Whale",
                correct:true
            },
            {
                text:"Hippopotamus",
                correct:false
            },
            {
                text:"Human",
                correct:false
            }
        ]
    },
    {
        question:"Question-2: What is the name of the biggest bone in Humans?",
        answer:[
            {
                text:"Femur",
                correct:true
            },
            {
                text:"Skull",
                correct:false
            },
            {
                text:"Patela",
                correct:false
            },
            {
                text:"Spine",
                correct:false
            }
        ]
    },
    {
        question:"Question-3: What is the name of the biggest planet in our solar system?",
        answer:[
            {
                text:"Mercury",
                correct:false
            },
            {
                text:"Neptune",
                correct:false
            },
            {
                text:"Jupiter",
                correct:true
            },
            {
                text:"Saturn",
                correct:false
            }
        ]
    },
    {
        question:"Question-4: What is the name of the prime minister of India?",
        answer:[
            {
                text:"Neerav Modi",
                correct:false
            },
            {
                text:"Donald Trump",
                correct:false
            },
            {
                text:"Lala Lajpat Rai",
                correct:false
            },
            {
                text:"Narendra Modi",
                correct:true
            }
        ]
    }
]

// Variable Declaration
const container = document.querySelector('.app-container');
const questionButton = document.querySelector('.questionbox');
const answerButton = document.querySelector('.answerbox');
const answerlist = document.querySelectorAll('#answer');
const nextBtn = document.querySelector('.nextbtn');
let questionIndex = 0;
let score = 0;

// Score Printing
const scorePrinting = (score) => {
    container.innerHTML = `You score ${score} out of ${question.length}`;
    var nextButton = document.createElement('button');
    nextButton.innerHTML = 'Next';
    container.appendChild(nextButton);
    nextButton.className = 'btn';
    container.style.display = "flex";
    container.style.justifyContent = "center";
    container.style.alignItems = "center";
    container.style.fontWeight = "bold";
    container.style.flexDirection = "column";
    nextButton.addEventListener('click', () => {
        location.reload('true');
    });
}

function selectedOption(elements){
    let correctAnswer;
    for(let i = 0; i < answer.length; i++){
        if(question[questionIndex].answer[i].correct === true){
            correctAnswer = question[questionIndex].answer[i].text;
        }
    }
    isCorrect = (elements.innerHTML == correctAnswer)? true : false;
    if(isCorrect){
        elements.style.background="green"
        score++;
    }
    else{
        elements.style.background="red"
    }
    for(let i = 0; i < answer.length; i++){
        if(question[questionIndex].answer[i].correct === true){
            answer[i].style.background="green"
        }
        answer[i].disabled=true;
        answer[i].style.cursor="not-allowed"
    }
    nextBtn.style.display="block";
}

// Question Fetching
showQuestion();

function showQuestion() {
    questionButton.innerHTML = question[questionIndex].question;
    for (let i = 0; i < answerlist.length; i++) {
        answerlist[i].innerHTML = question[questionIndex].answer[i].text;
    }
}

// Click event on Next Button
nextBtn.addEventListener('click', () => {
    questionIndex++;
    if (questionIndex >= question.length) {
        nextBtn.style.display = "none";
        scorePrinting(score);
    } else {
        for(let i = 0; i < answer.length; i++){
            answer[i].style.background="#dadada"
            answer[i].disabled=false;
            answer[i].style.cursor="pointer"
        }
        nextBtn.style.display="block";
        showQuestion();
    }
});

