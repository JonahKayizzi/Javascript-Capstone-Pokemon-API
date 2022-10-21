/** * @jest-environment jsdom */
import countItems from './countItems.js';

document.body.innerHTML = `
                           <ul class="comment-text flex-col" id="comment-text">
                              <li class="comment-item">comment 1</li>
                              <li class="comment-item">comment 2</li>
                              <li class="comment-item">comment 3</li>
                          </ul>`;

describe('Comment Count', () => {
  test('should return the number of items in the array', () => {
    const commentArray = document.querySelectorAll('.comment-item');
    expect(countItems(commentArray)).toBe(3);
  });

  test('should return 0 if the array is empty', () => {
    const commentArray = [];
    expect(countItems(commentArray)).toBe(0);
  });
});