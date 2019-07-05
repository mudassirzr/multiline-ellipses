import React from 'react';
import ReactDOM from 'react-dom';
import Ellipses from './Ellipses';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Ellipses />, div);
  ReactDOM.unmountComponentAtNode(div);
});
