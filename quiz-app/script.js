const quizData = [
    {
        question: 'How old is Gautam Gupta',
        a: '10',
        b: '21',
        c: '18',
        d: '25',
        correct: 'b'
    },

    {
        question: 'what is the most used programming language in 2022',
        a: 'java',
        b: 'c#',
        c: 'JavaScript',
        d: 'Pyhton',
        correct: 'c'
    },

    {
        question: 'who is the PrimeMinister of India',
        a: 'Narendra Modi',
        b: 'Rahul Gandhi',
        c: 'Amit Sah',
        d: 'Dr. ManMohan Singh',
        correct: 'a'
    },

    {
        question: 'what does HTML stands for ? ',
        a: 'Aplication inteface programming',
        b: 'Jason Object Notation',
        c: 'CasCading Style Sheet',
        d: 'HyperText Markup Language',
        correct: 'd'
    },

    {
        question: 'JavaScript Launch in year ? ',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'b'
    },
]

const questionEl = document.getElementById('question');
const answerEls = document.querySelectorAll(".answer");
const submitBtn = document.getElementById('submit');

let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");
const quiz = document.getElementById('quiz');

let currentQuiz = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deSelectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}


function getSelected() {
    let answer = undefined;

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;

}

function deSelectAnswers() {

    answerEls.forEach(answerEl => {
        answerEl.checked = false;
    });
}
submitBtn.addEventListener('click', () => {
    // check to see the answer 
    const answer = getSelected();
    console.log(answer);
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;

        if (currentQuiz < quizData.length) {
            loadQuiz();
        }
        else {
                quiz.innerHTML =
                `<h2> you answered correctly at ${score}/ ${quizData.length} </h2> 
                <button onclick="location.reload()" > Reload</button>`;
        }
    }
});

