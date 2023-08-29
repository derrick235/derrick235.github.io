const navbarButtons = document.querySelectorAll(".navbar-button");
const pageButtons = document.querySelectorAll(".black-button");

function addButtonAnimation() {
    this.classList.add("button-hover");
}

function removeButtonAnimation() {
    this.classList.remove("button-hover");
}

function addBlueButtonAnimation() {
    this.classList.add("button-hover-blue");
}

function removeBlueButtonAnimation() {
    this.classList.remove("button-hover-blue");
}

navbarButtons.forEach((button) => {

    if (!(button.classList.contains("button-hover"))) {
        button.addEventListener("mouseover", addButtonAnimation);
        button.addEventListener("mouseout", removeButtonAnimation);
    }

})

pageButtons.forEach((button) => {

    if (!(button.classList.contains("button-hover"))) {
        button.addEventListener("mouseover", addBlueButtonAnimation);
        button.addEventListener("mouseout", removeBlueButtonAnimation);
    }

})