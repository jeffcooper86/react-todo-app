import dispatcher from '../utils/dispatcher';

let todoStore = {
  items: []
};

let addItem = (todoText) => {
  todoStore.items.push({text: todoText, complete: false});
  dispatcher.emit('todo-store:change', todoStore);
};

let deleteItem = (index) => {
  todoStore.items.splice(index, 1);
  dispatcher.emit('todo-store:change', todoStore);
};

let checkItem = (index) => {
  todoStore.items[index].complete = true;
  dispatcher.emit('todo-store:change', todoStore);
}

dispatcher.on('todo:user-added', addItem);
dispatcher.on('todo:user-deleted', deleteItem);
dispatcher.on('todo:user-checked', checkItem);

export default todoStore;
