
const letters = [
    {
      name: "Angel May",
      message: "Thank you for teaching us with patience and kindness. Your lessons are more than just knowledge; they are reminders that we can continue learning, growing, and becoming better people. We appreciate every effort you make for us. Happy Teacher's Day!"
    },
    {
      name: "Student Name 2",
      message: "Thank you for believing in us, even when we struggle to believe in ourselves. Your encouragement inspires us to keep trying and to never give up on our dreams. We are grateful to have you as our teacher."
    },
    {
      name: "Student Name 3",
      message: "A great teacher does more than teach lessons. A great teacher inspires, guides, and leaves a lasting impact on the lives of students. Thank you for being someone who makes learning meaningful and memorable."
    },
    {
      name: "Student Name 4",
      message: "We may not always express our gratitude, but we notice your hard work, patience, and dedication. Thank you for giving your best to help us become better students and better people."
    },
    {
      name: "Your Students",
      message: "Happy Teacher's Day! Thank you for sharing your knowledge, guiding us through challenges, and inspiring us to reach our goals. We hope these little letters remind you how special you are to us. You will always be appreciated."
    }
  ];
  
  const welcomeScreen = document.getElementById("welcomeScreen");
  const openButton = document.getElementById("openButton");
  const lettersScreen = document.getElementById("lettersScreen");
  
  const letterCard = document.getElementById("letterCard");
  const letterNumber = document.getElementById("letterNumber");
  const letterMessage = document.getElementById("letterMessage");
  const studentName = document.getElementById("studentName");
  
  const backButton = document.getElementById("backButton");
  const nextButton = document.getElementById("nextButton");
  
  const currentCount = document.getElementById("currentCount");
  const totalCount = document.getElementById("totalCount");
  const progressFill = document.getElementById("progressFill");
  const finalMessage = document.getElementById("finalMessage");
  
  let currentIndex = 0;
  
  totalCount.textContent = letters.length;
  
  function showLetter() {
    const letter = letters[currentIndex];
  
    letterMessage.textContent = letter.message;
    studentName.textContent = letter.name;
  
    letterNumber.textContent =
      `LETTER ${String(currentIndex + 1).padStart(2, "0")}`;
  
    currentCount.textContent = currentIndex + 1;
  
    progressFill.style.width =
      `${((currentIndex + 1) / letters.length) * 100}%`;
  
    backButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === letters.length - 1;
  
    finalMessage.hidden = currentIndex !== letters.length - 1;
  }
  
  function changeLetter(direction) {
    const newIndex = currentIndex + direction;
  
    if (newIndex < 0 || newIndex >= letters.length) {
      return;
    }
  
    currentIndex = newIndex;
  
    letterCard.classList.add("changing");
  
    window.setTimeout(() => {
      showLetter();
      letterCard.classList.remove("changing");
    }, 200);
  }
  
  openButton.addEventListener("click", () => {
    openButton.disabled = true;
    welcomeScreen.classList.add("opened");
  
    window.setTimeout(() => {
      welcomeScreen.hidden = true;
      lettersScreen.hidden = false;
  
      showLetter();
  
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }, 1900);
  });
  
  backButton.addEventListener("click", () => {
    changeLetter(-1);
  });
  
  nextButton.addEventListener("click", () => {
    changeLetter(1);
  });
  
  document.addEventListener("keydown", (event) => {
    if (lettersScreen.hidden) {
      return;
    }
  
    if (event.key === "ArrowLeft") {
      changeLetter(-1);
    }
  
    if (event.key === "ArrowRight") {
      changeLetter(1);
    }
  });
  
  showLetter();
  