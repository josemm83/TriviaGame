var questions = [];
var rightAnswer = 0;
var wrongAnswer = 0;
var timeOut = 0; 
var userInput;
var counter = 0;
var timer = 30;
var running = false;
var selectedQuestion;
var choices;
var intervalID;
var limit = 5;
var picture;

function randomQuestion(){
    if (questions.length === 0){
        exitGame();
    }
    else{
        var random = Math.floor(Math.random() * questions.length);
        selectedQuestion = questions[random];
        questions.splice(random, 1);
        // console.log(selectedQuestion);
        $("#randomQuestion").html("<h2>" + selectedQuestion.q + "</h2>");
        for (var i = 0; i < selectedQuestion.choice.length; i++){
            var multipleChoice = $("<div>");
            multipleChoice.addClass("answerPick");
            multipleChoice.html(selectedQuestion.choice[i]);
            
            $("#choices").append(multipleChoice);
        }
    }
}

function decrement() {
    clearInterval(timer);
    $("#timer").html("<h3>Time Remaining: " + timer + " Seconds</h3>");
    timer --;
    if (timer === 0) {
      clearInterval(timer);
      running = false;
      timeOut ++;
    //   alert("Time Up!");
    }
}

function exitGame(){
    $("#results").append("Correct: " + rightAnswer);
    $("#results").append("Incorrect: " + wrongAnswer);
    $("#results").append("Time out: " + timeOut);
    $("#reset").show();
}

function gameStart() {
    running = true;
    randomQuestion();

}

$(document).ready(function () {
    $("#reset").hide();
    questions = [
        { 
            q: "What is the Texas state plant?",
            choice: ["Sunflower", "Bluebonnet", "Prickly pear cactus", "Daisy"],
            answer: 2,
            pic: "../images/prickly-pear-cactus.webp"
        },
        {
            q: "How many championships did Michael Jordan win with the Chicago Bulls?",
            choice: ["7", "4", "3", "6"],
            answer: 3,
            pic: "../images/jordan.jpg"
        },
        { 
            q: "How many soccer players should a team have on the field at the start of a match?",
            choice: ["11", "10", "15", "12"],
            answer: 0,
            pic: "..images/soccer.png"
        },
        {
            q: "What year was the very first model of the Iphone released?",
            choice: ["2006", "2005", "2004", "2007"],
            answer: 3,
            pic: "../images/iphone.jpg"
        },    
        {
            q: "Which planet is the hottest in this solar system?",
            choice: ["Mars", "Sun", "Venus", "Mercury"],
            answer: 2,
            pic: "../images/venus.jfif"
        },
        {
            q: "Which natural disaster is measured by a Richter scale?",
            choice: ["Tornados", "Earthquake", "Global Warming", "Hurricane"],
            answer: 1,
            pic: "../image/earthquake.jpg"
        },
        {
            q: "Which planet has the most gravity in this solar system?",
            choice: ["Pluto", "Sun", "Uranus", "Jupiter"],
            answer: 3,
            pic: "../images/jupiter.jfif"
        },
        {
            q: "Which country produces the most coffee in the world?",
            choice: ["Starbucks", "Paris", "North America", "Brazil"],
            answer: 1,
            pic: "../images/brazil.jpg"
        }];
    // console.log(questions);
    // console.log(questions.length);
});

$("#start").on("click", function() {
    $("#start").hide();
    $("#reset").hide();
    setInterval(decrement, 1000);
    gameStart();
});

$("#reset").on("click", function () {

});