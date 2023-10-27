import {Box, Container, List, ListItem} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {NewsCard} from '../../components/newsCard/NewsCard';
import {NewsCardProps} from '../../components/newsCard/NewsCardModels';
import {getMockData} from '../../mock/News.mock';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import {NewsCarousel} from '../../components/newsCarousel/NewsCarousel';
import {BottomNavigation} from '../../components/bottomNavigation/BottomNavigation';

export const MainPage = () => {
    const navigate = useNavigate();

    const handleClick = (newsItem: NewsCardProps) => {
        navigate(`/news/${newsItem.id}`);
    };

    return (
        <Box>
            <Box sx={{mt: 2}}>
                <NewsCarousel />
            </Box>
            <Container>
                <List sx={{pb: 8}}>
                    {Array.from({length: 20}).map((_, index) => {
                        const item = getMockData(index);
                        return (
                            <ListItem key={index} disableGutters>
                                <NewsCard
                                    {...item}
                                    onClick={() => handleClick(item)}
                                />
                            </ListItem>
                        );
                    })}
                </List>
            </Container>
            <BottomNavigation />
        </Box>
    );
};
