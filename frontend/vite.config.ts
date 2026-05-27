import {defineConfig, loadEnv} from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), '');

    return {
        server: {
            host: '0.0.0.0', // 모든 네트워크 인터페이스에서 접근 허용
            port: Number(env.VITE_PORT) || 5173,
            hmr: {
                clientPort: Number(env.VITE_PORT) || 5173, // 브라우저가 접속할 포트값 고정
            },
            proxy: {
                '/api': {
                    target: env.TRIPE_API_URL || 'http://backend:8080', // 스프링 부트 주소
                    changeOrigin: true,
                },
            },
            watch: {
                ignored: ['**/node_modules/**', '**/dist/**', '**/public/**']
            }
        },
        plugins: [
            // Make를 사용하기 위해 아래 플러그인들이 필요함.
            react(),
            tailwindcss(),
        ],
        resolve: {
            alias: {
                // Alias @ to the src directory
                '@': path.resolve(__dirname, './src'),
            },
        },

        // 원시적인 파일값 가져오기. 절대 .css, .tsx, or .ts 파일 형식을 추가하지 말 것.
        assetsInclude: ['**/*.svg', '**/*.csv'],
    }
});
