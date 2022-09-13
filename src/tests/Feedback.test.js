import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';

describe('Testa se a página de feedback renderiza corretamente', () => {
  test('Verifica se a rota está correta', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/feedback');
    const { pathname } = history.location;
    expect(pathname).toBe('/feedback');
  })
  
  test('Verifica se existe o botão de "Play Again"', () => {
    const { history } = renderWithRouterAndRedux(<App />);
    history.push('/feedback');

    const playAgainBtn = screen.getByTestId('btn-play-again');
    expect(playAgainBtn).toBeInTheDocument();
    userEvent.click(playAgainBtn);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  })

  test('Verifica a mensagem quando 3 ou mais perguntas são respondidas corretamente', () => {

    const state = {
      player: {
        assertions: 3,
      },
    }

    const { history } = renderWithRouterAndRedux(<App />, state);
    history.push('/feedback');

    const assertionsMessage = screen.getByTestId('feedback-text');
    expect(assertionsMessage).toHaveTextContent('Well Done!');
  })
})