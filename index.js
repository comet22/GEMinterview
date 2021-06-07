var response = "";
var questions = [];
var answers = [];
var correctAnswers = [];
var correct = 0;

function handleClick(chosenAnswer) {
    var question = document.getElementById('q').innerHTML;
    for(var i = 0; i < questions.length; i++) {
        if(question == questions[i]) {
            if(correctAnswers[i][chosenAnswer] == true) {
                    correct++;
            }

            if(i + 1 < questions.length) {
                document.getElementById('q').innerHTML = questions[i+1];

                for(var j = 0; j < answers[i+1].length; j++) {
                    document.getElementById(j).innerHTML = answers[i+1][j];
                }
            } else {
                document.getElementById('q').innerHTML = "You got " + correct + " questions correct, congrats!"
                document.getElementById('answers').style.display = "none";
            }
            break;
        }
    }
}

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

function startquiz() {
    var data = String(response).split(' ');
    for(var i = 0; i < data.length-1; i+=6) {
        questions.push(data[i].replaceAll('_',' '));
        
        var correct = data[i + 5];
        var correctRow = [];
        for(var j = 0; j < 4; j++) {
            if(correct == j) {
                correctRow.push(true);
            } else {
                correctRow.push(false);
            }
        }
        correctAnswers.push(correctRow);
        
        var responseAnswers = [];
        for(var j = 1; j < 5; j++) {
            responseAnswers.push(data[i+j]);
        }
        answers.push(responseAnswers);
    }

    document.getElementById('description').style.display = "none";
    document.getElementById('start').style.display = "none";

    document.getElementById('answers').style.display = "block";

    document.getElementById('q').innerHTML = questions[0];
    for(var i = 0; i < answers[0].length; i++) {
        document.getElementById(i).innerHTML = answers[0][i];
    }
}