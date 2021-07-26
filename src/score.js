

const fetch = require('node-fetch');

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FjlaeYi14T6wTlmel7ig/scores/';

export const setScore = async (playerName = '', gameScore = 0) => {
  const info = {
    user: playerName,
    score: gameScore,
  };
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(info),
  };
  try {
    const response = await fetch(url, settings);
    const data = await response.json();
    return data;
  } catch (e) {
    return e;
  }
};

export const getScore = async () => {
  try {
    const response = await fetch(url, {
      mode: 'cors',
    });
    const data = await response.json();
    return data.result;
  } catch (e) {
  }
};




// import { appAlert } from './utils.js';

// const fetch = require('node-fetch');

// export async function saveScore(callBack, errorCallBack, user, score) {
//   const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0eU4Ao7UOsXIBhit8aU1/scores';
//   const data = {
//     method: 'POST',
//     headers: {
//       Accept: 'Application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       user,
//       score,
//     }),
//   };

//   await fetch(url, data)
//     .then((response) => response.json())
//     .then((data) => callBack(data))
//     .catch((err) => errorCallBack('Error ', err));
// }

// function showSaved(data) {
//   const scoreText = document.getElementById('scoreText');
//   scoreText.innerHTML = data.result;
// }

// export function renderInput() {
//   let inputDiv = document.getElementById('inputDiv');
//   if (inputDiv) return;

//   inputDiv = document.createElement('div');
//   inputDiv.className = 'inputDiv';
//   inputDiv.id = 'inputDiv';

//   const input = document.createElement('input');
//   input.type = 'text';
//   input.setAttribute('placeholder', 'enter your name');

//   const saveButton = document.createElement('button');
//   saveButton.innerHTML = 'Save';
//   saveButton.addEventListener('click', () => {
//     if (input.value.trim() !== '') {
//       this.game.playerName = input.value;
//       saveScore(showSaved, appAlert, this.game.playerName, this.game.points);
//       inputDiv.remove();
//     }
//   });

//   const cancelButton = document.createElement('button');
//   cancelButton.innerHTML = 'Cancel';
//   cancelButton.addEventListener('click', () => {
//     inputDiv.remove();
//   });

//   inputDiv.appendChild(input);
//   inputDiv.appendChild(saveButton);
//   inputDiv.appendChild(cancelButton);
//   document.body.appendChild(inputDiv);
// }

// export function renderScore() {
//   let scoresDiv = document.getElementById('scoresDiv');
//   if (scoresDiv) {
//     const scoreText = document.getElementById('scoreText');
//     scoreText.innerHTML = 'Score : 0';
//     return;
//   }
//   scoresDiv = document.createElement('div');
//   scoresDiv.className = 'scoresDiv';
//   scoresDiv.id = 'scoresDiv';

//   const scoreText = document.createElement('label');
//   scoreText.id = 'scoreText';
//   scoreText.innerHTML = 'Score : '.concat(this.game.points.toString());

//   scoresDiv.appendChild(scoreText);
//   document.body.appendChild(scoresDiv);
// }

// export function renderPower() {
//   let powerDiv = document.getElementById('powerDiv');
//   if (powerDiv) {
//     const powerText = document.getElementById('powerText');
//     powerText.innerHTML = 'Power : '.concat(this.game.power).concat('%');
//     return;
//   }
//   powerDiv = document.createElement('div');
//   powerDiv.className = 'powerDiv';
//   powerDiv.id = 'powerDiv';

//   const powerText = document.createElement('label');
//   powerText.id = 'powerText';
//   powerText.innerHTML = 'Power : '.concat(this.game.power).concat('%');

//   powerDiv.appendChild(powerText);
//   document.body.appendChild(powerDiv);
// }

// export function addPoints(game, points) {
//   const newPoints = this.game.points + points;
//   return newPoints;
// }

// export function renderPoints() {
//   const scoreText = document.getElementById('scoreText');
//   if (scoreText) scoreText.innerHTML = 'Score : '.concat(this.game.points.toString());
// }

// export function checkScore() {
//   if (this.game.points > 0) {
//     if (this.game.playerName === '') {
//       renderInput();
//     } else if (this.game.points > 0) {
//       saveScore(showSaved, appAlert, this.game.playerName, this.game.points);
//     }
//   }
// }

// export async function fetchScores(callBack, errorCallBack, scene) {
//   const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/0eU4Ao7UOsXIBhit8aU1/scores';

//   await fetch(url)
//     .then((response) => response.json())
//     .then((data) => callBack(data, scene))
//     .catch((err) => errorCallBack('Error', err));
// }

// function renderScoreData(scene, scoreData, yPos) {
//   const tcolor = scoreData.user === this.game.playerName ? 'yellow' : '#ffffff';
//   scene.add.text(100, yPos, scoreData.user, {
//     fontFamily: 'monospace',
//     fontSize: 22,
//     color: tcolor,
//     align: 'left',
//   });
//   scene.add.text(280, yPos, scoreData.score, {
//     fontFamily: 'monospace',
//     fontSize: 22,
//     color: tcolor,
//     align: 'right',
//     fixedWidth: 100,
//   });
// }

// export function gotScores(data, scene) {
//   const { result } = data;
//   const rsort = result.sort((a, b) => b.score - a.score);
//   let yPos = 100;
//   const players = [];
//   for (let index = 0; index < rsort.length; index += 1) {
//     const element = rsort[index];
//     if (!players.includes(element.user)) {
//       players.push(element.user);
//       renderScoreData(scene, element, yPos);
//       yPos += 30;
//       if (players.length > 9) break;
//     }
//   }
// }