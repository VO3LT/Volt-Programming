let body = document.getElementById("body");
let nam = document.getElementById("name");
let email = document.getElementById("email");
let submit = document.getElementById("submit");
let form = document.getElementById("form");
let homeImgs = document.getElementById("homeImgs");
let darkNight = document.querySelector(".night");
let darkLight = document.querySelector(".light");


// خاصية التحميل
window.onload = function () {
  let spinner = document.getElementById("sp");
  document.body.style.overflow = "hidden";

  setTimeout(function () {
    spinner.style.display = 'none';
    document.body.style.overflow = "auto";
  }, 000)
}

// خاصية الدراك مود
let darkMoodLocal = localStorage.getItem("darkMoodLocal");

darkNight.onclick = function () {
  body.classList.add("dark");
  localStorage.setItem("darkMoodLocal", "night");
}

darkLight.onclick = function () {
  body.classList.remove("dark");
  localStorage.setItem("darkMoodLocal", "ligth");
}


if (darkMoodLocal !== null) {
  if (darkMoodLocal === "night") {
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
};

// الذهاب للقسم عند الضغط على اللينك الخاص بى
let section = document.querySelectorAll(".navbar ul li .home-link");

function scrollToSomeWhere(elements) {
  elements.forEach(ele => {
      ele.addEventListener("click", (e) => {
          e.preventDefault();
          document.querySelector(e.target.dataset.section).scrollIntoView({
              behavior: 'smooth'
          });
      });
  });
}

scrollToSomeWhere(section);

// اضافة كلاس للعنصر لما تضغط عليه وحذف الكلاس لما تضغط عليه تانى
let ulLi = document.querySelectorAll("ul li");

ulLi.forEach((li) => {
  li.addEventListener("click", (e) =>  {
    ulLi.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

// تغير خلفية الديف كل مده
let imgsArray = ["ahmed-1.jpg", "ahmed-2.jpg", "ahmed-3.jpg", "ahmed-4.jpg", "ahmed-5.jpg"];

setInterval(() => {
  let randomNumber = Math.floor(Math.random() * imgsArray.length);
  homeImgs.style.backgroundImage = 'url("imgs/'+ imgsArray[randomNumber] +'")';
}, 20000);


// تنفيذ اكشن محدد عند الوصول الى السكشن
// let skills = document.querySelector(".our-skills");
// let span = document.querySelectorAll(".prog-holder span");

// window.onscroll = function () {
//   if (window.scrollY >= skills.offsetTop - 50) {
//     span.forEach((span) => {
//       span.style.width = span.dataset.width;
//     })
//   }
// };



// skills
// const block = document.querySelectorAll('.block');

// window.addEventListener('load', function(){
// block.forEach(item => {
//   let numElement = item.querySelector('.num');
//   let num = parseInt(numElement.innerText);
//   let count = 0;
//   let time = 2000 / num;
//   let circle = item.querySelector('.circle');

//   setInterval(() => {
//     if(count == num){
//       clearInterval();
//     } else {
//       count += 1;
//       numElement.innerText = count;
//     }
//   }, time);

//   circle.style.strokeDashoffset = 503 - ( 503 * ( num / 100 ));
//   let dots = item.querySelector('.dots');
//   dots.style.transform = `rotate(${360 * (num / 100)}deg)`;
//   if(num == 100){
//     dots.style.opacity = 0;
//   }
// })
// });



// تنفيذ اكشن محدد عند الوصول الى السكشن
// let skills = document.querySelector(".row.our-skills");
// let nums = document.querySelectorAll(".number .num");
// let started = false;

// nums.forEach((nuum) => startcount(nuum));

// window.onscroll = function () {
//   if (window.scrollY >= skills.offsetTop - 50) {
//     if (!started) {
//       nums.forEach((nuum) => startcount(nuum));
//     }
//     started = true;
//   }
// }

// function startcount(ele) {
//   let goal = ele.dataset.goal;
//   let count = setInterval(() => {
//     ele.textContent++;
//     if (ele.textContent == goal) {
//       clearInterval(count);
//     }
//   }, 100 / goal);
// };

// console.log(goal);

// startcount(document.querySelectorAll(".number .nums")[5]);





// window.onscroll = function () {
  // if (window.scrollY >= skills.offsetTop - 50) {
    // numElement.forEach((numElement) => {
      // numElement.innerHTML = numElement.dataset.number;
    // });
  // }
// };




let skills = document.querySelector(".row.our-skills");
let nums = document.querySelectorAll(".number .num");
let started = false;


window.onscroll = function () {
let skillsOffsetTop = skills.offsetTop;
let skillsOuterHwigth = skills.offsetHeight;
let windowHeight = this.innerHeight;
let windowScrollTop = this.pageYOffset;

if (windowScrollTop > (skillsOffsetTop + skillsOuterHwigth - windowHeight)) {
  const block = document.querySelectorAll('.block');

    block.forEach(item => {
      let numElement = item.querySelector('.num');
      let num = parseInt(numElement.innerText);
      let circle = item.querySelector('.circle');

    
      circle.style.strokeDashoffset = 503 - ( 503 * ( num / 100 ));
      let dots = item.querySelector('.dots');
      dots.style.transform = `rotate(${360 * (num / 100)}deg)`;
    });

  if (!started) {
    nums.forEach((nuum) => startcount(nuum));
  }
  started = true;



  function startcount(ele) {
    let goal = ele.dataset.goal;
    let count = setInterval(() => {
      ele.textContent++;
      if (ele.textContent == goal) {
        clearInterval(count);
      }
    }, 1000 / goal);
  };

  };
};