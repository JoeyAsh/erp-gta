import {ThemeProvider} from '@mui/material';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './components/app/App.tsx';
import './index.css';
import darkTheme from './themes/Theme.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <Router>
                <App />
            </Router>
        </ThemeProvider>
    </React.StrictMode>
);
