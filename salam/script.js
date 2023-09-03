let a = 10;
let b = 5;
function vurma(a, b) {
    return a * b
}
function bölmə(a, b) {
    return a / b
}
function toplama(a, b) {
    return a + b
}
function çıxma(a, b) {
    return a - b
}
let userInput = prompt("Please enter a number:");
let x = parseFloat(userInput);

switch (x) {
    case 1:
        console.log(vurma(a, b));
        break;
    case 2:

        console.log(bölmə(a, b));
        break;
    case 3:

        console.log(toplama(a, b));
        break;
    case 4:

        console.log(çıxma(a, b));
        break;


}