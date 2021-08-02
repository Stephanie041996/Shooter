import { appAlert } from './utils.js';

const fetch = require('node-fetch');

export async function saveScore(callBack, errorCallBack, user, score) {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0eU4Ao7UOsXIBhit8aU1/scores';
  const data = {
    method: 'POST',
    headers: {
      Accept: 'Application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user,
      score,
    }),
  };

  await fetch(url, data)
    .then((response) => response.json())
    .then((data) => callBack(data))
    .catch((err) => errorCallBack('Error ', err));
}

function showSaved(data) {
  const scoreText = document.getElementById('scoreText');
  scoreText.innerHTML = data.result;
}

export function renderInput() {
  let inputDiv = document.getElementById('inputDiv');
  if (inputDiv) return;

  inputDiv = document.createElement('div');
  inputDiv.className = 'inputDiv';
  inputDiv.id = 'inputDiv';

  const input = document.createElement('input');
  input.type = 'text';
  input.setAttribute('placeholder', 'enter your name');

  const saveButton = document.createElement('button');
  saveButton.innerHTML = 'Save';
  saveButton.addEventListener('click', () => {
    if (input.value.trim() !== '') {
      window.game.playerName = input.value;
      saveScore(showSaved, appAlert, window.game.playerName, window.game.points);
      inputDiv.remove();
    }
  });

  const cancelButton = document.createElement('button');
  cancelButton.innerHTML = 'Cancel';
  cancelButton.addEventListener('click', () => {
    inputDiv.remove();
  });

  inputDiv.appendChild(input);
  inputDiv.appendChild(saveButton);
  inputDiv.appendChild(cancelButton);
  document.body.appendChild(inputDiv);
}

export function renderFinalscore() {
  let finalscoresDiv = document.getElementById('finalscoresDiv');
  if (finalscoresDiv) {
    const finalscoreText = document.getElementById('finalscoreText');
    finalscoreText.innerHTML = 'Your Final Score : 0';
    return;
  }
  finalscoresDiv = document.createElement('div');
  finalscoresDiv.className = 'finalscoresDiv';
  finalscoresDiv.id = 'finalscoresDiv';

  const finalscoreText = document.createElement('label');
  finalscoreText.id = 'finalscoreText';
  finalscoreText.innerHTML = 'Your Final Score :'.concat(window.game.playerName, ' is ', window.game.points.toString());

  finalscoresDiv.appendChild(finalscoreText);
  document.body.appendChild(finalscoresDiv);
}

export function renderScore() {
  let scoresDiv = document.getElementById('scoresDiv');
  if (scoresDiv) {
    const scoreText = document.getElementById('scoreText');
    scoreText.innerHTML = 'Score : 0';
    return;
  }
  scoresDiv = document.createElement('div');
  scoresDiv.className = 'scoresDiv';
  scoresDiv.id = 'scoresDiv';

  const scoreText = document.createElement('label');
  scoreText.id = 'scoreText';
  scoreText.innerHTML = 'Score : '.concat(window.game.points.toString());

  scoresDiv.appendChild(scoreText);
  document.body.appendChild(scoresDiv);
}

export function renderPoints() {
  const scoreText = document.getElementById('scoreText');
  if (scoreText) scoreText.innerHTML = 'Score : '.concat(window.game.points.toString());
}

export function checkScore() {
  if (window.game.points > 0) {
    if (window.game.playerName === '') {
      renderInput();
    } else if (window.game.points > 0) {
      renderFinalscore();
      saveScore(showSaved, appAlert, window.game.playerName, window.game.points);
    }
  }
}

export async function fetchScores(callBack, errorCallBack, scene) {
  const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0eU4Ao7UOsXIBhit8aU1/scores';

  await fetch(url)
    .then((response) => response.json())
    .then((data) => callBack(data, scene))
    .catch((err) => errorCallBack('Error', err));
}

export function renderScoreData(scene, scoreData, yPos) {
  const tcolor = scoreData.user === window.game.playerName ? 'yellow' : '#ffffff';
  scene.add.text(100, yPos, scoreData.user, {
    fontFamily: 'monospace',
    fontSize: 22,
    color: tcolor,
    align: 'left',
  });
  scene.add.text(280, yPos, scoreData.score, {
    fontFamily: 'monospace',
    fontSize: 22,
    color: tcolor,
    align: 'right',
    fixedWidth: 100,
  });
}

export function gotScores(data, scene) {
  const { result } = data;
  const rsort = result.sort((a, b) => b.score - a.score);
  let yPos = 130;
  const players = [];
  for (let index = 0; index < rsort.length; index += 1) {
    const element = rsort[index];
    if (!players.includes(element.user)) {
      players.push(element.user);
      renderScoreData(scene, element, yPos);
      yPos += 30;
      if (players.length > 9) break;
    }
  }
}
