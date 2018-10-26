"use strict";
let time = new Date();
document.getElementById("date").innerHTML =
  "Date: " +
  time.getDate() +
  "/" +
  (time.getMonth() + 1) +
  "/" +
  time.getFullYear();

function bin2dec() {
  let bin = document.getElementById("binary").value;
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
  debugger;
  let hex = document.getElementById("hexadec").value;
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

function Calculator() {}
