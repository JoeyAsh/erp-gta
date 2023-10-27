import {Route, Routes} from 'react-router-dom';
import {MainPage} from '../pages/mainPage/MainPage';
import {NewsDetailPage} from '../pages/newsDetailPage/NewsDetailPage';
import {AddNewsPage} from '../pages/addNewsPage/AddNewsPage';

export const MainRoutes = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainPage />} />
            <Route path={'/fav'} element={<MainPage />} />
            <Route path={'/hot'} element={<MainPage />} />
            <Route path={'/rated'} element={<MainPage />} />
            <Route path={'/add-news'} element={<AddNewsPage />} />
            <Route path={'/edit-news/:newsId'} element={<MainPage />} />
            <Route path={'/news/:newsId'} element={<NewsDetailPage />} />
        </Routes>
    );
};
