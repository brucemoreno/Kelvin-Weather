const kelvin = 283 ;
/* this is the actual weather */
const celsius = kelvin - 273;
/* this is the kelvin converted to celsius */
const fahrenheit = Math.floor((celsius * 9/5) + 32);
/* this is CELSIUS converted to fahrenheit, be aware that this code is converting CELSIUS to fahrenheit, not kelvin to fahrenheit */
completeFahrenheit = "The temperature is " + fahrenheit + " degrees Fahrenheit."
/* this is the complete sentence (string) with the result rounded down (as numeric) */

console.log(completeFahrenheit);
