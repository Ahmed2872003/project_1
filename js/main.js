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
let D = document.querySelector(".Days"),
  H = document.querySelector(".Hours"),
  M = document.querySelector(".Minutes"),
  S = document.querySelector(".Seconds"),
  cD = 339, // 339
  cH = 23, // 23
  cM = 59, //
  cS = 59;
intevral = setInterval(time, 1000);
function time() {
  cS--;
  if (cS == 0) {
    cS = 59;
    cM--;
  }
  if (cM == 0) {
    cM = 59;
    cH--;
  }
  if (cH == 0) {
    cH = 23;
    cD--;
  }

  D.innerHTML = cD;
  H.innerHTML = cH;
  M.innerHTML = cM;
  S.innerHTML = cS;
  if (cD == 0) clearInterval(intevral);
}

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
      setInterval(() => {
        count++;
        if (count <= 150) stat[0].innerHTML = count;
        if (count <= 300) stat[1].innerHTML = count;
        if (count <= 550) stat[2].innerHTML = count;
        if (count <= 700) stat[3].innerHTML = count;
      }, 0.5);
    }
    decision = false;
  }
  /*end stat*/
};

/*end moving skills*/
