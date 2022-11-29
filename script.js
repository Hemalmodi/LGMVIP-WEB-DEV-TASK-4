let input = document.querySelector('.calculator input');
let button = document.querySelector('.calculator button');

disable();
function myNum1(){
    input.value += '1';
}

function myNum2(){
    input.value += '2';
}

function myNum3(){
    input.value += '3';
}

function myNum4(){
    input.value += '4';
}

function myNum5(){
    input.value += '5';
}

function myNum6(){
    input.value += '6';
}

function myNum7(){
    input.value += '7';
}

function myNum8(){
    input.value += '8';
}

function myNum9(){
    input.value += '9';
}

function myNum0(){
    input.value += '0';
}

function slash(){
    input.value += '.';

}
function empty(){
    input.value = '';
    disable();
}

function Enter(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("disable5").click();
    }
}

function plus(){
    input.value += ' + ';
}

function minus(){
    input.value += ' - ';
}

function times(){
    input.value += ' * ';
}

function div(){
    input.value += ' / ';
}
 
function calculate(){
    if (input.value!=0){
        let total = eval(input.value);
        input.value = total;
    }
}
function enable(){
    for (var i = 1; i<7; ++i){
        document.getElementById(`disable$(i)`).disabled = false;
    }
}
function disable(){
    for (var i = 1; i<7; ++i){
        document.getElementById(`disable$(i)`).disabled = true;
    }
}

input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("disable5").click();
    }
  });