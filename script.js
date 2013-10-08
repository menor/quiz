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

var score = 0;
var myFieldset = document.getElementById('myFieldset');

var questionNumber = 0;

//Sets the question and the answers
var currentQuestion = allQuestions[questionNumber];
var question = currentQuestion.question;
var choices = currentQuestion.choices;
var correctAnswer = currentQuestion.correctAnswer;




function generateForm() {
    
    //Creates the fragment
    var myFragment = document.createDocumentFragment();
    
    //Creates the elements that'll go into the fragment
    //First the question
    var hLegend = document.createElement('legend');
    hLegend.textContent = question;

    //And appends it to the fragment
    myFragment.appendChild(hLegend);

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
        option.setAttribute('name', 'userAnswer');
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
    
    myFragment.appendChild(submitButton);

    myFieldset.appendChild(myFragment);

}

//generates the first form
generateForm();

if (document.myForm.userAnswer[0].checked ) {
    score += 10;
}






