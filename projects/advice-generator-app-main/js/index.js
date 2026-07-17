"use strict";

const titleEl = document.getElementById("title");
const adviceEl = document.getElementById("advice");
const adviceBtnEl = document.getElementById("advice-btn");
async function getRandomAdvice() {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();
    console.log(data);
    titleEl.textContent = `Advice #${data.slip.id}`;
    adviceEl.textContent = `"${data.slip.advice}"`;
  } catch (error) {
    console.error(error);
  }
}

adviceBtnEl.addEventListener("click", getRandomAdvice);
