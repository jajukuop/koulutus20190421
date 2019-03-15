// https://www.codingame.com/playgrounds/9799/learn-solve-call-apply-and-bind-methods-in-javascript

// Working with JavaScript “this” keyword can be tricky. Not knowing the background rules
// may end up with the famous “it works, but I don’t know why” or worse: “it doesn’t work and I don’t know why”. 
// It’s good to know the theory before putting things into practice. 
// Call(), Apply() and Bind() methods can come in handy when setting the “this” value.

// Basic rules worth remembering:
// “this” always refers to an object.
// “this” refers to an object which calls the function it contains.
// In the global context “this” refers to either window object or is undefined if the ‘strict mode’ is used.

//1. -------------------------------------------------------------------------------------------------
var car = { 
    registrationNumber: "GA12345",
    brand: "Toyota",

    displayDetails: function(){
        console.log(this.registrationNumber + " " + this.brand);
    }
}


// The above will work perfectly fine as long as we use it this way:

// 1.1 -------------------------------------------------------------------------------------------------
car.displayDetails(); // GA12345 Toyota


// But what if we want to borrow a method?
// 1.2 -------------------------------------------------------------------------------------------------

// var myCarDetails =  car.displayDetails;
// myCarDetails();

// Well, this won’t work as the “this” will be now assigned to the global context
// which doesn’t have neither the registrationNumber nor the brand property.

// 1.3 -------------------------------------------------------------------------------------------------

// var myCarDetails = car.displayDetails.bind(car); 
// myCarDetails(); // GA12345 Toyota


// 2. -------------------------------------------------------------------------------------------------

// var car = { 
//     registrationNumber: "GA12345",
//     brand: "Toyota",

//     displayDetails: function(ownerName){
//         console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
//     }
// }

// var myCarDetails = car.displayDetails.bind(car, "Vivian"); // Vivian, this is your car: GA12345 Toyota

// myCarDetails();

// 3. -------------------------------------------------------------------------------------------------

// // Similar but slightly different usage provide the call() and apply() methods which also belong to the Function.prototype property.

// // This time there is a car object without the displayDetails function, which is located in the global context.

// var car = { 
//     registrationNumber: "GA12345",
//     brand: "Toyota"
// }

// function displayDetails(ownerName) {
//     console.log(ownerName + ", this is your car: " + this.registrationNumber + " " + this.brand);
// }

// // We can use the apply() function:
// displayDetails.apply(car, ["Vivian"]); // Vivian, this is your car: GA12345 Toyota

// displayDetails.call(car, "Vivian"); // Vivian, this is your car: GA12345 Toyota