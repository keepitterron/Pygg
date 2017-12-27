let counter = 0;
function requestDelay() {
  counter++;
  return 200 + (50 * counter);
}

export { counter, requestDelay }
