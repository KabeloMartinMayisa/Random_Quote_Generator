/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

//Array of objects that include the quotes
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



//Returns a random object/quote object from the quotes array
let getRandomQuote = () =>
{
  let randomNumber = Math.floor(Math.random() * 5);
  return quotes[randomNumber];
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

  let randomQuote = getRandomQuote();
  let html = '';
  let counter = 0;
//variables assigned to values from the array of objects : QUOTES[] -------------------------
  let quote = randomQuote.quote;
  let source = randomQuote.source;
  let citation = randomQuote.citation;
  let year = randomQuote.year; 

  while(counter != 1){
    //recording how many times the button was clicked (was just interested)
    console.log('Number of button clicks -- ' + randomQuote);

    document.getElementById('quote').innerHTML = quote;
    document.getElementById('source').innerHTML = source;
    document.getElementById('citation').innerHTML = citation;
    document.getElementById('year').innerHTML = year;
    
    counter++;
  }

}



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


