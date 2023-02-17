import {FC, ReactNode} from 'react';
import {IForm} from '../../interfaces'


interface IProps{
    form: IForm,
    children?: ReactNode
}

const Form: FC<IProps> = ({form}) => {
    const {id, name, email, message} = form
    return (
        <div>
            <div>id: {id}</div>
            <div>name: {name}</div>
            <div>email: {email}</div>
            <div>message: {message}</div>
        </div>
    );
};

export  {Form};