/**
 * Created by mlyskawi on 1/29/2017.
 */

/* Write a program to the screen that operates on the numbers between 74 and 291.
For each number in the sequence, output the number to the screen. (JavaScript programmers can accomplish this with console.log(...) .)
 However, if the number is divisible by 3, output the word Buzz instead of the number.
 If the number is divisble by 5, output Fizz to the screen instead of the number.
 If the number is divisible by both, output BuzzFizz to the screen instead of the number.
*/

var num = 73;

while (num < 291){
    num++;
    if (num % 3 == 0 && num % 5 == 0)
        console.log('BuzzFizz');
    else if (num % 3 == 0)
        console.log('Buzz');
    else if (num % 5 == 0)
        console.log('Fizz');
    else
        console.log(num);
}
