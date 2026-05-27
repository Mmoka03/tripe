package ga.tripe.tripe.domain.city.application;
import ga.tripe.tripe.domain.city.dto.response.CityTravelResponse;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;

@Service
public class CityAnalysisService {

    private final ChatClient chatClient;

    public CityAnalysisService(ChatClient.Builder chatClientBuilder) {
        this.chatClient = chatClientBuilder.build();
    }

    public CityTravelResponse getCityAnalysis(String city) {

        // :TODO 현재 프롬포트는 단순 출력 테스트용임. 적절한 프롬포트로 구성해야 함.
        return chatClient.prompt()
                .user(u -> u.text("""
                    {city}에 대한 상세 여행 정보를 제공해줘. 
                    뉴스, 소셜 미디어 반응, 예정된 이벤트, 안전 정보, 장단점 및 
                    일일 예상 예산을 포함한 상세 데이터를 JSON 형태로 응답해줘.
                    응답되는 언어는 무조건 한국어로 해줘.
                    """)
                        .param("city", city))
                .call()
                .entity(CityTravelResponse.class); // 정의한 복잡한 레코드 구조로 자동 변환
    }
}
