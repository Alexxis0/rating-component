let button1 = document.querySelector(".btn1");
let button2 = document.querySelector(".btn2");
let button3 = document.querySelector(".btn3");
let button4 = document.querySelector(".btn4");
let button5 = document.querySelector(".btn5");
let submit = document.querySelector(".submit");
let sectionRating = document.querySelector(".section_rating");
let submitClick = document.querySelector(".submit_click");
let numberSubmit = document.querySelector(".number_submit");

button1.addEventListener("click", () => {
    button1.style.background = "rgb(251, 116, 19)";
    button1.style.color = "hsl(0, 0%, 100%)";
    button2.style.background = "hsl(216, 12%, 24%)";
    button3.style.background = "hsl(216, 12%, 24%)";
    button4.style.background = "hsl(216, 12%, 24%)";
    button5.style.background = "hsl(216, 12%, 24%)";
    number = 1;
});
button2.addEventListener("click", () => {
    button2.style.background = "rgb(251, 116, 19)";
    button2.style.color = "hsl(0, 0%, 100%)";
    button1.style.background = "hsl(216, 12%, 24%)";
    button3.style.background = "hsl(216, 12%, 24%)";
    button4.style.background = "hsl(216, 12%, 24%)";
    button5.style.background = "hsl(216, 12%, 24%)";
    number = 2;
});
button3.addEventListener("click", () => {
    button3.style.background = "rgb(251, 116, 19)";
    button3.style.color = "hsl(0, 0%, 100%)";
    button1.style.background = "hsl(216, 12%, 24%)";
    button2.style.background = "hsl(216, 12%, 24%)";
    button4.style.background = "hsl(216, 12%, 24%)";
    button5.style.background = "hsl(216, 12%, 24%)";
    number = 3;
});
button4.addEventListener("click", () => {
    button4.style.background = "rgb(251, 116, 19)";
    button4.style.color = "hsl(0, 0%, 100%)";
    button1.style.background = "hsl(216, 12%, 24%)";
    button2.style.background = "hsl(216, 12%, 24%)";
    button3.style.background = "hsl(216, 12%, 24%)";
    button5.style.background = "hsl(216, 12%, 24%)";
    number = 4;
});
button5.addEventListener("click", () => {
    button5.style.background = "rgb(251, 116, 19)";
    button5.style.color = "hsl(0, 0%, 100%)";
    button1.style.background = "hsl(216, 12%, 24%)";
    button2.style.background = "hsl(216, 12%, 24%)";
    button3.style.background = "hsl(216, 12%, 24%)";
    button4.style.background = "hsl(216, 12%, 24%)";
    number = 5;
});

submit.addEventListener("click", () => {
    sectionRating.style.display = "none";
    submitClick.style.display = "flex";
    numberSubmit.innerHTML = number;
});