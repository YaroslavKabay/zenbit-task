import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { formReducer } from './slices/form.slice'

const rootReducer = combineReducers({
    forms: formReducer

})

const setupStore = () => configureStore({
    reducer:rootReducer
})

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']

export type {
    RootState,
    AppStore,
    AppDispatch
}

export {
    setupStore
}