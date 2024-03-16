import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";

const router = createBrowserRouter([
    {path: '', element: <MainLayout/>, children:[
            {index: true, element: <Navigate to={'movies'}/>},
            {path: ''}
        ]}
])

export {router}