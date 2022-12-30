const days = document.getElementById('days'),
      hours = document.getElementById('hours'),
      minutes = document.getElementById('minutes'),
      seconds = document.getElementById('seconds');

const dd = document.getElementById('dd'),
      hh = document.getElementById('hh'),
      mm = document.getElementById('mm'),
      ss = document.getElementById('ss');


const day_dot = document.querySelector('.day_dot'),
      hr_dot = document.querySelector('.hr_dot'),
      min_dot = document.querySelector('.min_dot'),
      sec_dot = document.querySelector('.sec_dot');


const endDate = '01/01/2024 00:00:00';

// date format mm/dd/yyyy

const x= setInterval(()=>{
  const now = new Date(endDate).getTime();
  const countDown = new Date().getTime();
  const distance = now - countDown;

  // 时间计算 for dats, hours, minutes and seconds
  let d = Math.floor(distance / (1000 * 60 * 60 * 24));
  let h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let m =  Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let s =  Math.floor((distance % (1000 * 60)) / (1000));

  // output the result in element with id
  days.innerHTML = d + "<br><span>Days</span>"
  hours.innerHTML = h + "<br><span>Hours</span>"
  minutes.innerHTML = m + "<br><span>Minutes</span>"
  seconds.innerHTML = s + "<br><span>Seconds</span>"

  // animate stroke
  dd.style.strokeDashoffset = 440 - (440 * d) / 365;
  // 365 days in an year
  hh.style.strokeDashoffset = 440 - (440 * h) / 24;
  // 24 hours in a day
  mm.style.strokeDashoffset = 440 - (440 * m) / 60;
   // 60 minutes in an hours
   ss.style.strokeDashoffset = 440 - (440 * s) / 60;
    // 60 seconds in an minutes


  // animate circle dots
  day_dot.style.transform = `rotateZ(${ d * 0.986 }deg)`;
  // 360deg / 365days = 0.986
  hr_dot.style.transform = `rotateZ(${ h * 15 }deg)`;
  // 360deg / 24hours = 15
  min_dot.style.transform = `rotateZ(${ m * 6 }deg)`;
  // 360deg / 60 min = 15
  sec_dot.style.transform = `rotateZ(${ s * 6 }deg)`;
   // 360deg / 60 second = 15
   // if the countdown id over, white some text
   if (distance < 0) {
    clearInterval(x)
    document.getElementById('time').style.display = 'none';
    document.querySelector('.newYear').style.display = 'block';
   }
})




