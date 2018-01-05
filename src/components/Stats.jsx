import React from 'react';
import PropTypes from 'prop-types';

function Stats(props) {
    let total = props.todos.length;
    let completed = props.todos.filter(todo => todo.isCompleted).length;
    let notCompleted = total - completed;


    return (
        <table className="stats">
            <tbody>
                <tr>
                    <th>Total:</th>
                    <td>{total}</td>
                </tr>
                <tr>
                    <th>Completed:</th>
                    <td>{completed}</td>
                </tr>
                <tr>
                    <th>Remains:</th>
                    <td>{notCompleted}</td>
                </tr>
            </tbody>
        </table>
    );
}

Stats.PropTypes = {
    todos: PropTypes.array.isRequired
};

export default Stats;