"use strict";

let output = document.getElementsByClassName("output");

function bin2dec() {
  let bin = document.getElementById("binary").value;
  if (bin == "") {
    alert("*Binary number required!");
  }
  let dec = 0,
    rem = 0,
    dic = 0,
    count = 0;
  while (bin > 0) {
    rem = bin % 10;
    dic = rem * Math.pow(2, count);
    dec = dec + dic;
    count++;
    bin = Math.floor(bin / 10);
  }
  output[0].value = dec;
}

function oct2dec() {
  let oct = document.getElementById("octal").value;
  if (oct == "") {
    alert("*Octal number required!");
  }
  let dec = 0,
    rem = 0,
    dic = 0,
    count = 0;
  while (oct > 0) {
    rem = oct % 10;
    dic = rem * Math.pow(8, count);
    dec = dec + dic;
    count++;
    oct = Math.floor(oct / 10);
  }
  output[1].value = dec;
}

function hex2dec() {
  let hex = document.getElementById("hexadec").value;
  if (hex == "") {
    alert("*Hexadecimal number required!");
  }
  let dec = 0;
  let rem = 0;
  let dic = 0;
  let count = 0;
  let temp = 0;
  let sum = 0;
  let i = hex.length - 1;
  while (i >= 0) {
    switch (hex.charAt(i)) {
      case "A":
        temp = 10;
        break;
      case "B":
        temp = 11;
        break;
      case "C":
        temp = 12;
        break;
      case "D":
        temp = 13;
        break;
      case "E":
        temp = 14;
        break;
      case "F":
        temp = 15;
        break;
      case "a":
        temp = 10;
        break;
      case "b":
        temp = 11;
        break;
      case "c":
        temp = 12;
        break;
      case "d":
        temp = 13;
        break;
      case "e":
        temp = 14;
        break;
      case "f":
        temp = 15;
        break;
      default:
        temp = parseInt(hex.charAt(i));
        break;
    }
    temp = temp * Math.pow(16, count);
    sum = sum + temp;
    count = count + 1;
    i--;
  }

  output[2].value = sum;
}

/*********************************************/
/***************Calculator Program************/
/*********************************************/

function Key_0() {
  document.getElementById("calcscreen").value += "0";
}

function Key_1() {
  document.getElementById("calcscreen").value += "1";
}

function Key_2() {
  document.getElementById("calcscreen").value += "2";
}

function Key_3() {
  document.getElementById("calcscreen").value += "3";
}

function Key_4() {
  document.getElementById("calcscreen").value += "4";
}

function Key_5() {
  document.getElementById("calcscreen").value += "5";
}

function Key_6() {
  document.getElementById("calcscreen").value += "6";
}

function Key_7() {
  document.getElementById("calcscreen").value += "7";
}

function Key_8() {
  document.getElementById("calcscreen").value += "8";
}

function Key_9() {
  document.getElementById("calcscreen").value += "9";
}

function Key_plus() {
  document.getElementById("calcscreen").value += "+";
}

function Key_minus() {
  document.getElementById("calcscreen").value += "-";
}

function Key_mul() {
  document.getElementById("calcscreen").value += "*";
}

function Key_div() {
  document.getElementById("calcscreen").value += "/";
}

function Key_decimal() {
  document.getElementById("calcscreen").value += ".";
}

function Key_modulus() {
  document.getElementById("calcscreen").value += "%";
}

function Key_ac() {
  document.getElementById("calcscreen").value = "";
}

function Key_bk() {
  let input = document.getElementById("calcscreen").value;
  document.getElementById("calcscreen").value = input.slice(0, [
    input.length - 1
  ]);
}

function Key_sqrt() {
  let input = document.getElementById("calcscreen").value;
  document.getElementById("calcscreen").value = Math.sqrt(input);
  if (document.getElementById("calcscreen").value === "NaN") {
    alert("Improper insertion!");
    document.getElementById("calcscreen").value = 0;
  }
}

function Calculator() {
  let operandStack = [""],
    operationStack = [],
    OperationClass = ["+", "-", "*", "/", "%", "="];
  let input = document.getElementById("calcscreen").value;
  if (input.indexOf("=") === -1) {
    input += "=";
  }
  let i = input.length;
  for (i = 0; i < input.length; i++) {
    let newNo = input.charAt(i);
    if (OperationClass.indexOf(newNo) === -1) {
      let latestNo = operandStack.pop();
      let totalNo = latestNo + newNo;
      operandStack.push(totalNo);
    } else {
      if (operationStack.length === 0) {
        operationStack.push(newNo);
      } else {
        let Operation = operationStack.pop(),
          no1 = parseFloat(operandStack.pop()),
          result = 0,
          no2 = parseFloat(operandStack.pop());
        switch (Operation) {
          case "+":
            result = no1 + no2;
            operandStack.push(result);
            break;
          case "-":
            result = no2 - no1;
            operandStack.push(result);
            break;
          case "*":
            result = no1 * no2;
            operandStack.push(result);
            break;
          case "/":
            result = no2 / no1;
            operandStack.push(result);
            break;
          case "%":
            result = no2 % no1;
            operandStack.push(result);
            break;
        }
        if (newNo === "=") {
          document.getElementById("calcscreen").value =
            operandStack[operandStack.length - 1];
          if (document.getElementById("calcscreen").value === "NaN") {
            alert("Improper insertion!");
            document.getElementById("calcscreen").value = 0;
          }
        } else {
          operationStack.push(newNo);
        }
      }
      operandStack.push("");
    }
  }
}
