console.log("working");
const currDate = document.getElementById("currentDay");
const time = document.getElementById("currentTimeUTC");
const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

function convertTimestamptoTime() {
  let dateObj = new Date().getTime();
  let options = {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone: "UTC",
  };
  let formatter = new Intl.DateTimeFormat("en-US", options);
  let formattedTime = formatter.format(dateObj);
  time.innerText = formattedTime;
}

function getDay() {
  const year = new Date().getFullYear();
  const month = months[new Date().getMonth()];
  const date = new Date().getDate();
  const day = days[new Date().getDay()];
  const fullDate = day + " " + date + " " + month + " " + year;
  currDate.innerText = fullDate;
}

convertTimestamptoTime();
let currentTime = new Date();
let currentTimeMillis = currentTime.getTime();
let currentUTCTime = currentTime.toUTCString();

convertTimestamptoTime();
getDay();
