import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      todos: this.props.initialData
    };

    console.log('1.1 constructor');
    this.handleStatusChange = this.handleStatusChange.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  // Lifecycle: componentWillMount
  componentWillMount() {
    console.log('1.2 componentWillMount');
  }

  // Lifecycle: componentDidMount
  componentDidMount() {
    console.log('1.4 componentDidMount');
  }


  nextId(){
    this._nextId = this._nextId || 100;
    return this._nextId++;
  }

  handleStatusChange(id) {
    let todos = this.state.todos.map(todo =>{
      if (todo.id === id){
        todo.isCompleted = !todo.isCompleted;
      }

      return todo;
    });

    this.setState({todos});
  }

  handleDelete(id) {
    let todos = this.state.todos.filter(todo => todo.id !== id);

    this.setState({todos});
  }

  handleAdd(title) {
    let todo = {
      id: this.nextId(),
      title,
      isCompleted: false
    }

    let todos = [...this.state.todos, todo];

    this.setState({ todos });
  }

  handleEdit(id, title) {
    let todos = this.state.todos.map(todo =>{
      if (todo.id === id){
        todo.title = title;
      }

      return todo;
    });

    this.setState({todos});
  }

  render() {
    console.log('1.3 render');

    return (
      <main>
        <Header title={this.props.title} todos={this.state.todos} />
  
        <section className="todo-list">
          {this.state.todos.map(todoItem => 
            <Todo 
              key={todoItem.id} 
              id={todoItem.id}
              title={todoItem.title} 
              isCompleted={todoItem.isCompleted}
              onStatusChange={this.handleStatusChange}
              onEdit={this.handleEdit}
              onDelete={this.handleDelete}
            />
          )}
        </section>

        <Form onAdd={this.handleAdd} />
      </main>
    );
  }
}


App.propTypes = {
  title: PropTypes.string.isRequired,
  initialData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired
  })).isRequired
};

App.defaultProps = {
  title: 'Reaact todo default'
};

export default App;