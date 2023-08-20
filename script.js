const buttons = document.querySelectorAll(".button");

function addButtonAnimation() {
    this.classList.add("button-hover");
}

function removeButtonAnimation() {
    this.classList.remove("button-hover");
}

buttons.forEach((button) => {

    button.addEventListener("mouseover", addButtonAnimation);
    button.addEventListener("mouseout", removeButtonAnimation);

})