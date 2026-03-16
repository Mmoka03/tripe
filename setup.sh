#!/bin/bash

echo "[Tripe Project] 환경 세팅을 시작합니다..."

# 1. 시스템 필수 도구 설치 (unzip, dos2unix 추가)
echo "필수 도구(zip, unzip, curl, dos2unix) 설치 중..."
sudo apt update && sudo apt install -y zip unzip curl git dos2unix

# 2. SDKMAN 설치 및 Java 21 세팅
if [ ! -d "$HOME/.sdkman" ]; then
    echo "SDKMAN 설치 중..."
    curl -s "https://get.sdkman.io" | bash
fi
source "$HOME/.sdkman/bin/sdkman-init.sh"
sdk install java 21.0.2-amzn < /dev/null # 자동 설치용

# 3. NVM 설치 및 Node 24 세팅
if [ ! -d "$HOME/.nvm" ]; then
    echo "NVM 설치 중..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
fi
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install 24

# 4. 프로젝트 권한 및 줄바꿈 해결
echo "프로젝트 파일 권한 및 인코딩 최적화 중..."
# 백엔드 gradlew 권한 부여 및 CRLF 제거
if [ -f "./backend/gradlew" ]; then
    dos2unix ./backend/gradlew
    chmod +x ./backend/gradlew
fi

# 5. 환경 변수(.env) 자동 생성
if [ ! -f ".env" ]; then
    echo ".env 파일이 없어 기본 설정을 생성합니다..."
    cat <<EOF > .env
DB_ROOT_PASSWORD=00000000
DB_USER=tripe_user
DB_PASSWORD=00000000
EOF
    echo ".env 생성이 완료되었습니다."
fi

# 6. 🐳 Docker Credential 에러 방지 안내
echo "----------------------------------------------------"
echo "   만약 docker-compose 실행 시 'credentials' 에러가 난다면,"
echo "   ~/.docker/config.json 파일에서 'credsStore' 줄을 삭제하세요!"
echo "----------------------------------------------------"

echo "모든 세팅이 끝났습니다! 'source ~/.bashrc'를 입력하거나 터미널을 재시작하세요."