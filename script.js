'use strict';
// Prepare what goes into the element
//  - Choose the first quiz
//  - Retrieve the question and assign it to a variable
//  - Get the answers and assign it to an array

// When the button is pressed
//  - Check if user Answer is equal to correct answer
//    - If it matches increase score
//    - If not do nothing

//  - Check if it is the last question
//    - If it is show the score
//    - If not inject the next quiz into the html 

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

function generateForm () {

    var i = 0;
    var currentQuestion = allQuestions[i];
    var question = currentQuestion.question;
    var choices = currentQuestion.choices;
    var myFieldset = document.getElementById('myFieldset');
    var myFragment = document.createDocumentFragment();
    var hLegend = document.createElement('legend');
    
    hLegend.textContent = question;
    myFragment += hLegend;
    myFieldset.appendChild(hLegend);

    for (var j=0, len=choices.length ; j<len ; j+=1) {
    
        var currentChoice = choices[j];

        var element = document.createElement('input');
        //Assign different attributes to the element.
        element.setAttribute('type','radio' );
        element.setAttribute('value', currentChoice);
        element.setAttribute('name', currentChoice);

        //Then the label
        var newLabel = document.createElement('label');
        newLabel.appendChild(document.createTextNode(currentChoice));
    
        myFieldset.appendChild(element);
        myFieldset.appendChild(newLabel);

    }
    
    
}

generateForm();


