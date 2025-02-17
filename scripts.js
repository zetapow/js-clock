const secondsHand = document.getElementById('seconds-hand');
const minutesHand = document.getElementById('minutes-hand');
const hoursHand = document.getElementById('hours-hand');

function getTime() {
   timeNow = new Date();
   const seconds = timeNow.getSeconds();
   const minutes = timeNow.getMinutes();
   const hours = timeNow.getHours();
   console.log(hours, minutes, seconds);
   // 360 degrees/ 60 seconds
   const timeInterval = 360 / 60;

   secondsHand.style.transform = 'rotate(' + seconds * timeInterval + 'deg)';
   minutesHand.style.transform =
      'rotate(' + (minutes * timeInterval + seconds / 10) + 'deg)';
   hoursHand.style.transform =
      'rotate(' + (hours * timeInterval * 5 + minutes / 2) + 'deg)';
}

getTime();

setInterval(getTime, 250);
