# game-night-3

Currently the project can create a character with key value pairs for all of row 1, where majority of the data is.

  I ran into some strange issues along the way, I can't get it to connect to localhost but it seems to connect to my api without any issues.
for some reason when i tried to import mongoose it broke the code so instead i used the fetch API for all the request buttons. Im still having trouble with dynamically changing the values of any character traits dynamically, at the moment it only accepts hard-coded updates (changes the acrobatics value to be 17) and any changes to the api or requests made to it go through the console.

  I added a useEffect that loads the array of char objects in the console whenever the page loads, use the ID's from the console to use the request buttons on the bottom. The  button on the far right is the submit button attached to row 3 but at the moment the form submission is handled by the "create new character" button at the top of row 1. Not sure why but when the form submits from the row 1 button it runs the submit handle function properly but when the form is submitted from elsewhere it doesent prevent default. It likely has something to do with how I tired writing each component as a form and they dont end up combining into one in the app.js file like i intended.

  I'm going to keep coming back to this project with anything i learn in future courses and continue to improve it, but for now it finally works enough to be used.
