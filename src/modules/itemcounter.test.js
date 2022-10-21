import noHTMLelement from '../../__mocks__/noHTMLelement.js';
import singleHTMLelement from '../../__mocks__/singleHTMLelement.js';
import tenHTMLelements from '../../__mocks__/tenHTMLelements.js';
import countItems from './countItems.js';

describe('Count number of HTML elements', () => {
  test('When there are no elements', () => {
    const count = countItems(noHTMLelement());
    expect(count).toEqual(0);
  });

  test('When it is one item', () => {
    const count = countItems(singleHTMLelement());
    expect(count).toEqual(1);
  });

  test('When it is 10 items', () => {
    const count = countItems(tenHTMLelements());
    expect(count).toEqual(10);
  });
});
