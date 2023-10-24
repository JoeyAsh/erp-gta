import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestoreIcon from '@mui/icons-material/Restore';
import {
    BottomNavigation,
    BottomNavigationAction,
    Box,
    List,
    ListItem,
    Paper
} from '@mui/material';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {NewsCard} from '../../components/newsCard/NewsCard.tsx';
import {NewsCardProps} from '../../components/newsCard/NewsCardModels.ts';
import {getMockData} from '../../mock/News.mock.ts';

export const MainPage = () => {
    const [value, setValue] = useState(0);
    const navigate = useNavigate();

    const handleClick = (newsItem: NewsCardProps) => {
        navigate(`/news/${newsItem.id}`);
    };

    return (
        <Box>
            <List sx={{pb: 8}}>
                {Array.from({length: 20}).map((_, index) => {
                    const item = getMockData(index);
                    return (
                        <ListItem key={index}>
                            <NewsCard
                                {...item}
                                onClick={() => handleClick(item)}
                            />
                        </ListItem>
                    );
                })}
            </List>
            <Paper
                sx={{position: 'fixed', bottom: 0, left: 0, right: 0}}
                elevation={3}
            >
                <BottomNavigation
                    showLabels={false}
                    value={value}
                    onChange={(_, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction
                        label="Recents"
                        icon={<RestoreIcon />}
                    />
                    <BottomNavigationAction
                        label="Favorites"
                        icon={<FavoriteIcon />}
                    />
                    <BottomNavigationAction
                        label="Nearby"
                        icon={<LocationOnIcon />}
                    />
                </BottomNavigation>
            </Paper>
        </Box>
    );
};
