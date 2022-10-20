export default (domElements) => {
  let count = 0;
  domElements.forEach(() => {
    count += 1;
  });
  return count;
};
