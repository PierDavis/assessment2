///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE
const priceArr = cart.map(item => item.price) //an easy way to make an array out of an object, using map and pulling out individual items within object array using a descriptor word (item) then arrow function and variable.target item(price in this case)
console.log(priceArr)

const reducer = (previousValue, currentValue) => previousValue + currentValue;

console.log(priceArr.reduce(reducer)); //this can be used to find sums in future object arrays


// const sum = (cartSum) => cartSum.reduce((a, b) => a.price + b.price, 0);
//     const summedPrice = sum(cart)

//     console.log(summedPrice)

// console.log(cart.price.reduce(reducer));

// const arrSum = (arr) => arr.reduce((a, b) => a + b, 0);
// arrSum(buildARRarray)

// const summedPrice = cart.reduce(function(acc, curr) {
//     return acc + curr
// })
// console.log(summedPrice)



//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = function(cartTotal, couponValue, tax) {
    return (cartTotal - couponValue) * (tax + 1) 
};
const finalPrice = calcFinalPrice(10, 2, .05)
console.log(finalPrice)

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
The customer will need to fill out their first and last name, contact number, email for receipt, card number and billing info.
The first and last names will be strings, their phone number will be a number, their email address a string. Their card number will be a number,
and their billing info will be a string, excluding the zip code which will be a number.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

let customer = {
    name: "Tastee McGee",
    phoneNumber: 4154177755,
    email: "tasteestreats@gmail.com",
    cardNumber: 4348182099220802,
    cardExpirationDate: "2025",
    billingAddress: "680 Peach Lane",
    billingZip: 98031
};
console.log(customer.name)