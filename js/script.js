/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


//// Quotes Array ////
var quotesArray = [
  {
   quote: "Don't cry because it's over, smile because it happened.",
   source: "Dr. Seuss",
   tag:['#happy','#feelings']
 },
 {
   quote: "Be yourself; everyone else is already taken.",
   source: "Oscar Wilde",
   tag:['#self']
 },
 {
   quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
   source: "Albert Einstein",
   tag:['#universe','#humanity']
 },
 {
   quote: "No one can make you feel inferior without your consent.",
   source: "Eleanor Roosevelt",
   citation: "This is My Story",
   year: "1889",
   tag:['#feelings']
 },
 {
   quote: "If you tell the truth, you don't have to remember anything.",
   source: "Mark Twain",
   tag:['#truth']
 },
 {
   quote: "Without music, life would be a mistake.",
   source: "Friedrich Nietzsche",
   citation: "Twilight of the Idols",
   tag:['#music']
 },
 {
   quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
   source: "Ralph Waldo Emerson",
 },
 {
   quote: "Insanity is doing the same thing, over and over again, but expecting different results.",
   source: "Narcotics Anonymous",
 },
 {
   quote: "We accept the love we think we deserve.",
   source: "Stephen Chbosky",
   citation: "The Perks of Being a Wallflower",
   year: "1994",
   tag:['#acceptence']
 }
];

/// Random BG colour array
var bgColour = ['#C3272B','#763568','#48929B','#003171','#006442','#03A678','#6C7A89'];


//// Declare global varibles////
var lastNum = -1; //Store last random quote number//
var lastBGNum = -1; // Store last BG number//
var quoteDiv = document.getElementById('quote-box'); //Get quote html ID


//// Get random quote and return it////
function getRandomQuote() {
  //Loop to ensure random numer is not last number
  do{
    var ranNum = Math.floor(Math.random()*quotesArray.length); //Create a variable to store a random number
  }while(ranNum === lastNum);

  lastNum = ranNum; //Update last quote number
  return quotesArray[ranNum]; //Cse the random number to `return` a random quote object from the `quotes` array.
}

////Function Change BG bgColour
function changeBG(){
  do {
    var ranNum = Math.floor(Math.random()*bgColour.length);
  } while (ranNum === lastBGNum);
  lastBGNum = ranNum;
  document.body.style.backgroundColor = bgColour[ranNum];
  document.getElementById("loadQuote").style.backgroundColor = bgColour[ranNum];
}


//// Print Quote////
//Create the `printQuote` function to:
function printQuote(){
  var quoteObj = getRandomQuote();  //Call the `getRandomQuote` function and assign it to a variable.
  var HTMLString = ''; //Create a variable for the HTML string and set it equal to an empty string.
  //Add Quote and source
  HTMLString += '<p class="quote"> '+quoteObj.quote+'</p>'; //Add quote to the HTML string
  HTMLString += '<p class="source">'+quoteObj.source; //Add sourceto the HTML string

  //Add Citation, year and tags if there are any
  if (typeof quoteObj.citation !== 'undefined') {
    HTMLString += '<span class="citation"> '+quoteObj.citation+'</span>';
  }
  if (typeof quoteObj.year !== 'undefined') {
    HTMLString += '<span class="year"> '+quoteObj.year+'</span>';
  }
  if (typeof quoteObj.tag !== 'undefined') {
    //Add tags based of the number of tags
    for (var i = 0; i < quoteObj.tag.length; i++) {
      HTMLString += '<span class="year"> '+quoteObj.tag[i]+'</span>';
    }
  }
  HTMLString +='</p>'; 
  //Write to quote to html
  quoteDiv.innerHTML = HTMLString;
  changeBG(); //change BG color
}

//// Change Quote when botton is Clicked/// 
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


/// Change quotes every 30 seconds
setInterval(printQuote, 5000);
printQuote(); //Initate ramdom quote on load
