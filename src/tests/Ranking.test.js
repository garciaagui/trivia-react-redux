import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouterAndRedux from './helpers/renderWithRouterAndRedux';
import App from '../App';

describe('Testa se a página de ranking renderiza corretamente', () => {
  test('Verifica se a rota está correta', () => {
    const player = [{
      gravatar: 'https://www.gravatar.com/avatar/d41d8cd98f00b204e9800998ecf8427e',
      name: 'test',
      score: 10,
    },
    {
      gravatar: 'https://www.gravatar.com/avatar/d41d8cd98f00b204e9800998ecf8427e',
      name: 'xxx',
      score: 20,
    }];

    const { history } = renderWithRouterAndRedux(<App />);
    
    localStorage.setItem('ranking', JSON.stringify(player));
    history.push('/ranking');

    const { pathname } = history.location;
    expect(pathname).toBe('/ranking');
  })

  test('Verifica se existe o botão de "Play Again"', () => {
    const player = [{
      gravatar: 'https://www.gravatar.com/avatar/d41d8cd98f00b204e9800998ecf8427e',
      name: 'test',
      score: 10,
    }];

    const { history } = renderWithRouterAndRedux(<App />);
    
    localStorage.setItem('ranking', JSON.stringify(player));
    history.push('/ranking');

    const playAgainBtn = screen.getByTestId('btn-go-home');
    expect(playAgainBtn).toBeInTheDocument();
    userEvent.click(playAgainBtn);

    const { pathname } = history.location;
    expect(pathname).toBe('/');
  })
})