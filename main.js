// const typed = new type("title",{
//   Strings: ["Software Engineer", "Web Developer", "Frontend Designer"],
//   typeSpeed : 100 ,
//   backSpeed : 100,
//   backDelay : 1000,
//   loop: true
// });


const words = ["Software Engineer", "Web Developer", "Frontend Designer"];
const typingElement = document.getElementById("title");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;   // سرعة الكتابة (ms)
let deletingSpeed = 50;  // سرعة المسح (ms)
let delayBetweenWords = 1500; // وقت التوقف قبل المسح

function typeEffect() {
  const currentWord = words[wordIndex];
  const visibleText = currentWord.substring(0, charIndex);
  typingElement.textContent = visibleText;

  if (!isDeleting) {
    if (charIndex < currentWord.length) {
      charIndex++;
      setTimeout(typeEffect, typingSpeed);
    } else {
      // خلص كتابة الكلمة -> استنى شوية وبعدين امسح
      isDeleting = true;
      setTimeout(typeEffect, delayBetweenWords);
    }
  } else {
    if (charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, deletingSpeed);
    } else {
      // خلص مسح الكلمة -> روح للكلمة اللي بعدها
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, typingSpeed);
    }
  }
}

typeEffect();


// ============== SMOTHIE APPERANT =========================//
const logo = document.querySelector("header .logo")
const links = document.querySelectorAll(".navbar a")
const img = document.querySelector(".home img")
const content = document.querySelector(".home_content")
const icons = document.querySelectorAll(".home .home_content .icons a i");
const header3 = document.querySelector(".home_content h3")
const header1 = document.querySelector(".home_content h2")
const header2 = document.querySelector(".home_content h1")
const bio = document.querySelector(".home_content p")
const btn = document.querySelector(".home_content button")

window.addEventListener("load", () => {
  icons.forEach((ele, index) => {
    setTimeout(() => {
      ele.classList.add("icons_home");
    }, index * 250); 
  });
  links.forEach((ele, index) => {
    setTimeout(() => {
      ele.classList.add("icons_home");
    }, index * 200); 
  });
  img.classList.add("icons_home")
  content.classList.add("icons_home")
  header3.classList.add("icons_home")
  header1.classList.add("icons_home")
  header2.classList.add("icons_home")
  bio.classList.add("icons_home")
  btn.classList.add("icons_home")
  logo.classList.add("icons_home")
});

// ============== SMOTHIE APPERANT =========================//


const techs = document.querySelectorAll(".skills .container .tech h3")
const progress = document.querySelectorAll(".skills .container .progress")
const spans = document.querySelectorAll(".skills .container .progress span")

window.addEventListener("load",()=>{
  techs.forEach((ele)=>{
    ele.classList.add("icons_home")
  })
  progress.forEach((ele)=>{
    ele.classList.add("icons_home")
  })
  
})



// ================================== MENU ==========================

const show = document.querySelector(".menu")
const closeMenu = document.querySelector(".close")
const menu = document.querySelector(".main_menu")

show.addEventListener("click",()=>{
  menu.classList.add("show")
})

closeMenu.addEventListener("click",()=>{
  menu.classList.remove("show")
})



// ================================== MENU ==========================

// window.addEventListener("load", () => {
//   const spans = document.querySelectorAll(".skills .progress span");  
//   spans.forEach(span => {
//     const target = +span.dataset.target
//     let count = 0;
//     span.style.width = "0%";
//     span.style.setProperty("--percent", "'0%'");
//     const timer = setInterval(()=>{
//       if(count < target){
//         count++
//         span.style.setProperty("--percent", `'${count}%'`)
//         span.style.width = count + "%";
//       }else{
//         clearInterval(timer)
//       }
//     },40)
//   });
// });


// window.addEventListener("load",()=>{
//   const percentage = document.querySelectorAll("h5")
//   percentage.forEach((head)=>{
//     const percent = +head.dataset.target
//     let counter = parseInt(head.innerHTML)
//     setTimeout(()=>{
//       const progress = setInterval(()=>{
//         if(counter < percent){
//           counter = counter+1
//           head.innerHTML = `${counter}%`
//         }else{
//           clearInterval(progress)
//         }
//         },12)
        
//       },1000)
      
    
//   })
// })

// ============================== ABOUT $ CART ================
// لازم الأول تسجل الـ Plugin
gsap.registerPlugin(ScrollTrigger);

// الكود بتاعك
gsap.utils.toArray('.box').forEach((el ) => {
  gsap.to(el, {
  scrollTrigger: {
    trigger: el,
    start: "top 80%",
    toggleActions: "play none none none",
    // شرح:
    // onEnter: play
    // onLeave: reverse
    // onEnterBack: play
    // onLeaveBack: reverse
  },
  x: 0,
  y: 0,
  duration: 2,
  opacity:1,
  ease: "power2.out",


});
});
// ========================= ABOUT $ CART ================



// ======================= PROGRESS =============================
// =========================CONTENT============================
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.prog').forEach((el) => {
  let animationClass = el.dataset.animate; // يجيب الكلاس من data-animate

  ScrollTrigger.create({
    once: true ,
    trigger: el,
    start: "top 80%",
    onEnter: () => el.classList.add(animationClass),
    // onLeaveBack: () => el.classList.remove(animationClass) // لو رجعت تاني
    ease: "power2.out",
  });
});
// =========================CONTENT============================

// =============================== SPAN =======================
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".skills .progress span").forEach((span) => {
  let target = +span.dataset.target;

  ScrollTrigger.create({
    trigger: span,
    start: "top 100%",
    toggleActions: "play none none none", 
    once: true ,
    onEnter: () => fillBar(span, target),
    onEnterBack: () => fillBar(span, target),
    ease: "power2.out"
  });
});

function fillBar(span, target) {
  let count = 0;
  span.style.width = "0%";
  span.style.setProperty("--percent", "'0%'");

  let timer = setInterval(() => {
    if (count < target) {
      count++;
      span.style.setProperty("--percent", `'${count}%'`);
      span.style.width = count + "%";
    } else {
      clearInterval(timer);
    }
  }, 40);
}
// =============================== SPAN =======================


// ========================= PROGRESS ==============================




// ======================== PATH ===============================
gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray('.path').forEach((el) => {
  let animationClass = el.dataset.animate; // يجيب الكلاس من data-animate

  ScrollTrigger.create({
    trigger: el,
    start: "top 80%",
    once: true ,
    onEnter: () => el.classList.add(animationClass),
  });
});
//========================  PATH ===================================



// ============================= PERCENT =============================
gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll("text").forEach(head => {
  let percent = +head.dataset.target;
  let counter = { value: 0 }; // هنخزن الرقم هنا

  ScrollTrigger.create({
    trigger: head,
    start: "top 80%",
    once: true, // ✅ يشتغل مرة واحدة بس
    onEnter: () => {
      gsap.to(counter, {
        value: percent,
        duration: 2,
        ease: "power1.out",
        onUpdate: () => {
          head.innerHTML = `${Math.floor(counter.value)}%`;
        }
      });
    }
  });
});
// ============================= PERCENT =============================


// ========================== PROJECTS ====================
gsap.registerPlugin(ScrollTrigger);

// الكود بتاعك
gsap.utils.toArray('.project').forEach((el) => {
  gsap.to(el, {
  scrollTrigger: {
    trigger: el,
    start: "top 100%",
    toggleActions: "play none none none"
    // شرح:
    // onEnter: play
    // onLeave: reverse
    // onEnterBack: play
    // onLeaveBack: reverse
  },
  x: 0,
  y: 0,
  duration: 1.3,
  opacity:1,
  ease: "power1.out",

});
});

// ========================== PROJECTS ====================


gsap.registerPlugin(ScrollTrigger);

// الكود بتاعك
gsap.utils.toArray('.my_links').forEach((el , i) => {
  gsap.to(el, {
  scrollTrigger: {
    trigger: el,
    start: "top 80%",
    toggleActions: "play none none none",
    // شرح:
    // onEnter: play
    // onLeave: reverse
    // onEnterBack: play
    // onLeaveBack: reverse
  },
  x: 0,
  y: 0,
  duration: .03,
  opacity:1,
  ease: "power2.out",
  delay : i *.3 ,
});
});