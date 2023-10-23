import {Box, Paper, Typography, useTheme} from '@mui/material';

export const Header = () => {
    const theme = useTheme();
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
