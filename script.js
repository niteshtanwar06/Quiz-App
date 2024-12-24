document.addEventListener('DOMContentLoaded', () => {
  // Elements
  const homePage = document.getElementById('home-page');
  const quizPage = document.getElementById('quiz-page');
  const resultPage = document.getElementById('result-page');
  const startQuizButton = document.getElementById('start-quiz');
  const startAgainButton = document.getElementById('start-again');
  const goHomeButton = document.getElementById('go-home');
  const nameInput = document.getElementById('name');
  const participantName = document.getElementById('participant-name');
  const questionElement = document.getElementById('question');
  const optionsContainer = document.getElementById('options');
  const totalQuestionsElement = document.getElementById('total-questions');
  const attemptedElement = document.getElementById('attempted');
  const correctAnswersElement = document.getElementById('correct-answers');
  const wrongAnswersElement = document.getElementById('wrong-answers');
  const scorePercentageElement = document.getElementById('score-percentage');
  const timerElement = document.getElementById('time');
  const timeTakenElement = document.getElementById('time-taken'); // Total time taken
  const categoryButtons = document.querySelectorAll('.category-btn');
  
  // Questions
  let selectedCategory = "";
  const questions = {
    "HTML": [
      {
        question: "HTML stands for -",
        options: ["HighText Machine Language", "HyperText and links Markup Language", "HyperText Markup Language", "None of these"],
        correct: 2,
      },
      {
        question: "The correct sequence of HTML tags for starting a webpage is -",
        options: ["Head, Title, HTML, body", "Body, Title, Head, HTML", "HTML, Head, Title, Body", "HTML, Head, Title, Body"],
        correct: 3,
      },
      {
        question: "Which of the following element is responsible for making the text bold in HTML?",
        options: ["<pre>", "<a>", "<b>", "<br>"],
        correct: 2,
      },
      {
        question: "How to create an unordered list (a list with the list items in bullets) in HTML?",
        options: ["<ul>", "<ol>", "<li>", "<i>"],
        correct: 0,
      },
      {
        question: "How to create a hyperlink in HTML?",
        options: ["<a href = 'www.javatpoint.com'> javaTpoint.com </a>", "<a url = 'www.javatpoint.com'> javaTpoint.com /a>", "<a link = www.javatpoint.com> javaTpoint.com </a>", "<a> www.javatpoint.com <javaTpoint.com /a>"],
        correct: 0,
      },
      {
        question: "How to add a background color in HTML?",
        options: ["<marquee bg color: 'red'>", "<marquee bg-color = 'red'>", "<marquee bgcolor = 'red'>", "<marquee color = 'red'>"],
        correct: 2,
      },
      {
        question: "<input> is -",
        options: ["a format tag.", "an empty tag.", "All of the above", "None of the above"],
        correct: 1,
      },
      {
        question: " Which of the following tag is used to add rows in the table?",
        options: ["<td> and </td>", "<th> and </th>", "<tr> and </tr>", "None of the above"],
        correct: 2,
      },
      {
        question: "The <hr> tag in HTML is used for -",
        options: ["new line", "vertical ruler", "new paragraph", "horizontal ruler"],
        correct: 3,
      },
      {
        question: "Which of the following HTML tag is the special formatting tag?",
        options: ["<p>", "<b>", "<pre>", "None of the above"],
        correct: 2,
      },
    ],
    "CSS": [
      {
        question: "Which of the following CSS property is used to specify whether the table cells share the common or separate border?",
        options: ["border-collapse", "border-radius", "border-spacing", "None of the above"],
        correct: 0,
      },
      {
        question: "The property in CSS used to change the background color of an element is -",
        options: ["bgcolor", "color", "background-color", "All of the above"],
        correct: 2,
      },
      {
        question: "The CSS property used to control the element's font-size is -",
        options: ["text-style", "text-size", "font-size", "None of the above"],
        correct: 2,
      },
      {
        question: "Which of the following property is used as the shorthand property for the padding properties?",
        options: ["padding-left", "padding-right", "padding", "All of the above"],
        correct: 2,
      },
      {
        question: "The CSS property used to make the text bold is -",
        options: ["font-weight : bold", "weight: bold", "ont: bold", "style: bold"],
        correct: 0,
      },
      {
        question: " The CSS property used to specify whether the text is written in the horizontal or vertical direction?",
        options: ["writing-mode", "text-indent", "word-break", "None of the above"],
        correct: 0,
      },
      {
        question: "Which of the following syntax is correct in CSS to make each word of a sentence start with a capital letter?",
        options: ["text-style : capital;", "transform : capitalize;", "text-transform : capital;", "text-transform : capitalize;"],
        correct: 3,
      },
      {
        question: " Which of the following is the correct syntax to select all paragraph elements in a div element?",
        options: ["div p", "p", "div#p", "div ~ p"],
        correct: 0,
      },
      {
        question: "Which of the following is the correct syntax to select the p siblings of a div element?",
        options: ["p", "div + p", "div p", "div ~ p"],
        correct: 3,
      },
      {
        question: "The CSS property used to draw a line around the elements outside the border?",
        options: ["border", "outline", "padding", "line"],
        correct: 0,
      }
    ],
    "Javascript": [
      {
        question: "Which type of JavaScript language is ___",
        options: ["Object-Oriented", "Object-Based", "Assembly-language", "High-level"],
        correct: 1,
      },
      {
        question: "Which one of the following also known as Conditional Expression:",
        options: ["Alternative to if-else", "Switch statement", "If-then-else statement", "immediate if"],
        correct: 3,
      },
      {
        question: "In JavaScript, what is a block of statement?",
        options: ["Conditional block", "block that combines a number of statements into a single compound statement", "both conditional block and a single statement", "block that contains a single statement"],
        correct: 1,
      },
      {
        question: "Which one of the following is the correct way for calling the JavaScript code?",
        options: ["Preprocessor", "Triggering Event", "RMI", "Function/Method"],
        correct: 3,
      }, 
      {
        question: "Which of the following type of a variable is volatile?",
        options: ["Mutable variable", "Dynamic variable", "Volatile variable", "Immutable variable"],
        correct: 0,
      }, 
      {
        question: "When there is an indefinite or an infinite value during an arithmetic computation in a program, then JavaScript prints______.",
        options: ["Prints an exception error", "Prints an overflow error", "Displays 'Infinity'", "Prints the value as such"],
        correct: 2,
      }, 
      {
        question: " In the JavaScript, which one of the following is not considered as an error:",
        options: ["Syntax error", "Missing of semicolons", "Division by zero", "Missing of Bracket"],
        correct: 2,
      }, 
      {
        question: " Which of the following givenfunctions of the Number Object formats a number with a different number of digits to the right of the decimal?",
        options: ["toExponential()", "toFixed()", "toPrecision()", "toLocaleString()"],
        correct: 1,
      }, 
      {
        question: "Which of the following number object function returns the value of the number?",
        options: ["toString()", "valueOf()", "toLocaleString()", "toPrecision()"],
        correct: 1,
      }, 
      {
        question: " In JavaScript the x===y statement implies that:",
        options: ["Both x and y are equal in value, type and reference address as well.", "Both are x and y are equal in value only.", "Both are equal in the value and data type.", "Both are not same at all."],
        correct: 2,
      },
    ],
    "React": [
      {
        question: "Which of the following is the correct name of React.js?",
        options: ["React", "React.js", "ReactJS", "All of the above"],
        correct: 3,
      },
      {
        question: "Which of the following are the advantages of React.js?",
        options: ["React.js can increase the application's performance with Virtual DOM.", "React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.", "React.js can render both on client and server side.", "All of the above"],
        correct: 3,
      }, 
      {
        question: "Which of the following is not a disadvantage of React.js?",
        options: ["React.js has only a view layer. We have put your code for Ajax requests, events and so on.", "The library of React.js is pretty large.", "The JSX in React.js makes code easy to read and write.", "The learning curve can be steep in React.js."],
        correct: 2,
      }, 
      {
        question: "What of the following is used in React.js to increase performance?",
        options: ["Original DOM", "Virtual DOM", "Both A and B.", "None of the above."],
        correct: 1,
      }, 
      {
        question: " A class is a type of function, but instead of using the keyword function to initiate it, which keyword do we use?",
        options: ["Constructor", "Class", "Object", "DataObject"],
        correct: 1,
      }, 
      {
        question: "Which of the following acts as the input of a class-based component?",
        options: ["Class", "Factory", "Render", "Props"],
        correct: 3,
      }, 
      {
        question: "Which of the following keyword is used to create a class inheritance?",
        options: ["Create", "Inherits", "Extends", "This"],
        correct: 2,
      }, 
      {
        question: "How many numbers of elements a valid react component can return?",
        options: ["1", "2", "4", "5"],
        correct: 0,
      }, 
      {
        question: "What is the declarative way to render a dynamic list of components based on values in an array?",
        options: ["Using the reduce array method", "Using the <Each /> component", "Using the Array.map() method", "With a for/while loop"],
        correct: 2,
      }, 
      {
        question: "How many ways of defining your variables in ES6?",
        options: ["1", "3", "4", "5"],
        correct: 1,
      },
    ],
  };

  let score = 0;
  let currentQuestionIndex = 0;
  let attempted = 0;
  let totalSeconds = 0;
  let timerInterval;
  let questionTimerInterval;
  

  // Category Selection
  categoryButtons.forEach((button) => {
    button.addEventListener('click', () => {
      selectedCategory = button.getAttribute('data-category');
      categoryButtons.forEach((btn) => {
        btn.style.backgroundColor = btn === button ? "#04d8e7" : "#f0f8ff";
        btn.style.color = btn === button ? "#000000" : "#04d8e7";
      });
    });
  });

  // Start Quiz
  startQuizButton.addEventListener('click', () => {
    const name = nameInput.value.trim();
    if (!name) {
      alert('Please enter your name!');
      return;
    }
    if (!selectedCategory) {
      alert('Please select a category!');
      return;
    }

    participantName.textContent = name;
    homePage.classList.remove('active');
    quizPage.classList.add('active');

    startTimer();
    loadQuestion();
  });

  function loadQuestion() {
    const categoryQuestions = questions[selectedCategory];
    if (currentQuestionIndex >= categoryQuestions.length) {
      showResults();
      return;
    }

    const currentQuestion = categoryQuestions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach((option, index) => {
      const button = document.createElement('button');
      button.textContent = option;
      button.onclick = () => checkAnswer(index);
      optionsContainer.appendChild(button);
    });
    resetQuestionTimer();

    updateCircleContent(currentQuestionIndex + 1);
  }

  function updateCircleContent(questionNumber) {
    const styleSheet = document.styleSheets[0];
    styleSheet.insertRule(`#question-container::after {
      content: '${questionNumber}/${questions[selectedCategory].length}';
    }`, styleSheet.cssRules.length);
  }

  // Timer Functions
  function startTimer() {
    timerInterval = setInterval(() => {
      totalSeconds++;
      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;
      timerElement.textContent = `Time: ${pad(minutes)}:${pad(seconds)}`;
    }, 1000);
  }
  function resetQuestionTimer() {
    clearInterval(questionTimerInterval);
    questionTimer = 0;

    questionTimerInterval = setInterval(() => {
      questionTimer++;
      if (questionTimer >= 30) {
        currentQuestionIndex++;
        loadQuestion();
      }
    }, 1000);
  }

  function stopTimer() {
    clearInterval(timerInterval);
  }

  function resetTimer() {
    stopTimer();
    totalSeconds = 0;
    timerElement.textContent = "Time: 00:00";
  }

  function pad(value) {
    return value < 10 ? `0${value}` : value;
  }

  // Check Answer
  function checkAnswer(selectedIndex) {
    attempted++;
    const currentQuestion = questions[selectedCategory][currentQuestionIndex];
    if (selectedIndex === currentQuestion.correct) {
      score++;
    }
    currentQuestionIndex++;
    loadQuestion();
  }

  // Show Results
  function showResults() {
    stopTimer();
    quizPage.classList.remove('active');
    resultPage.classList.add('active');

    const categoryQuestions = questions[selectedCategory];
    totalQuestionsElement.textContent = categoryQuestions.length;
    attemptedElement.textContent = attempted;
    correctAnswersElement.textContent = score;
    wrongAnswersElement.textContent = attempted - score;
    scorePercentageElement.textContent = ((score / categoryQuestions.length) * 100).toFixed(2);

    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalSecondsRemaining = totalSeconds % 60;
    const formattedTime = `${pad(totalMinutes)}:${pad(totalSecondsRemaining)}`;
    timeTakenElement.textContent = `Total Time Taken: ${formattedTime}`;
  }

  // Reset Quiz
  function resetQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    attempted = 0;
    resetTimer();
    homePage.classList.add('active');
    quizPage.classList.remove('active');
    resultPage.classList.remove('active');
  }

  // Event Listeners
  startAgainButton.addEventListener('click', resetQuiz);
  goHomeButton.addEventListener('click', resetQuiz);
});






