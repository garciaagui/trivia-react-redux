import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import { questionsResponse } from './helpers/mocks';
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

  test('Verifica se o usuário consegue iniciar o jogo', async () => {

    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(questionsResponse),
    });

    const { history } = renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const inputName = screen.getByTestId(NAME_INPUT_TEST_ID);
    const buttonPlay = screen.getByTestId(BUTTON_PLAY_TEST_ID);

    userEvent.type(inputEmail, 'teste@email.com');
    userEvent.type(inputName, 'name');

    expect(buttonPlay).toBeEnabled();

    userEvent.click(buttonPlay);

    await waitFor(() => { expect(history.location.pathname).toBe('/game') });

  });
});
