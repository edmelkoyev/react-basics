import React from 'react';

import Checkbox from './Checkbox';

class CheckboxController extends React.Component {
    constructor() {
        super();

        this.state = {
            isChecked: true
        };
    };

    render() {
        return (
            <Checkbox isChecked={this.state.isChecked} />
        );
    }
    
}


export default CheckboxController;