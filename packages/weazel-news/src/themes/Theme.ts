import {createTheme} from '@mui/material';
import lightPalette from './LightPalette.ts';

let darkTheme = createTheme({
    palette: lightPalette
});

darkTheme = createTheme(
    {
        components: {
            MuiButton: {
                defaultProps: {
                    variant: 'contained'
                },
                styleOverrides: {
                    root: {
                        textTransform: 'capitalize'
                    }
                }
            }
        }
    },
    darkTheme
);

export default darkTheme;
