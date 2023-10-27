import {Box, IconButton, Paper, Typography, useTheme} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import {useNavigate} from 'react-router-dom';

export const Header = () => {
    const theme = useTheme();
    const navigate = useNavigate();

    const handleAddButtonClick = () => {
        navigate('/add-news');
    };

    return (
        <Paper
            elevation={2}
            sx={{
                position: 'sticky',
                top: 0,
                zIndex: 99,
                backgroundColor: theme.palette.background.default
            }}
        >
            <Box
                sx={{
                    position: 'relative',
                    backgroundColor: theme.palette.primary.main,
                    height: 100,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'flex-end'
                }}
            >
                <Typography color={'white'} component={'i'} variant={'h3'}>
                    LSN
                </Typography>
                <Box sx={{position: 'absolute', right: 8, bottom: 8}}>
                    <IconButton onClick={handleAddButtonClick}>
                        <AddIcon sx={{color: 'white'}} />
                    </IconButton>
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Typography component={'i'} variant={'body1'}>
                    LATEST POLITICS NEWS AND HEADLINES
                </Typography>
            </Box>
        </Paper>
    );
};
