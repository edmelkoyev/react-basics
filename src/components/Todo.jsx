import React from 'react';
import PropTypes from 'prop-types';

import CheckboxController from './CheckboxController';
import Button from './Button';

function Todo(props) {
    return (
        <div className={`todo${props.isCompleted ? ' completed' : ''}`}>
          <CheckboxController isInitiallyChecked={props.isCompleted} />
          <span className="todo-title">{props.title}</span>
          <Button className="delete icon" icon="delete" />
        </div>
    );
}

Todo.PropTypes = {
    title: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired
};

export default Todo;