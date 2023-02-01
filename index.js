let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");
let homeScore = 0;
let guestScore = 0;

function increaseHomeScoreOne() {
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
}

function increaseHomeScoreTwo() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}

function increaseHomeScoreTree() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}

function increaseGuestScoreOne() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}

function increaseGuestScoreTwo() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}

function increaseGuestScoreTree() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}
