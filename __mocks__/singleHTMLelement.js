/**
 * @jest-environment jsdom
 */
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
  createHTMLelement('li', 'item', 'item', '', containerList);
  console.log(containerList);
  return containerList;
};
