const scoreURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/tvIs41iLCOTgjlAGQnjJ/scores/';

export const getScores = async () => {
  const response = await fetch(scoreURL);

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const scores = await response.json();
  return scores.result;
}

export const addScore = async () => {
  let name = document.querySelector('#name').value;
  let score = document.querySelector('#score').value;
  const newScore = {
    user: name,
    score: parseInt(score, 10),
  };

  const response = await fetch(scoreURL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(newScore),
  });

  const status = await response.json();
  return status;
}
