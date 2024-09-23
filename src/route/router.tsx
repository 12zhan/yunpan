import { createBrowserRouter } from 'react-router-dom';
import FilePage from '../pages/file'
import App from '../App';


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/file/:class",
                element: <FilePage />
            }
        ]
    }
]);

export {
    router
};