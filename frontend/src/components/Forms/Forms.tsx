import { FC, useEffect} from 'react';

import { Form } from '../Form/Form';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {formActions} from "../../redux";

const Forms: FC= () => {

    const {forms} = useAppSelector(state => state.forms)
    const dispatch = useAppDispatch()

    useEffect(()=>{

        dispatch(formActions.getAll())

    },[dispatch])

    return (
        <div>
            {forms.map(form => <Form form={form} key={form.id}/>)}
    </div>
);

};

export  {Forms};