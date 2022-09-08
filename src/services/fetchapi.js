export async function getTriviaToken() {
  try {
    const URL = 'https://opentdb.com/api_token.php?command=request';
    const result = await fetch(URL);
    const { token } = await result.json();
    return token;
  } catch (error) {
    return error;
  }
}

export async function getTriviaQuestions(token) {
  try {
    const URL = `https://opentdb.com/api.php?amount=5&token=${token}`;
    const result = await fetch(URL);
    const data = await result.json();
    return data;
  } catch (error) {
    return error;
  }
}
