export const checkIfDataStatusCorrect = (success) => {
  if (success) return true;
  return false;
};

// eslint-disable-next-line no-bitwise
export const invertHex = hex => (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase();
