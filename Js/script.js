let originalNumber = 25.123;

document.getElementById("originalNumber").innerHTML = `<h1>${originalNumber}</h1>`;

// function for get value from input field

const getValue = () => {
    return +document.getElementById("inputValue").value;
}

// function for show result in output

const showOutput = (output) => {
    return document.getElementById("output").innerHTML = output;
}

const clearInput = () => {
    document.getElementById("inputValue").value = "";
}

const clearOutput = () => {
    document.getElementById("output").innerHTML = "";
}

// function for round a number

const roundNumber = () => {
    let value = getValue();

    if (!value) {
        alert("please type a number");
        return;
    }

    let roundNumber = Math.round(value);

    let html = `<h1>${roundNumber}</h1>`;

    showOutput(html);
}

// function for ceil a number

const ceilNumber = () => {
    let value = getValue();

    if (!value) {
        alert("please type a number");
        return;
    }

    let ceilNumber = Math.ceil(value);

    let html = `<h1>${ceilNumber}</h1>`;

    showOutput(html);
}

// function for floor a number

const floorNumber = () => {
    let value = getValue();

    if (!value) {
        alert("please type a number");
        return;
    }

    let floorNumber = Math.floor(value);

    let html = `<h1>${floorNumber}</h1>`;

    showOutput(html);
}

// function for generate random number

const randomNumber = () => {
    let num = Math.random();

    let html = `<h1>${num}</h1>`;

    showOutput(html);
}

// function for throw a dice

const dice = () => {
    let num = Math.random();

    let dice = Math.floor((num * 6) + 1);

    let html = `<h1>${dice}</h1><p>generate a random number b/w 1 to 6`;

    showOutput(html);
}

// function for generate a strong password

const generatePassword = () => {
    let possibleString = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+\|[]{};:/?.>`;

    let limit = 16;

    let password = "";

    for (let i = 0; i < limit; i++) {
        let randomNumber = Math.random();

        password += possibleString.charAt(Math.floor(randomNumber * possibleString.length));
    }

    let html = `<h6 class ="text-primarytheme mb-0">${password}</h6><p>Generating random string &amp; the length is:<span style ="color: red; font-size: 18px;">${limit}</span></p>`

    showOutput(html);
}

// convertion string into a number function

const convertingString = () =>{
    let str = "1234";

    let num= Number(str);

    let html = `<P>let str = "${str}";</p><p class="text-danger fw-bold">${typeof str}</p><p>let num = Number(str);</p><p class="text-success fw-bold">${typeof num}</p>`;

    showOutput(html);
}
// controlling length of number

const controllingLength = () =>{
    let num = 253.453;

    num = num.toFixed(1);

    let html = `<p>let num = 253.453;</p><p>Number after length controlling <span class="text-success fw-bold">${num}</span></p>`

    showOutput(html);
}

// calculate gst

function calculateGst(){
    let cost = "917";

    cost = Number(cost);

    let tax = cost * (17/100);

    tax = tax.toFixed(2);

    tax = Number(tax);

    let totalCost = cost + tax;

    totalCost = Math.round(totalCost);

    let html = `<p>Your Bill = <span class ="text-primarytheme"><b>${cost}</b></span></p><p>Tax 17% = <span style = "color:red;"><b>${tax}</b></span></p><p>Total amount including tax = <span style = "color:green;"><b>${totalCost}</b></span></p>`;

    showOutput(html);
}

// footer
var nowDate = new Date();

var getYear = nowDate.getFullYear();

document.getElementById("year").innerHTML = getYear;
