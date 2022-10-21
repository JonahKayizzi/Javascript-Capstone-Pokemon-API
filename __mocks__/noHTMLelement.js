import createHTMLelement from '../src/modules/createHTMLelement.js';

export default () => {
  const containerSection = createHTMLelement(
    'section',
    'container',
    'container',
    '',
    ''
  );

  console.log(containerSection);

  return containerSection;
};
