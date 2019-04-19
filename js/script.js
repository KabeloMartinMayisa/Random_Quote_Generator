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
    citation: 'twitter'
  },
  //quote #1
  {
    quote: 'Whatever the mind of man can conceive and believe, it can achieve.',
    source: 'Napoleon Hill',
    citation: 'brainyquotes.com'

  },
  //quote #2
  {
    quote: 'Strive not to be a success, but rather to be of value.',
    source: 'Albert Einstein',
    citation: 'brainyquotes.com'

  },
  //quote #3
  {
    quote: 'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.',
    source: 'Robert Frost',
    citation: 'brainyquotes.com'
  },
  //quote #4
  {
    quote: 'I attribute my success to this: I never gave or took any excuse.',
    source: 'Florence Nightingale',
    citation: 'brainyquotes.com'
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



  /*

THIS IS WHAT THE INSTRUCTIONS REQUIRE US TO DO

  let html = '';

  html += '<p class = "quote">' + randomQuote.quote;
  html += '<p class = "source">' + randomQuote.source;
  html += '<p class = "tag"> #' + randomQuote.tag ;

  if(randomQuote.citation){
    html += '<span class = "citation">' + randomQuote.citation + '</span>';
  }

  html += '</p>';
  


  document.getElementById("quote-box").innerHTML = html;
  */

//INSTEAD THIS IS WHAT I MEANT 

  let quote = randomQuote.quote;
  let source = randomQuote.source;
  let citation = randomQuote.citation;

  document.getElementById("quote").innerHTML = quote;
  document.getElementById("source").innerHTML = source;
  /*
  this below line of code gives me an error which i also need help with : Uncaught TypeError: Cannot set property 'innerHTML' of null
  at HTMLButtonElement.printQuote 
    */
  document.getElementById("citation").innerHTML = citation;



}



/***
  When the "Show another quote" button is clicked, the event listener 
  below will be triggered, and it will call, or "invoke", the `printQuote` 
  function.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);
  