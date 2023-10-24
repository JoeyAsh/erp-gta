import {Container} from '@mui/material';
import {ReactNode} from 'react';
import {MainRoutes} from '../../routes/MainRoutes.tsx';
import {devMode} from '../../utils/Config.ts';
import {Header} from '../header/Header.tsx';

const AppProvider = ({children}: {children: ReactNode}) => {
    if (devMode) {
        return <div className="dev-wrapper">{children}</div>;
    } else return children;
};

function App() {
    return (
        <AppProvider>
            <Header />
            <Container>
                <MainRoutes />
            </Container>
        </AppProvider>
    );
}

export default App;
