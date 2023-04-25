import { render, waitFor } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';

describe('Home', () => {
  it('renders a heading', async () => {
    render(<Home />);

    await waitFor(() => {
      expect(document.title).toEqual('');
    });
  });
});
