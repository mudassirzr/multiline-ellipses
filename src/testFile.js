
import React from 'react';
import Ellipses from './library/index';
function Example() {
    const data="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const [lines, setLines]=React.useState(true)
    return (<div>
        <button onClick={() => setLines(!lines)}>
            Click me
        </button>
        {lines && <Ellipses 
            width='100%' 
            bgColor='#fff' 
            fontColor='#000' 
            fontSize={13} 
            lines={2} 
            text={data} 
        />}
    </div>)
  }
  export default Example