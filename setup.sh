#!/bin/bash

echo "프로젝트 환경 세팅을 시작합니다..."

# 1. 필수 시스템 도구 설치
sudo apt update && sudo apt install -y zip unzip curl git

# 2. SDKMAN 설치 (없을 경우만)
if [ ! -d "$HOME/.sdkman" ]; then
    curl -s "https://get.sdkman.io" | bash
fi
source "$HOME/.sdkman/bin/sdkman-init.sh"

# 3. Java 21 설치 (아마존)
sdk install java 21.0.2-amzn

# 4. NVM 및 Node 24 설치
if [ ! -d "$HOME/.nvm" ]; then
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
fi
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
nvm install 24

echo "모든 환경 세팅이 완료되었습니다! 터미널을 재시작해주세요."