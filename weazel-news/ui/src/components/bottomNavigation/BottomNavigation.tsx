import {
    BottomNavigation as MuiBottomNavigation,
    BottomNavigationAction,
    Paper
} from '@mui/material';
import {ReactNode, SyntheticEvent, useState} from 'react';
import FeedIcon from '@mui/icons-material/Feed';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import {useLocation, useNavigate} from 'react-router-dom';

interface BottomNavigationActionItem {
    icon: ReactNode;
    selectedIcon: ReactNode;
    url: string;
}

const items: BottomNavigationActionItem[] = [
    {
        url: '/',
        icon: <FeedOutlinedIcon />,
        selectedIcon: <FeedIcon />
    },
    {
        url: '/fav',
        icon: <BookmarkBorderOutlinedIcon />,
        selectedIcon: <BookmarkIcon />
    },
    {
        url: '/hot',
        icon: <LocalFireDepartmentOutlinedIcon />,
        selectedIcon: <LocalFireDepartmentIcon />
    },
    {
        url: '/rated',
        icon: <StarBorderOutlinedIcon />,
        selectedIcon: <StarIcon />
    }
];

const getInitialUrl = (url: string) => {
    return items.findIndex((item) => item.url === url);
};

export const BottomNavigation = () => {
    const location = useLocation();
    const [value, setValue] = useState(getInitialUrl(location.pathname));

    const navigate = useNavigate();

    const handleChange = (event: SyntheticEvent, newValue: number) => {
        setValue(newValue);
        navigate(items[newValue].url);
    };

    return (
        <Paper
            sx={{
                position: 'fixed',
                bottom: 0,
                left: 0,
                right: 0,
                backgroundColor: '#F7F7F7'
            }}
            elevation={3}
        >
            <MuiBottomNavigation
                showLabels={false}
                value={value}
                onChange={handleChange}
            >
                {items.map((item, index) => (
                    <BottomNavigationAction
                        key={item.url}
                        showLabel={false}
                        icon={index === value ? item.selectedIcon : item.icon}
                    />
                ))}
            </MuiBottomNavigation>
        </Paper>
    );
};
