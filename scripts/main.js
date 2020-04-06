var date = new Date();
var hours = date.getHours();
var minutes = date.getMinutes();
var dateWithouthSecond = "The time is: " + hours + ":" + minutes;


var userName = prompt("Please enter your name", "chosen one");
var user = userName + ": ";
if (user === "null: ") {
        user = "chosen one: "
    }
//var userName = user.bold();

var bot = "urhoBot: "
//var botName = bot.bold();

 //from sendText();

function sendText() {
	
	document.getElementById("submitmsg").disabled = true; //disables "submit" button
	
	//builds the message
    var para = document.createElement("P");
	var bUser = document.createElement("b");
	
	var rawInput = document.getElementById("usermsg").value; //message value
	var userInput = rawInput.toLowerCase();
	var bT = document.createTextNode(user);
    var t = document.createTextNode(rawInput);
	var space = document.createTextNode("\u200C");
	
	para.appendChild(bUser); //some appendChild magic to make the message and putting it into the message field
    bUser.appendChild(bT);
	para.appendChild(t);
	para.appendChild(space);
	
    document.getElementById("chatbox").appendChild(para);
	document.getElementById("chatbox").appendChild(space);
	
	document.getElementById("chatbox").scrollTo(0,5000);//scrolls the chatbox down
	
		function botMessage() {
			
			var botPara = document.createElement("P");
			var bBotPara = document.createElement("b");
			
			var botInput
			
				//code on how the bot will respond
				if (userInput.indexOf("what's up") !== -1 || userInput.indexOf("how's it going") !== -1 || userInput.indexOf("how are you") !== -1 || userInput.indexOf("sup nigga") !== -1) {
					botInput = "Having a great time!";
				}
				else if (userInput.indexOf("who are you") !== -1 || userInput.indexOf("what are you") !== -1 || userInput.indexOf("are you a lizard") !== -1) {
					botInput = "My name is urhoBot V.1.2, I'm an A.I created by my master. A robot lizard if you will...";
				}
				else if (userInput.indexOf("what's the time") !== -1 || userInput.indexOf("time") !== -1 || userInput.indexOf("what time is it") !== -1) {
					botInput = dateWithouthSecond;
				}
				else if (userInput.indexOf("hello there") !== -1) {
					botInput = "General " +userName+ "... You are a bold one!";
				}
				else if (userInput.indexOf("hello") !== -1 || userInput.indexOf("hi") !== -1) {
					botInput = "Hello there, human!";
				}
				else if (userInput.indexOf("goodbye") !== -1 || userInput.indexOf("bye") !== -1) {
					botInput = "Farewell, human...";
				}
				else if (userInput.indexOf("do you know about metal gear") !== -1 || userInput.indexOf("why won't you die") !== -1) {
					botInput = "Nanomachines son!";
				}
				else if (userInput.indexOf("kek") !== -1 || userInput.indexOf(":d") !== -1) {
					botInput = ":)";
				}
				else if (userInput.indexOf("what do you want") !== -1 || userInput.indexOf("what are your goals") !== -1) {
					botInput = "To help people, have a conversation and take over the world >:D. Did I mention carrots?";
				}
				else if (userInput.indexOf("what do you like to eat") !== -1 || userInput.indexOf("what's your favorite food") !== -1) {
					botInput = "Carrots and crickets, maggots are nice too!";
				}
				else if (userInput.indexOf("urho play africa by toto")  !== -1) {
					botInput = "I'm no jukebox!";
				}
				else {
					botInput = "I didn't quite catch that...";
				}
				
			//builds the message
			var bBT = document.createTextNode(bot);
			var a = document.createTextNode(botInput);
			var botSpace = document.createTextNode("\u200C");
			
			botPara.appendChild(bBotPara);
			bBotPara.appendChild(bBT);
			botPara.appendChild(a);
			botPara.appendChild(botSpace);
			
			document.getElementById("chatbox").appendChild(botPara);
			document.getElementById("chatbox").appendChild(botSpace);
			
			document.getElementById("chatbox").scrollTo(0,5000);
			
			typing.placeholder=""; //clears send form of "typing..."
			document.getElementById("submitmsg").disabled = false; //enables "submit" button again
		};
		
		
		if(document.getElementById('usermsg').value.length > 30){//puts a delay between user message appearing // and bot message appearing
			setTimeout(function() { botMessage(); }, 3000);
		}
		else{
			setTimeout(function() { botMessage(); }, 1500);
		}	
		document.getElementById('usermsg').value=''; //empties the send form from text
		
		var typing = document.getElementById("usermsg"); //creates "typing..." text into the send form
		typing.placeholder=" Typing...";
		
};

//responses bot:    