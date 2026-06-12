
// //DOM elemen
const btn = document.querySelector("#btn");
const inputYear = document.querySelector("#In");
const result = document.querySelector("#p");
//

//Converting user input into a date

let birthDate;

//decided to calc age using an entire date for accuracy 
const currentYear = new Date().getFullYear(); 
const currentMonth = new Date().getMonth(); 
const currentDay = new Date().getDate();

const calcDetailedAge = () => {
    const birth = new Date(inputYear.value);
    const today = new Date();

    if (!inputYear.value || birth > new Date() || birth.getFullYear() < 1900) { //since "" is a falsy value if the inpout is Empty its gonna be !False => True so this block will be executed
        result.textContent = "Enter a valid date!";
        return;
    }

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();



    // if days are negative, borrow 1 from previous month
    if (days < 0) {
        months--;
        const prevMonthDays = new Date(
            today.getFullYear(),
            today.getMonth(),
            0    //in JS,day = 0 gives the last day of the previous month
        ).getDate();
        days += prevMonthDays; 
    }

    // if months are negative borrow one from years

    months < 0 && (years--, months += 12); //amount of months in a year is constant so we can just hardcode it i n this case

    //another way
    // if (months < 0) {
    //     years--;
    //     months += 12;
    // }

    result.textContent =
        `You are ${years} years, ${months} months, ${days} days old`;
};

btn.addEventListener("click", calcDetailedAge);
























































/**************************************************
 * ARCHIVE (NOT USED)
 * kept for learning purposes
 **************************************************/
//Archived function
// const calcAge = () => {
//     birthDate = new Date(inputYear.value);
//     console.log(birthDate);

//     if (!inputYear.value) { //since "" is a falsy value if the inpout is Empty its gonna be !False => True so this block will be executed
//         result.textContent = "Enter a valid date!";
//         return;
//     }

//     let age = currentYear - birthDate.getFullYear();

//     const birthMonth = birthDate.getMonth();
//     const birthDay = birthDate.getDate();

// // checks if the user has already had their birthday this year
// // we need this because just subtracting years can be inaccurate

// const hasHadBirthday =
//     currentMonth > birthMonth || 
//     (currentMonth === birthMonth && currentDay >= birthDay);

// // case 1: currentMonth > birthMonth
// // means we are already past their birth month in the year 

// // case 2: currentMonth === birthMonth && currentDay >= birthDay
// // means we're in their birth month, so we check the day
// // if today's day is the same or after their birthday => already had birthday

// // if neither condition is true => birthday hasn't happened yet this year yet

// if (!hasHadBirthday) {
//     age--; // subtract 1 if user didnt have his birthday yet this year
// }
//     console.log(birthDate);
//     result.textContent = `You are ${age} years old, `; //formatted output using template literal
// };
























//Archived 3
// // //using queryselector instead of getElementById for flexibility
// // //DOM elements
// const btn = document.querySelector("#btn");
// const inputYear = document.querySelector("#In");
// const result = document.querySelector("#p");
// //

// //Converting user input into a date

// let birthDate;

// //decided to calc age using an entire date for accuracy 
// const currentYear = new Date().getFullYear(); 
// const currentMonth = new Date().getMonth(); 
// const currentDay = new Date().getDay()

// // let hadBirthday = currentMonth <  ;

// const calcAge = () => {
//     const birthYear = Number(inputYear.value); //converting into a number preferably instead of trusting JS type coercion and to be more accurate
//     console.log(birthDate)
//     if (!birthYear || birthYear > currentYear || birthYear < 1900) { //since "" is a falsy value if the inpout is Empty its gonna be !False => True so this block will be executed
//         result.textContent = "Enter a valid year!";
//         return;
//     }
//     birthDate = new Date(inputYear.value)
//     console.log(birthDate)
//     result.textContent = `You are ${(currentYear - birthYear)} years old`; //formatted output using template literal
// };

// btn.addEventListener("click", calcAge);










//Archived #1

// const btn = document.querySelector("#btn") 
// const inputYear = document.querySelector("#In")
// const result = document.querySelector("#p")
// //
// let year = new Date().getFullYear() //instead of hardcoding the year 2026 we get the current year
// let calcAge = () => result.textContent = year - inputYear.value
// btn.addEventListener("click",calcAge)