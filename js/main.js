function result() {
  var userinput = document.getElementById("user")

  if (userinput.type == "password") {
    userinput.type = "text"
  }
  else {
    userinput.type = "password"
  }


}
function result1() {
  var userinput = document.getElementById("conf")

  if (userinput.type == "password") {
    userinput.type = "text"
  }
  else {
    userinput.type = "password"
  }


}


var url = 'https://wati-integration-prod-service.clare.ai/v2/watiWidget.js?91553';
var s = document.createElement('script');
s.type = 'text/javascript';
s.async = true;
s.src = url;
var options = {
  "enabled": true,
  "chatButtonSetting": {
    "backgroundColor": "red",
    "ctaText": "Chat with us",
    "borderRadius": "25",
    "marginLeft": "0",
    "marginRight": "20",
    "marginBottom": "20",
    "ctaIconWATI": false,
    "position": "right"
  },
  "brandSetting": {
    "brandName": "Wati",
    "brandSubTitle": "undefined",
    "brandImg": "https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg",
    "welcomeText": "Hi there!How can I help you?",
    "messageText": "Hello, %0A I have a question about {{page_link}}",
    "backgroundColor": "#00e785",
    "ctaText": "Chat with us",
    "borderRadius": "50",
    "autoShow": false,
    "phoneNumber": "923352894803"
  }
};
s.onload = function () {
  CreateWhatsappChatWidget(options);
};
var x = document.getElementsByTagName('script')[0];
x.parentNode.insertBefore(s, x);

var a = 0;

document.getElementById("itemnum").innerText = a;

function add(num) {
  document.getElementById("itemnum").innerHTML += "<li>" + num + "</li>";
  a = a + 1;

  document.getElementById("itemnum").innerText = a;

}

// Counter Start
// Function to animate the counter
function animateCounter(element, start, end, duration) {
  const range = end - start;
  const increment = end > start ? 1 : 0;
  const stepTime = Math.abs(Math.floor(duration / range));
  let currentValue = start;
  const timer = setInterval(function () {
    currentValue += increment;
    element.textContent = currentValue;
    if (currentValue === end) {
      clearInterval(timer);
    }
  }, stepTime);
}

// Function to initialize the counters when they are visible on the screen
function initCounters() {
  const counters = document.querySelectorAll('.counter-value');
  counters.forEach((counter) => {
    const targetValue = parseInt(counter.textContent);
    counter.textContent = '0';
    const counterParent = counter.closest('.counter');
    const counterTop = counterParent.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (counterTop < windowHeight) {
      animateCounter(counter, 0, targetValue, 2000); // Adjust the duration as needed
    }
  });
}

// Event listener to initialize counters when they come into the viewport
window.addEventListener('scroll', initCounters);

// Counter End



function openNav() {
  document.getElementById("myNav").classList.toggle("menu_width");
  document
    .querySelector(".custom_menu-btn")
    .classList.toggle("menu_btn-style");
}

// Modal Js

const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signin");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signin");
const signupLink = document.querySelector(".Signup-link a");
const loginText = document.querySelector(".title-text .login");
const signupText = document.querySelector(".title-text .signin");
signupBtn.onclick = (() => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
})
loginBtn.onclick = (() => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
})
signupLink.onclick = (() => {
  signupBtn.click();
  return false;
});

// Sweet alert 

function add() {
  swal("Good job!", "Your Car has been booked!", "success", {
    button: "Aww yiss!",
  });
};



// Sweet alert login

// function mod() {
//   swal("Good job!", "Login successfully!", "success", {
//     button: "Aww yiss!",
//   });
// };
