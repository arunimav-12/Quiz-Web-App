const quizDB =[
    // array of objects
    //const forvariable declaration
    {
        question : "Q1: Full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c:  "None",
        d:  "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question : "Q2: Full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c:  "None",
        d:  "HCascading Super Sheets",
        ans: "ans1"
    },
    {
        question : "Q3: Full form of HTTP?",
        a: "Hypertext Tranfer Product",
        b: "Hypertext Test Protocol",
        c:  "None",
        d:  "Hypertext Tranfer Protocol",
        ans: "ans4"
    },
    {
        question : "Q4: Full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c:  "None",
        d:  "JordenShoes",
        ans: "ans1"
    }

];

const question=document.querySelector('.question');
const option1= document.querySelector('#option1');
const option2= document.querySelector('#option2');
const option3= document.querySelector('#option3');
const option4= document.querySelector('#option4');
const submit = document.querySelector('#submit');
// takes refernce of the element which has submit id

const answers= document.querySelectorAll('.answer');

const showscore = document.querySelector('#showscore');

let questionCount =0;
let score=0;

const loadQuestion = () => {  //fat arrow function
    const questionList =quizDB[questionCount];  //takes first object initially
 
    question.innerText = questionList.question;  //changes text in html of element question

    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
};

loadQuestion();

const getCheckAnswer = () => {

    let answer;

    answers.forEach( (curAnsElem)  => {
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    } );
    return answer;  //return ans which users select
};

const deselectAll= () => {
    answers.forEach((curAnsElem)=> curAnsElem.checked =false );
}

submit.addEventListener('click', () =>{ ///to handle events in our html element 
    const checkedAnswer = getCheckAnswer();
    
    if(checkedAnswer == quizDB[questionCount].ans ){
        score++;
    };
    
    questionCount++; 

    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    }
    else{
          showscore.innerHTML=`
                <br>
                <h1> You Scored ${score}/${quizDB.length}</h1>
                <button class="btn" onclick="location.reload()">Play again </button>
          `;

          showscore.classList.remove('scorearea');
    }
});