// ======================================== Typing Animation ======================================
var typed = new Typed(".typing", {
  strings: [
    "",
    "Web Designer",
    " Web Developer",
    "Student",
    "Graphic Designer",
    "YouTuber",
    "Hacker",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});
// ======================================== Typing Animation ======================================
var typed = new Typed(".typing1", {
  strings: [
    "",
    "Web Designer",
    " Web Developer",
    "Student",
    "Graphic Designer",
    "YouTuber",
    "Hacker",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});
// ======================================== Aside ======================================
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
        // allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}

function removeBackSection() {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("back-section");
  }
}

function addBackSection(num) {
  allSection[num].classList.add("back-section");
}

function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}
document.querySelector(".hire-me").addEventListener("click", function () {
  // const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});
document.querySelector(".homes").addEventListener("click", function () {
  // const sectionIndex = this.getAttribute("data-section-index");
  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

// Email Send Using js
function sendEmail() {
  Email.send({
    // SecureToken : "afcf8de8-63ac-4320-a8ad-591ee8f2140e",
    Host: "smtp.gmail.com",
    Username: "trggamer02595@gmail.com",
    Password: "vnfzvnwcoehumojm",
    To: "amritgiri02595@gmail.com",
    From: document.getElementById("email").value,
    Subject: document.getElementById("subject").value,
    Body:
      "Name &emsp; &nbsp; &nbsp;: " +
      document.getElementById("name").value +
      "<br> Email &emsp; &nbsp; &nbsp; : " +
      document.getElementById("email").value +
      "<br>Phone No. : " +
      document.getElementById("phone").value +
      "<br>Address &nbsp; &nbsp; : " +
      document.getElementById("address").value +
      "<br>Message &nbsp; &nbsp;: " +
      document.getElementById("message").value,
  }).then(
    alert(
      "Message Sent Succesfully.\nPlease Check Your provide Email to see the reply.\nThanks for Contact."
    )
  );
}

// owl carousel script
$(document).ready(function () {
  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});
