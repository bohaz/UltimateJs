// short-circuit evaluation

// falsy values
// false
// 0
// ""
// null
// undefined
// NaN
let nombre = "Felix";
let username = nombre || "Invitado";
console.log(username); // Felix

function fn1() {
    console.log("fn1");
    return true;
}

function fn2() {
    console.log("fn2");
    return true;
}

let x = fn1() && fn2();