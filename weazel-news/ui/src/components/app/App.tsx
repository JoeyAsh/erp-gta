import {ReactNode} from 'react';
import {MainRoutes} from '../../routes/MainRoutes';
import {devMode} from '../../utils/Config';
import {Header} from '../header/Header';
import {Box} from '@mui/material';

const AppProvider = ({children}: {children: ReactNode}) => {
    if (devMode) {
        return (
            <Box
                sx={{height: '100%', display: 'flex', flexDirection: 'column'}}
                className="dev-wrapper"
            >
                {children}
            </Box>
        );
    } else return children;
};

function App() {
    return (
        <AppProvider>
            <Header />
            <MainRoutes />
        </AppProvider>
    );
}

export default App;
