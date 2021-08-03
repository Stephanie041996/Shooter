import { saveScore, fetchScores, renderInput } from '../score.js';
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

  test('saving user\'s score asynchronously', (done) => {
    function saveScoreCallback(data) {
      try {
        const pos = data.result.indexOf('Leaderboard');
        expect(pos).not.toBe(3);
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
        const timmy = data.result.find(findGeorge);
        expect(timmy.user).toEqual('Timmy');
        done();
      } catch (error) {
        done(error);
      }
    }

    fetchScores(fetchScoresCallback, errorCallBack, 'scene');
  });

  test('retrieving users\' scores asynchronously should Not be wrong', (done) => {
    function findGeorge(scoreData) {
      return scoreData.user === 'Timmy';
    }
    function fetchScoresCallback(data) {
      try {
        const timmy = data.result.find(findGeorge);
        expect(timmy.user).not.toEqual('John');
        done();
      } catch (error) {
        done(error);
      }
    }

    fetchScores(fetchScoresCallback, errorCallBack, 'scene');
  });

  test('retrieving users\' scores asynchronously should not be undefined', (done) => {
    function findGeorge(scoreData) {
      return scoreData.user === 'Timmy';
    }
    function fetchScoresCallback(data) {
      try {
        const timmy = data.result.find(findGeorge);
        expect(timmy.user).not.toBeUndefined();
        done();
      } catch (error) {
        done(error);
      }
    }

    fetchScores(fetchScoresCallback, errorCallBack, 'scene');
  });

  test('retrieving users\' scores asynchronously should not be Null', (done) => {
    function findGeorge(scoreData) {
      return scoreData.user === 'Timmy';
    }
    function fetchScoresCallback(data) {
      try {
        const timmy = data.result.find(findGeorge);
        expect(timmy.user).not.toBeNull();
        done();
      } catch (error) {
        done(error);
      }
    }

    fetchScores(fetchScoresCallback, errorCallBack, 'scene');
  });

  test('retrieving users\' scores asynchronously score record', (done) => {
    function findGeorge(scoreData) {
      return scoreData.score === 2000;
    }
    function fetchScoresCallback(data) {
      try {
        const timmy = data.result.find(findGeorge);
        expect(timmy.score).toEqual(2000);
        done();
      } catch (error) {
        done(error);
      }
    }

    fetchScores(fetchScoresCallback, errorCallBack, 'scene');
  });

  test('retrieving users\' scores asynchronously with Wrong score value', (done) => {
    function findGeorge(scoreData) {
      return scoreData.score === 2000;
    }
    function fetchScoresCallback(data) {
      try {
        const timmy = data.result.find(findGeorge);
        expect(timmy.score).not.toEqual(5000);
        done();
      } catch (error) {
        done(error);
      }
    }

    fetchScores(fetchScoresCallback, errorCallBack, 'scene');
  });

  test('retrieving users\' scores asynchronously should not have undifined score value', (done) => {
    function findGeorge(scoreData) {
      return scoreData.score === 2000;
    }
    function fetchScoresCallback(data) {
      try {
        const timmy = data.result.find(findGeorge);
        expect(timmy.score).not.toBeUndefined();
        done();
      } catch (error) {
        done(error);
      }
    }

    fetchScores(fetchScoresCallback, errorCallBack, 'scene');
  });

  test('retrieving users\' scores asynchronously wshould not have Null score value', (done) => {
    function findGeorge(scoreData) {
      return scoreData.score === 2000;
    }
    function fetchScoresCallback(data) {
      try {
        const timmy = data.result.find(findGeorge);
        expect(timmy.score).not.toBeNull();
        done();
      } catch (error) {
        done(error);
      }
    }

    fetchScores(fetchScoresCallback, errorCallBack, 'scene');
  });
});