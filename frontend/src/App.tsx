import {FC} from "react";
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {FormPage} from "./pages";


const App:FC = () => {
    return (
        <Routes >
            <Route path={''} element={<MainLayout/>}>
                <Route index element={<Navigate to={'form'}/>}/>
                <Route path={'form'} element={<FormPage/>}/>
            </Route>
        </Routes>
    );
}

export  {App};
