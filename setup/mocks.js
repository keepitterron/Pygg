var localStorageMock = (function() {
  var store = {};

  return {
    getItem: function(key) {
      return store[key] || null;
    },
    setItem: function(key, value) {
      store[key] = value.toString();
    },
  };

})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});
