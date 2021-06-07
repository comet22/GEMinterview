// global variables, used to store data from the database
var response = "";
var questions = [];
var answers = [];
var correctAnswers = [];
var correct = 0;

// called when an answer is chosen
function handleClick(chosenAnswer) {
    var question = document.getElementById('q').innerHTML;
    for(var i = 0; i < questions.length; i++) {
        // used to find the correct question
        if(question == questions[i]) {
            // check if the chosen answer is correct
            if(correctAnswers[i] == chosenAnswer) {
                    correct++;
            }

            if(i + 1 < questions.length) {
                // if this is not the last question, load the next question
                document.getElementById('q').innerHTML = questions[i+1];

                for(var j = 0; j < answers[i+1].length; j++) {
                    document.getElementById(j).innerHTML = answers[i+1][j];
                }
            } else {
                // if this is the last question, print the users score
                document.getElementById('q').innerHTML = "You got " + correct + " questions correct, congrats!"
                document.getElementById('answers').style.display = "none";
            }
            break;
        }
    }
}

// collects database info
function handleLoad() {
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            response = this.responseText;
        }
    };
    xhttp.open("GET", "getquestions.php?q=", true);
    xhttp.send();   
}

// when start is pressed, this function converts the response received into a format the code can use
function startquiz() {
    var data = String(response).split(' ');
    for(var i = 0; i < data.length-1; i+=6) {
        // questions don't have spaces in the database to allow the split function to function properly, we change it back here and store the question
        questions.push(data[i].replaceAll('_',' '));
        
        // stores which answer is correct
        correctAnswers.push(data[i + 5]);
        
        // stores the answers
        var responseAnswers = [];
        for(var j = 1; j < 5; j++) {
            responseAnswers.push(data[i+j]);
        }
        answers.push(responseAnswers);
    }

    document.getElementById('description').style.display = "none";
    document.getElementById('centerStart').style.display = "none";

    document.getElementById('answers').style.display = "block";

    // load the first question
    document.getElementById('q').innerHTML = questions[0];
    for(var i = 0; i < answers[0].length; i++) {
        document.getElementById(i).innerHTML = answers[0][i];
    }
}