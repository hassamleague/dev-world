let mark = document.getElementById("mark");
let mark1 = document.getElementById("mark1");
let mark2 = document.getElementById("mark2");
let minus = document.getElementById("minus");
let minus1 = document.getElementById("minus1");
let minus2 = document.getElementById("minus2");
let q1 = document.getElementById("q1");
let q2 = document.getElementById("q2");
let q3 = document.getElementById("q3");
let text = document.getElementById("text");
let text1 = document.getElementById("text1");
let text2 = document.getElementById("text2");
let para = document.getElementById("para");
let para1 = document.getElementById("para1");
let para2 = document.getElementById("para2");
let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

mark.addEventListener("click", () => {
  minus.style.display = "block";
  mark.style.display = "none";
  q1.style.height = "150px";
  q1.style.transition = "all ease-in-out 0.3s";
  btn.style.display = "block";
  text.style.display = "block";
  minus1.style.display = "none";
  mark1.style.display = "block";
  q2.style.height = "70px";
  q2.style.transition = "all ease-in-out 0.3s";
  text1.style.display = "none";
  para1.style.display = "none";
  btn1.style.display = "none";
  minus2.style.display = "none";
  mark2.style.display = "block";
  q3.style.height = "70px";
  q3.style.transition = "all ease-in-out 0.3s";
  text2.style.display = "none";
  para2.style.display = "none";
  btn2.style.display = "none";

});

mark1.addEventListener("click", () => {
  minus1.style.display = "block";
  mark1.style.display = "none";
  q2.style.height = "150px";
  q2.style.transition = "all ease-in-out 0.3s";
  btn1.style.display = "block";
  text1.style.display = "block";
  minus.style.display = "none";
  mark.style.display = "block";
  q1.style.height = "70px";
  q1.style.transition = "all ease-in-out 0.3s";
  text.style.display = "none";
  para.style.display = "none";
  btn.style.display = "none";
  minus2.style.display = "none";
  mark2.style.display = "block";
  q3.style.height = "70px";
  q3.style.transition = "all ease-in-out 0.3s";
  text2.style.display = "none";
  para2.style.display = "none";
  btn2.style.display = "none";
});

mark2.addEventListener("click", () => {
  minus2.style.display = "block";
  mark2.style.display = "none";
  q3.style.height = "150px";
  q3.style.transition = "all ease-in-out 0.3s";
  btn2.style.display = "block";
  text2.style.display = "block";
  minus.style.display = "none";
  mark.style.display = "block";
  q1.style.height = "70px";
  q1.style.transition = "all ease-in-out 0.3s";
  text.style.display = "none";
  para.style.display = "none";
  btn.style.display = "none";
  minus1.style.display = "none";
  mark1.style.display = "block";
  q2.style.height = "70px";
  q2.style.transition = "all ease-in-out 0.3s";
  text1.style.display = "none";
  para1.style.display = "none";
  btn1.style.display = "none";
});

minus.addEventListener("click", () => {
  minus.style.display = "none";
  mark.style.display = "block";
  q1.style.height = "70px";
  q1.style.transition = "all ease-in-out 0.3s";
  text.style.display = "none";
  para.style.display = "none";
  btn.style.display = "none";

});

minus1.addEventListener("click", () => {
  minus1.style.display = "none";
  mark1.style.display = "block";
  q2.style.height = "70px";
  q2.style.transition = "all ease-in-out 0.3s";
  text1.style.display = "none";
  para1.style.display = "none";
  btn1.style.display = "none";
});

minus2.addEventListener("click", () => {
  minus2.style.display = "none";
  mark2.style.display = "block";
  q3.style.height = "70px";
  q3.style.transition = "all ease-in-out 0.3s";
  text2.style.display = "none";
  para2.style.display = "none";
  btn2.style.display = "none";
});

btn.addEventListener("click", () => {
  if (text.value != "") {
    para.innerText = text.value;
    para.style.display = "block";
    q1.style.height = "300px";
  } else {
    para.innerText = " ";
    q1.style.height = "150px";
    para.style.display = "none";
  }
});

btn1.addEventListener("click", () => {
  if (text1.value != "") {
    para1.innerText = text1.value;
    para1.style.display = "block";
    q2.style.height = "300px";
  } else {
    para1.innerText = ' ';
    q2.style.height = "150px";
    para1.style.display = "none";
  }
});

btn2.addEventListener("click", () => {
  if (text2.value != "") {
    para2.innerText = text2.value;
    para2.style.display = "block";
    q3.style.height = "300px";
  } else {  
    para2.innerText=' '
    q3.style.height='150px'
    para2.style.display='none'
    
  }
});
