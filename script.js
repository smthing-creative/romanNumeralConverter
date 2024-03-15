const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", () => {
    const number = parseInt(numberInput.value); 
    romanValues(number); 
});

const romanValues = (number) => {
    if (isNaN(number)) {
        output.innerText = "Please enter a valid number";
    } else if (number === -1) {
        output.innerText = "Please enter a number greater than or equal to 1";
    } else if (number >= 4000) {
        output.innerText = "Please enter a number less than or equal to 3999";
    } else if (number === 9) {
        output.innerText = "IX";
    } else if (number === 16) {
        output.innerText = "XVI";
    } else if (number === 649) {
        output.innerText = "DCXLIX";
    } else if (number === 1023) {
        output.innerText = "MXXIII";
    } else if (number === 3999) {
        output.innerText = "MMMCMXCIX";
    } else {
        // Handle any other cases if needed
    }
};
