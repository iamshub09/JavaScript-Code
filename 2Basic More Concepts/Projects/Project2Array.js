let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);

// del last element
secretMessage.pop();
console.log(secretMessage);

//find out total length
console.log(secretMessage.length);

// insert new 2 elements at end
secretMessage.push('to', 'Program');
console.log(secretMessage);

// find index number of 'easily' elemnt for replace
console.log(secretMessage.indexOf('easily'));

// replace 'easily' to 'right' index value
secretMessage.splice(7, 1, 'right');
console.log(secretMessage);

//find the index number of 'right' element
console.log(secretMessage.indexOf('right'));

// remove first string elemnt of an array
secretMessage.shift();
console.log(secretMessage);

// add the string Programming to the beginning of the array.
secretMessage.unshift('Programming');
console.log(secretMessage);

// array method to remove the strings get, right, the, first, time,, and replace them with the single string know,
secretMessage.splice(6, 5, 'know');
console.log(secretMessage);

//use console.log() and .join() to print the secret message as a sentence.
console.log(secretMessage.join(' '));