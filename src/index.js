import React from 'react';
import ReactDOM from 'react-dom';
import Ellipses from './Ellipses';

const data='Men\'s Daily Vintage / Basic Fall / Winter Plus Size Long Jacket, Solid Colored, Winter Plus Size Long Jacket Solid Colored, Winter Plus Size Long Jacke e / Basic Fall / Winter Plus Size Long Jacket, Solid Colored, Winter Plus Size Long Jacket Solid Colored, Wint nter Plus Size Long Jacket, Solid Colored, Winter Plus Size Long Jacket Solid Colored, Winter Plus Size Long Jacke e / Basic Fall / Winter Plus Size Long Jacket, Solid Colored, Winter Plus Size Long Jacket Solid Colored, Wint'

ReactDOM.render(<Ellipses width='90%' bgColor='#fff' fontColor='#000' fontSize={13} lines={2} text={data} />, document.getElementById('root'));
