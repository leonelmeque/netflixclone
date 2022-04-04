import { render, fireEvent } from '@testing-library/react';
import Login from '-pages/login';

describe('@pages/login test suit', () => {
  test('Renders correctly', () => {
    const { container } = render(<Login />);
    expect(container).toBeVisible();
  });

});
