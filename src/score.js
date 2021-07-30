/* eslint-disable consistent-return */
/* eslint-disable no-empty */
const fetch = require('node-fetch');

const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/Zl4j3IVkemOTTVg2fUdz/scores/';

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
