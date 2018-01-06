import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';

import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';


class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      todos: []
    };

    this.handleToggle = this.handleToggle.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    axios.get('/api/todos')
      .then(resp => resp.data)
      .then(todos => this.setState({ todos }))
      .catch(this.handleError);
  }

  handleAdd(title) {
    axios.post('/api/todos', { title })
      .then(resp => resp.data)
      .then(todo => {
        const todos = [...this.state.todos, todo];
        this.setState({ todos });
      })
      .catch(this.handleError);
  }

  handleDelete(id) {
    axios.delete(`/api/todos/${id}`)
      .then(() => {
        let todos = this.state.todos.filter(todo => todo.id !== id);

        this.setState({todos});
      })
      .catch(this.handleError);
  }

  handleToggle(id) {
    axios.patch(`/api/todos/${id}`)
      .then( resp => {
        let todos = this.state.todos.map(todo =>{
          if (todo.id === id){
            todo = resp.data;
          }
    
          return todo;
        });

        this.setState({todos});
      })
      .catch(this.handleError);
  }

  handleEdit(id, title) {
    axios.put(`/api/todos/${id}`, { title })
      .then( resp => {
        let todos = this.state.todos.map(todo =>{
          if (todo.id === id){
            todo = resp.data;
          }
    
          return todo;
        });
    
        this.setState({todos});
        
      })
      .catch(this.handleError);
  }

  handleError(err) {
    console.error(err);
  }

  render() {

    return (
      <main>
        <Header title={this.props.title} todos={this.state.todos} />
  
        <CSSTransitionGroup 
          component="section"
          className="todo-list"
          transitionName="slide"
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
          >
          {this.state.todos.map(todoItem => 
            <Todo 
              key={todoItem.id} 
              id={todoItem.id}
              title={todoItem.title} 
              isCompleted={todoItem.isCompleted}
              onStatusChange={this.handleToggle}
              onEdit={this.handleEdit}
              onDelete={this.handleDelete}
            />
          )}
        </CSSTransitionGroup>

        <Form onAdd={this.handleAdd} />
      </main>
    );
  }
}


App.propTypes = {
  title: PropTypes.string.isRequired
};

App.defaultProps = {
  title: 'Reaact todo default'
};

export default App;