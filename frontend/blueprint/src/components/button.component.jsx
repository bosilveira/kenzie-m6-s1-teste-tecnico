import styled from "styled-components";

const Clickme = styled.button`
background-color:#3bb3e0;
padding:10px;
position:relative;
justify-self: center;
width: 200px;
height: 48px;
font-family: 'Open Sans', sans-serif;
font-size:16px;
text-decoration:none;
color:#fff;
border: solid 1px #186f8f;
background-image: linear-gradient(90deg, rgb(44,160,202),rgb(62,184,229));
border-radius: 5px;
cursor: pointer;
&:active {
    padding-bottom:9px;
    padding-left:10px;
    padding-right:10px;
    padding-top:11px;
    top:1px;
}
`

export const Button = ({action, children}) => {
    return <>
    <Clickme onClick={action}>{children}</Clickme>
    </>
}