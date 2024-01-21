// JavaScript source code



//*When I coded this game i did it any time i was off work, I didn't have a lot of time because I work a lot so a lot of my code has repeating functions and code is not very optimized I am sorry. 


//Created a group of Variables That change during gameplay
var playersHp = 7;
var playersMp = 7;

var playerStr = 4;
var playerInt = 4;
var playerAcc = 4;

// created a way for the game to end will discuss it later in code
var advancingStoryline = 0;
var storylineFinish;
//Created a default name for the character
var playersDefaultName = "Hero";

//Created a number system use for random encounters
var encounterType;
var daysToKing;
// a boolean with 0 and 1
var didYouPass;

//Health for the enemy and a name for combat
var enemyHp = 0;
var enemyName;
//A lot of booleans for different types of test
var gamecomplete = new Boolean(false);
var attackikngInProgress = new Boolean(false);
var inCombat = new Boolean(false); 
var fleesucces = new Boolean(false);
var rested =new Boolean(true);
var storydev = new Boolean(true);

var optionOne = new Boolean(false);
var optionTwo = new Boolean(false);
var  randomStoryfiller;

// Called once to begin the game
function startGame()
{
	 //this code basically sets the days till you reach the king. allowing a endgame.
	storylineFinish = Math.floor(Math.random()*20 + 5); 

	//This function call Sets the Variables for the game and is use to reset the values 
	playersStatsDisplay();
	//This function gets the input of the name and sets it to the players name
	getPlayersName();

	//This function hides the  options for story events so you don't get to see them'
	optionsDisplayHide();

	//this group of code sets the enemy table, start game, and allows the advance game to be click and enabled as well as tell you how my clicks of advance do you need to get through!
	document.getElementById("enemyTable").style.visibility = "hidden";
	document.getElementById("startgameButton").style.visibility = "hidden";
	document.getElementById("advanceGame").disabled = false;
	document.getElementById("Dilogue1").innerHTML = playersDefaultName  + " Jounery to the Castle shall take " + storylineFinish + " Days to complete!";

	}

	//This function  does a few things it sets Flee to false which is a way to run from battle. but since your not in battle it should be clickable, as well as advacing the gameplay loop it also enables the core gameplay randomEncounters! 
function advanceGame()
{

	fleesucces = false;

	advancingStoryline++;
	daysToKing = advancingStoryline;
	document.getElementById("daysTillKing").innerHTML = daysToKing;
	randomEncounters();


	//This code here states If advanceGame is Greater or equal to storylineFinish and your not in a battle You win the game!
	if(advancingStoryline >= storylineFinish && encounterType != 0 && encounterType !=1 )
	{
		//This ends the game basically
		endGame();
	}
	
}

//This function makes the storyling options visible for people.
function optionDisplayShow()
{
	
	document.getElementById("firstOption").style.visibility = "visible";
	document.getElementById("secondOption").style.visibility = "visible";
}

//This function makes the storyling options invisible for people.
function optionsDisplayHide()
{
	document.getElementById("firstOption").style.visibility = "hidden";
	document.getElementById("secondOption").style.visibility = "hidden";
}

//this function allows me to set the playersHp var to the text of the html as well as the other var stats i made And change them just incase they change which they do.
function playersStatsDisplay()
{
	
	document.getElementById("playerHPdisplay").innerHTML = playersHp;
	document.getElementById("playerMPdisplay").innerHTML = playersMp;
	document.getElementById("stats").innerHTML =" Str: " + playerStr + " Int: " + playerInt +" Acc: " + playerAcc;
}


//This allows me to get the players name and display it, as well as adding a space infront of it
function getPlayersName()
{
	playersDefaultName = document.getElementById("pName").value + " ";
	document.getElementById("playersName").innerHTML = playersDefaultName;
}

//This function right here is the Hub Of the whole game! it allows me to run techinally three types of random encounters Ill go step by step I use switches A lot in my code
function randomEncounters()
{
	//Rested = false is me just allowing you to rest after this code is ran, unless your in a battle
	rested = false;

	//this is me saying  randomly pick a number from 0-5 and whatever that number is do something
 encounterType = Math.floor(Math.random()*6 +1)
 
 
 //Debug mainly for me to see its working(i kept it in cause i enjoy it)
	document.getElementById("encounterTypeDebug").innerHTML = encounterType;


	//this switch statement is basically taking whatever the random number is and compareing it to the case or scenarios I have, while some call functions other just change the text.
 switch(encounterType)
 
	{
	 case 0:
	 enemyEncountor();
	 break;

	 case 1:
	 storyChoices();
	 break;

	 case 2:
	 document.getElementById("Dilogue1").innerHTML = playersDefaultName  + " Doesn't really remember what the king looks like";
	 break;

	 case 3:
	 enemyEncountor();
	 break;

	 case 4:
	 storyChoices();
	 break;

	 case 5:
	 document.getElementById("Dilogue1").innerHTML = playersDefaultName + " had a very relaxing day";
	 break;
	 }
}







//this is a function that uses a switch statement to randomly choice a enemy for the player to fight, as well as give it random amount of health and make the battlePhase() function activate
function enemyEncountor()
 {
	 inCombat = true;
	 console.log(inCombat);
	
	
	 var typeOfEnemy = Math.floor(Math.random()*4);


	 switch(typeOfEnemy)
	 {

		 case 0:
		enemyName = "goblin";
		enemyHp = Math.floor(Math.random()*5 +1);
		 break;

		 case 1:
		 enemyName = "Bandit";
		enemyHp = Math.floor(Math.random()*7 +2);
		 break;

		 case 2:
		 enemyName = "Dark Elf";
		 enemyHp = Math.floor(Math.random()*9+3);
		 break;

		 case 3:
		 enemyName = "Evil Lord";
		 enemyHp = Math.floor(Math.random()*13+5);
		 break;
	 }

	 document.getElementById("enemy").innerHTML = enemyName;
	 document.getElementById("enemyHPDisplay").innerHTML = enemyHp;
	 document.getElementById("enemyTable").style.visibility = "visible";
	 document.getElementById("Dilogue1").innerHTML = playersDefaultName  + " has run into a " + enemyName;
	 
	 battlePhase();
 }


 // Now this may look like a lot of code but its very easy to read this function makess a storyChoices for the player to interact with
function storyChoices()
{
	optionOne = false;
	optionTwo = false;
	//The function here allows you to see your options for the text
	optionDisplayShow();
	//this code tell the game that you are in story mode
	storydev = true;
	//this stops the ability to advanace the game.
	document.getElementById("advanceGame").disabled = true;
	//this is another random that helps create randomness with the storylines you might get
	 randomStoryfiller = Math.floor(Math.random()*6);
	
	 //Every single case Changes the button text as well as the text there are two Options for each storyline and each have a pass or fail text with a random thrown into it
	 switch(randomStoryfiller)
	 {
		 
		 case 0:
		

		 document.getElementById("Dilogue1").innerHTML = playersDefaultName  + "  Made it to a Bridge, It seems that the water has done some dmg to said bridge. you have a few options to cross.";
		 document.getElementById("firstOption").innerHTML = "Swim across";
		 document.getElementById("secondOption").innerHTML = "Find Another way Around";

		break;

		 case 1:

		  document.getElementById("Dilogue1").innerHTML = playersDefaultName  + " While walking deep into the forrest you find a Big tree at the top of the tree are a bunch of apples you also see some on the grass undeneath.You havent eaten in a while and you deciding on the which apples to eat.";
		   document.getElementById("firstOption").innerHTML = "Climb the tree";
		 document.getElementById("secondOption").innerHTML = "Search the ground";

 		
		 
		 break;

		 case 2:

		  document.getElementById("Dilogue1").innerHTML = playersDefaultName  + "  been traveling for a whlie, Everything is starting to look the same and your not sure whether or not you are going the right way anymore.";

		  document.getElementById("firstOption").innerHTML = "Recollect yourself";
		 document.getElementById("secondOption").innerHTML = "Power through!";

		 break;

		 case 3:


		  document.getElementById("Dilogue1").innerHTML = playersDefaultName  + " While walking to a clearing you hear noises, more like a party going on, you see a bunch of elves having a party Your not sure if there friendly. ";
		  document.getElementById("firstOption").innerHTML = "Wait it out";
		  document.getElementById("secondOption").innerHTML = "Join the party!";

		 		
		
		 break;

		 case 4:
		 document.getElementById("Dilogue1").innerHTML = playersDefaultName  + " come across old ruins that look like they been abandon for a long time. you then hear a voice in the ruins calling out 'Is There Anyone THERE!?!?!' ";
		  document.getElementById("firstOption").innerHTML = " Check it out";
		  document.getElementById("secondOption").innerHTML = " Ignore it";

		 		

		 break;

		 
		 case 5:
		 document.getElementById("Dilogue1").innerHTML = playersDefaultName  + "  while deep in the forrest you come across a old looking fellow who says they can make you weapon even better Just give him a few hours of your time";
		  document.getElementById("firstOption").innerHTML = " Give em your weapon";
		  document.getElementById("secondOption").innerHTML = " ignore em.";

		 		
		 break;

	
	 }

}


//This function is called when you select a option on the storyline text buttons I use Boolean but in a more roundabout way by using 0 or 1
function passOrFail()
{
	//I make two random numbers with the same amout of random so its 50/50
	 var attempt  =Math.floor(Math.random()*20);
	 var chance = Math.floor(Math.random()*20);
	

	 console.log(attempt + "  " + chance);
	 //then i check to see if your attempt is higher or equal to the chance
		 if(attempt >= chance)
		 {
			//if it is You pass!
			didYouPass = 1;
			
		 }
			 else if(attempt < chance)
			 {
				//if its not You fail 
				 didYouPass = 0;
				
			 }
			 //Then as a extra for me i check to make sure its either 0 or 1
			 console.log(didYouPass);
			 

}



//this function is use by option one  button and option two button to see if you pass or failed which is all random
function ChoiceofStory()
{
   

	
		//With the way i made this game i made it only possible that either optionOne or optionTwo were able to be click you'll see lower down the line'
	  if(optionOne == true)
	 {
		 passOrFail(didYouPass);
		 if(didYouPass == 1)
					 {
						 //This is me using the console to debug that this code was being called
						 console.log("You passed!");
						 passedTheCheck();
						 
					 }
					 else if(didYouPass == 0)
					 {
						 console.log("You failed");
						  failedTheCheck();
						 }
						 statChanger();

	 }

		else if(optionTwo == true)
		{
			passOrFail(didYouPass);
		   
			if(didYouPass == 1)
					 {
						
						 console.log("You passed!");
						 passedTheCheck();
					 }
					 else if (didYouPass == 0)
					 {
						 console.log("You failed");
						  failedTheCheck();
						 }
						 statChanger();

		}
	
}




//this function is called when you pass the check which means that the var didYouPass was 1 meaing True(Congrats!)
function passedTheCheck()
{
	//I use the randomStoryfiller as my switch cause i know i may have two options but I Also know that i case 0 will remain case 0 for the entire tilme until storyChoices is called again
switch(randomStoryfiller)
	 {
		 
		 case 0:
		//if you chose option one or what i wrote If(OptionOne == true;)
		 if(optionOne)
		 {
			 //I first change the text to match with the choice
		 document.getElementById("Dilogue1").innerHTML = playersDefaultName  + "  dive into the water, and easily swam all the way across. It felt refreshing!";
		 //Then i reward the player with a random a stat boost
		 playerStr += Math.floor(Math.random()*3 +playerStr);
		 }
		 //This is if you chose option two, and since there is only two options this is all i need to do for all the cases
		 else if(optionTwo)
		 {
		 document.getElementById("Dilogue1").innerHTML = playersDefaultName  + "  It didn't take you too long to find a tree nearby that had fallen over the entire riverbed. you easily got across, without even getting your shoes wet!";
		 playerInt += Math.floor(Math.random()*3 +playerInt);
		 }
		break;

		 case 1:

		  if(optionOne)
		 {
		 document.getElementById("Dilogue1").innerHTML = playersDefaultName  + "  Made Short work of climbing the tree and picking some of the best apples you could eat!";
		 playersHp += Math.floor(Math.random()*3 +playersHp);
		 playerStr += Math.floor(Math.random()*3 +playerStr);
		 }
		 else if(optionTwo)
		 {
		 document.getElementById("Dilogue1").innerHTML = playersDefaultName  + "  Eyeing the newly fallen apples you found the best ones that were untouched by creature, they were very tasty";
		playerInt += Math.floor(Math.random()*3 +playerInt);
		playerAcc += Math.floor(Math.random()*3 +playerAcc);
		 }
 		
		 
		 break;

		 case 2:

		  if(optionOne)
		 {
		 document.getElementById("Dilogue1").innerHTML = playersDefaultName  + "   takes the time to recollect yourself and find it very peaceful you realize that the sun can be seen through the tree tops and know that the castle is in the west!";
		 playerInt += Math.floor(Math.random()*3 +playerInt);
		playerAcc += Math.floor(Math.random()*3 +playerAcc);
		playersMp += Math.floor(Math.random()*3 +playersMp);
		 }
		 else if(optionTwo)
		 {
		 document.getElementById("Dilogue1").innerHTML = playersDefaultName  + "  Not wasting anytime you begin to walk the path you already started and you notice the ground under you begin to wear, It seems like you found the trail again!";
		playerAcc += Math.floor(Math.random()*3 +playerAcc);
		playerStr += Math.floor(Math.random()*3 +playerStr);
		 }
		 break;

		 case 3:

		if(optionOne)
		 {
		 document.getElementById("Dilogue1").innerHTML =  " People watching isn't your thing but you watch on and its' almost relaxing see all the elves dances and miggle with one another you almost feel like your watching a higher sociality at work";
		 playerInt += Math.floor(Math.random()*3 +playerInt);
		playerAcc += Math.floor(Math.random()*3 +playerAcc);
		 }
		 else if(optionTwo)
		 {
		 document.getElementById("Dilogue1").innerHTML = playersDefaultName  + "  Always been a people person, as you walk out the bushies at first the elves look wary of you, but you then explain where you going and what your doing. And the welcome you with open arms and drinks You have a wonderful time!";
		 playersHp += Math.floor(Math.random()*3 +playersHp);
		 playerInt += Math.floor(Math.random()*3 +playerInt);
		 }
		 		
		
		 break;

		 case 4:
		 if(optionOne)
		 {
		 document.getElementById("Dilogue1").innerHTML = playersDefaultName  + "  walks in and a flash of light blinds you for a bit, however you end up closer to the castle. and you feel like you can see more clearly ";
		 playerAcc += Math.floor(Math.random()*3 +playerAcc);
		 advancingStoryline  += Math.floor(Math.random()*daysToKing +1);

		 }
		 else if(optionTwo)
		 {
		 document.getElementById("Dilogue1").innerHTML = playersDefaultName  + "  has a third eye for danger. right when you walk away you here a big crash behind you and see the old ruin is now a pile of rubble.";
		  playerInt += Math.floor(Math.random()*3 +playerInt);
		 }
		 		

		 break;

		 case 5:
		 if(optionOne)
		 {
		 document.getElementById("Dilogue1").innerHTML = playersDefaultName  +  "  see this fellow is a creature of its word, Your weapon feels much better and more powerful";
		 playerStr += Math.floor(Math.random()*3 +playerStr);
		 }
		 else if(optionTwo)
		 {
		 document.getElementById("Dilogue1").innerHTML = playersDefaultName  + "   don't have time to waste and you ignore the creature. could be the right choice indeed!";
		 playerInt += Math.floor(Math.random()*3 +playerInt);
		 }

		 		
		 break;

	
	 }


}


//Now this code is called if you fail the check meaing didYouPass == 0
function failedTheCheck()
{
	//its basicallythe same for above i just minus your stats.
	switch(randomStoryfiller)
	 {
		 
		 case 0:
		
		 if(optionOne)
		 {
		 document.getElementById("Dilogue1").innerHTML = playersDefaultName  + "  dive into the water, Yuck! what is this water made of?!?! you feel the current pulling you down as you try your hardest to barely make it across.";
		 playerStr -= Math.floor(Math.random()*2);
		 }
		 else if(optionTwo)
		 {
		 document.getElementById("Dilogue1").innerHTML = playersDefaultName  + "  Searching for what feels like days to find another route you find the riverbed ends you finally do and quest on";
		 advancingStoryline -=  Math.floor(Math.random()*daysToKing);
		 }
		break;

		 case 1:

		  if(optionOne)
		 {
		 document.getElementById("Dilogue1").innerHTML = playersDefaultName  + "  Makes many attempts to climb the tree but you keep losing your footing, you can't count how many times you fall off the tree till you give up all together and quest on'";
		 playersHp -= Math.floor(Math.random()*3);
		 }
		 else if(optionTwo)
		 {
		 document.getElementById("Dilogue1").innerHTML = playersDefaultName  + "  has eaten worst, but that doesn't mean this was any better you feel sick to your core after eating a couple of the apples, no wonder they were on the ground!";
		playerStr -= Math.floor(Math.random()*3);
		 }
 		
		 
		 break;

		 case 2:

		  if(optionOne)
		 {
		 document.getElementById("Dilogue1").innerHTML = playersDefaultName  + "   starts to hear unsettling noises around you, they put you on edge and makes it hard to think, you somehow find the right path but your a little more jumpy from the experience";
		 playerInt -= Math.floor(Math.random()*2 );
		 }
		 else if(optionTwo)
		 {
		 document.getElementById("Dilogue1").innerHTML = playersDefaultName  + "  Fully sprinting ahead you keep a pace going, not knowing where your going but you are going! the sprint slowly becomes you dragging your feet and you end up passing out for who know how long?!?!";
		 playerAcc -= Math.floor(Math.random()*3);
		 advancingStoryline -= Math.floor(Math.random()*daysToKing);
		 }
		 break;

		 case 3:

		if(optionOne)
		 {
		 document.getElementById("Dilogue1").innerHTML =  " It can't last that much longer can it? you think. however elves time is a lot different than your time, you wait for what seems like forever and finally you awake to see nobody in the clearing but a few creatures";
		 advancingStoryline -= Math.floor(Math.random()*daysToKing);
		 }
		 else if(optionTwo)
		 {
		 document.getElementById("Dilogue1").innerHTML = playersDefaultName  + "  walks out, And it's Almost like a bad dream. they look at you with fear and confusion, you try to explain what you are doing but the gap in Langiage is Very clear. . .Awkward.";
		 playerAcc -= Math.floor(Math.random()*3);
		 playerInt -= Math.floor(Math.random()*2 );
		 }
		 		
		
		 break;
		 case 4:
		 if(optionOne)
		 {
		 document.getElementById("Dilogue1").innerHTML = playersDefaultName  + "  walks in and the walls crumble around you, You're stuck!! it takes a lot of time to get out and you arent sure how much time has past! ";
		  advancingStoryline -= Math.floor(Math.random()*daysToKing);
		 }
		 else if(optionTwo)
		 {
		 document.getElementById("Dilogue1").innerHTML = playersDefaultName  + "  walks from the area but not before you realize your being stalked by some dark elves! Its A Setup! you fight your way out but not without a few new scars";
		playersHp -= Math.floor(Math.random()*3); 
		 }
		 		

		 break;

		 case 5:
		 
		 if(optionOne)
		 {
		 document.getElementById("Dilogue1").innerHTML = playersDefaultName  +  "  waits for days for the creature to return yuor weaong and when it does its Worse than when you gave it to them!! man, can't find good help in the forrest these days.'";
		 advancingStoryline -= Math.floor(Math.random()*daysToKing);
		 }
		 else if(optionTwo)
		 {
		 document.getElementById("Dilogue1").innerHTML = playersDefaultName  + "   you walk away but not before the creature says very harsh words to you may never forget. what a jerk!";
		 playerAcc -= Math.floor(Math.random()*3);
		 playerInt -= Math.floor(Math.random()*2 );
		 }

		 		
		 break;
	
	 }
	


}



//This function is called to make sure your stats match your html part of the code and is done basically at the end so you can advance again
function statChanger()
{
	optionOne = false;
	optionTwo = false;
	 storydev = false;
	 document.getElementById("advanceGame").disabled = false;
	playersStatsDisplay();
	optionsDisplayHide();
}
// now this is the battle phase which is called if you get a Enemy encounters! theres a lot to it so ill go through it quick
function battlePhase()
 {
	//This states if you are in combat, The enemy health is greater than 0, you didn't flee successfully and your health isn't zero
	 if(inCombat == true && enemyHp > 0 && fleesucces == false && playersHp > 0)
	 {
		//I enable all actions that are based around combat as well as disable adavancing the game 
		 document.getElementById("attackButton").disabled = false;
		 document.getElementById("magicButton").disabled = false;
	  document.getElementById("fleeButton").disabled = false;
		 document.getElementById("advanceGame").disabled = true;


	 }
	 //if you flee == true you can get away from battle and all battle options go away
	 else if(fleesucces)
	 {
		 inCombat = false;
		 document.getElementById("attackButton").disabled = true;
		 document.getElementById("magicButton").disabled = true;
	  document.getElementById("fleeButton").disabled = true;
		 document.getElementById("advanceGame").disabled = false;
		 document.getElementById("enemyTable").style.visibility = "hidden";

	 }
	 //this is the same as fleeing but it also tells you that you defeated the enemy in battle
	  else if(enemyHp <=0)
	 {

	 document.getElementById("Dilogue1").innerHTML = "You have Slained the" + " " + enemyName;
		 inCombat = false;
		 document.getElementById("attackButton").disabled = true;
		 document.getElementById("magicButton").disabled = true;
	  document.getElementById("fleeButton").disabled = true;
		 document.getElementById("advanceGame").disabled = false;
		 document.getElementById("enemyTable").style.visibility = "hidden";

	 }
	 //This is if the character hp is reduce to zero i ends the game
	 else if(playersHp<=0)
	 {
		 document.getElementById("Dilogue1").innerHTML = playersDefaultName + " Has fallen, The world is doomed  " + " Please refresh the page to start a new Adventure!";
		  document.getElementById("attackButton").disabled = true;
		 document.getElementById("magicButton").disabled = true;
	     document.getElementById("fleeButton").disabled = true;
		 document.getElementById("advanceGame").disabled = true;
	 }

 }

 //This may look abit complex but ill walk you through it, this is the key to the battle system this function is called by the attack button on the html side 
function attackEnemy()
 {
	 //this code here makes it so you can't keep clicking attack and ruin the game'
	 document.getElementById("attackButton").disabled = true;
	 document.getElementById("magicButton").disabled = true;
	 document.getElementById("fleeButton").disabled = true;
 
	 //Var use for player And enemy attack
	  var AtkChance;
		var AtkAttempt;
		 var AtkDmg;



		 //this tell the player that they are getting ready to try an attack
	 document.getElementById("Dilogue1").innerHTML = "As you steady yourself for an attack . . ."
	 

	 //Now this fancy code right here is me telling java to wait 2 seconds before doing this code in real time. makes it more rpg like .you can consider this is what you call a Global function
   setTimeout(()=>{
	   //im telling  the code that chance will always be random of 19
		  AtkChance = Math.floor(Math.random()*20);
		  //here i saying that its a random of 19 + whatever the acc stat of the player is. more acc the more likely you'll hit'
		  AtkAttempt = Math.floor(Math.random()*20 +playerAcc);
		  //dmg is handle the same way just using str of the player
		  AtkDmg = Math.floor(Math.random()*playerStr +1);
		  //debug so i can see if its a hit or not
	 console.log("I am going to attack  " + AtkChance + AtkAttempt)
	 },2000);

	 //I set another timer for 3 seconds which means one second after the first time goes off this code will play
	 setTimeout(()=>{
		 //you you hit it will play the code
		 if(AtkAttempt > AtkChance)
		 {
			  document.getElementById("Dilogue1").innerHTML = "You Slash the " + enemyName + " For a Whopping " + AtkDmg;
			 // This dmg the enemy for players dmg
			  enemyHp -= AtkDmg;
			  //This makes sure you can seee the enemy health in html file
			  document.getElementById("enemyHPDisplay").innerHTML = enemyHp;
			  console.log(enemyHp);
			  //this checks to see if the enemy hp is less the 0
			   if(enemyHp>0)
					 {
						 //If the enemy is still alive they do there attack which is the same but flip a little bit
						 enemyAttacks();
					 }
					 //if the enemy is dead it runs the battlePhase() function
					 else if(enemyHp<=0){
						 battlePhase();
					 }

		 }
		 //This is if you miss or you chance was highier that attempt
		 else{
			  document.getElementById("Dilogue1").innerHTML ="The  " + enemyName + " Dodges The attack"
			  enemyAttacks();
		 }
	 },3000);

	 

 }



 function enemyAttacks()
 {
	 	 //Enemy attack phase it is more of less the same its just they have a larger number of randoms to hit and is set 4 seconds after the player attacks so a second after you miss or hit
		setTimeout(()=>{
		  document.getElementById("Dilogue1").innerHTML = "The "    + enemyName + "   retaliate . . ."
		 },4000);

	   setTimeout(()=>{
			  AtkChance = Math.floor(Math.random()*50);
			  AtkAttempt = Math.floor(Math.random()*50);
			  AtkDmg = Math.floor(Math.random()*4 + 1);
		 console.log( AtkChance + AtkAttempt)
		 },5000);

		 setTimeout(()=>{
			 if(AtkAttempt > AtkChance)
			 {
				  document.getElementById("Dilogue1").innerHTML =  enemyName + " attacks for a dmg of  " + AtkDmg;
				  playersHp -= AtkDmg;
				  console.log(playersHp);
				   playersStatsDisplay();
				   //The enemy always go to the battle phase after every move so that you can do your next attack
				  battlePhase();
			 }
			 else{
				  document.getElementById("Dilogue1").innerHTML ="You dodge  " + enemyName + " attack "
				   battlePhase();
			 }
		 },6000);

			
		  
 }



 //Magic is more the same Except for extra code at the top and bottom
 function attackWMagic()
 {

 //This code basically makes it so if you have no Mp you cannot do a magic attack
	if(playersMp > 0)
	{
	 document.getElementById("attackButton").disabled = true;
	 document.getElementById("magicButton").disabled = true;
	 document.getElementById("fleeButton").disabled = true;
 
	 //Var use for player And enemy attack
	  var AtkChance;
		var AtkAttempt;
		 var AtkDmg;



		 //player phase
	 document.getElementById("Dilogue1").innerHTML = "You Focus on the elements Around you . . ."	 
   setTimeout(()=>{
	    playersMp -= Math.floor(Math.random()*3 +1);
		  AtkChance = Math.floor(Math.random()*70);
		  AtkAttempt = Math.floor(Math.random()*50 + playerAcc + playerInt);
		  AtkDmg = Math.floor(Math.random()*playerInt +playersMp);
		   playersStatsDisplay();
		
	 console.log("You Release you Spell  " + AtkChance + AtkAttempt)
	 },2000);

	 setTimeout(()=>{
		 if(AtkAttempt > AtkChance)
		 {
			  document.getElementById("Dilogue1").innerHTML = "You hurl a Fireball at   " + enemyName + " that does : " + AtkDmg;
			  enemyHp -= AtkDmg;
			  document.getElementById("enemyHPDisplay").innerHTML = enemyHp;
			  console.log(enemyHp);
			   if(enemyHp>0)
					 {
						 enemyAttacks();
					 }
					 else if(enemyHp<=0){
						 battlePhase();
					 }

		 }
		 else{
			  document.getElementById("Dilogue1").innerHTML ="Sadly nothing happens . . .";
			  enemyAttacks();
		 }
	 },3000);

	}
	//this does not count towards your attack so you can click it as much as you want.
	else if(playersMp <=0)
	{
		document.getElementById("Dilogue1").innerHTML ="You don't have Any Mp . . .";
	}
 }





 //Running away for battle function is use to flee away from battle it use the same code as attacking and magic it just if you try and flee you will get hit by the enemy
function flee()
	 {
		 document.getElementById("fleeButton").disabled = true;
		 var fleeChance = Math.floor(Math.random()*50);
		 var fleeAttempt = Math.floor(Math.random()*50);

		 if(fleeAttempt > fleeChance)
		 {
			 fleesucces = true;
			 document.getElementById("Dilogue1").innerHTML ="You succeeded in getting away from the  " + enemyName;
			 battlePhase();
		 }
		 else
		 {

			 fleesucces = false;
			  document.getElementById("Dilogue1").innerHTML ="You failed to get away from the" + enemyName;
			  enemyAttacks();
		 }
		 console.log("Flee attempt was " + fleeAttempt + "Flee Chance was  "  + fleeChance);
	 }

	 //This restiong function is use to restore health and magic But it can olny be use after advancing at least once if you try to use it any other time it will not work it als takes 
function rest()
{
	//This makes syre you can't use it in combat'
	if(inCombat == false && rested == false)
	{
		setTimeout(()=>{
	    playersMp += Math.floor(Math.random()*10 +1)
		playersHp += Math.floor(Math.random()*10 +1)
		   playersStatsDisplay();
		   rested = true;
		
		   document.getElementById("Dilogue1").innerHTML ="You Decided to take a break . . .";
	 },500);
	}
	else if(rested == true)
	{
		document.getElementById("Dilogue1").innerHTML ="You Fully rested, you Cannot rest Before advancing";
	}

	else if(inCombat == true)
	{
		document.getElementById("Dilogue1").innerHTML ="You Cannot rest during combat";
	}
}


//This is the end of the game code that just stops the game
function endGame()
{
	document.getElementById("Dilogue1").innerHTML =playersDefaultName + " Has Made it Safetly To the king! They are excited to hear all you acheivements! Congrats!!! You WIN!!!!";
	  document.getElementById("attackButton").disabled = true;
		 document.getElementById("magicButton").disabled = true;
	     document.getElementById("fleeButton").disabled = true;
		 document.getElementById("advanceGame").disabled = true;
		 document.getElementById("restButton").disabled = true;
}




//This is for the optionOnr and makes option two once Clicked false that way there is no way of  clicking both of the options
 function optionOneClick()
 {
	 
	optionOne = true;
	optionTwo = false;
	 console.log("You have click the first Option");
	 ChoiceofStory();
 }

 //A carbon copy of option one but vise versa
 function optionTwoClick()
 {
	
	optionOne = false;
	optionTwo = true;
	 console.log("you Have click the second Option");
	 ChoiceofStory();
 }


 // Thank you for going through my code I hope you like it! sorry for a lot of reapeting code i didn't have a lot of time to work on this cause i had work so i made due'