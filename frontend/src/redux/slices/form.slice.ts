import {createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { IForm } from "../../interfaces";
import { formService } from "../../services";

interface IState{
    forms: IForm[]
}
const initialState:IState = {
    forms:[]
}

const getAll = createAsyncThunk <IForm[],void> (
    'formSlice/getAll',
    async ( _, {rejectWithValue})=>{
        try{
            const {data} = await formService.getAll();
            return data

        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)

        }
    }
)
const create = createAsyncThunk <IForm, {form: IForm}>(
    'formSlice/create',
    async ({form}, {rejectWithValue}) => {
        try {
            const {data} = await formService.create(form)
            return data;
        }catch (e) {
            const err = e as AxiosError
            return rejectWithValue(err.response?.data)
        }
    }
)


const formSlice = createSlice({
    name:'formSlice',
    initialState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(getAll.fulfilled,(state, action)=>{
                state.forms = action.payload
            })
            .addCase(create.fulfilled, (state,action)=>{
                state.forms.push(action.payload)
            })
})

const {reducer: formReducer} = formSlice;

const formActions ={
    getAll,
    create
}

export {
    formReducer,
    formActions
}