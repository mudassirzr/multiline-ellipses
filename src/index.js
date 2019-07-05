import React from 'react';
import ReactDOM from 'react-dom';
import Ellipses from './Ellipses';

const data='Men\'s Daily Vintage / Basic Fall / Winter Plus Size Long Jacket, Solid Colored, Winter Plus Size Long Jacket Solid Colored, Winter Plus Size Long Jacke e / Basic Fall / Winter Plus Size Long Jacket, Solid Colored, Winter Plus Size Long Jacket Solid Colored, Wint nter Plus Size Long Jacket, Solid Colored, Winter Plus Size Long Jacket Solid Colored, Winter Plus Size Long Jacke e / Basic Fall / Winter Plus Size Long Jacket, Solid Colored, Winter Plus Size Long Jacket Solid Colored, Wint'

ReactDOM.render(<Ellipses width='100%' fontSize='13px' lines={1} text={data} />, document.getElementById('root'));
