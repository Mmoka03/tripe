package ga.tripe.tripe.domain.city.api;

import ga.tripe.tripe.domain.city.application.CityAnalysisService;
import ga.tripe.tripe.domain.city.dto.response.CityTravelResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/destinations")
public class CityController {

    private final CityAnalysisService cityAnalysisService;

    public CityController(CityAnalysisService cityAnalysisService) {
        this.cityAnalysisService = cityAnalysisService;
    }

    public record ApiResponse<T>(
            boolean success,
            T data,
            String message
    ) {}

    // 컨트롤러에서 사용
    @GetMapping("/{cityId}/analysis")
    public ResponseEntity<ApiResponse<CityTravelResponse>> getCityDetails(@PathVariable String cityId) {
        CityTravelResponse result = cityAnalysisService.getCityAnalysis(cityId);
        return ResponseEntity.ok(new ApiResponse<>(true, result, "Success"));
    }
}