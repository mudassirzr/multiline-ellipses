import React from 'react';
import styled from 'styled-components'

const TextEllipses = (props)=>{
  let fontValue=parseInt(props.fontSize)
  let height=props.lines*fontValue + 'px'
  
  return (<MainContainer width={props.width} background={props.bgColor} >
    <SubWrapper color={props.fontColor} background={props.bgColor} fontSize={props.fontSize} lines={props.lines} height={height}>
      <EllipsesContent color={props.fontColor}>{props.text}</EllipsesContent>
    </SubWrapper>
  </MainContainer>)
}
const MainContainer =styled.div`
  width:  ${props => props.width || "100%"};
  background: ${props => props.background || "#fff"}
`;
const SubWrapper = styled.p`
  overflow: hidden;
  word-wrap: break-word;
  color: #000;
  padding: 0;
  font-size: ${props => props.fontSize ?props.fontSize: "13px"};
  line-height: ${props => props.fontSize ?props.fontSize: "13px"};
  height: ${props => props.height};
  width:100%;
  margin: 0;
  display: inline-block;
  &:before {
        content: "";
        float: left;
        width: 1px;
        height: ${props => props.height};
        display: inline-block;
    }
  &:after {
        content: "...";
        position: relative;
        left: 100%;
        top:  -${props => props.lines*props.fontSize || "13px"};
        float: right;
        width: 20px;
        margin-left: -20px;
        padding-left: 1px;
        text-align: center;
        background: ${props => props.background || "#fff"};
        color: ${props => props.color || "#000"}
    }
  `;
const EllipsesContent=styled.span`
    float: right;
      margin-left: -1px;
      width: 100%;
      color: ${props => props.color || "#000"}
  `

export default TextEllipses;
