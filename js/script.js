/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/*** 
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/
const quotes = 
[
  //quote #0
  {
    quote: 'Life is about making an impact, not making an income.',
    source: 'Kevin Kruse',
    citation: 'Twitter',
    year: 2013
  },
  //quote #1
  {
    quote: 'Whatever the mind of man can conceive and believe, it can achieve.',
    source: 'Napoleon Hill',
    citation: 'BrainyQuote',
    year: 2000
  },
  //quote #2
  {
    quote: 'Strive not to be a success, but rather to be of value.',
    source: 'Albert Einstein',
    citation: 'BrainyQuote.com',
    year: 2019
  },
  //quote #3
  {
    quote: 'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.',
    source: 'Robert Frost',
    citation: 'BrainyQuote.com',
    year: 2000
  },
  //quote #4
  {
    quote: 'I attribute my success to this: I never gave or took any excuse.',
    source: 'Florence Nightingale',
    citation: 'BrainyQuote.com',
    year: 2000
  }
];



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number 
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/
let getRandomQuote = () =>
{
  let randomNumber = Math.floor(Math.random() * 5);
  return randomNumber;
} 



/***
  Create the `printQuote` function to: 
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND 
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string. 
***/

let printQuote = () => 
{

  let randomNumber = getRandomQuote();
  let html = '';
  let counter = 0;
//variables assigned to values from the array of objects : QUOTES[] -------------------------
  let quote = quotes[randomNumber].quote;
  let source = quotes[randomNumber].source;
  let citation = quotes[randomNumber].citation;
  let year = quotes[randomNumber].year; 

  while(counter != 1){
    //recording how many times the button was clicked (was just interested)
    console.log('Number of button clicks -- ' + quotes[randomNumber]);

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('source').innerHTML = source;
    document.getElementById('citation').innerHTML = citation;
    document.getElementById('year').innerHTML = year;
    
    counter++;
  }
  //----------

  //document.write(html);
  
}



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


