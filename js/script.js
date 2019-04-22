/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator 
******************************************/

//Array of objects that include the quotes
const quotes = 
[
  //quote #1
  {quote: 'A goal without a plan is just a wish.',source: 'Antoine de Saint-Exupéry, writer and pioneering aviator',citation: 'Jeff Rich Quotes. (n.d.).',year: 1995},
  //quote #2
  {quote: 'By failing to prepare, you are preparing to fail.',source: 'Benjamin Franklin, Founding Father of the United States',citation: 'Benjamin Franklin Quotes. (n.d.).',year: 1919 ,tags: '#Fail, #Failing, #Prepare, #Preparing, #You'},
  //quote #3
  {quote: 'If you don’t know where you are going, you’ll end up someplace else.',source: 'Yogi Berra, former New York Yankees catcher',citation: 'Yogi Berra Quotes. (n.d.).', tags: '#Because, #Careful, #Get, #Going, #Got, #Know, #Might, #Very, #Where, #You'},
  //quote #4
  {quote: 'Unless commitment is made, there are only promises and hopes; but no plans.',source: 'Peter F. Drucker, author and educator',citation: 'Peter Drucker Quotes. (n.d.).'},
  //quote #5
  {quote: 'Plans are of little importance, but planning is essential.',source: 'Winston Churchill, former British Prime Minister',citation: 'Winston Churchill Quotes. (n.d.).',year: 1941},
  //quote #6
  {quote: 'I am prepared for the worst, but hope for the best.',source: 'Benjamin Disraeli, British politician and author', citation: 'Benjamin Disraeli Quotes. (n.d.).'}
];



//Returns a random object/quote object from the quotes array
let getRandomQuote = () =>
{
  let randomNumber = Math.floor(Math.random() * 5);
  return quotes[randomNumber];
} 

//this is just a function that returns a random color which will be set as the background color
let getRandomColor = () =>{
  const bgcolors = [
    '#cb4bca',
    '#ff8d00',
    '#010649',
    '#008d23',
    '#f45042'
  ];

  let randNum = Math.floor(Math.random() * 5);
  return bgcolors[randNum];
}

//the function that will print the Random quote we get from the getRandomQuote function 
let printQuote = () => 
{
  let randomQuote = getRandomQuote();
  let html = '';
  let randomColor = getRandomColor();

  html += '<p class = "quote">' + randomQuote.quote + '</p>'; //filling it into the class = quote p tag 
  html += '<p class = "source">' + randomQuote.source ; //filling it into the class = source p tag 
 

  if(randomQuote.citation){//checking if the quote's citation is there, and if so display it 
    html += '<span class = "citation">' + randomQuote.citation + '</span>';
  }
  if(randomQuote.year){ //checking if the quote's date is there, and if so display it 
    html += '<span class = "year">' + randomQuote.year + '</span>';
  }
  if(randomQuote.tags){ //checking if the quote's tags are there, and if so display it
    html += '<br /><span><strong>Tags : '+ randomQuote.tags +'</strong></span>';
  }

  html += '</p>';


  //when button gets clicked and shows another quote, this will also change the backround randomly
  document.body.style.background = randomColor;
  //change the button's color randomly
  document.getElementById('loadQuote').style.backgroundColor = randomColor;

  //setting the innerHTML of the quote-box to my html string
  document.getElementById("quote-box").innerHTML = html;
}

// displaying the objects in the html element through the printQuote function
document.getElementById('loadQuote').addEventListener("click", printQuote, false); 

  