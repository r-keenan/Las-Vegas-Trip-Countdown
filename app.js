const countdown = () => {
  //Setting date variables
  const countDate = new Date("June 17, 2021 10:45:00").getTime();
  const now = new Date().getTime();
  const gap = countDate - now;

  //Setting time variables
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  //Business logic for time calculations
  const textDay = Math.floor(gap / day);
  const textHour = Math.floor((gap % day) / hour);
  const textMinute = Math.floor((gap % hour) / minute);
  const textSecond = Math.floor((gap % minute) / second);

  //Filling the DOM with the data.
  document.querySelector(".day").innerText = textDay;
  document.querySelector(".hour").innerText = textHour;
  document.querySelector(".minute").innerText = textMinute;
  document.querySelector(".second").innerText = textSecond;
  if (textHour <= 0) {
    document.querySelector("#headline").innerText = "Vacation has started!";
  }
  //   console.log(gap);
};

//This sets the timer to update every second.
setInterval(countdown, 1000);
