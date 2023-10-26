import {
    BottomNavigation as MuiBottomNavigation,
    BottomNavigationAction,
    Paper
} from '@mui/material';
import {ReactNode, useState} from 'react';
import FeedIcon from '@mui/icons-material/Feed';
import FeedOutlinedIcon from '@mui/icons-material/FeedOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LocalFireDepartmentOutlinedIcon from '@mui/icons-material/LocalFireDepartmentOutlined';
import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

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

export const BottomNavigation = () => {
    const [value, setValue] = useState(0);
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
                onChange={(_, newValue) => {
                    setValue(newValue);
                }}
            >
                {items.map((item, index) => (
                    <BottomNavigationAction
                        showLabel={false}
                        icon={index === value ? item.selectedIcon : item.icon}
                    />
                ))}
            </MuiBottomNavigation>
        </Paper>
    );
};
