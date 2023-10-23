import {createTheme} from '@mui/material';
import darkPalette from './DarkPalette';

let darkTheme = createTheme({
    palette: darkPalette,
});

darkTheme = createTheme(
    {
        components: {
            MuiButton: {
                defaultProps: {
                    variant: 'contained',
                },
                styleOverrides: {
                    root: {
                        textTransform: 'capitalize',
                    },
                },
            },
            MuiPaper: {
                styleOverrides: {
                    root: {
                        background:
                            'linear-gradient(180deg, #242424 0%, #262626 49.79%, #282828 81.04%, #313131 100%)',
                        borderRadius: 16,
                        boxShadow: '0 -1px 1px 1px rgba(255,255,255, 0.05)',
                    },
                },
            },
        },
    },
    darkTheme,
);

export default darkTheme;
