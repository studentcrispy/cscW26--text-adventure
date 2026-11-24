disclaimer
i worked on this project for 20 hours
the last 16 being in a row (this is the end of an all nighter)
because it s so late and i havent slept
the quality of this document might be reduced
just wanted to apologize for that
and also i want to apologize for missing the deadline by
quite a few hours
i had in plan to finish in time that, it's just that the
project took longer than i thought haha

it s exactly 6 AM and i just finished everything lets goo

Playing the Game:
	Text Adventure with not so much text but a 
	bunch of pictures
	Click your way around and unlock all 5 endings!
	Take part in a quiz in the school
	or
	Become the mafia boss.
	choose your own very important baby color
	
Story Paths:
	1. Voidling
		choose not to be born
	2. Mafia
		after choosing your color
		choose to join the mafia
		then finish the minigame
	3. Cashier
		go to school
		quit school
	4. Teacher and 5.Smart 
		take part in the quiz

Implementation:
	total of 7 AI prompts
	1. Why styleBaby() wasn't working.
	2. Why the image wasn't showing.
	3. How to position buttons relative to the image.
	4. Why createButtons() returned undefined.
	5. How to write addCrispyListener() correctly.
	6. How to make choice.addCrispyListener(...) work.
	7. How to convert the .speech-bubble CSS to JavaScript.
	total of 9 stackoverflow questions
	1. switch statement for multiple cases together in Js
	2. how to insert extra space in .innerText 
	3. similiar to 2
	4. how to line break in template literals
	5. creating speech bubbles
	6. how to use setTimeOut for cooldows
	7. how to use KeyFrames through Js
	8. how to flip images horizontally in Js
	online tools used
	1. speech bubble CSS 
		https://projects.verou.me/bubbly/
		
	everything else is my 20 hours of work
	some things i feel very proud about
	some things i feel like they are too redundant
		but i am too exhausted to optimize
	in the ennd it all turned out nice
	
	main functions:
	1.changeScene(sceneName)
	using a switch case to switch between scenes
	2.sceneStyles(sceneName)
	started off as a way to style each scene individually
	than turned out to be a function 
	that does everything related to a scene
	3.restartButton()
	i actually had to restart my project from "scratch"
	because of this one.
	initially, i started without a restart button and that
	made it very difficult to adapt to having such button
	4.makeBaby(details)
	very funnily named function that takes part of
	DOM related elements for the Baby pictures .
	5. createButtons(number)
	creates the necessary buttons for each scene
	6. removeFromDOM(elements)
	removes an array of HTML elements from DOM
	7. .addCrispyListener(event, property, value)
	adds an event listener for event, with internal
	function of this.style[property] = value;
	8. .addGregorListener(property, value1, value2)
	based on .addCrispyListener
	applies value1 to property on mouseoover
	applies value2 to property on mouseout
	
	Where I use an Array
	for creating buttons, for removing DOM elements
	for setting up the training in mafia route
	
	State Variables
	score in school route
	strength in mafia route
	color for baby color
	
Extensions
	1. School Quiz
		made using prompt and setTimeout
		directly affects the story
		if you get 5/5 you get the Teacher ending
		if you get less you get the Smart ending
	2. Mafia Strength Training
		made using...	
		a counter for strength
		and buttons that increase the strength
		there are 4 levels and
		each one adds
		different ways to train your strength
		
Testing
	All endings work accordingly,
	also restarting and extensions
	the different baby colors of the endings also work
	one problem i found along the mafia route is that
	after the 2nd scene, the third scene is supposed to start
	with 120 strength, but it was starting wit 55
	
	as an experiment,
	i tried starting the game from scene4 life_path
	and set the color of baby present in 3_colorbaby.js
	to blue
	this lead to picture of the baby being shown
	i now added an alt to the image using 
	the makeBaby function found it dom.js
	
Reflection and sources
	i'm pretty sure no class resources were used
	but i basically re studied the class resources and
	rewrote one class project by myself so i could
	understand javascript
	that saying, i might have used similar functions 
	to those in class without directly noticing
	
	biggest difficulty was me
	i chose to make this much more complicated by 
	trying to expand the text adventure game and 
	give it a more visual look
	thiss tooook so much timeeeeeeee
	if i just stuck to the class text adventure
	i probably could have cut down the time from
	21 hours to 10 hours or so
	
	a common bug was nothing happening when connecting my
	new styleScene.js file to the dom.js file
	this had two common causes:
	1. i didnt add the scene correctly in sceneList.js
	2. i didnt write the export/import statements correctly
	
	assets:
	i used google search to find my images
	most of them are copyrighted, but as this is a
	school project, i took the liberty in using them\
	for the mafia route i used pictures from Peaky Blinders
	all baby pictures besides the original one in scene2
	are made by mein Inkscape
	
	i also used miro board to map out my original
	storyline plan, which mostly stayed the same besides
	two scenes that got cut due to time constraints

Conclusion:
	even though I wish I had organized my time better,
	so that I do not need to stay up until 7AM to code,
	I really enjoyed this project and it was a lot of fun
