//random quote script




// ready page for material -- 
$(document).ready(function(){
  //global variables -- 
   var randomNum;
   var randomQuote;
   var author; 
  //generate a quote when page opens
   getQuote();
  //function to randomize variables --
  function getQuote (){
   // quotes and authors -- 
    var quotes = [ "Try to be a rainbow in someone's cloud.", 
	"Health is the greatest gift, contentment the greatest wealth, faithfulness the best relationship.",
	"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
	"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
	"I can't change the direction of the wind, but I can adjust my sails to always reach my destination.", 
	"Believe you can and you're halfway there.",
	"Do or do not. There is no try.",
	"I've missed more than 9000 shots in my career. I've lost almost 300 games. 26 times I've been trusted to take the game winning shot and missed. I've failed over and over and over again in my life. And that is why I succeed.",
	"Strive not to be a success, but rather to be of value.",
	"The most common way people give up their power is by thinking they don’t have any.",
	"It is during our darkest moments that we must focus to see the light.",
	"Change your thoughts and you change your world.", 
	"You can't use up creativity. The more you use, the more you have.",
	"I have learned over the years that when one's mind is made up, this diminishes fear.", 
	"A person who never made a mistake never tried anything new.",
	"What's money? A man is a success if he gets up in the morning and goes to bed at night and in between does what he wants to do.",
	"If you want to lift yourself up, lift up someone else.",
	"Just because you are happy, it does not mean that the day is perfect, but that you have looked beyond its imperfections.",
	"Don't gain the world and lose your soul, wisdom is better than silver or gold.", 
	"Money is numbers and numbers never end. If it takes money to be happy, your search for happiness will never end.",
	"A man who stands for nothing will fall for anything.",
	"Education is our passport to the future, for tomorrow belongs to the people who prepare for it today.", 
	"We cannot think of being acceptable to others until we have first proven acceptable to ourselves.",
	"We need more light about each other. Light creates understanding, understanding creates love, love creates patience, and patience creates unity.", 
	"It always seems impossible until it's done.",
	"As we let our own light shine, we unconsciously give other people permission to do the same.",
	"Be yourself; everyone else is already taken.",
	"Be the change that you wish to see in the world.",
	"To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
	"For every minute you are angry you lose sixty seconds of happiness."]; 
    
	
	
	
	
	var authors = ["Maya Angelou",
	"buddha", 
	"Maya Angelou",
	"Oprah Winfrey", 
	"Jimmy Dean",
	"Theodore Roosevelt",
	"Yoda",
	"Michael Jordan", 
	"Albert Einstein",
	"Alice Walker",
	"Aristotle Onassis", 
	"Norman Vincent Peal", 
	"Maya Angelou", 
	"Rosa Parks",
	"Albert Einstein",
	"Bob Dylan", 
	"Booker T. Washington", 
	"Bob Marley", 
	"Bob Marley", 
	"Bob Marley", 
	"Malcolm X",
	"Malcolm X", 
	"Malcolm x",
	"Malcolm x", 
	"Nelson Mandela", 
	"Nelson Mandela",
	"Oscar Wilde",
	"Mahatma Gandhi",
	"Ralph Waldo Emerson",
	"Ralph Waldo Emerson"];
     
	 
	 
	 
	 //key variable for randomization-- 
    randomNum = Math.floor(Math.random()*quotes.length);
    //Assign random variable to author and quote--
     randomQuote = quotes[randomNum];
     author = " - " + authors[randomNum];
      /*calls quotes and respective author to location in html--*/ 
      $(".quote").text(randomQuote);
        $(".author").text(author);
}
 //Generate new quote when button is clicked -- 
  $("#quote-button").on("click", function(){
    getQuote();
  });
  
   
});