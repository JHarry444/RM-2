import { defineConfig } from 'vitest/config';
import react, { reactCompilerPreset } from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel'

export default defineConfig({
    plugins: [
        react(),
        babel({ presets: [reactCompilerPreset()] })
    ],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/__tests__/setup.ts',
        reporters: ['default', 'html', 'json', 'junit'],
    }
})
