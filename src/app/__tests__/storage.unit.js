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

  describe('push', () => {
    it('push data to collection', () => {
      const data = JSON.stringify(['item1']);
      const expectedDoc = JSON.stringify(['item1', 'item2']);
      adapter.getItem = jest.fn().mockReturnValue(data);
      storage.push('foo', 'item2');

      expect(adapter.setItem).toBeCalledWith(key, expectedDoc);
    });

    it('push data to empty collection', () => {
      const expectedDoc = JSON.stringify(['bar']);
      adapter.getItem = jest.fn().mockReturnValue(null);
      storage.push('foo', 'bar');

      expect(adapter.setItem).toBeCalledWith(key, expectedDoc);
    });
  });
});
