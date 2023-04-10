var currentColor = 'white';
var selecting = true;

var time = {
    white: [0, 0],
    black: [0, 0]
}

window.addEventListener("keydown", (e) => {
    if (selecting) {
        if (e.key == "Enter") {
            selecting = false;
            document.getElementById("selectTime").style.display = "none"
        }
        return;
    }
    if (e.key == " ") {
        e.preventDefault();

        currentColor == "white" ? currentColor = "black" : currentColor = "white";
        switchTheme();
    }
})

function switchTheme() {
    if (currentColor == "white") {
        document.body.style.color = "black"
        document.body.style.backgroundColor = "white"
    } else {
        document.body.style.color = "white"
        document.body.style.backgroundColor = "black"
    }
}

document.querySelectorAll("input[type=\"text\"]").forEach(ele => {
    ele.addEventListener("keydown", (e) => {
        if (e.ctrlKey) return;
        if (e.key == "Tab") return;
        if (e.key.toLowerCase().includes("arrow")) return;
        if (e.key == "Backspace") return;
        if (isNaN(parseInt(e.key))) e.preventDefault();
    })
})