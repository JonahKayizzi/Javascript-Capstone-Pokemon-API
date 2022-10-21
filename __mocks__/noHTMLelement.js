import createHTMLelement from '../src/modules/createHTMLelement.js';

const xx = document.body;
export default () => {
  const containerSection = createHTMLelement(
    'section',
    'container',
    'container',
    '',
    xx
  );

  return containerSection;
};
