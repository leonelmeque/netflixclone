import { render, fireEvent } from '@testing-library/react';
import Login from '@/pages/login';
import * as nextRouter from 'next/router';
import { BaseRouter } from 'next/dist/shared/lib/router/router';

describe('@pages/login test suit', () => {
  beforeEach(() => {
    //   ( nextRouter.useRouter as jest.MockedFunction<
    //      typeof nextRouter.useRouter
    //    >).mockImplementation(()=>({
    //        route:'/'
    //    }))
  });
  test('Renders correctly', () => {
    const { container } = render(<Login />);
    expect(container).toBeVisible();
  });

//   test('Submit button test', () => {
//     const { container, getAllByText } = render(<Login />);
//     expect(container).toBeVisible();
//     const elements = getAllByText('Sign in');
//     expect(elements[1]).toHaveTextContent('Sign in');
//     fireEvent.click(elements[1]);
//   });
});
