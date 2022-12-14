function deleteAnItem(i, toDoList) {
  const temp = [...toDoList];
  toDoList.splice(i, 1);

  if (toDoList === temp) {
    throw new Error('Error deleting item');
  }
  return toDoList;
}

module.exports = deleteAnItem;
