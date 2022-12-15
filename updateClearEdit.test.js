/*
* @jest-environment jsdom
*/

import updateToDo from './src/modules/updateToDo.js';
import clearAll from './src/modules/clearAll.js';
import checkToDoList from './src/modules/checkToDoList.js';

describe('todo functions CHECK, UPDATE and CLEAR ', () => {
  test('update Todo', () => {
    const i = 0;
    const todos = [
      {
        desc: 'first',
        completed: false,
        index: 0,
      },
      {
        desc: 'second',
        completed: false,
        index: 1,
      },
    ];

    const output = updateToDo(i, todos, 'new');
    expect(output).toEqual([{ desc: 'new', completed: false, index: 0 }, { desc: 'second', completed: false, index: 1 }]);

    localStorage.setItem('toDoItem', JSON.stringify(output));
    expect(JSON.parse(localStorage.getItem('toDoItem'))).toEqual(output);

    document.body.innerHTML = '';
    for (let i = 0; i < output.length; i += 1) {
      document.body.innerHTML += '<div class="list-items">'
      + '  <ul id="list"><li></li></ul>'
      + '</div>';
    }
    const listItemUpdate = document.querySelectorAll('.list-items');
    expect(listItemUpdate).toHaveLength(output.length);
  });

  test('check Todo', () => {
    const todos = [
      {
        desc: 'first',
        completed: false,
        index: 0,
      },
      {
        desc: 'second',
        completed: false,
        index: 1,
      },
    ];
    const i = 0;
    const result = checkToDoList(i, todos);
    expect(result).toEqual([{ desc: 'first', completed: true, index: 0 }, { desc: 'second', completed: false, index: 1 }]);
    localStorage.setItem('todos', JSON.stringify(result));
    expect(JSON.parse(localStorage.getItem('todos'))).toEqual(result);

    document.body.innerHTML = '';
    for (let i = 0; i < result.length; i += 1) {
      document.body.innerHTML += '<div class="list-items">'
      + '  <ul id="list"><li></li></ul>'
      + '</div>';
    }
    const listItemCheck = document.querySelectorAll('.list-items');
    expect(listItemCheck).toHaveLength(result.length);
  });

  test('clear Todo', () => {
    const todos = [
      {
        desc: 'first',
        completed: false,
        index: 0,
      },
      {
        desc: 'second',
        completed: true,
        index: 1,
      },
    ];
    const output = clearAll(todos);
    expect(output).toEqual([{desc: 'first', completed: false, index: 1,}]);

    localStorage.setItem('toDoItem', JSON.stringify(output));
    expect(JSON.parse(localStorage.getItem('toDoItem'))).toEqual(output);

    document.body.innerHTML = '';
    for (let i = 0; i < output.length; i += 1) {
      document.body.innerHTML += '<div class="list-items">'
       + '  <ul id="list"><li></li></ul>'
       + '</div>';
    }

    const listItemClear = document.querySelectorAll('.list-items');
    expect(listItemClear).toHaveLength(output.length);
  });
});