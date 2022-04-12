export const checkIfDataStatusCorrect = (status) => {
  if (status) return status >= 200 && status <= 299;
};

// eslint-disable-next-line no-bitwise
export const invertHex = hex => (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase();
