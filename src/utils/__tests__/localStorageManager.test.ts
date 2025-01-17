import {getLocalValue, setLocalValue} from '../localStorageManager';

describe('LocalStorage Manager', () => {
  it('should get undefined from getLocalValue', () => {
    const data = getLocalValue('test');

    expect(data).toBe('');
  });

  it('should record data in localStorage with setLocalValue', () => {
    setLocalValue('test', 'someValue');

    const data = getLocalValue('test');

    expect(data).toBe('someValue');
  });
});
