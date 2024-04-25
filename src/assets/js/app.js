const submitButton = document.getElementById("introBtn");
let counter = 0;

function enableButton() {
  submitButton.disabled = false;
}

function disableButton() {
  submitButton.disabled = true;
}

const userName = document.getElementById("userName");

submitButton.addEventListener("click", (e) => {
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
    setTimeout(() => {
      enableButton();
    }, 3000);
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
    question: "Questions A",
    answers: ["Answer 1A", "Answer 2A", "Answer 3A", "Answer 4A"],
    role: 1,
    completed: false
  },
  {
    question: "Questions B",
    answers: ["Answer 1B", "Answer 2B", "Answer 3B", "Answer 4B"],
    role: 2,
    completed: false
  },
  {
    question: "Questions C",
    answers: ["Answer 1C", "Answer 2C", "Answer 3C", "Answer 4C"],
    role: 3,
    completed: false
  },
];

const myBtn = document.getElementById("quizBtn");
const myTitle = document.getElementById("title");
const questionsList = document.getElementById("questionsList");
let quizCounter = 0;

myBtn.addEventListener("click", () => {
  quizCounter += 1;

  function multipleChoice() {
    if (quizCounter > 0 && quizCounter <= qaQuestions.length) {
      myTitle.innerText = qaQuestions[quizCounter - 1].question;
      questionsList.innerHTML = '';
      qaQuestions[quizCounter - 1].answers.forEach(answer => {
        const createBtn = document.createElement('button');
        createBtn.innerHTML = `<p>${answer}</p>`;
        questionsList.append(createBtn);
      });
      myTitle.innerText = qaQuestions[quizCounter - 1].question;
    }
  }

  multipleChoice();

  if (quizCounter > qaQuestions.length) {
    myTitle.innerText = 'End of Quiz';
    myBtn.disabled = true;
  }
});