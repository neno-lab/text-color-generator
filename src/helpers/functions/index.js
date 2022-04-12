export const checkIfDataStatusCorrect = (status) => {
  if (status) return status >= 200 && status <= 299;
};
