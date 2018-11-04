"use strict";
let time = new Date();
document.getElementById("date").innerHTML =
  "<strong>Date</strong>: " +
  time.getDate() +
  "/" +
  (time.getMonth() + 1) +
  "/" +
  time.getFullYear();

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
  document.getElementById("decimal").value = dec;
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
  document.getElementById("decima").value = dec;
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
      default:
        temp = parseInt(hex.charAt(i));
        break;
    }
    temp = temp * Math.pow(16, count);
    sum = sum + temp;
    count = count + 1;
    i--;
  }

  document.getElementById("decim").value = sum;
}

function Key_1() {
  let key = document.getElementById("1").value;
  document.getElementById("calcscreen").value += key;
}

function Key_2() {
  let key = document.getElementById("2").value;
  document.getElementById("calcscreen").value += key;
}

function Key_3() {
  let key = document.getElementById("3").value;
  document.getElementById("calcscreen").value += key;
}

function Key_4() {
  let key = document.getElementById("4").value;
  document.getElementById("calcscreen").value += key;
}

function Key_5() {
  let key = document.getElementById("5").value;
  document.getElementById("calcscreen").value += key;
}

function Key_6() {
  let key = document.getElementById("6").value;
  document.getElementById("calcscreen").value += key;
}

function Key_7() {
  let key = document.getElementById("7").value;
  document.getElementById("calcscreen").value += key;
}

function Key_8() {
  let key = document.getElementById("8").value;
  document.getElementById("calcscreen").value += key;
}

function Key_9() {
  let key = document.getElementById("9").value;
  document.getElementById("calcscreen").value += key;
}

function Key_9() {
  let key = document.getElementById("9").value;
  document.getElementById("calcscreen").value += key;
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

function Calculator() {
  let operandStack = [""],
    operationStack = [],
    OperationClass = ["+", "-", "*", "/", "="];
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
        }
        if (newNo === "=") {
          if (operandStack[operandStack.length - 1] == NaN) {
            alert("Improper insertion, please verify");
          }
          document.getElementById("calcscreen").value =
            operandStack[operandStack.length - 1];
        } else {
          operationStack.push(newNo);
        }
      }
      operandStack.push("");
    }
  }
}
