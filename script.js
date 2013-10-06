'use strict';

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

//Assigns a counter to our questions
var i = 0;

//Gets the current question
var currentQuestion = allQuestions[i];
//Tests the current question is right
console.log('The current question is:');
console.log(currentQuestion);

//Only gets the wording from the actual question
var question = currentQuestion.question;
//Tests we got the right wording
console.log('The wording from the current question is:');
console.log(question);


//Sets the legend of the HTML to be tue wording
var theLegend = document.getElementById('theLegend');
theLegend.textContent = question;

//Gets the choices and assigns them to the variable choices
var choices = currentQuestion.choices;
//Tests we got the array and the individual choice
console.log('This is the array with the choices for the current question:');
console.log(choices);
console.log('And these are the individual choices');
console.log(choices[0]);
console.log(choices[1]);
console.log(choices[2]);
console.log(choices[3]);



//Gets the radio buttons from the HTML
var radioButtons = document.getElementsByClassName('answer');
//Tests we got the array correctly
console.log('I got this array from the values in the HTML:');
console.log(radioButtons);
console.log('Now I test the values one by one');
console.log(radioButtons[0]);
console.log(radioButtons[1]);
console.log(radioButtons[2]);
console.log(radioButtons[3]);


//Assigns a radio button value
//radioButtons[0].value = choices[0];
//test that the value is correctly assigned
//console.log('This is the value for the first radio button:');
//console.log(radioButtons[0].value);

//For every choice I must generate a radio button
//and a label for radio button
//I must get the value and the text from choices[i]
function generateForm () {
 
var fragment = document.createDocumentFragment();

for (var i=0, len=choices.length ; i<=len ; i+=1) {
    
    var currentChoice = choices[i];
    
    //Create an input type dynamically.
    var element = document.createElement('input');
       
    //Assign different attributes to the element.
    element.setAttribute('type','radio' );
    element.setAttribute('value', currentChoice);
    element.setAttribute('name', currentChoice);

    //Then the label
    var newLabel = document.createElement('label');
    //newLabel.setAttribute('contentEditable', 'true');
    newLabel.innerHTML = currentChoice;
    //radioButtons[i].parentNode.insertBefore(newLabel, radioButtons[0].nextSibling);
    
    fragment.appendChild(element + newLabel);
}

document.appendChild(fragment);

}

generateForm();

  


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



