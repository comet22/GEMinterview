var questions = ["Which type is weak to fire?", "Which of these is NOT a Pokemon?"];
var answers = [
    ["fire", "water", "steel", "fairy"],
    ["Mawile", "Draconaught", "Decidueye", "Froakie"]
];
var correctAnswers = [
    [false, false, true, false],
    [false, true, false, false]
];
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
                document.getElementById('q').innerHTML = "Congrats, you got " + correct + " questions correct!"
                document.getElementById('answers').style.display = "none";
            }
            break;
        }
    }
}

function handleLoad() {
    document.getElementById('q').innerHTML = questions[0];
    for(var i = 0; i < answers[0].length; i++) {
        document.getElementById(i).innerHTML = answers[0][i];
    }
}