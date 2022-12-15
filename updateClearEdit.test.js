/*
* @jest-environment jsdom
*/

import updateToDo from './src/modules/updateToDo.js';
import clearAll from './src/modules/clearAll.js';
import checkToDoList from './src/modules/checkToDoList.js';

describe('todo functions CHECK, UPDATE and CLEAR ', () => {
  test('update Todo', () => {
    ...
    document.body.innerHTML = '';
    for (let i = 0; i < result.length; i += 1) {
      document.body.innerHTML += '<div class="list-items">'
      + '  <ul id="list"><li></li></ul>'
      + '</div>';
    }
    const listItem = document.querySelectorAll('.list-items');
    expect(listItem).toHaveLength(result.length);
  });


  test('check Todo', () => {
    ....
    document.body.innerHTML = '';
    for (let i = 0; i < result.length; i += 1) {
      document.body.innerHTML += '<div class="list-items">'
      + '  <ul id="list"><li></li></ul>'
      + '</div>';
    }
    const listItem = document.querySelectorAll('.list-items');
    expect(listItem).toHaveLength(result.length);

  });

  test('clear Todo', () => {

    ....
    document.body.innerHTML = '';
    for (let i = 0; i < result.length; i += 1) {
      document.body.innerHTML += '<div class="list-items">'
      + '  <ul id="list"><li></li></ul>'
      + '</div>';
    }
    const listItem = document.querySelectorAll('.list-items');
    expect(listItem).toHaveLength(result.length);
  });
});