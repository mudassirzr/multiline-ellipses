import React, { useEffect } from 'react';

function TextEllipses(props){
  let fontValue=parseInt(props.fontSize, 10)
  let height=props.lines*fontValue + 'px'
  let mounted = React.useRef()
  useEffect(()=>{
    if (!mounted.current) {
      mounted.current = true;
      let style = document.createElement('style');
      style.appendChild(document.createTextNode(getStyleText()))
      style.setAttribute('data-style','ellipses')
      document.head.appendChild(style);
    } else {
      let styleEl = document.querySelector('style[data-style="ellipses"]')
      styleEl.innerHTML=getStyleText()
    }
  })
  useEffect(()=>{
    return ()=>{
      let styleEl = document.querySelector('style[data-style="ellipses"]');
      document.head.removeChild(styleEl);
    }
  },[])

  const getStyleText = () => {
    let outerDivClass = 
    `
      .ellipses_outer {
        width:  ${props.width || "100%"};
        background: ${props.bgColor || "#fff"}
      }
    `
    let paragraphClass =
    `
      .ellipses_paragraph {
        overflow: hidden;
        word-wrap: break-word;
        color: ${props.fontColor};
        padding: 0;
        font-size: ${props.fontSize ?props.fontSize+"px": "13px"};
        line-height: ${props.fontSize ?props.fontSize+"px": "13px"};
        height: ${height};
        width:100%;
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
          width: ${props.fontSize?(props.fontSize+5)+"px" : "13px"};
          margin-left: -${props.fontSize?(props.fontSize+5)+"px" : "13px"};
          padding-left: 1px;
          text-align: center;
          background: ${props.bgColor || "#fff"};
          color: ${props.fontColor || "#000"}
      }
    `
    let spanClass = 
    `
      .ellipses_span {
        float: right;
        margin-left: -1px;
        width: 100%;
        color: ${props.fontColor || "#000"}
      }
    `
    return outerDivClass+paragraphClass+spanClass
  }
  
  let spanElement = React.createElement('span', {className: 'ellipses_span'}, props.text);
  let paragraphElement = React.createElement('p', {className: 'ellipses_paragraph'}, spanElement);
  let divElement = React.createElement('div', {className: 'ellipses_outer'}, paragraphElement)
 
  return divElement
}

export default TextEllipses;
