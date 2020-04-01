import React from 'react';
import ReactDOM from 'react-dom';
import Ellipses from './library/index';

const data="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

ReactDOM.render(
    <Ellipses 
        width='100%' 
        bgColor='#fff' 
        fontColor='#000' 
        fontSize={13} 
        lines={2} 
        text={data} 
    />, 
    document.getElementById('root')
);
