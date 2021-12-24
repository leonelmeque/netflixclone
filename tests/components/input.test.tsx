import { fireEvent, render } from '@testing-library/react';
import Input from '@/components/@ui-elements/Input';

describe('@component/Input test suit', () => {
  test('Renders correctly', () => {
    const { container } = render(
      <Input placeholder='test' inputname='test' />
    );
    expect(container).toBeVisible();
  });

  test('Toggle function works correclty', () => {
    const { getByTestId } = render(
      <Input placeholder='test' inputname='test' />
    );
    const input: any = getByTestId('input');
    fireEvent.change(input, {
      target: { value: 'leonel' },
    });
    expect(input.value).toBe('leonel');
  });
});
