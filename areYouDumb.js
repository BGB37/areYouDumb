let btnYes = document.getElementById("btnYes");
let btnNo = document.getElementById("btnNo");

function randomNumber(number) {
    return Math.floor(Math.random() * (number + 1));
}

function btnNoChangeLocation ()  {
    const randomLocation = `${randomNumber(100)}px`;
    console.log(randomLocation);
    btnNo.style.top = `${randomNumber(80)}%`;
    btnNo.style.left = `${randomNumber(80)}%`;
    // btnNo.style.bottom = `${randomNumber(40)}%`;

}

function iKnewIt () {
    alert("I KNEW IT! :)")
}

btnNo.addEventListener('click', btnNoChangeLocation);
btnYes.addEventListener('click', iKnewIt);
