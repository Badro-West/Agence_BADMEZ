

//Javacript for video slider navigation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function(manual){
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});


// https://www.bytewebster.com/
// https://www.bytewebster.com/
// https://www.bytewebster.com/
const checkbox = document.getElementById("checkbox");
const professional = document.getElementById("professional");
const professional1 = document.getElementById("professional1");
const professional2 = document.getElementById("professional2");
const master = document.getElementById("master");
const master1 = document.getElementById("master1");
const master2 = document.getElementById("master2");
const basic = document.getElementById("basic");
const basic1 = document.getElementById("basic1");
const basic2 = document.getElementById("basic2");



checkbox.addEventListener("click", () => {
  basic.textContent = basic.textContent === "$199.99" ? "$19.99" : "$199.99";
  basic1.textContent = basic1.textContent ===  "MY SQL" ? "JAVASCRIPT" : "MY SQL";
  basic2.textContent = basic2.textContent ===  "PHP" ? "JQUERY" : "PHP";
  professional.textContent = professional.textContent === "$249.99" ? "$24.99 " : "$249.99";
  professional1.textContent = professional1.textContent === "MY SQL" ? "JAVASCRIPT" : "MY SQL";
  professional2.textContent = professional2.textContent === "LARAVEL" ? "REACT" : "LARAVEL";
  master.textContent = master.textContent === "$399.99" ? "$39.99" : "$399.99";
  master1.textContent = master1.textContent === "MY SQL" ? "JAVASCRIPT" : "MY SQL";
  master2.textContent = master2.textContent === "RUBY, .NET" ? "ANGULARE, VUE" : "RUBY, .NET";
});


