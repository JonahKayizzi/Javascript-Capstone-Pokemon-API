import createHTMLelement from '../src/modules/createHTMLelement.js';

const xx = document.body;
export default () => {
  const containerList = createHTMLelement(
    'ul',
    'container',
    'container',
    '',
    xx
  );
  for (let i = 1; i <= 10; i += 1) {
    createHTMLelement('li', 'item', 'item', '', containerList);
  }
  return containerList;
};
