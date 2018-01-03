import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Todo from './components/Todo';

function App(props) {
  return (
    <main>
      <Header title={props.title} />

      <section className="todo-list">

        <Todo title="To Learn JasvaScript" isCompleted={true} />
        <Todo title="To Learn React" isCompleted={false} />
        
      </section>
    </main>
  );
}

App.propTypes = {
  title: PropTypes.string.isRequired
};

App.defaultProps = {
  title: 'Reaact todo default'
};

export default App;