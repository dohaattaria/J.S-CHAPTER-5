// QUESTION 1

function addNumbers() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    
    var sum = num1 + num2;

    document.getElementById("result").innerText = "The sum is: " + sum;
}

// QUESTION 2

let a = 10;
let b = 5;
let resultSubtraction = a - b;
console.log("Subtraction result: " + resultSubtraction);

let c = 10;
let d = 5;
let resultMultiplication = a * b;
console.log("Multiplication result: " + resultMultiplication);

let e = 10;
let f = 5;
let resultDivision = a / b;
console.log("Division result: " + resultDivision);

let g = 10;
let h = 3;
let resultModulus = a % b;
console.log("Modulus result: " + resultModulus);


// QUESTION 3

let num;

document.getElementById("output").innerHTML += "Value after variable declaration is: " + num + "<br>";

num = 5;

document.getElementById("output").innerHTML += "Initial value: " + num + "<br>";

num++;

document.getElementById("output").innerHTML += "Value after increment is: " + num + "<br>";

num += 7;

document.getElementById("output").innerHTML += "Value after addition is: " + num + "<br>";

num--;

document.getElementById("output").innerHTML += "Value after decrement is: " + num + "<br>";


let remainder = num % 3;

document.getElementById("output").innerHTML += "The remainder is: " + remainder + "<br>";



// QUESTION 4
let ticketPrice = 600;
let numberOfTickets = 5;
let totalamount = ticketPrice * numberOfTickets;

document.getElementById("2 output").innerHTML = "The total cost for buying " + numberOfTickets + " movie tickets is: " + totalamount + " PKR.";


// QUESTION 5
let number = 4;
        
        let tableHTML = "<h3>Multiplication Table for " + number + ":</h3>";

        for (let i = 1; i <= 10; i++) {
            tableHTML += number + " x " + i + " = " + (number * i) + "<br>";
        }

        document.getElementById("3 output").innerHTML = tableHTML;


        // // QUESTION7
        let priceItem1 = 150;  
        let priceItem2 = 250;  

        let quantityItem1 = 2;  
        let quantityItem2 = 1;  

        let shippingCharges = 50; 


        let totalCostItem1 = priceItem1 * quantityItem1;
        let totalCostItem2 = priceItem2 * quantityItem2;

        let totalCost = totalCostItem1 + totalCostItem2 + shippingCharges;

        let receiptHTML = "<h3>Receipt</h3>";
        receiptHTML += "<p>Item 1 Price: " + priceItem1 + " x " + quantityItem1 + " = " + totalCostItem1 + "</p>";
        receiptHTML += "<p>Item 2 Price: " + priceItem2 + " x " + quantityItem2 + " = " + totalCostItem2 + "</p>";
        receiptHTML += "<p>Shipping Charges: " + shippingCharges + "</p>";
        receiptHTML += "<hr>";
        receiptHTML += "<h4>Total Cost: " + totalCost + "</h4>";

        document.getElementById("receipt").innerHTML = receiptHTML; 


        //QUESTION 8
        
        let totalMarks = 500;  
        let marksObtained = 420;  
        let percentage = (marksObtained / totalMarks) * 100;

        document.getElementById("2 result").innerHTML = "Marks Obtained: " + marksObtained + "<br>"
                                                          + "Total Marks: " + totalMarks + "<br>"
                                                          + "Percentage: " + percentage.toFixed(2) + "%";



       // QUESTION 9       
       let totalInPKR = (10 * 104.80) + (25 * 28);

       document.getElementById("4 output").innerHTML = "Total in Pakistani Rupees: " + totalInPKR;                                           


    //   QUESTION 10
       let num2 = 8;

       let result = ((num2 + 5) * 10) / 2;

       document.getElementById("5 output").innerHTML = "Result: " + result;


    // QUESTION11
     let currentYear = new Date().getFullYear();

     let birthYear = 1990;

     let ageThisYear = currentYear - birthYear; 
     let ageNextYear = ageThisYear + 1; 
     document.getElementById("6 output").innerHTML = "They are either " + ageThisYear + " or " + ageNextYear + " years old.";



    //  QUESTION 12
     const radius = 7; 
    const pi = 3.142;

const circumference = 2 * pi * radius;
console.log(`The circumference is ${circumference.toFixed(2)}`);

const area = pi * Math.pow(radius, 2);
console.log(`The area is ${area.toFixed(2)}`);



// QUESTION 13
const favoriteSnack = "chocolate bars";
const currentAge = 25;
const maxAge = 80;
const amountPerDay = 2;

const yearsLeft = maxAge - currentAge;
const totalSnacks = yearsLeft * 365 * amountPerDay;

console.log(`You will need ${totalSnacks} ${favoriteSnack} to last you until the ripe old age of ${maxAge}.`);