import { render, screen } from '@testing-library/react';
import Button from './index';
import { BrowserRouter } from 'react-router-dom';

test('Should not allowed click button if isDisabled is present', () => {
  const { container } = render(<Button isDisabled></Button>);

  expect(container.querySelector('span.disabled')).toBeInTheDocument();
});

test('Should render loading/spinner', () => {
  const { container } = render(<Button isLoading></Button>);

  expect(screen.getByText(/loading/i)).toBeInTheDocument();
  expect(container.querySelector('span')).toBeInTheDocument();
});

test('Should render <a> tag', () => {
  const { container } = render(<Button type="link" isExternal></Button>);

  expect(container.querySelector('a')).toBeInTheDocument();
});

test('Should render <Link> tag', () => {
  const { container } = render(
    <BrowserRouter>
      <Button href="" type="link"></Button>
    </BrowserRouter>
  );

  expect(container.querySelector('a')).toBeInTheDocument();
});
