import React from 'react';

import classes from './ToggleButton.module.css';

const toggleButton = (props) => (
    <button className={classes.Button} onClick={props.clicked}>
        MENU
    </button>
);

export default toggleButton;