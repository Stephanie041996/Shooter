import { saveScore, fetchScores } from '../score.js';
import 'regenerator-runtime/runtime.js';

class MockGame {
  constructor() {
    this.points = 0;
  }
}

function errorCallBack(title, text) {
  console.log(title, text);
}

describe('the game public functions', () => {
  const game = new MockGame();

  test('saving user\'s score asynchronously', (done) => {
    function saveScoreCallback(data) {
      try {
        const pos = data.result.indexOf('Leaderboard');
        expect(pos).toBe(0);
        done();
      } catch (error) {
        done(error);
      }
    }

    saveScore(saveScoreCallback, errorCallBack, 'Timmy', 20000);
  });

  test('retrieving users\' scores asynchronously', (done) => {
    function findGeorge(scoreData) {
      return scoreData.user === 'Timmy';
    }
    function fetchScoresCallback(data) {
      try {
        const george = data.result.find(findGeorge);
        expect(george.user).toEqual('Timmy');
        done();
      } catch (error) {
        done(error);
      }
    }

    fetchScores(fetchScoresCallback, errorCallBack, 'scene');
  });
});
