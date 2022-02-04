Tic Tac Toe Game Board
In this lab, we're going to start building a web based Tic Tac Toe game!

The first step is to build the actual game board, so let's get started!

Project Setup
1. Create a new folder in your Source directory and open it with VS Code.
2. Create an index.html and styles.css file.
3. Stub out the HTML file and add a <link> to the CSS file.
**************************************************************************************************************************************
Building the Game Board (HTML)
4. So, we know that a Tic Tac Toe game has 9 possible squares that a player can place either an X or an O in. Think about how you might lay this out and give it a shot on your own before you continue.
5. Let's really think about the board in terms of borders. You probably already guessed that we're going to need 9 different elements to represent each move, but you might not think about the best way to lay those out in order to maximize our ability to use CSS efficiently to get the board looking right.
6. Create a div with an id of board. This will be the container for our game board.
7. Add an h1 into the board div, and put the text "Tic Tac Toe".
8. Nested within the board div, add 3 divs with a class of row.
9. Within each div with class row, add 3 more divs.
10. The 3 divs within each row (for 9 total) will be our squares where the player can place an X or O!
11. Now, you need a way to identify each square. Logically, it makes sense that we have left squares, right squares, top squares, middle squares, and bottom squares. So, let's add classes to identify each square.
12. For the first div in the first row, add a class for top and left. Your div should look like this <div class="top left"></div>.
13. Now, we have a way to identify the top left square!
14. We need to add identifiers for all the other squares as well, so let's continue:
15. Add the classes top and middle for the next div in the first row, and hopefully, you see where this is going now. For the third div, add top and right classes.
16. For the center div, use the class center. You'll need a way to identify it differently than the outside divs when we add interactivity with JavaScript.
17. Add the rest of the classes to the divs in the middle and bottom rows.
**************************************************************************************************************************************
Styling the Game Board (CSS)
Ok, so you've got your HTML, but it doesn't look like anything when you run it, right? Your screen should be completely blank because we've only put divs on the screen so far. There is no content or borders, so nothing shows up.
We need to layout and style the game board. Let's get started.

18. Add 3em worth of padding to the top of the board div and center align the text.
19. Float left all of the divs nested inside the rows. Also, add a height and width of 100px.
Hint: you can do this with one selector that selects all of the child divs nested within any element with the class .row.
20. Add a "clear fix" for all of the .row's.
21. When floating divs, you need to let the browser know when floating should end. You do this with the clear CSS property.
22. Example property for the "clear fix": clear: both;.
23. Center and set the width of the .row's.
Hint: margin can be used to horizontally center use 0 and auto.
24. Set the width of each row to 302px. The extra 2px is for the 2 vertical borders on each .row that are 1px each, which we are about to add!
25. Create a class selector in your CSS for top, bottom, left, and right. Add the appropriate border side for each class.
.top example: border-bottom: 1px black solid
26. Think about the borders that certain cells share in common. In the example above, we added a bottom border to the .top cells because all of the top cells have a bottom border.Create the borders for the others.We don't need styling for the .middle class, but we're going to leave it in our HTML. You'll understand why when we get to the JavaScript section of the game.
27. Hint: Change the black border color to a different color on each class selector to see exactly where your border is being placed.
28. Add a style to change the cursor to a pointer whenever a cell is moused over.

That's it! You should see a nicely laid out Tic Tac Toe board whenever you open your page.

Now it's time to learn a little JavaScript so that you can bring your game to life!
****************************************************************************************************************************************************************************************************************************************************************************
Objective
In this lab, you will finish your Tic Tac Toe game! Let's add interactivity and make it work :)
Note: You should have already have the game board for Tic Tac Toe from the previous lab.

Requirements
In order for the game to work, you need to write JavaScript that will interact with your HTML elements. The requirements for the game are:
**************************************************************************************************************************************
Players can click on a cell in order to make a move.
A) X is always the first player.
B) After each move, the board is checked for a winner or a draw.
C) If there is a winner or draw, show a message that announces the winner or declares a draw.
D) Clicking the board when a game is over should reset the board so that a new game can be played.

***Coding the Game***
To code the game, you're going to have to stretch yourself especially if this is the first time you've coded anything to completion. The lecture on adding interactivity gives you all the necessary components, but now you have to problem solve in order to bring it all together.

You'll need to use the document object to access your HTML elements. Use these hints to guide you:

***The functions you'll need to use are:***
document.querySelector and document.querySelectorAll
textContent property of the cells.
The click event passes in an object that has a target property. This is the element that was clicked!
addEventListener will let you respond to events on an element like "click".
***Be sure to:***

Ask questions in Discord or setup a mentoring session if you are a Molecular or Catalyst student.
Use Google, Stack Overflow, MDN and other resources to help you when you feel stuck.
Have fun! This will probably be frustrating in a lot of ways, but when you finish, you will have learned something of significance. You'll be able to use the skills you learn to build other front-end ideas you have :)