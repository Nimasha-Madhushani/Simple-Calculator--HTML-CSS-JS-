function clearOutput() {
    document.getElementById("output").innerHTML = "0";
}

function removeZero() {
    var value = document.getElementById("output").innerHTML;
    if (value == "0") {
        value = " "
        document.getElementById("output").innerHTML = value;
    }
}

function fordisplay(value) {
    removeZero()
    document.getElementById("output").innerHTML += value;
}

function solve() {
    removeZero()
    var equation = document.getElementById("output").innerHTML;
    var solved = eval(equation);
    document.getElementById('output').innerHTML = solved;
}

