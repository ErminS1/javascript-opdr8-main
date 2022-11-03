function multiply(){
    num1 = document.getElementById("18").value;
    num2 = document.getElementById("19").value;
    document.getElementById("AS").innerHTML = num1 * num2;
}
function devide(){
    num1 = document.getElementById("18").value;
    num2 = document.getElementById("19").value;
    document.getElementById("AS").innerHTML = num1 / num2;
} 
function add(){
    num1 = parseInt (document.getElementById("18").value);
    num2 = parseInt (document.getElementById("19").value);
    document.getElementById("AS").innerHTML = num1 + num2;
}
function minus(){
    num1 = document.getElementById("18").value;
    num2 = document.getElementById("19").value;
    document.getElementById("AS").innerHTML = num1 - num2;
}