import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const data='Men\'s Daily Vintage / Basic Fall / Winter Plus Size Long Jacket, Solid Colored, Winter Plus Size Long Jacket Solid Colored, Winter Plus Size Long Jacke e / Basic Fall / Winter Plus Size Long Jacket, Solid Colored, Winter Plus Size Long Jacket Solid Colored, Wint nter Plus Size Long Jacket, Solid Colored, Winter Plus Size Long Jacket Solid Colored, Winter Plus Size Long Jacke e / Basic Fall / Winter Plus Size Long Jacket, Solid Colored, Winter Plus Size Long Jacket Solid Colored, Wint'

ReactDOM.render(<App width='100%' fontSize='13px' lines={2} text={data} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
