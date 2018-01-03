import React from 'react';
import PropTypes from 'prop-types';

function Checkbox(props) {
    return (
        <button className="checkbox icon" onClick={props.handleClick}>
            <i className="material-icons">{props.isChecked ? 'check_box' : 'check_box_outline_blank'}</i>
        </button>
    );
}

Checkbox.PropTypes = {
    isChecked: PropTypes.bool.isRequired
};

export default Checkbox;