var nxtbtn = document.querySelector(".nxtbtn");
var inputamt = document.querySelector(".inputbox-bill");
var nextdiv = document.querySelector(".next-div");
var emsg = document.querySelector(".errormsg");
var outputamt = document.querySelector(".inputbox-cashgiven");
var check = document.querySelector(".check");
var cashmsg = document.querySelector(".cashmsg");
var ctable = document.querySelector(".table");

hide(nextdiv);
hide(cashmsg);
hide(ctable);




nxtbtn.addEventListener("click", function next() {
    if (Number(inputamt.value) > 0) {
        hide(emsg);
        for (var i = 0; i < 7; i++) {
            var req = document.querySelector(".row" + i);
            req.innerText = "";
        }
        show(nextdiv, "block");
    } else {
        console.log("printed");
        errormessage(emsg, "Please enter correct Bill amount");
        show(emsg, "block");
        hide(nextdiv);
    }
})
check.addEventListener("click", function check() {
    if (Number(outputamt.value) < Number(inputamt.value)) {
        errormessage(cashmsg, "This amount is not enough");
        show(cashmsg, "block");
        hide(ctable);

    } else if (Number(outputamt.value) === Number(inputamt.value)) {
        errormessage(cashmsg, "Great! you paid the exact amount");
        show(cashmsg, "block");
        hide(ctable);

    } else {

        var amount = Number(outputamt.value) - Number(inputamt.value);
        returnAmount(amount);

    }
})

function show(input, typ) {
    input.style.display = typ;
}

function hide(input) {
    input.style.display = "none";
}

function errormessage(typ, msg) {
    typ.innerText = msg;

}
const bills = [2000, 500, 100, 20, 10, 5, 1];

function returnAmount(amount) {


    for (var i = 0; i < bills.length; i++) {
        var c = Math.trunc(amount / bills[i]);

        if (c > 0) {
            var req = document.querySelector(".row" + i);

            req.innerText = c;
        }
        amount = amount % bills[i];
    }
    show(ctable, "block");
    hide(cashmsg);


}