import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { questionsResponse } from './helpers/mocks';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';


const EMAIL_INPUT_TEST_ID = 'input-gravatar-email';
const NAME_INPUT_TEST_ID = 'input-player-name';
const BUTTON_PLAY_TEST_ID = 'btn-play';
const BUTTON_SETTINGS_TEST_ID = 'btn-settings';

describe('Verifica se a página é renderizada corretamente', () => {
  it('Testa se a rota é "/game"', async () => {
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

  })
  it('Testa o botão da resposta correta e o botão "Next"', async () => {
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

    const correctBtn = screen.getByTestId('correct-answer');
    expect(correctBtn).toBeInTheDocument();
    userEvent.click(correctBtn);

    const nextBtn = screen.getByTestId("btn-next");
    expect(nextBtn).toBeInTheDocument();
    userEvent.click(nextBtn);
  })
  it('Testa clicar na resposta incorreta', async () => {
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

    const incorrectBtn = screen.getByTestId('wrong-answer-0');
    expect(incorrectBtn).toBeInTheDocument();
    userEvent.click(incorrectBtn);
  })
  it('Testa as dificuldades das perguntas', async () => {
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

    const correctBtn = screen.getByTestId('correct-answer');
    expect(correctBtn).toBeInTheDocument();
    userEvent.click(correctBtn);

    const nextBtn = screen.getByTestId("btn-next");
    expect(nextBtn).toBeInTheDocument();
    userEvent.click(nextBtn);

    const correctBtn2 = screen.getByTestId('correct-answer');
    userEvent.click(correctBtn2);

    userEvent.click(nextBtn);
    const correctBtn3 = screen.getByTestId('correct-answer');
    userEvent.click(correctBtn3);

    userEvent.click(nextBtn);
    const correctBtn4 = screen.getByTestId('correct-answer');
    userEvent.click(correctBtn4);

    userEvent.click(nextBtn);
    const correctBtn5 = screen.getByTestId('correct-answer');
    userEvent.click(correctBtn5);
    userEvent.click(nextBtn)
  })

  jest.setTimeout(32000)
  it('Testa o contador', async () => {
    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue(questionsResponse),
    });

    renderWithRouterAndRedux(<App />);
    const inputEmail = screen.getByTestId(EMAIL_INPUT_TEST_ID);
    const inputName = screen.getByTestId(NAME_INPUT_TEST_ID);
    const buttonPlay = screen.getByTestId(BUTTON_PLAY_TEST_ID);

    userEvent.type(inputEmail, 'teste@email.com');
    userEvent.type(inputName, 'name');

    expect(buttonPlay).toBeEnabled();

    userEvent.click(buttonPlay);

    await waitFor(() => { const incorrectBtn = screen.getByTestId('wrong-answer-0');
    expect(incorrectBtn).toBeDisabled(); }, { timeout: 31000 });

    
  })
})