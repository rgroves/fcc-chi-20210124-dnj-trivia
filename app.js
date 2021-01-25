const gameState = {
  numberOfPlayers: 0,
  playerNames: [],
  answerTimeLimit: 0,
  contestantStands: [],
};

// TODO: At beginning of game we need to initialize game state.
//       This will be handled by the Game object eventually.

gameState.contestantStands.push(new ContestantStand("contestant-stand-1"));
gameState.contestantStands.push(new ContestantStand("contestant-stand-2"));
gameState.contestantStands.push(new ContestantStand("contestant-stand-3"));

// Prototyping the GameBoard... this will move into it's own file when finished
// just like contestant-stand.
function GameBoard(id = "game-board") {
  const MAX_CATEGORIES = 6;

  this._gameBoardElement = document.getElementById(id);

  // Get DOM elements that display the categories.
  this._categoryElements = Array.from(
    this._gameBoardElement.querySelectorAll("div.category")
  );

  // Just stubbing in category data as we prototype. Once we get basic behavior
  // implemented we'll use static mock data (via a provider object), and
  // eventually the Live API (see mock-data.js)
  this._categories = [
    "category1",
    "category2",
    "category3",
    "category4",
    "category5",
    "category6",
  ];

  // Get DOM elements that display the clues for each categories.
  this._categoryClueElements = [];

  for (let i = 0; i < MAX_CATEGORIES; i++) {
    this._categoryClueElements.push(
      Array.from(
        this._gameBoardElement.querySelectorAll(
          `.category-column:nth-of-type(${i + 1}) .clue`
        )
      )
    );
  }

  console.log("_categoryClueElements", this._categoryClueElements);

  this._categoryClues = [
    // Clues for Category #1
    [
      { clue: "cat1-clue1", answer: "a" },
      { clue: "cat1-clue2", answer: "a" },
      { clue: "cat1-clue3", answer: "a" },
      { clue: "cat1-clue4", answer: "a" },
      { clue: "cat1-clue5", answer: "a" },
      { clue: "cat1-clue6", answer: "a" },
    ],
    // Clues for Category #2
    [
      { clue: "cat2-clue1", answer: "a" },
      { clue: "cat2-clue2", answer: "a" },
      { clue: "cat2-clue3", answer: "a" },
      { clue: "cat2-clue4", answer: "a" },
      { clue: "cat2-clue5", answer: "a" },
      { clue: "cat2-clue6", answer: "a" },
    ],
    // Clues for Category #3
    [
      { clue: "cat3-clue1", answer: "a" },
      { clue: "cat3-clue2", answer: "a" },
      { clue: "cat3-clue3", answer: "a" },
      { clue: "cat3-clue4", answer: "a" },
      { clue: "cat3-clue5", answer: "a" },
      { clue: "cat3-clue6", answer: "a" },
    ],
    // Clues for Category #4
    [
      { clue: "cat4-clue1", answer: "a" },
      { clue: "cat4-clue2", answer: "a" },
      { clue: "cat4-clue3", answer: "a" },
      { clue: "cat4-clue4", answer: "a" },
      { clue: "cat4-clue5", answer: "a" },
      { clue: "cat4-clue6", answer: "a" },
    ],
    // Clues for Category #5
    [
      { clue: "cat5-clue1", answer: "a" },
      { clue: "cat5-clue2", answer: "a" },
      { clue: "cat5-clue3", answer: "a" },
      { clue: "cat5-clue4", answer: "a" },
      { clue: "cat5-clue5", answer: "a" },
      { clue: "cat5-clue6", answer: "a" },
    ],
    // Clues for Category #6
    [
      { clue: "cat6-clue1", answer: "a" },
      { clue: "cat6-clue2", answer: "a" },
      { clue: "cat6-clue3", answer: "a" },
      { clue: "cat6-clue4", answer: "a" },
      { clue: "cat6-clue5", answer: "a" },
      { clue: "cat6-clue6", answer: "a" },
    ],
  ];

  console.log("gameBoardElement", this._gameBoardElement);
  console.log("categoryElements", this._categoryElements);

  this._categoryElements.forEach((categoryElement, idx) => {
    categoryElement.textContent = this._categories[idx];
  });

  // When a player selects a category & value, we will know which clue to
  // display and which answer to show by using
  // this._categoryClueElements[categoryIdx][clueIdx]

  // this._categoryClueElements.forEach((categorysClues, idx) => {
  //   categorysClues.forEach((clueElements, idx) => {
  //     clueElements.text
  //   })
  // });
}

const gameBoard = new GameBoard();
