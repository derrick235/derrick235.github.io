const buttons = document.querySelectorAll(".button");

function addButtonAnimation() {
    this.classList.add("button-hover");
}

function removeButtonAnimation() {
    this.classList.remove("button-hover");
}

buttons.forEach((button) => {

    if (!(button.classList.contains("button-hover"))) {
        button.addEventListener("mouseover", addButtonAnimation);
        button.addEventListener("mouseout", removeButtonAnimation);
    }

})