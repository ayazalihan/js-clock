"use strict";

document.querySelector("#myName").innerHTML = prompt("Adınız nedir?");

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

const weekday = [
  "Pazartesi",
  "Salı",
  "Çarşama",
  "Perşembe",
  "Cuma",
  "Cumartesi",
  "Pazar",
];

function showTime() {
  const today = new Date();
  let hour = addZero(today.getHours());
  let minute = addZero(today.getMinutes());
  let second = addZero(today.getSeconds());
  let day = weekday[today.getDay()];

  document.querySelector("#myClock").innerHTML =
    hour + ":" + minute + ":" + second + " " + day;

  setTimeout(showTime, 1000);
}

showTime();
