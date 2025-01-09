let myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox.svg") {
    myImage.setAttribute("src", "images/ball.png");
  } else {
    myImage.setAttribute("src", "images/firefox.svg");
  }
});

// Personalized welcome message code

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  let myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = "Mozilla is cool, " + myName;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.innerHTML = "Mozilla is cool, " + storedName;
}

myButton.onclick = function () {
  setUserName();
};
