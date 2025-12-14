export function startTimer(duration, onTimeout) {
  return setTimeout(() => {
    onTimeout();
  }, duration);
}
