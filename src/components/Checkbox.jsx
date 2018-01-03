import React from 'react';
import PropTypes from 'prop-types';

function Checkbox(props) {
    return (
        <button className="checkbox icon">
            <i className="material-icons">check_box_outline_blank</i>
          </button>
    );
}

Checkbox.PropTypes = {
    isChecked: PropTypes.bool.isRequired
};

export default Checkbox;