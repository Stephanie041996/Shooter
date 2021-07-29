import {
  getScore,
  setScore,
} from '../score.js';

jest.mock('../score.js');

describe('Testing the API functionality', () => {
  it('returns the third user name', async () => {
    getScore.mockResolvedValue({
      result: [{
        user: 'Tim Smith',
        score: 22,
      },
      {
        user: 'Rick James',
        score: 75,
      },
      {
        user: 'Gary man',
        score: 50,
      },
      ],
    });
    const user = await getScore();
    expect(user.result[2].user).toMatch('Gary man');
  });

  it('returns the score of the second user', async () => {
    getScore.mockResolvedValue({
      result: [{
        user: 'Tim Smith',
        score: 42,
      },
      {
        user: 'Rick James',
        score: 35,
      },
      {
        user: 'Gary man',
        score: 50,
      },
      ],
    });

    const user = await getScore();
    expect(user.result[1].score).toEqual(35);
  });

  it('Should save the score into the API', async () => {
    setScore.mockResolvedValue({
      result: 'Leaderboard score created correctly.',
    });
    const success = await setScore('Tim', 50000);
    expect(success.result).toMatch('Leaderboard score created correctly.');
  });
});