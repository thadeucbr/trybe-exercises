import { render, screen } from '@testing-library/react';
import App from './App';

test('Verifica se existe um input de email na tela', () => {
  // acessar elementos na tela
  const { getByPlaceholderText } = render(<App />);
  const inputEmail = getByPlaceholderText(/email/i);

  expect(inputEmail).toBeInTheDocument();
  // interagir com os elementos

  // fazer o teste
});
