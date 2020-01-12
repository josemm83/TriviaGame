var questions = [];
var storage = [];
var rightAnswer = 0;
var wrongAnswer = 0;
var timeOut = 0;
var hold = 5; 
var userInput = "";
var timer = 30;
var running = false;
var selectedQuestion;
var intervalID;
var picture;

function randomQuestion(){
    if (questions.length === 0){
        exitGame();
    }
    else{
        var random = Math.floor(Math.random() * questions.length);
        selectedQuestion = questions[random];
        storage.push(selectedQuestion);
        questions.splice(random, 1);
        picture = selectedQuestion.pic;
        // console.log(selectedQuestion);
        $("#randomQuestion").html("<h2>" + selectedQuestion.q + "</h2>");
        for (var i = 0; i < selectedQuestion.choice.length; i++){
            var multipleChoice = $("<div>");
            multipleChoice.addClass("userChoice");
            multipleChoice.html(selectedQuestion.choice[i]);
            multipleChoice.attr("multipleChoice", i);
            $("#log").append(multipleChoice);
        }
    }
}

function run(){
    if (!running){
        clearInterval(intervalID);
        intervalID = setInterval(decrement, 1000);
        running = true;
    }
}

function stop (){
    clearInterval(intervalID);
    running = false;
}

function decrement() {
    timer --;
    $("#timer").html("<h3>Time Remaining: " + timer + " Seconds</h3>");
    if (timer === 0) {
      stop();
      timeOut ++;
      $("#log").html("<p>Time has expired, the correct answer was: " + 
      selectedQuestion.choice[selectedQuestion.answer] + "</p>");
      pictureDisplay();
    //   alert("Time Up!");
    }
}

function exitGame(){
    $("#randomQuestion").empty();
    $("#randomQuestion").html("<h2>GAME OVER! Results for the game: </h2>")
    $("#log").append("<h3>Correct: " + rightAnswer + "</h3>");
    $("#log").append("<h3>Incorrect: " + wrongAnswer + "</h3>");
    $("#log").append("<h3>Time out: " + timeOut + "</h3>");
    $("#reset").show();
    timeOut = 0;
    rightAnswer = 0;
    wrongAnswer = 0;
}

function pictureDisplay(){
    $("#log").append("<img src=" + picture +">")
    var brk = setTimeout( function (){
        $("#log").empty();
        timer = 30;
        if (questions.length === 0){
            stop();
            exitGame();
        }
        else{
            run();
            randomQuestion();
        }
    }, hold * 1000);
}

$(document).ready(function () {
    $("#reset").hide();
    questions = [
        { 
            q: "What is the Texas state plant?",
            choice: ["Sunflower", "Bluebonnet", "Prickly pear cactus", "Daisy"],
            answer: 2,
            pic: "assets/images/prickly-pear-cactus.webp"
        },
        {
            q: "How many championships did Michael Jordan win with the Chicago Bulls?",
            choice: ["7", "4", "3", "6"],
            answer: 3,
            pic: "assets/images/jordan.jpg"
        },
        { 
            q: "How many soccer players should a team have on the field at the start of a match?",
            choice: ["11", "10", "15", "12"],
            answer: 0,
            pic: "assets/images/soccer.png"
        },
        {
            q: "What year was the very first model of the Iphone released?",
            choice: ["2006", "2005", "2004", "2007"],
            answer: 3,
            pic: "assets/images/iphone.jpg"
        },    
        {
            q: "Which planet is the hottest in this solar system?",
            choice: ["Mars", "Sun", "Venus", "Mercury"],
            answer: 2,
            pic: "assets/images/venus.jfif"
        },
        {
            q: "Which natural disaster is measured by a Richter scale?",
            choice: ["Tornados", "Earthquake", "Global Warming", "Hurricane"],
            answer: 1,
            pic: "assets/images/earthquake.jpg"
        },
        {
            q: "Which planet has the most gravity in this solar system?",
            choice: ["Pluto", "Sun", "Uranus", "Jupiter"],
            answer: 3,
            pic: "assets/images/jupiter.jfif"
        },
        {
            q: "Which country produces the most coffee in the world?",
            choice: ["Starbucks", "Paris", "North America", "Brazil"],
            answer: 1,
            pic: "assets/images/brazil.jpg"
        }];
    // console.log(questions);
    // console.log(questions.length);

    $("#start").on("click", function () {
        // console.log("clicked start");
        $("#start").hide();
        run();
        randomQuestion();
    });

    $("#reset").on("click", function () {
        $("#reset").hide();
        $("#log").empty();
        $("#randomQuestion").empty();
        for (var k = 0; k < storage.length; k ++){
            questions.push(storage[k]);
            storage.splice(k, 1);
        }
        run();
        randomQuestion();
    });
});

$(".userChoice").on("click", function () {
    userInput = parseInt($(this).attr("multipleChoice"));
    console.log(userInput);
    if (userInput === selectedQuestion.answer){
        stop();
        rightAnswer ++;
        userInput = "";
        $("#log").html("<p>CORRECT!</P>");
        pictureDisplay();
    }
    else {
        stop();
        wrongAnswer ++;
        userInput = "";
        $("#log").html("<p>Answer is incorrect! The correct answer is: " 
        + selectedQuestion.choice[selectedQuestion.answer] + "</p>");
        pictureDisplay();
    }
});