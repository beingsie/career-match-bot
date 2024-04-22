const submitButton = document.getElementById("submitBtn");
let counter = 0;

function enableButton() {
  submitButton.disabled = false;
}

function disableButton() {
  submitButton.disabled = true;
}

const userName = document.getElementById("userName");
const userNameValue = userName.value.trim();

submitButton.addEventListener("click", (e) => {
  const userName = document.getElementById("userName");
  const userNameValue = userName.value.trim();

  counter += 1;
  disableButton();
  botChat(userNameValue);
  console.log("Button clicked " + counter + " times.");
});

function getFormattedTimestamp() {
  const dateNow = new Date();
  const options = { hour12: true, hour: "numeric", minute: "2-digit" };
  return dateNow.toLocaleTimeString(undefined, options);
}

function botChat(userNameValue) {
  const chatMsg = document.getElementById("chatMsg");
  const chatBotMessages = [
    "Hey thanks for showing interest in our current available roles here at Beingsie Inc.",
    "Get started by entering your first name or Codedex username if you’re a member!",
    `<span>Great to meet you, <span style="text-transform: capitalize;">${userNameValue}</span>! As your first-ever <span style="font-style: italic;">quizssessment</span> guide, I'll make sure to match you with the role that best suits you.</span>`,
    "Let us begin!",
    "Good luck ~",
  ];

  if (counter === 1) {
    setTimeout(() => {
      chatMsg.innerHTML += `
        <div class="chatBotMsg"><span class="timestamp">${getFormattedTimestamp()}:</span> ${chatBotMessages[0]
        }</div>
      `;
    }, 1000);
    setTimeout(() => {
      chatMsg.innerHTML += `
        <div class="chatBotMsg"><span class="timestamp">${getFormattedTimestamp()}:</span> ${chatBotMessages[1]
        }</div>
      `;
    }, 3000);
    setTimeout(() => {
      enableButton();
    }, 4000);
  } else if (counter === 2) {
    setTimeout(() => {
      chatMsg.innerHTML += `
        <div class="chatBotMsg"><span class="timestamp">${getFormattedTimestamp()}:</span> ${chatBotMessages[2]
        }</div>
      `;
    }, 1000);
  } else if (counter === 3) {
    setTimeout(() => {
      chatMsg.innerHTML += `
        <div class="chatBotMsg"><span class="timestamp">${getFormattedTimestamp()}:</span> ${chatBotMessages[3]
        }</div>
      `;
    }, 1000);
    setTimeout(() => {
      chatMsg.innerHTML += `
        <div class="chatBotMsg"><span class="timestamp">${getFormattedTimestamp()}:</span> ${chatBotMessages[4]
        }</div>
      `;
    }, 3000);
  } else {
    console.log("Counter is " + counter + ", no messages to display.");
  }
}

const qaQuestions = [
  {
    question: "Questions 1",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    role: 1,
  },
  {
    question: "Questions 2",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    role: 2,
  },
  {
    question: "Questions 3",
    answers: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    role: 3,
  },
];

// let userRole = 0;

// if (userRole === 1) {
//   userRole = "Role 1";
// } else if (userRole === 2) {
//   userRole = "Role 2";
// } else {
//   userRole = "Role 3";
// }

// console.log("User role is: " + userRole);
