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

for (let i = 0; i < 720; i++) {
  const timerFillContainer_div = document.createElement("div");
  timerFillContainer_div.classList.add(`timer-fill-container-${i}`);
  const timerFill_div = document.createElement("timer-fill");
  timerFill_div.classList.add("timer-fill");

  timerFillContainer_div.appendChild(timerFill_div);
  timer_div.appendChild(timerFillContainer_div);
}
let select = 0;
for (let i = 0; i < 60; i++) {
  const timerMinute = document.querySelector(`.timer-minute-${i}`);
  timerMinute.addEventListener("click", (event) => {
    select = i * 12;
    //초기화
    clearInterval(timeInterval);
    for (let j = 0; j < 720; j++) {
      const timerFillContainer = document.querySelector(
        `.timer-fill-container-${j}`
      );
      if (timerFillContainer.classList.contains("is-active")) {
        timerFillContainer.classList.remove("is-active");
      }
    }
    for (let j = 0; j < i * 12; j++) {
      const timerFillContainer = document.querySelector(
        `.timer-fill-container-${j}`
      );
      if (!timerFillContainer.classList.contains("is-active")) {
        timerFillContainer.classList.add("is-active");
      }
    }
  });
}

const timeFlow = () => {
  if (select === 0) {
    select = 1;
    clearInterval(timeInterval);
    alert("종료되었습니다 😎");
  }
  const timerFillContainer = document.querySelector(
    `.timer-fill-container-${select}`
  );
  timerFillContainer.classList.remove("is-active");
  select--;
};
let timeInterval;
const startBtn = document.querySelector(".btn-start");
startBtn.addEventListener("click", () => {
  timeInterval = setInterval(timeFlow, 5000);
});
