// element selector

const dayElement = document.getElementById("day");
const hourElement = document.getElementById("hour");
const miniuteElement = document.getElementById("miniute");
const secondElement = document.getElementById("second");
// function create coundown
function countDown() {
  const currentYear = new Date().getFullYear();
  const upComingTime = new Date(
    `January 1,${currentYear + 1} 00:00:00`
  ).getTime();
  const currentTime = new Date().getTime();
  const diffTime = upComingTime - currentTime;

  // day, hour, miniute, second

  const second = 1000;
  const miniute = second * 60;
  const hour = miniute * 60;
  const day = hour * 24;

  let dayText = Math.floor(diffTime / day);
  let hourText = Math.floor((diffTime % day) / hour);
  let miniuteText = Math.floor((diffTime % hour) / miniute);
  let secondText = Math.floor((diffTime % miniute) / second);
  //  client side show
  dayElement.innerText = dayText < 10 ? "0" + dayText : dayText;
  hourElement.innerText = hourText < 10 ? "0" + hourText : hourText;
  miniuteElement.innerText = miniuteText < 10 ? "0" + miniuteText : miniuteText;
  secondElement.innerText = secondText < 10 ? "0" + secondText : secondText;
}

setInterval(countDown, 1000);
