const game = () => {
  let PScore = 0;
  let CScore = 0;

  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introscreen = document.querySelector(".intro");
    const matchscreen = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introscreen.classList.add("fadeOut");
      matchscreen.classList.add("fadeIn");
    });
  };
  startGame();

  const playMatch = () => {
    const options = document.querySelectorAll(".option button");
    const playerhand = document.querySelector(".playerHand");
    const computerhand = document.querySelector(".computerHand");

    const hands = document.querySelectorAll(".hands img");

    hands.forEach((hand) => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "none";
      });
    });

    const computerOptions = ["rock", "paper", "scissor"];

    options.forEach((options) => {
      options.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 3);
        computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          compareHands(this.textContent, computerChoice);

          playerhand.src = `./images/${this.textContent}.png`;
          computerhand.src = `./images/${computerChoice}.png`;
        }, 1000);

        playerhand.style.animation = "shakeplayer ease 1s ";
        computerhand.style.animation = "shakeplayer ease 1s ";
      });
    });
  };

  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");

    if (playerChoice === computerChoice) {
      winner.textContent = "TIE";
      return;
    }
    if (playerChoice === "rock") {
      if (computerChoice === "scissor") {
        winner.textContent = "player wins";
        PScore++;
        updatescore();
        return;
      } else {
        winner.textContent = "Computer wins";
        CScore++;
        updatescore();
        return;
      }
    }
    if (playerChoice === "scissor") {
      if (computerChoice === "paper") {
        winner.textContent = "player wins";
        PScore++;
        updatescore();
        return;
      } else {
        winner.textContent = "Computer wins";
        CScore++;
        return;
      }
    }
    if (playerChoice === "paper") {
      if (computerChoice === "rock") {
        winner.textContent = "player wins";
        PScore++;
        updatescore();
        return;
      } else {
        winner.textContent = "Computer wins";
        CScore++;
        updatescore();
        return;
      }
    }
  };
  playMatch();

  const updatescore = () => {
    const playerScore = document.querySelector(".player p");
    const computerScore = document.querySelector(".computer p");
    playerScore.textContent = PScore;
    computerScore.textContent = CScore;
  };
};
game();
