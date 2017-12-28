import Storage from '../services/storage';

const data = JSON.stringify('bar');
const key = `${Storage.STORAGE_KEY}.foo`;

let storage;
let adapter;
describe('Storage', () => {
  beforeEach(() => {
    adapter = {
      getItem: jest.fn().mockReturnValue(data),
      setItem: jest.fn(),
    }
    storage = new Storage(adapter);
  });

  it('save a collection under key', () => {
    storage.save('foo', 'bar');
    expect(adapter.setItem).toBeCalledWith(key, data);
  });

  it('fetch data from key', () => {
    const result = storage.fetch('foo');

    expect(adapter.getItem).toBeCalledWith(key);
    expect(result).toBe('bar');
  });

  it('push data to collection', () => {
    const data = JSON.stringify(['foo']);
    const expectedDoc = JSON.stringify(['foo', 'bar']);
    adapter.getItem = jest.fn().mockReturnValue(data);
    storage.push('foo', 'bar');

    expect(adapter.setItem).toBeCalledWith(key, expectedDoc);
  });
});
