'use strict';

var quiz = function() {

    var allQuestions = [
        {
            question: 'Shangri-La is a song by: ',
            choices: ['The Ronettes', 'The Byrds', 'Roy Orbison', 'The Kinks'],
            correctAnswer: 3
        },
        {
            question: 'Which band is not from Boston: ',
            choices: ['Boston', 'Pixies', 'Lyres', 'Flamin\' Groovies'],
            correctAnswer: 3
        }
    ];

    var score = 0,
        questionNumber = 0,
        currentQuestion = allQuestions[questionNumber],
        answerPlace = currentQuestion.correctAnswer,
        choices = currentQuestion.choices,
        correctAnswer = choices[answerPlace];

    //console.log(score);
    //console.log(questionNumber);
    //console.log(currentQuestion);
    //console.log(answerPlace);
    //console.log(choices);
    //console.log(correctAnswer);
    
    var myFieldset = document.getElementById('myFieldset');
    
    
    var generateForm = function(n) {
        
        var currentQuestion = allQuestions[n],
            question = currentQuestion.question,
            choices = currentQuestion.choices;
        //Creates the fragment
        var myFragment = document.createDocumentFragment();
    
        //Creates the elements that'll go into the fragment
        //First the question
        var legend = document.createElement('legend');
        legend.textContent = question;

        //And appends it to the fragment
        myFragment.appendChild(legend);

        //We create a list to store the radios
        var listContainer = document.createElement('ul');

        //Then the possible answers
        for (var i=0, len=choices.length ; i<len ; i+=1) {
    
            var currentChoice = choices[i];

            //Creates a li element
            var liTag = document.createElement('li');
        
            //Creates the input element
            var option = document.createElement('input');
            //Assign different attributes to the element.
            option.setAttribute('type','radio' );
            option.setAttribute('value', currentChoice);
            option.setAttribute('name', 'answer');
            option.setAttribute('form', 'myForm');

            //Then the label
            var newLabel = document.createElement('label');
            //the text that goes inside the label
            newLabel.appendChild(document.createTextNode(currentChoice));
    
            //Appends the created elements to the li tag
            liTag.appendChild(option);
            liTag.appendChild(newLabel);

            //Appends the li tag to the ul
            listContainer.appendChild(liTag);
        }

        myFragment.appendChild(listContainer);

        //The submit button
        var submitButton = document.createElement('input');
        submitButton.setAttribute('type','submit' );
        submitButton.setAttribute('form', 'myForm');
        submitButton.setAttribute('value','Let\'s go');
        submitButton.setAttribute('id','theButton');
    
        myFragment.appendChild(submitButton);

        myFieldset.appendChild(myFragment);

    };

    var updateScore = function() {
        document.getElementById('score').innerHTML = score;
    };

    var checkAnswer = function(userAnswer) {
        if (userAnswer === correctAnswer) {
            score += 1;
            updateScore();
        }
    };

    var getAnswer = function() {
        var answers = document.getElementsByName('answer');
        for (var i = 0, l = answers.length; i < l; i++) {
            if (answers[i].checked) {
                return answers[i].value;
            }
        }
    };

    function advance() {
        checkAnswer(getAnswer());
        questionNumber += 1;
        myFieldset.innerHTML = '';
        generateForm(questionNumber);
    }
    
    function lastQuestion(n) {
        if (n < allQuestions.length) {
            advance()
        } else {
            quizEnd();
        }
    }

    function quizEnd() {
        console.log('the end');
    }

    generateForm(questionNumber);
    updateScore();

    var theButton = document.getElementById('theButton');
    
    theButton.onclick = function(e) {
        e.preventDefault();
        lastQuestion(questionNumber);
    };

    
    
};

quiz();



