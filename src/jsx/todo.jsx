import React from 'react';
import ReactDOM from 'react-dom';
import dispatcher from '../js/utils/dispatcher';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todoInput: '',
      todoItems: []
    };

    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleStoreChange = this.handleStoreChange.bind(this);
    this.handleChange = this.handleChange.bind(this);

    dispatcher.on('todo-store:change', this.handleStoreChange);
  }

  handleStoreChange(todoStore) {
    this.setState((prevState, props) => ({
      todoItems: todoStore.items
    }));
  }

  handleKeyDown(evt) {
    if (evt.keyCode === 13) {
      dispatcher.emit('todo:user-added', this.state.todoInput);
    }
  }

  handleChange(evt) {
    let todoInput = evt.target.value;

    this.setState((prevState, props) => ({
      todoInput: todoInput
    }));
  }

  handleDelete(index) {
    dispatcher.emit('todo:user-deleted', index);
  }

  handleCheck(index) {
    dispatcher.emit('todo:user-checked', index);
  }

  render() {
    let todoItems = this.state.todoItems.map((todoItem, index) => {
      return (
        <li className={'todo-items_item' + (todoItem.complete ? ' todo-items_item-complete' : '')} key={index}>
          <button onClick={() => this.handleCheck(index)} className="todo-items_check-btn">&#10004;</button>
          <button onClick={() => this.handleDelete(index)} className="todo-items_delete-btn">&#x2716;</button>
          <span className="todo-items_item-text">{todoItem.text}</span>
        </li>
      );
    });

    return (
      <div>
        <input placeholder="New Task" onChange={this.handleChange} onKeyDown={this.handleKeyDown} />

        <ul className="todo-items_list">
          {todoItems}
        </ul>
      </div>
    );
  }
}

ReactDOM.render(<Todo/>, document.getElementById('todo-component'));
