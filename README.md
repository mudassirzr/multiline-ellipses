# Multiline Ellipsis for React

multiline-ellipsis-react is a react library that let's you cut short long texts with an ellipsis (...).

## API

| Props | Type | Default Value | Description
| ------ | ------ | ------ | ------ |
| text | string | No default value (Mandatory prop) | text you want to ellipsize
| width (Optional) | string | 100% | width of the ellipsis element in the dom
| bgColor (Optional) | string | #fff | background color of the ellipsis element
| fontColor (Optional) | string | #000 | color of the text in the ellipsis element
| fontSize (Optional) | integer | 13 | font size of the text in ellipsis element
| line (Optional) | integer | 2 | number of lines to be shown

### Example:
```sh
import React from 'react';
import ReactDOM from 'react-dom';
import Ellipsis from 'multiline-ellipsis-react';

const text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

ReactDOM.render(
    <Ellipsis 
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
  - This library uses only CSS techniques to show ellipsis on the text.
  - Let us know about the issues on our github page.

