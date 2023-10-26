import {ReactNode} from 'react';
import {MainRoutes} from '../../routes/MainRoutes';
import {devMode} from '../../utils/Config';
import {Header} from '../header/Header';

const AppProvider = ({children}: {children: ReactNode}) => {
    if (devMode) {
        return <div className="dev-wrapper">{children}</div>;
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
