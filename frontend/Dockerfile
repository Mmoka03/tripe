# 1. Node.js 20 버전 이상 사용 (개발 환경용)
FROM node:24-alpine

# 2. 컨테이너 내부 작업 디렉토리 설정
WORKDIR /app

# 3. 라이브러리 설치를 위해 설정 파일 먼저 복사
COPY package*.json ./

# 4. 의존성 설치
RUN npm install

# 5. 소스 코드 전체 복사
COPY . .

# 6. Vite 개발 서버 포트 노출 (기본 5173)
EXPOSE 5173

# 7. Vite 개발 서버 실행 (모든 네트워크 허용 --host 옵션 필수)
CMD ["npm", "run", "dev", "--", "--host"]