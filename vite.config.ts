import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
const name = require('./package.json').name;

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.CI ? name : './',
  plugins: [reactRefresh()]
})
