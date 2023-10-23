import {Route, Routes} from 'react-router-dom';
import {MainPage} from '../pages/mainPage/MainPage.tsx';

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage />} />
        </Routes>
    );
};
