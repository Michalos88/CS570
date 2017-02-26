/**
 * Created by Michalos88 on 1/29/2017.
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
