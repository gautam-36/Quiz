const quizData = [
    {
        question: 'Anuarg yadav loves :',
        a: 'Akshra',
        b: 'Amrita',
        c: 'Archana Yadav',
        d: 'Sonam Malik',
        correct: 'c'
    },

    {
        question: 'Aman Verma  loves',
        a: 'Archana Yadav',
        b: 'Amrita',
        c: 'Akshra',
        d: 'Sonam Malik',
        correct: 'b'
    },

    {
        question: 'Abhishek pandey  loves',
        a: 'Amrita',
        b: 'Archana Yadav',
        c: 'Khyati Soni',
        d: 'Jyoti',
        correct: 'd'
    },


    {
        question: 'Ajeet Giri loves',
        a: 'Shreya Aggarwal',
        b: 'Nishu khan',
        c: 'Meenu',
        d: 'Jyoti',
        correct: 'c'
    },

    {
        question: 'Akshay loves',
        a: 'Shreya Aggarwal',
        b: 'Nishu khan',
        c: 'Meenu',
        d: 'Akshra Kaushik',
        correct: 'd'
    },


    {
        question: 'Ankit yadav loves',
        a: 'Shreya Aggarwal',
        b: 'Deeya',
        c: 'Meenu',
        d: 'Akshra Kaushik',
        correct: 'b'
    },


    {
        question: 'Sandeep singh loves',
        a: 'Shreya Aggarwal',
        b: 'Deeya',
        c: 'Sakshi yadav',
        d: 'Akshra Kaushik',
        correct: 'c'
    },


    {
        question: 'Ashwani Deo loves',
        a: 'Sonam',
        b: 'Deeya',
        c: 'Sakshi',
        d: 'Bus ladki honi chahiye isko to sbse pyar ho jata hai',
        correct: 'd'
    },


    {
        question: 'Khuswant loves',
        a: 'Sonam',
        b: 'Deeya',
        c: 'mechanical wali se',
        d: 'Akshra Kaushik',
        correct: 'c'
    },


    {
        question: 'Prashant loves',
        a: 'Sonam',
        b: 'Deeya',
        c: 'Maths Teacher (Anju) se ',
        d: 'Akshra Kaushik',
        correct: 'c'
    },


    {
        question: 'Swastik loves',
        a: 'Sonam',
        b: 'Niharika',
        c: 'Nishu khan ',
        d: 'Ye Randwa hi Marega',
        correct: 'd'
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

            if (score == quizData.length) {
                window.alert('abe lodu khud ke liye bhi Set kr le sabka to pta hi h tujhe apna bhi kuchh kr le ');
            }
        }
    }
});

