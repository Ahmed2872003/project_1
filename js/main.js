/*start with header click*/
let click = document.getElementById("all_list"),
  list = document.querySelector(".down"),
  dec = true;
click.onclick = function () {
  if (dec == true) {
    list.classList.add("appear");
    dec = false;
  } else {
    list.classList.remove("appear");
    dec = true;
  }
};

/*end with header click*/

/*time counter in sec_10*/
let time = document.querySelectorAll(".time");
let countDown = new Date("12/31/2023 23:59:59");

let intevral = setInterval(() => {
  let diff = countDown.getTime() - new Date().getTime();
  if (diff <= 0) {clearInterval(intevral);return;}
  let days = Math.floor(diff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diff % (1000 * 60)) / 1000);
  
  time[0].innerHTML = days < 10 ? `0${days}` : days;
  time[1].innerHTML = hours < 10 ? `0${hours}` : hours;
  time[2].innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  time[3].innerHTML = seconds < 10 ? `0${seconds}` : seconds;
  
}, 1000);

/*end of counter */
/*start moving skills*/
let elem = document.querySelectorAll(".box_move");
let parent = document.getElementById("sec_8");

/*sat var*/
let stat = document.querySelectorAll(".stat_count"),
  count = 0,
  decision = true,
  stat_sec = document.getElementById("sec_13");

window.onscroll = function () {
  if (this.scrollY > parent.offsetTop - 30) {
    elem[0].style.width = "80%";
    elem[1].style.width = "85%";
    elem[2].style.width = "70%";
    elem[3].style.width = "80%";
  }

  /*start stat*/
  if (this.scrollY > stat_sec.offsetTop - 60) {
    if (decision == true) {
      let intevral = setInterval(counter, 0.5);
      function counter() {
        count++;
        if (count <= 150) stat[0].innerHTML = count;
        if (count <= 300) stat[1].innerHTML = count;
        if (count <= 550) stat[2].innerHTML = count;
        if (count <= 700) stat[3].innerHTML = count;
        if (count > 700) clearInterval(intevral);
      }
    }
    decision = false;
  }
  /*end stat*/
};

/*end moving skills*/
