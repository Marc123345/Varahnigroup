/**
 * Safe vibration utility that checks browser support
 */
export const safeVibrate = (duration: number | number[]): boolean => {
  if ('vibrate' in navigator) {
    return navigator.vibrate(duration);
  }
  return false;
};
