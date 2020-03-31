import React from 'react';

function TextEllipses(props){
  let fontValue=parseInt(props.fontSize, 10)
  let height=props.lines*fontValue + 'px'

  let style = document.createElement('style');
  let outerDivClass = 
  `
    .ellipses_outer {
      width:  ${props.width || "100%"};
      background: ${props.background || "#fff"}
    }
  `
  let paragraphClass =
  `
    .ellipses_paragraph {
      overflow: hidden;
      word-wrap: break-word;
      color: #000;
      padding: 0;
      font-size: ${props.fontSize ?props.fontSize+"px": "13px"};
      line-height: ${props.fontSize ?props.fontSize+"px": "13px"};
      height: ${height};
      width: 100%;
      margin: 0;
      display: inline-block;
    }
  
    .ellipses_paragraph:before {
        content: "";
        float: left;
        width: 1px;
        height: ${height};
        display: inline-block;
    }
    .ellipses_paragraph:after {
        content: "...";
        position: relative;
        left: 100%;
        top:  -${props.fontSize ?props.fontSize+"px" : "13px"};
        float: right;
        width: 20px;
        margin-left: -20px;
        padding-left: 1px;
        text-align: center;
        background: ${props.background || "#fff"};
        color: ${props.color || "#000"}
    }
  `
  let spanClass = 
  `
    .ellipses_span {
      float: right;
      margin-left: -1px;
      width: 100%;
      color: ${props.color || "#000"}
    }
  `
  style.appendChild(document.createTextNode(outerDivClass))
  style.appendChild(document.createTextNode(paragraphClass))
  style.appendChild(document.createTextNode(spanClass))
  document.head.appendChild(style);
  let spanElement = React.createElement('span', {className: 'ellipses_span'}, props.text);
  let paragraphElement = React.createElement('p', {className: 'ellipses_paragraph'}, spanElement);
  let divElement = React.createElement('div', {className: 'ellipses_outer'}, paragraphElement)
 
  return divElement
}

export default TextEllipses;
