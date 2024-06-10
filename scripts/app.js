//GET ARROW UPWARD BUTTON
let toTopButton = document.getElementById("myBtn");

//WHEN THE USER SCROLLS DOWN 20PX FROM THE TOP OF THE DOC, SHOW THE BUTTON
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTopButton.style.display = "block";
    toTopButton.style.transition.display = "3s";
  } else {
    toTopButton.style.display = "none";
    toTopButton.style.transition.display = "3s";
  }
}

//WHEN THE USER CLICKS ON THE BUTTON SCROLL TO THE TOP OF THE DOCUMENT
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// RESPONSIVE NAVBAR CODE
const navBar = document.querySelector(".navbar");
const closeButton = document.querySelector(".js-close-btn");
const menuButton = document.querySelector(".js-menu-btn");

menuButton.addEventListener("click", () => {
  navBar.style.right = 0;
  document.body.style.overflow = "hidden";
});
closeButton.addEventListener("click", () => {
  navBar.style.right = "-300px";
  document.body.style.overflow = "visible";
  // document.body.style.overflowX = "hidden";
});

// QUOTE MODAL
const getQuoteBtns = document.querySelectorAll(".js-quote-btn");
const quoteModal = document.querySelector(".js-quote-modal");
const closeBtn = document.getElementById("js-close-btn");
const quoteContainer = document.querySelector(".quote-container");
function showQuote() {
  getQuoteBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      quoteContainer.style.display = "block";
      document.body.style.overflow = "hidden";
    });
  });
}
function hideQuote() {
  closeBtn.addEventListener("click", () => {
    quoteContainer.style.display = "none";
    document.body.style.overflow = "visible";
  });
  // quoteContainer.addEventListener("click", (e) => {
  //   if (e.target == quoteContainer) {
  //     quoteContainer.style.display = "none";
  //     document.body.style.overflow = "visible";
  //   }
  // });
}
showQuote();
hideQuote();

// SEND EMAIL
const submitBtn = document.querySelector(".submit-button");
function sendEmail() {
  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };
  const serviceID = "service_mcm384k";
  const templateID = "template_3u88rdv";
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("your message sent successfully");
    })
    .catch((err) => console.log(err));
}
submitBtn.addEventListener("cllick", (e) => {
  e.preventDefault();
  sendEmail();
});

// SEND QUOTE REQUEST
const submitQuoteBtn = document.querySelector(".js-submit-quote");
function sendQuote() {
  const params = {
    name: document.querySelector(".js-quote-name").value,
    number: document.querySelector(".js-quote-number").value,
    email: document.querySelector(".js-quote-email").value,
    message: document.querySelector(".js-quote-message").value,
  };
  const serviceID = "service_8wiya1b";
  const templateID = "template_9yf39vy";
  emailjs
    .send(serviceID, templateID, params)
    .then((res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("your message sent successfully");
    })
    .catch((err) => console.log(err));
}

submitQuoteBtn.addEventListener("cllick", (e) => {
  e.preventDefault();
  sendQuote();
});

//copyright code
const yearSpan = document.querySelector(".year");

const date = new Date();
const year = date.getFullYear();
yearSpan.innerHTML = year;
