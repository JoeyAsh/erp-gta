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
import {NewsCard} from '../../components/newsCard/NewsCard.tsx';
import {NewsCardProps} from '../../components/newsCard/NewsCardModels.ts';

const dummyText =
    'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.' +
    'Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.' +
    'Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer';

const getMockData = (index: number): NewsCardProps => ({
    id: index.toString(),
    date: `${index}. FEB 2023`,
    title: `${index} Title`,
    creatorName: 'Max Mustermann',
    text: dummyText,
    img: {
        alt: 'https://picsum.photos/seed/picsum/120/120',
        imageUrl: 'https://picsum.photos/seed/picsum/120/120'
    }
});

export const MainPage = () => {
    const [value, setValue] = useState(0);
    return (
        <Box>
            <List sx={{pb: 8}}>
                {Array.from({length: 20}).map((_, index) => (
                    <ListItem key={index}>
                        <NewsCard {...getMockData(index)} />
                    </ListItem>
                ))}
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