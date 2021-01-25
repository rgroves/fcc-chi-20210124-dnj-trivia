// Refactor to create an object like we did for the Contestant Stands
let controlsForm = document.querySelector("form.controls");

function handleFormChange(event) {
  let target = event.target;

  if (target.name === "players") {
    let numberOfPlayers = target.value;

    let playerInputs = document.querySelectorAll(
      `.controls input[name^="player-name-"]`
    );

    switch (numberOfPlayers) {
      case "1":
        // enable the player 1 input
        playerInputs[0].disabled = false;
        // disable the player 2 & 3 inputs
        playerInputs[1].disabled = true;
        playerInputs[2].disabled = true;
        break;
      case "2":
        // enable the player 1 & 2 inputs
        playerInputs[0].disabled = false;
        playerInputs[1].disabled = false;
        // disable the player 3 input
        playerInputs[2].disabled = true;
        break;
      case "3":
        // enable the player 1, 2 & 3 inputs
        playerInputs[0].disabled = false;
        playerInputs[1].disabled = false;
        playerInputs[2].disabled = false;
        break;
    }
  }
}

function handleFormSubmit(event) {
  // NOTE: refactor to use a custom event that the (yet to be created) Game
  // object can listen for instead of using the global variabe gameState.
  event.preventDefault();

  let settings = new FormData(event.target);

  gameState.numberOfPlayers = settings.get("players");

  for (let i = 0; i < gameState.contestantStands.length; i++) {
    gameState.contestantStands[i].hide();
  }

  for (let i = 0; i < gameState.numberOfPlayers; i++) {
    let name = settings.get(`player-name-${i + 1}`);
    gameState.playerNames.push(name);
    gameState.contestantStands[i].setName(name);
    gameState.contestantStands[i].resetScore();
    gameState.contestantStands[i].show();
  }

  gameState.answerTimeLimit = settings.get("time-to-answer");

  event.target.parentElement.classList.toggle("show");
}

controlsForm.addEventListener("change", handleFormChange);
controlsForm.addEventListener("submit", handleFormSubmit);
