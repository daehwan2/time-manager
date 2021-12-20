const timer_div = document.querySelector(".timer");
for (let i = 0; i < 30; i++) {
  const minute_div = document.createElement("div");
  minute_div.classList.add("timer-minute");

  const minute1Btn = document.createElement("button");
  const minute2Btn = document.createElement("button");
  minute1Btn.classList.add(`timer-minute-${i}`);
  minute2Btn.classList.add(`timer-minute-${30 + i}`);

  minute_div.appendChild(minute1Btn);
  minute_div.appendChild(minute2Btn);

  timer_div.appendChild(minute_div);
}

const timerCircle_div = document.createElement("div");
timerCircle_div.classList.add("timer-circle");
timer_div.appendChild(timerCircle_div);

const timerMinuteHandContainer_div = document.createElement("div");
timerMinuteHandContainer_div.classList.add("timer-minute-hand-container");
const timerMinuteHand_div = document.createElement("div");
timerMinuteHand_div.classList.add("timer-minute-hand");
timerMinuteHandContainer_div.appendChild(timerMinuteHand_div);
timer_div.appendChild(timerMinuteHandContainer_div);
let minute = 0;
setInterval(() => {
  timerMinuteHandContainer_div.style = `transform: rotate(${minute}deg)`;
  minute += 0.1;
}, 10);
