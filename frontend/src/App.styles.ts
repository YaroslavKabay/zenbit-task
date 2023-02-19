import styled from "styled-components";

const FormPageDiv = styled.form`
position: relative;
width: 100%;
height: 100%;

background: #FFFFFF;
`

const Form = styled.form`
position: absolute;
padding: 0 3px;
width: 563px;
height: 575px;
left: 147px;
top: 179px;
display: flex;
flex-direction: column;
gap: 8px;
`
const ReachOutToUsDiv = styled.div`

height: 58px;
margin-bottom: 22px;

font-family: 'Apercu Arabic Pro';
font-style: normal;
font-weight: 400;
font-size: 40px;
line-height: 130%;

color: #3E3E3E;
`
const NameInput = styled.input`
box-sizing: border-box;

height: 93px;

background: #FFFFFF;
border: 1px solid #DCDCDC;
border-radius: 10px;
font-size: 18px;
line-height: 32px;
color: #2D2D2D;
padding-left: 46px;

 ::placeholder {
      font-size: 18px;
      line-height: 32px;
      color: #2D2D2D;
   }

`
const EmailInput = styled.input`
box-sizing: border-box;

height: 93px;


background: #FFFFFF;
border: 1px solid #DCDCDC;
border-radius: 10px;
font-size: 18px;
line-height: 32px;
color: #2D2D2D;
padding-left: 46px;

 ::placeholder {
      font-size: 18px;
      line-height: 32px;
      color: #2D2D2D;
   }
`
const MessageInput = styled.input`
box-sizing: border-box;

height: 189px;


background: #FFFFFF;
border: 1px solid #DCDCDC;
border-radius: 10px;
font-size: 18px;
line-height: 32px;
color: #2D2D2D;
padding-left: 46px;

 ::placeholder {
      font-size: 18px;
      line-height: 32px;
      color: #2D2D2D;
   }

`
const Button = styled.button`

width: 218px;
height: 73px;
margin-top: 15px;

background: #FAD34F;
border-radius: 500px;
border-color: transparent;

font-family: 'Apercu Arabic Pro';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 18px;

color: #FFFFFF;
`

const Footer = styled.div`
box-sizing: border-box;

position: absolute;
width: 1440px;
height: 200px;
left: 0px;
top: 928px;

background: #FAFAFA;
border: 1px solid #D8D8D8;
display: flex;
`
const RedCartoonOne = styled.img`
position: absolute;
left: 15px;
margin-top: -39px;
`
const YellowCartoonOne= styled.img`
position: absolute;
Width: 88.32px;
Height: 85.84px;
Top: 23px;
Left: 29px;



`
const GreenCartoon = styled.img`
width: 78.46px;
height: 97px;
margin-left: 1234px;
margin-bottom: 25px;
`

const YellowCartoonTwo = styled.img`

height: 107px;
margin-top: 50px;
margin-left: 52px;



`
const SocialMediaGroup = styled.div`
width: 126px;
height: 16px;
margin-left: 30px;
margin-bottom: 79px;

display: flex;
`
const SocialMediaIcon = styled.img`
position: absolute;
left: 31.77%;
right: 67.38%;
top: 89.39%;
bottom: 9.3%;

background: #696969;
`
const Goodie = styled.img`
position: absolute;
width: 127px;
height: 127px;
left: 775px;
top: 508px;
`
const RedCartoonTwo = styled.img`

height: 299px;
position: absolute;
top: 545px;
left:780px;

`
const Elipse = styled.img`
position: absolute;
width: 87px;
height: 87px;
left: 714px;
top: 21px;

background: #FAD34F;
opacity: 0.1;
`

const MapWrapper = styled.div`
position: absolute;
width: 976px;
height: 976px;
left: 814px;
top: -52px;
overflow:hidden;
border-radius: 50%;

`
const Map = styled.img`
height: 976px;
position: relative;
`

const CloudWrapper = styled.div`
position: absolute;
left: -6.39%;
right: 4.39%;
top: 8.95%;
bottom: 13.32%;

opacity: 0.5;
`
const Cloud = styled.img`
position: absolute;
left: 81.18%;
right: 4.39%;
top: 43%;
bottom: 43.04%;

background: #C6C6C6;
opacity: 0.1;
`

export  {
    ReachOutToUsDiv,
    NameInput,
    EmailInput,
    MessageInput,
    Footer,
    Button,
    RedCartoonOne,
    YellowCartoonOne,
    GreenCartoon,
    YellowCartoonTwo,
    SocialMediaGroup,
    SocialMediaIcon,

    Goodie,
    RedCartoonTwo,
    Elipse,
    MapWrapper,
    Map,
    CloudWrapper,
    Cloud,



    FormPageDiv,
    Form,

};