export default (() => {
  const store = [];

  const setStoredColor = (color) => {
    if (color) {
      store.push(color);
    }
  };

  const getStoredColors = () => store;

  return {
    setStoredColor,
    getStoredColors
  };
})();
