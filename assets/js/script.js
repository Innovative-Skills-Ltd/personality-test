
document.addEventListener('DOMContentLoaded', () => {
    // Function to toggle asterisk visibility
    const toggleAsteriskVisibility = (inputId, starId) => {
      const input = document.getElementById(inputId);
      const star = document.getElementById(starId);
  
      input.addEventListener('input', () => {
        if (input.value.trim() !== "") {
          star.style.display = 'none'; // Hide asterisk if input has value
        } else {
          star.style.display = 'inline'; // Show asterisk if input is empty
        }
      });
    };
  
    // Apply to each input field
    toggleAsteriskVisibility('nameInput', 'nameStar');
    toggleAsteriskVisibility('mobileInput', 'mobileStar');
    toggleAsteriskVisibility('emailInput', 'emailStar');
  });
  


  const questions = [
    {
      title: "1. Nyder du at være spontan og holde dine muligheder åbne?",
      description: "Enhver beskrivelse relateret til spørgsmålene.",
      options: ["Helt enig", "Delvist enig", "Neutral / Usikker", "Delvist uenig", "Helt uenig"],
    },
    {
      title: "2. Foretrækker du at tilbringe weekender stille hjemme fremfor at gå ud?",
      description: "Enhver beskrivelse relateret til spørgsmålene.",
      options: ["Helt enig", "Delvist enig", "Neutral / Usikker", "Delvist uenig", "Helt uenig"],
    },
    {
      title: "3. Føler du dig mere energisk, når du er omgivet af mennesker?",
      description: "Enhver beskrivelse relateret til spørgsmålene.",
      options: ["Helt enig", "Delvist enig", "Neutral / Usikker", "Delvist uenig", "Helt uenig"],
    },
    {
      title: "4. Sætter og overholder du nemt deadlines?",
      description: "Enhver beskrivelse relateret til spørgsmålene.",
      options: ["Helt enig", "Delvist enig", "Neutral / Usikker", "Delvist uenig", "Helt uenig"],
    },
    {
      title: "5. Bliver dine beslutninger ofte påvirket af, hvordan de vil påvirke andre følelsesmæssigt?",
      description: "Enhver beskrivelse relateret til spørgsmålene.",
      options: ["Helt enig", "Delvist enig", "Neutral / Usikker", "Delvist uenig", "Helt uenig"],
    },
    {
      title: "6. Kan du lide at diskutere symbolske eller metaforiske fortolkninger af en historie?",
      description: "Enhver beskrivelse relateret til spørgsmålene.",
      options: ["Helt enig", "Delvist enig", "Neutral / Usikker", "Delvist uenig", "Helt uenig"],
    },
    {
      title: "7. Stræber du efter at opretholde harmoni i gruppeindstillinger, selvom det betyder kompromiser?",
      description: "Enhver beskrivelse relateret til spørgsmålene.",
      options: ["Helt enig", "Delvist enig", "Neutral / Usikker", "Delvist uenig", "Helt uenig"],
    },
    {
      title: "8. Når en ven er ked af det, er din første instinkt at tilbyde følelsesmæssig støtte fremfor løsninger?",
      description: "Enhver beskrivelse relateret til spørgsmålene.",
      options: ["Helt enig", "Delvist enig", "Neutral / Usikker", "Delvist uenig", "Helt uenig"],
    },
    {
      title: "9. I argumenter fokuserer du mere på at være rationel end på folks følelser?",
      description: "Enhver beskrivelse relateret til spørgsmålene.",
      options: ["Helt enig", "Delvist enig", "Neutral / Usikker", "Delvist uenig", "Helt uenig"],
    },
    {
      title: "10. Når du lærer noget nyt, foretrækker du praktisk erfaring fremfor teori?",
      description: "Enhver beskrivelse relateret til spørgsmålene.",
      options: ["Helt enig", "Delvist enig", "Neutral / Usikker", "Delvist uenig", "Helt uenig"],
    },
    {
      title: "11. Tænker du ofte over, hvordan handlinger i dag vil påvirke fremtiden?",
      description: "Enhver beskrivelse relateret til spørgsmålene.",
      options: ["Helt enig", "Delvist enig", "Neutral / Usikker", "Delvist uenig", "Helt uenig"],
    },
    {
      title: "12. Er du komfortabel med at tilpasse dig nye situationer, mens de sker?",
      description: "Enhver beskrivelse relateret til spørgsmålene.",
      options: ["Helt enig", "Delvist enig", "Neutral / Usikker", "Delvist uenig", "Helt uenig"],
    },
    {
      title: "13. Foretrækker du at udforske forskellige muligheder, før du træffer en beslutning?",
      description: "Enhver beskrivelse relateret til spørgsmålene.",
      options: ["Helt enig", "Delvist enig", "Neutral / Usikker", "Delvist uenig", "Helt uenig"],
    },
    {
      title: "14. Til fester, starter du samtaler med nye mennesker?",
      description: "Enhver beskrivelse relateret til spørgsmålene.",
      options: ["Helt enig", "Delvist enig", "Neutral / Usikker", "Delvist uenig", "Helt uenig"],
    },
    {
      title: "15. Når du står over for et problem, foretrækker du så at diskutere det med andre?",
      description: "Enhver beskrivelse relateret til spørgsmålene.",
      options: ["Helt enig", "Delvist enig", "Neutral / Usikker", "Delvist uenig", "Helt uenig"],
    },
    {
      title: "16. Når du træffer beslutninger, prioriterer du logik fremfor personlige overvejelser?",
      description: "Enhver beskrivelse relateret til spørgsmålene.",
      options: ["Helt enig", "Delvist enig", "Neutral / Usikker", "Delvist uenig", "Helt uenig"],
    },
    {
      title: "17. Finder du ofte ensomhed mere forfriskende end sociale sammenkomster?",
      description: "Enhver beskrivelse relateret til spørgsmålene.",
      options: ["Helt enig", "Delvist enig", "Neutral / Usikker", "Delvist uenig", "Helt uenig"],
    },
    {
      title: "18. Foretrækker du at have en klar plan og ikke bryder dig om uventede ændringer?",
      description: "Enhver beskrivelse relateret til spørgsmålene.",
      options: ["Helt enig", "Delvist enig", "Neutral / Usikker", "Delvist uenig", "Helt uenig"],
    },
    {
      title: "19. Finder du tilfredsstillelse i at færdiggøre opgaver og træffe endelige beslutninger?",
      description: "Enhver beskrivelse relateret til spørgsmålene.",
      options: ["Helt enig", "Delvist enig", "Neutral / Usikker", "Delvist uenig", "Helt uenig"],
    },
    {
      title: "20. Har du en tendens til at bearbejde dine tanker internt, før du taler?",
      description: "Enhver beskrivelse relateret til spørgsmålene.",
      options: ["Helt enig", "Delvist enig", "Neutral / Usikker", "Delvist uenig", "Helt uenig"],
    },
    {
      title: "21. Er du mere interesseret i at udforske abstrakte teorier og fremtidige muligheder?",
      description: "Enhver beskrivelse relateret til spørgsmålene.",
      options: ["Helt enig", "Delvist enig", "Neutral / Usikker", "Delvist uenig", "Helt uenig"],
    },
    {
      title: "22. Når du planlægger en ferie, foretrækker du så at have en detaljeret plan?",
      description: "Enhver beskrivelse relateret til spørgsmålene.",
      options: ["Helt enig", "Delvist enig", "Neutral / Usikker", "Delvist uenig", "Helt uenig"],
    },
    {
      title: "23. Stoler du ofte på objektive kriterier for at vurdere situationer?",
      description: "Enhver beskrivelse relateret til spørgsmålene.",
      options: ["Helt enig", "Delvist enig", "Neutral / Usikker", "Delvist uenig", "Helt uenig"],
    },
    {
      title: "24. Fokuserer du mere på detaljer og fakta i dine omgivelser?",
      description: "Enhver beskrivelse relateret til spørgsmålene.",
      options: ["Helt enig", "Delvist enig", "Neutral / Usikker", "Delvist uenig", "Helt uenig"],
    }
  ];

// Variables to track progress
let currentIndex = 0;
const totalQuestions = questions.length;
const answers = new Array(totalQuestions).fill(null); // Store user answers

// DOM Elements
const progressText = document.querySelector(".progressText");
const progressActive = document.querySelector(".progressActive");
const mcqTitle = document.querySelector(".mcqTitle");
const mcqParagraph = document.querySelector(".mcqParagraph");
const mcqsContainer = document.querySelector(".mcqs");
const leftBtn = document.querySelector(".leftBtn");
const nextButton = document.querySelector(".nextButton");

// Load the current question
function loadQuestion(index) {
  const question = questions[index];
  mcqTitle.textContent = question.title;
  mcqParagraph.textContent = question.description;

  // Clear previous options
  mcqsContainer.innerHTML = "";

  // Load options
  question.options.forEach((option, i) => {
    const optionId = `mcq${index + 1}-option${i + 1}`;
    const isChecked = answers[index] === option; // Check if this option was previously selected

    const optionHtml = `
      <div class="mcqSingle">
        <input type="radio" id="${optionId}" name="mcq${index + 1}" value="${option}" ${isChecked ? "checked" : ""}>
        <label for="${optionId}" class="mcqName"></label>
        <p class="mcqpara">${option}</p>
      </div>
    `;
    mcqsContainer.insertAdjacentHTML("beforeend", optionHtml);
  });

  // Update progress text
  progressText.innerHTML = `Spørgsmål <span>${index + 1}</span> of <span>${totalQuestions}</span>`;

  // Update progress bar
  const progressWidth = ((index + 1) / totalQuestions) * 100;
  progressActive.style.width = `${progressWidth}%`;

  // Show/hide left button
  leftBtn.style.display = index === 0 ? "none" : "block";
  if(currentIndex === totalQuestions - 1){
    nextButton.innerHTML = `Indsend <svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#ffffff"></path></g></svg>`
  }
  else{
    nextButton.innerHTML = `Næste <svg viewBox="0 0 1024 1024" class="icon" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#ffffff"></path></g></svg>`
  }
}

// Handle next button click
nextButton.addEventListener("click", () => {
  const selectedOption = document.querySelector(`input[name="mcq${currentIndex + 1}"]:checked`);

  if (!selectedOption) {
    alert("Vælg venligst en indstilling før du går videre."); // Show error if no option is selected
    return;
  }

  // Save the answer
  answers[currentIndex] = selectedOption.value;

  // Move to the next question
  if (currentIndex < totalQuestions - 1) {
    currentIndex++;
    loadQuestion(currentIndex);
  } else {
    // Quiz completed, show results
    showResults();
  }
});

// Handle left button click
leftBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    loadQuestion(currentIndex);
  }
});

// Show results at the end of the quiz
function showResults() {
  // Calculate results (example: count how many "Helt enig" answers)
  const result = answers.filter((answer) => answer === "Helt enig").length;

  // mcq hide
  document.querySelector(".mcqDiv").style.display = "none";
  // Show loading screen
  const loadingScreen = document.querySelector(".loadingScreen");
  loadingScreen.style.display = "block";

  // Redirect to the result page after 3-4 seconds
  setTimeout(() => {
    // Save the result in localStorage
    localStorage.setItem("quizResult", result);

    // Redirect to the result page
    window.location.href = "final.html"; // Replace with your result page URL
  }, 3500); // 3 seconds delay
}

// Load the first question on page load
loadQuestion(currentIndex);


