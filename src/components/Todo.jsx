import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';
import Button from './Button';

class Todo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            editing: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Lifecycle: componentWillReceiveProps
    componentWillReceiveProps(nextProps) {
        console.log('2.1 componentWillReceiveProps');
        console.log('2.1 nextProps', nextProps);
    }

    // Lifecycle: shouldComponentUpdate
    shouldComponentUpdate(nextProps, nextState) {
        console.log('2.2 shouldComponentUpdate');
        console.log('2.2 nextProps', nextProps);
        console.log('2.2 nextState', nextState);
        return true;
    }

    // Lifecycle: componentWillUpdate
    componentWillUpdate(nextProps, nextState) {
        console.log('2.3 componentWillUpdate');
        console.log('2.3 nextProps', nextProps);
        console.log('2.3 nextState', nextState);
    }

    // Lifecycle: componentDidUpdate
    componentDidUpdate(prevProps, prevState) {
        console.log('2.5 componentDidUpdate');
        console.log('2.5 prevProps', prevProps);
        console.log('2.5 prevState', prevState);
    }

    // Lifecycle: componentWillUnmount
    componentWillUnmount() {
        console.log('3.1 componentWillUnmount');
    }

    handleSubmit(event) {
        event.preventDefault();
        let title = this.refs.title.value;
        
        this.props.onEdit(this.props.id, title);
        this.setState({ editing: false });
    }

    renderDisplay() {
        console.log('2.4 Todo render');
        return (
            <div className={`todo${this.props.isCompleted ? ' completed' : ''}`}>
                <Checkbox isChecked={this.props.isCompleted} onChange={() => this.props.onStatusChange(this.props.id)} />
                <span className="todo-title">{this.props.title}</span>
                <Button className="edit icon" icon="edit" onClick={() => this.setState({ editing: true })} />
                <Button className="delete icon" icon="delete" onClick={() => this.props.onDelete(this.props.id)}/>
            </div>
        );
    }

    renderForm() {
        return (
            <form className="todo-edit-form" onSubmit={this.handleSubmit}>
                <input type="text" ref="title" defaultValue={this.props.title}/>
                <Button className="save icon" icon="save" type="submit" onClick={this.handleSubmit} />
            </form>
        );
    }

    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay();
    }
}


Todo.PropTypes = {
    title: PropTypes.string.isRequired,
    isCompleted: PropTypes.bool.isRequired,
    onStatusChange: PropTypes.func.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
};

export default Todo;