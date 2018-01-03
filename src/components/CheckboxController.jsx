import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from './Checkbox';

class CheckboxController extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isChecked: this.props.isInitiallyChecked
        };

        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(event){
        this.setState({
            isChecked: !this.state.isChecked
        });
    }

    render() {
        return (
            <Checkbox isChecked={this.state.isChecked} handleClick={this.handleClick} />
        );
    }
    
}

CheckboxController.PropTypes = {
    isInitiallyChecked: PropTypes.bool.isRequired
};


export default CheckboxController;