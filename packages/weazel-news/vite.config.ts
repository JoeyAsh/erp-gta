import {defineConfig} from 'vite';

import viteConfig from '../../vite.config';
// @ts-ignore
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    ...viteConfig,
    server: {
        port: 3000,
    },
    plugins: [react()],
});
