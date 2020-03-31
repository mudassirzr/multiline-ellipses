# Multiline Ellipses for React

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

multiline-ellipses-react is a react library that let's you cut short long texts with an ellipses (...).

## API

| Props | Type | Default Value | Description
| ------ | ------ | ------ | ------ |
| text | string | No default value (Mandatory prop) | text you want to ellipsize
| width (Optional) | string | 100% | width of the ellipsis element in the dom
| bgColor (Optional) | string | #fff | background color of the ellipses element
| fontColor (Optional) | string | #000 | color of the text in the ellipses element
| fontSize (Optional) | integer | 13px | font size of the text in ellipses element
| line (Optional) | integer | 13 | number of lines to be shown

### Example:
```sh
import React from 'react';
import ReactDOM from 'react-dom';
import Ellipses from 'multiline-ellipses-react';

const text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

ReactDOM.render(
    <Ellipses 
        width='90%' 
        bgColor='#fff' 
        fontColor='#000' 
        fontSize={13} 
        lines={2} 
        text={text} 
    />, 
    document.getElementById('root')
);

```
##### Note:
  - Please make sure that the props you pass to the component are of the same type (integer, string etc.) as mentioned above.
  - This library uses only CSS techniques to show ellipses on the text.
  - let us know about the issues on our github page

