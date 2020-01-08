var rightAnswer = 0;
var wrongAnswer = 0;
var counter = 0;
var timer = 30;
var timer2 = 5;
var selectedQuestion;
var intervalID;

var questions = {
        ques1: {
        q: "What is the Texas state plant?",
        a1: "Sunflower",
        a2: "Bluebonnet",
        a3: "Prickly pear cactus",
        a4: "Daisy",
        pic: "../images/prickly-pear-cactus.webp"
    },
    
    ques2: {
        q: "How many championships did Michael Jordan win with the Chicago Bulls?",
        a1: "7",
        a2: "4",
        a3: "3",
        a4: "6",
        pic: "../images/jordan.jpg"
    },
    
    ques3: { 
        q: "How many soccer players should a team have on the field at the start of a match?",
        a1: "11",
        a2: "10",
        a3: "15",
        a4: "12",
        pic: "..images/soccer.png"
    },
    
    ques4: {
        q: "What year was the very first model of the Iphone released?",
        a1: "2006",
        a2: "2005",
        a3: "2004",
        a4: "2007",
        pic: "../images/iphone.jpg"
    },
        
    ques5 : {
        q: "Which planet is the hottest in this solar system?",
        a1: "Mars",
        a2: "Sun",
        a3: "Venus",
        a4: "Mercury",
        pic: "../images/venus.jfif"
    },
        
    ques6: {
        q: "Which natural disaster is measured by a Richter scale?",
        a1: "Tornados",
        a2: "Earthquake",
        a3: "Global Warming",
        a4: "Hurricane",
        pic: "../image/earthquake.jpg"
    },
    
    ques7: {
        q: "Which planet has the most gravity in this solar system?",
        a1: "Pluto",
        a2: "Sun",
        a3: "Uranus",
        a4: "Jupiter",
        pic: "../images/jupiter.jfif"
    },
        
    ques8: {
        q: "Which country produces the most coffee in the world?",
        a1: "Starbucks",
        a2: "Paris",
        a3: "North America",
        a4: "Brazil",
        pic: "../images/brazil.jpg"
    }
};

function randomQuestion(){

}

function decrement() {
    timer --;
    $("#timer").html("<h2>" + timer + "</h2>");
    if (timer === 0) {
      stop();
      alert("Time Up!");
    }
}

function stop() {
    clearInterval();
}

function gameStart() {
    
}

$(document).on("click", "#start", function() {
    console.log("Made it here!");
    gameStart();
});