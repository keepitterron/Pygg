import { counter, requestDelay } from '../services/delay';
describe('delay', () => {
  it('delays requests by 50ms per time', () => {
    const delay = requestDelay();
    const delay1 = requestDelay();
    const delay2 = requestDelay();

    expect(delay).toBe(250);
    expect(delay1).toBe(300);
    expect(delay2).toBe(350);

    expect(counter).toBe(3)
  });

});
