import dispatcher from '../utils/dispatcher';

let todoStore = {
  items: []
};

let addItem = (todoText) => {
  todoStore.items.push({text: todoText, complete: false});
  dispatcher.emit('todo-store:change', todoStore);
};

let deleteItem = (index) => {
  // To be implemented
  console.log(todoStore.items[index]);
};

let checkItem = (index) => {
  // To be implemented
  console.log(todoStore.items[index]);
}

dispatcher.on('todo:user-added', addItem);
dispatcher.on('todo:user-deleted', deleteItem);
dispatcher.on('todo:user-checked', checkItem);

export default todoStore;
