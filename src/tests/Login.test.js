import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import { getTriviaToken, getTriviaQuestions } from '../services/fetchapi';
import App from '../App';

const EMAIL_INPUT_TEST_ID = 'input-gravatar-email';
const NAME_INPUT_TEST_ID = 'input-player-name';
const BUTTON_PLAY_TEST_ID = 'btn-play';
const BUTTON_SETTINGS_TEST_ID = 'btn-settings';

describe('Testa se a página de login renderiza corretamente', () => {
  test('Verifica se a rota está correta', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });

  test('Verifica se o input e-mail existe', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    expect(inputEmail).toBeInTheDocument();
  });

  test('Verifica se o input nome existe', () => {
    renderWithRouterAndRedux(<App />);
    const inputPassword = screen.getByTestId(NAME_INPUT_TEST_ID);
    expect(inputPassword).toBeInTheDocument();
  });

  test('Verifica se os inputs são validados', () => {
    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const inputName = screen.getByTestId(NAME_INPUT_TEST_ID);
    const buttonPlay = screen.getByTestId(BUTTON_PLAY_TEST_ID);
    userEvent.type(inputEmail, 'email');
    userEvent.type(inputName, 'name');
    expect(buttonPlay).toHaveAttribute('disabled');
    userEvent.type(inputEmail, 'teste@email.com');
    userEvent.type(inputName, 'name');
    expect(buttonPlay).not.toHaveAttribute('disabled');
  });

  test('Verifica se a rota settings está correta', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    const buttonSettings = screen.getByTestId(BUTTON_SETTINGS_TEST_ID);
    userEvent.click(buttonSettings);
    const { pathname } = history.location;
    expect(pathname).toBe('/settings');
  });

  test('Verifica se o fetch é chamado', () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue('success'),
    });

    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const inputName = screen.getByTestId(NAME_INPUT_TEST_ID);
    const buttonPlay = screen.getByTestId(BUTTON_PLAY_TEST_ID);
    userEvent.type(inputEmail, 'teste@email.com');
    userEvent.type(inputName, 'name');
    expect(buttonPlay).toBeEnabled();
    userEvent.click(buttonPlay);
    expect(global.fetch).toHaveBeenCalled();
    expect(global.fetch).toHaveBeenCalledWith('https://opentdb.com/api_token.php?command=request');
  });

  // test('Verifica se o usuário consegue iniciar o jogo', async () => {
  //   const STATE = {

  //     reducerQuestions: {
  //       response_code: 0,
  //       results: [
  //         {
  //           category: 'Entertainment: Film',
  //           type: 'multiple',
  //           difficulty: 'medium',
  //           question: 'In the 1994 movie &quot;Speed&quot;, what is the minimum speed the bus must go to prevent to bomb from exploding?',
  //           correct_answer: '50 mph',
  //           incorrect_answers: [
  //             '60 mph',
  //             '40 mph',
  //             '70 mph'
  //           ]
  //         },
  //         {
  //           category: 'Science: Computers',
  //           type: 'boolean',
  //           difficulty: 'medium',
  //           question: 'AMD created the first consumer 64-bit processor.',
  //           correct_answer: 'True',
  //           incorrect_answers: [
  //             'False'
  //           ]
  //         },
  //         {
  //           category: 'History',
  //           type: 'multiple',
  //           difficulty: 'medium',
  //           question: 'What was the total length of the Titanic?',
  //           correct_answer: '882 ft | 268.8 m',
  //           incorrect_answers: [
  //             '759 ft | 231.3 m',
  //             '1042 ft | 317.6 m',
  //             '825 ft | 251.5 m'
  //           ]
  //         },
  //         {
  //           category: 'Entertainment: Music',
  //           type: 'multiple',
  //           difficulty: 'medium',
  //           question: 'Which of these bands was a featuring artist in Compton rapper Kendrick Lamar&#039;s 2017 album, &quot;DAMN.&quot;?',
  //           correct_answer: 'U2',
  //           incorrect_answers: [
  //             'Radiohead',
  //             'Coldplay',
  //             'Bon Jovi'
  //           ]
  //         },
  //         {
  //           category: 'Entertainment: Video Games',
  //           type: 'boolean',
  //           difficulty: 'medium',
  //           question: 'The character that would eventually become Dr. Eggman was considered for the role of Sega&#039;s new flagship mascot before Sonic was.',
  //           correct_answer: 'True',
  //           incorrect_answers: [
  //             'False'
  //           ]
  //         }
  //       ]
  //     }

  //   }

  //   const { history } = renderWithRouterAndRedux(<App />, STATE);
  //   const inputEmail = screen.getByTestId(EMAIL_INPUT_TEST_ID);
  //   const inputName = screen.getByTestId(NAME_INPUT_TEST_ID);
  //   const buttonPlay = screen.getByTestId(BUTTON_PLAY_TEST_ID);

  //   userEvent.type(inputEmail, 'teste@email.com');
  //   userEvent.type(inputName, 'name');

  //   expect(buttonPlay).toBeEnabled();

  //   userEvent.click(buttonPlay);

  //   expect(history.location.pathname).toBe('/game');

  // });
});
