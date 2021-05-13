var readlineSync = require('readline-sync');
var userName = readlineSync.question('May I have your name? ');

var score = 0;

var arrayQuestions = [{
        ques: `1. What is my favorite series?
    a. College Romance
    b. How I Met Your Mother
    c. Friends
    d. The Big Bang Theory
    `,
        ans: "c"
    },

    {
        ques: `2. Do I know how to swim?
    a. Yes
    b. No
    `,
        ans: "b"
    },

    {
        ques: `3. Do I know how to ride bicycle?
    a. Yes
    b. No
    `,
        ans: "b"
    },
    {
        ques: `4. what's my favourite dish?
    a. Gol gappe
    b. Macroni
    c. Maggi
    d. Dosa
    `,
        ans: "a"
    },

    {
        ques: `5. where do I live?
    a. Jhansi
    b. Bhopal
    c. Delhi
    d. Gursarai
    `,
        ans: "d"
    },

    {
        ques: `6. What do I study?
    a. Maths
    b. Biology
    c. Arts
    d. Economics
    `,
        ans: "a"
    },

    {
        ques: `7. which game do I play the most?
    a. Cricket
    b. Ludo
    c. badminton
    d. snakeladder
    `,
        ans: "b"
    },

    {
        ques: `8. what is my hobby?
    a. dancing
    b. singing
    c. sketching
    d. cooking
    `,
        ans: "c"
    }
]

for (var i = 0; i < arrayQuestions.length; i++) {
    playGame(arrayQuestions[i].ques, arrayQuestions[i].ans);
}


function playGame(ques, ans) {
    var userInput = readlineSync.question(ques);
    if (userInput === ans) {
        score++;
        console.log("Your Current Score: ", score);
    } else {
        console.log("Your Current Score: ", score);
    }
}