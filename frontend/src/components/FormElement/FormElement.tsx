import { FC } from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {IForm} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {formActions} from "../../redux";


const FormElement: FC = () => {

    const{register, handleSubmit, reset} = useForm<IForm>();
    const dispatch = useAppDispatch();

    const submit: SubmitHandler<IForm> = async (data) => {
        await dispatch(formActions.create({form:data}))
        reset();
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type='text' placeholder={'name'} {...register('name')}/>
            <input type='text' placeholder={'email'} {...register('email')}/>
            <input type='text' placeholder={'message'} {...register('message')}/>
            <button>Send message</button>
        </form>
    );
};

export  {FormElement};