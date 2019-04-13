//  forecast today is 283 Kelvin will stay constant. 
const kelvin=283;
console.log(`kelvin :${kelvin}`);

//Celsius is similar to Kelvin — the only difference is that Celsius is 273 degrees less than Kelvin.
let celsius = kelvin-273;
console.log(`kelvin to celsius:${celsius}`);

//now,convert celsius to fahrenheit
let fahrenheit=celsius*(9/5)+32;
console.log("celsius to fahrenheit is :"+" "+fahrenheit);

//to get round of value use floor print in result variable
let result=Math.floor(fahrenheit);
console.log("round of fehrenheit value is:"+" "+result);

console.log(`The temperature is ${kelvin} degrees ${fahrenheit}`);

