import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';
import Button from './Button';

function Todo(props) {
    function handleChange() {
        props.onStatusChange(props.id);
    }

    return (
        <div className={`todo${props.isCompleted ? ' completed' : ''}`}>
          <Checkbox isChecked={props.isCompleted} onChange={handleChange} />

          <span className="todo-title">{props.title}</span>

          <Button className="delete icon" icon="delete" />
        </div>
    );
}

Todo.PropTypes = {
    title: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    onStatusChange: PropTypes.func.isRequired
};

export default Todo;