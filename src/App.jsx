import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Todo from './components/Todo';

class App extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      todos: this.props.initialData
    };
  }

  render() {
    return (
      <main>
        <Header title={this.props.title} />
  
        <section className="todo-list">
  
          {this.state.todos.map(todoItem => 
            <Todo key={todoItem.id} title={todoItem.title} isCompleted={todoItem.isCompleted} />
          )}
          
        </section>
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