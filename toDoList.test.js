const addToDo = require('./src/modules/addTodoTask.js');
const removeToDO = require('./src/modules/removeToDo.js');

describe('add and remove', () => {
  test('add to do', () => {
    const todoList = {
      description: 'something',
      completed: false,
      index: 0,
    };
    const dataItem = [];

    const output = addToDo(todoList, dataItem);
    expect(dataItem).toEqual(output);

    localStorage.setItem(todoList).JSON.stringify(output);
    expect(JSON.parse(localStorage.getItem(todoList))).toEqual(output);

    for (let i = 0; i < todoList.length; i += 1) {
      document.body.innerHTML = '<div class = "list-item">'
      + '  <ul id="list"><li></li></ul>'
      + '</div>';
    }
    const listItem = document.querySelectorAll('.list-item');
    expect(listItem).toHaveLength(output.length);
  });

  test('remove to do', () => {
    const todoList = [
      {
        description: 'something 1',
      completed: false,
      index: 0,
      },
      {
        description: 'something 2',
      completed: false,
      index: 1,
      },
    ];
    const i =0;
    const output = removeToDO(i,todoList);
    expect(output).toEqual([{description: 'something 2', completed: false, index: 1}]);

    localStorage.setItem(todoList).JSON.stringify(output);
    expect(JSON.parse(localStorage.getItem(todoList))).toEqual(output);

    for (let i = 0; i < todoList.length; i += 1) {
      document.body.innerHTML = '<div class = "list-item">'
      + '  <ul id="list"><li></li></ul>'
      + '</div>';
    }
    const listItem = document.querySelectorAll('.list-item');
    expect(listItem).toHaveLength(output.length);
  })
  });