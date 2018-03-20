import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { addTodo } from './actions';
import TodoList from './components/todoList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoItem: '', 
    }
    this.addTodo = this.addTodo.bind(this);
    this.updateTodos = this.updateTodos.bind(this);
  }

  addTodo(event) {
    event.preventDefault();
    this.props.addTodo({
      value: this.state.newTodoItem,
      complete: false
    })
    this.setState({
      newTodoItem: ''
    })
  }

  updateTodos(event) {
    this.state({
      newTodoItem: event.target.value
    })
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.addTodo}>
            <input onChange={this.updateTodos} placeholder='Enter Todo Item Here' value={this.state.newTodoItem} />
        </form>
        <TodoList todos={this.props.todos} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos
  }
}


export default connect(mapStateToProps, {addTodo})(App);
