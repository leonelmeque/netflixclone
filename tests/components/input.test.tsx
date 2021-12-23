import { fireEvent, render } from '@testing-library/react';
import Input from '@/components/@ui-elements/Input';
import { InputHTMLAttributes } from 'react';

describe('@component/Input test suit', () => {
  test('Renders correctly', () => {
    const { container } = render(
      <Input placeholder='test' inputName='test' />
    );
    expect(container).toBeVisible();
  });

  test('Toggle function works correclty', () => {
    const { getByTestId } = render(
      <Input placeholder='test' inputName='test' />
    );
    const input: any = getByTestId('input');
    fireEvent.change(input, {
      target: { value: 'leonel' },
    });
    expect(input.value).toBe('leonel');
  });
});
