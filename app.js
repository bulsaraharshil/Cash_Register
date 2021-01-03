var btn = document.querySelector("#btn")
var bamt = document.querySelector("#bamt")
var camt = document.querySelector("#camt")
var div = document.querySelector("#div")
var div2 = document.querySelector("#div2")
var noOfNotes = document.getElementsByClassName("noOfNotes");

let notearray = [2000, 500, 200, 100, 50, 20, 10, 5, 2, 1];

function cashHandler() {
    var bill = bamt.value
    var cash = camt.value
    var sum = parseInt(cash - bill)
    if (parseInt(cash) < parseInt(bill)) {
        var errorMsg = "Cash given amount is entered less than bill amount!!!"
        div.innerText = errorMsg
    } else {
        var successMsg = "Amount to be returned: " + sum
        div.innerText = successMsg
    }
    let counter = 0;
    for (i = 0; i < notearray.length; i++) {

        if (sum / notearray[i] >= 1) {
            counter = parseInt(sum / notearray[i]);
            sum = sum - notearray[i] * counter;
            noOfNotes[i].innerText = `${counter}`
            if (sum === 0) {
                break;
            }
        }
    }
}
btn.addEventListener("click", cashHandler)