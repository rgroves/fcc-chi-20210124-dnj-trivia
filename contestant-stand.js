// Create modules out of the stand-alone scripts for the game components.

function ContestantStand(id) {
  this._standElement = document.getElementById(id);
  this._nameElement = this._standElement.querySelector(".contestant-name");
  this._scoreElement = this._standElement.querySelector(".contestant-score");
  this._name = "";
  this._score = 0;

  this.show = function () {
    this._standElement.classList.remove("hide");
  };

  this.hide = function () {
    this._standElement.classList.add("hide");
  };

  this.displayScore = function () {
    this._scoreElement.textContent = `\$${this._score}`;
  };

  this.displayName = function () {
    this._nameElement.textContent = this._name;
  };

  this.setName = function (newName) {
    this._name = newName;
    this.displayName();
  };

  this.resetScore = function () {
    this._score = 0;
    this.displayScore();
  };

  this.adjustScore = function (value) {
    this._score += value;
    this.displayScore();
  };
}
