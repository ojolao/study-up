// create clock class that has a list of callbacks it updates every second
class Clock {
  constructor() {
    this.callbacks = [];
    setInterval(this.tick.bind(this), 1000);
  }
  addCallbacks(cb) {
    this.callbacks.push(cb);
  }

  tick() {
    this.callbacks.forEach((callback) => {
      const moment = new Date();
      callback(moment);
    });
  }
}
// create clockUI class
class ClockUI {
  constructor() {
    this.now = new Clock();
    this.now.addCallbacks(this.displayTime.bind(this));
  }
  displayTime(currentTime) {
    const timeArray = currentTime.toTimeString().split(' ')[0].split(':');
    const clock = document.querySelector('.displayClock');
    const hour = document.querySelector('.hour');
    const min = document.querySelector('.min');
    const sec = document.querySelector('.sec');
    clock.style.visibility = 'visible';
    hour.innerText = timeArray[0] > 12 ? timeArray[0] - 12 : timeArray[0];
    min.innerText = timeArray[1];
    sec.innerText = timeArray[2];
  }
}
// assign clockUI
const timeNow = new ClockUI();

