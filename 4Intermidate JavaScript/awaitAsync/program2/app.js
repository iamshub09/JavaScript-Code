const brainstormDinner = require('./library.js')


// Native promise version:
function nativePromiseDinner() {
  brainstormDinner().then((meal) => {
	  console.log(`I'm going to make ${meal} for dinner.`);
  })
}


// async/await version:
//	If there's nothing returned from the function, it will return a promise with a resolved value of undefined.
async function announceDinner() {
  // Write your code below:
  let resolvedValue = await brainstormDinner();
  console.log(`I'm going to make ${resolvedValue} for dinner.`);
  
 
}
announceDinner();
