function multiply(){
    num1 = document.getElementById("18").value;
    num2 = document.getElementById("19").value;
    if(num1 ==0||num2 ==0){
        document.getElementById("AS").innerHTML = "Getal moet hoger zijn dan 0";
    }
    else{
    document.getElementById("AS").innerHTML = num1 * num2;
    }
}
function devide(){
    num1 = document.getElementById("18").value;
    num2 = document.getElementById("19").value;
    if(num1 ==0||num2 ==0){
        document.getElementById("AS").innerHTML = "Getal moet hoger zijn dan 0";
    }
    else{
    document.getElementById("AS").innerHTML = num1 / num2;
    }} 
function add(){
    num1 = parseInt (document.getElementById("18").value);
    num2 = parseInt (document.getElementById("19").value);
    if(num1 ==0||num2 ==0){
        document.getElementById("AS").innerHTML = "Getal moet hoger zijn dan 0";
    }
    else{
    document.getElementById("AS").innerHTML = num1 + num2;
    }
}
function minus(){
    num1 = document.getElementById("18").value;
    num2 = document.getElementById("19").value;
    if(num1 ==0||num2 ==0){
        document.getElementById("AS").innerHTML = "Getal moet hoger zijn dan 0";
    }
    else{
    document.getElementById("AS").innerHTML = num1 - num2;
    }
}

