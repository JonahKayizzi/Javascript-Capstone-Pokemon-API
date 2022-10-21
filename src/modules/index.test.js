import noHTMLelement from '../../__mocks__/noHTMLelement.js';
import singleHTMLelement from '../../__mocks__/singleHTMLelement.js';
import countItems from './countItems.js';

describe('Count number of HTML elements', () => {
  /*
    test('When there are no elements', () => {
    console.log(noHTMLelement);
    const count = countItems(noHTMLelement);
    expect(count).toEqual(0);
  });
*/
  test('When it is one item', () => {
    const xxx = singleHTMLelement;
    const count = countItems(xxx);
    expect(count).toEqual(1);
  });

  /*
  test('No task should exist with completed status true', () => {
    myTaskList.clearCompleted();
    myTaskList.tasks.forEach((task) => {
      expect(task.completed).toBeFalsy();
    });

    */
});
