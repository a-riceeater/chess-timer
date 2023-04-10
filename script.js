try {
    var currentColor = 'white';
    var selecting = true;
    var timeInterval;
    var canEnter = true;

    var time = {
        white: [0, 0, 999],
        black: [0, 0, 999]
    }

    function count() {
        if (currentColor == "white") {
            var ms = time.white[2];
            var sec = time.white[1];
            var min = time.white[0];

            if (min < 0) {
                clearInterval(timeInterval)
                document.getElementById("currentTime").innerText = "0:0:0"
                document.getElementById("currentTime").style.color = "red"
                selecting = true;
                return;
            }

            ms -= 50;

            if (ms <= 0) {
                ms = 999;
                sec--;
            }

            if (sec <= 0) {
                sec = 60;
                min--;

                if (min == 0) min = '';
            }

            sec.toString().length == 1 ? sec = "0" + sec : sec = sec

            sec < 15 && min == 0 ? document.getElementById("currentTime").innerText = `${min}:${sec}:${ms.toString().substring(0, ms.toString().length - 1)}` : document.getElementById("currentTime").innerText = `${min}:${sec}`

            if (!min && sec == 0 && ms <= 0) {
                clearInterval(timeInterval)
                setTimeout(() => alert("Timer done!"), 50);
            }

            time.white = [min, sec, ms]
        } else {
            var ms = time.black[2];
            var sec = time.black[1];
            var min = time.black[0];

            if (min < 0) {
                clearInterval(timeInterval)
                document.getElementById("currentTime").innerText = "0:0:0"
                document.getElementById("currentTime").style.color = "red"
                selecting = true;
                return;
            }

            ms -= 50;

            if (ms <= 0) {
                ms = 999;
                sec--;
            }

            if (sec <= 0) {
                sec = 60;
                min--;

                if (min == 0) min = '';
            }

            sec.toString().length == 1 ? sec = "0" + sec : sec = sec

            sec < 15 && min == 0 ? document.getElementById("currentTime").innerText = `${min}:${sec}:${ms.toString().substring(0, ms.toString().length - 1)}` : document.getElementById("currentTime").innerText = `${min}:${sec}`

            if (!min && sec == 0 && ms <= 0) {
                clearInterval(timeInterval)
                setTimeout(() => alert("Timer done!"), 50);
            }

            time.black = [min, sec, ms]
        }
    }

    window.addEventListener("keydown", (e) => {
        if (selecting) {
            if (e.key == "Enter") {
                if (!canEnter) return;
                selecting = false;
                canEnter = false;
                document.getElementById("selectTime").style.display = "none"

                time.white = [document.getElementById("whiteMin").value, document.getElementById("whiteSec").value, 999]
                time.black = [document.getElementById("blackMin").value, document.getElementById("blackSec").value, 999]

                time.black[1] < 15 && time.black[0] == 0 ? document.getElementById("otherTime").innerText = `${time.black[0]}:${time.black[1]}:${time.black[2].toString().substring(0, time.black[2].toString().length - 1)}` : document.getElementById("otherTime").innerText = `${time.black[0]}:${time.black[1]}`

                timeInterval = setInterval(count, 50)
            }
            return;
        }
        if (e.key == " ") {
            e.preventDefault();

            currentColor == "white" ? currentColor = "black" : currentColor = "white";
            switchTheme();

            if (currentColor == "black") {
                time.white[1] < 15 && time.white[0] == 0 ? document.getElementById("otherTime").innerText = `${time.white[0]}:${time.white[1]}:${time.white[2].toString().substring(0, time.white[2].toString().length - 1)}` : document.getElementById("otherTime").innerText = `${time.white[0]}:${time.white[1]}`
            } else {
                time.black[1] < 15 && time.black[0] == 0 ? document.getElementById("otherTime").innerText = `${time.black[0]}:${time.black[1]}:${time.black[2].toString().substring(0, time.black[2].toString().length - 1)}` : document.getElementById("otherTime").innerText = `${time.black[0]}:${time.black[1]}`
            }
        }
    })

    function switchTheme() {
        if (currentColor == "white") {
            document.body.style.color = "black"
            document.body.style.backgroundColor = "white"
            document.getElementById("restart").style.color = "black"
        } else {
            document.body.style.color = "white"
            document.body.style.backgroundColor = "black"
            document.getElementById("restart").style.color = "white"
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
} catch (err) {
    alert(err)
}