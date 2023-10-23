import {Route, Routes} from 'react-router-dom';
import {MainPage} from '../pages/mainPage/MainPage.tsx';
import {NewsDetailPage} from '../pages/newsDetailPage/NewsDetailPage.tsx';

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage />} />
            <Route path={'/news/:newsId'} element={<NewsDetailPage />} />
        </Routes>
    );
};
