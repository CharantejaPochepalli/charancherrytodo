var inputName = document.querySelector(".form1");
var buttonContinue = document.querySelector(".btn")

inputName.addEventListener("input", function () {
    if (inputName.value === "") {
        buttonContinue.disabled = true;

    }
    else {
        buttonContinue.disabled = false;
        localStorage.setItem("name", inputName.value);
    }
});
function clearInput() {
    if (inputName.value != "") {
        inputName.value = "";
        localStorage.removeItem("name", inputName.value);
    }

}
