import {ThemeProvider} from '@mui/material';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/app/App';
import './index.css';
import darkTheme from './themes/Theme';
import {devMode} from './utils/Config';
import {createRoot} from 'react-dom/client';
import {StrictMode} from 'react';

const root = createRoot(document.getElementById('root')!);

if (window.name === '' || devMode) {
    const renderApp = () => {
        root.render(
            <StrictMode>
                <ThemeProvider theme={darkTheme}>
                    <Router>
                        <App />
                    </Router>
                </ThemeProvider>
            </StrictMode>
        );
    };

    if (devMode) {
        renderApp();
    } else {
        window.addEventListener('message', (event) => {
            if (event.data === 'componentsLoaded') renderApp();
        });
    }
}
