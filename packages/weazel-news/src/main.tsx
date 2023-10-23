import {ThemeProvider} from "@mui/material";
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/app/App.tsx'
import './index.css'
import darkTheme from "./themes/Theme.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
)
