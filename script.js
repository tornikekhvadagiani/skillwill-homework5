// ● შექმენი <button> და <div> ელემენტები და
// მიანიჭეთ საკუთარი უნიკალური id
// ● <div> - ში ჩაწერე პატარა random ტექსტი
// ● ღილაკზე დაჭერის შემთხვევაში დამალე
// <div> ელემენტი

const div = document.getElementById("div");
const btn = document.getElementById("mybtn");
btn.addEventListener("click", () => {
  div.style.display = "none";
});
// ● შექმენი შემდეგი სტრუქტურა JS -ის
// გამოყენებით და დაამატე DOM-ში:
// <div id=”card”>
// <h2>Gandalf</h2>
// <a href=”#”>Go to profile</a>
// </div>

const card = document.createElement("div");

card.setAttribute("id", "card");
const h2 = document.createElement("h2");
h2.textContent = "Gandalf";
const a = document.createElement("a");
a.setAttribute("href", "#");
// a.href = "#";
a.textContent = "Go to profile";
card.appendChild(h2);
card.appendChild(a);

document.body.appendChild(card);

// ● შექმენი quiz თამაში
// ● დაწერე რამდენიმე მოკლე შეკითხვა
// თავისი სავარაუდო პასუხებით
// ● სწორ პასუხზე დაჭერის შემთხვევაში
// გაამწვანე პასუხი
// ● არასწორი პასუხის შემთხვევაში გააწითლე
// ● ბონუს დავალება:
// გამოიტანე ეკრანზე ქულების რაოდენობა
// ➔ სწორი პასუხის შემთხვევაში დაამატე 1
// ქულა
// ➔ არასწორის შემთხვევაში უცვლელი რჩება

const quizData = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Rome"],
      answer: "Paris"
    },
    {
      question: "What is 5 + 3?",
      options: ["5", "8", "10", "15"],
      answer: "8"
    },
    {
      question: "Who wrote 'Hamlet'?",
      options: ["Shakespeare", "Hemingway", "Dickens", "Tolstoy"],
      answer: "Shakespeare"
    }
  ];
  
  let score = 0;
  const quizContainer = document.getElementById("quiz-container");
  const scoreDisplay = document.getElementById("score");
  
  quizData.forEach((item, index) => {
    // Create question container
    const questionContainer = document.createElement("div");
    questionContainer.classList.add("question");
  
    // Display the question
    const questionText = document.createElement("h3");
    questionText.textContent = `${index + 1}. ${item.question}`;
    questionContainer.appendChild(questionText);
  
    // Create options for each question
    item.options.forEach((option) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("option");
  
      // Event listener for checking answer
      button.addEventListener("click", () => {
        if (option === item.answer) {
          button.style.backgroundColor = "green";
          score++;
          scoreDisplay.textContent = `Score: ${score}`;
        } else {
          button.style.backgroundColor = "red";
        }
        // Disable all buttons after one click
        Array.from(questionContainer.getElementsByTagName("button")).forEach(btn => btn.disabled = true);
      });
  
      questionContainer.appendChild(button);
    });
  
    quizContainer.appendChild(questionContainer);
  });
  
