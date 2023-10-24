import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/app/App.tsx";
import "./index.css";
import darkTheme from "./themes/Theme.ts";
import { devMode } from "./utils/Config.ts";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const root = ReactDOM.createRoot(document.getElementById('root')!);

if (window.name === '' || devMode) {
    const renderApp = () => {
        root.render(
            <React.StrictMode>
                <ThemeProvider theme={darkTheme}>
                    <Router>
                        <App />
                    </Router>
                </ThemeProvider>
            </React.StrictMode>
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

