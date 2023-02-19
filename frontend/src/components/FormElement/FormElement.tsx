import { FC } from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {IForm} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {formActions} from "../../redux";

import {
    NameInput,
    EmailInput,
    MessageInput,
    Button,
    Footer,
    ReachOutToUsDiv,
    RedCartoonOne,
    FormPageDiv,
    Form,
    YellowCartoonOne,
    GreenCartoon,
    YellowCartoonTwo,
    Goodie,
    RedCartoonTwo,
    MapWrapper,
    Map,
    // Elipse,
    // SocialMediaGroup,
    // SocialMediaIcon,
    // CloudWrapper,
    // Cloud,

} from '../../App.styles'

const redCartoonSix = require('../../images/RedCartoon6.png');
const yellowCartoonOne = require('../../images/YellowCartoon1.png');
const yellowCartoonTwo = require('../../images/YellowCartoon2.png');
const greenCartoon = require('../../images/GreenCartoon.png');
const goodie = require('../../images/goodie.png');
const redCartoonTwo = require('../../images/RedCartoonTwo.png');
const map = require('../../images/Captura de Tela 2021-01-21 às 10.47 1.png');

// const instagram = require('../../images/Instagram.png');
// const twitter = require('../../images/Twitter.png');
// const facebook = require('../../images/Facebook.png');
// const painterest = require('../../images/Pinterest.png');
// const cloud = require('../../images/Cloud.png');
// const elipse = require('../../images/Ellipse.png');



const FormElement: FC = () => {

    const{register, handleSubmit, reset} = useForm<IForm>();
    const dispatch = useAppDispatch();

    const submit: SubmitHandler<IForm> = async (data) => {
        await dispatch(formActions.create({form:data}))
        reset();
    }

    return (
        <FormPageDiv>
            <Form onSubmit={handleSubmit(submit)}>
                <ReachOutToUsDiv>Reach out to us!</ReachOutToUsDiv>
                <NameInput type='text' placeholder={'Your name*'} {...register('name')}/>
                <EmailInput type='text' placeholder={'Your e-mail*'} {...register('email')}/>
                <MessageInput type='text' placeholder={'Your message*'} {...register('message')}/>
                <Button>Send message</Button>
            </Form>

            <YellowCartoonOne src={yellowCartoonOne} />
            {/*<Elipse src={elipse}/>*/}

            <MapWrapper>
                <Map src={map}/>
            </MapWrapper>
            <RedCartoonTwo src={redCartoonTwo}/>
            <Goodie src={goodie}/>

            {/*<CloudWrapper>*/}
            {/*    <Cloud src={cloud}/>*/}
            {/*</CloudWrapper>*/}

            <Footer>
                <RedCartoonOne src={redCartoonSix}/>
                <GreenCartoon src={greenCartoon}/>
                <YellowCartoonTwo src={yellowCartoonTwo}/>
                {/*<SocialMediaGroup>*/}
                {/*    <SocialMediaIcon src={instagram}/>*/}
                {/*    <SocialMediaIcon src={twitter}/>*/}
                {/*    <SocialMediaIcon src={facebook}/>*/}
                {/*    <SocialMediaIcon src={painterest}/>*/}
                {/*</SocialMediaGroup>*/}
            </Footer>

        </FormPageDiv>

    );
};

export  {FormElement};