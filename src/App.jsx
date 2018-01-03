import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Todo from './components/Todo';

function App(props) {
  return (
    <main>
      <Header title={props.title} />

      <section className="todo-list">

        {props.todos.map(todoItem => 
          <Todo key={todoItem.id} title={todoItem.title} isCompleted={todoItem.isCompleted} />
        )}
        
      </section>
    </main>
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired,
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired
  })).isRequired
};

App.defaultProps = {
  title: 'Reaact todo default'
};

export default App;