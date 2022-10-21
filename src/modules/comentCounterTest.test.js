/** * @jest-environment jsdom */
import countItems from './countItems.js';

document.body.innerHTML = `
                          <ul class="comment-empty flex-col" id="comment-text">

                          </ul>
                           <ul class="comment-text flex-col" id="comment-text">
                              <li class="comment-item">comment 1</li>
                              <li class="comment-item">comment 2</li>
                              <li class="comment-item">comment 3</li>
                          </ul>`;

describe('Comment Count', () => {
  test('should return the number of items in the array', () => {
    const commentArray = document.querySelector('.comment-text');
    expect(countItems(commentArray)).toBe(3);
  });

  test('should return 0 if the array is empty', () => {
    const commentEmpty = document.querySelector('.comment-empty');
    expect(countItems(commentEmpty)).toBe(0);
  });
});
