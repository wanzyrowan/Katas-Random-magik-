

console.log(brain(10));

//finds the sum of all numbers below @number which are divisible by @num1 and/or @num2
function brain (number) {

    var finalsum = 0;
    var num1 = 3;
    var num2 = 5;

    for(let i = number-1; i > 0; i--)
        if((i % num1 == 0) || (i % num2 == 0))
            finalsum += i;

    return finalsum;
}