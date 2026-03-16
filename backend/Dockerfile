## 1단계: 빌드 스테이지
#FROM eclipse-temurin:21-jdk-jammy AS build
#WORKDIR /app
#COPY . .
#RUN chmod +x gradlew
##RUN ./gradlew clean bootJar -x test
#RUN ./gradlew clean bootJar
#
## 2단계: 실행 스테이지
#FROM eclipse-temurin:21-jre-jammy
#WORKDIR /app
#COPY --from=build /app/build/libs/*.jar app.jar
#ENTRYPOINT ["java", "-jar", "app.jar"]

FROM eclipse-temurin:21-jre-jammy
WORKDIR /app

# 방금 성공한 빌드 결과물(jar)을 컨테이너 안으로 복사
# (build/libs 폴더에 생성된 jar 파일을 가져옵니다)
COPY build/libs/*.jar app.jar

# 실행
ENTRYPOINT ["java", "-jar", "app.jar"]