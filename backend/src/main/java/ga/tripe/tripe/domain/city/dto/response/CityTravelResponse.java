package ga.tripe.tripe.domain.city.dto.response;

import java.util.List;

public record CityTravelResponse(
        String cityId,
        String cityName,
        String country,
        String imageUrl,
        int travelSuitabilityScore,
        String recommendation,
        List<NewsItem> news,
        List<SocialMediaItem> socialMedia,
        List<EventItem> events,
        SafetyInfo safety,
        List<String> pros,
        List<String> cons,
        String bestTimeToVisit,
        EstimatedBudget estimatedBudget,
        String lastUpdated,
        String dataVersion
) {
    public record NewsItem(
            String id, String title, String summary, String source,
            String publishedAt, String sentiment, String url
    ) {}

    public record SocialMediaItem(
            String id, String platform, String content, String author,
            int engagementScore, List<String> hashtags, String createdAt
    ) {}

    public record EventItem(
            String id, String name, String description, String startDate,
            String endDate, String category, String estimatedCrowd
    ) {}

    public record SafetyInfo(
            String level, int score, List<String> recentIncidents,
            List<String> travelAdvisories, List<String> safeAreas, List<String> areasToAvoid
    ) {}

    public record EstimatedBudget(
            String currency,
            DailyBudget daily
    ) {}

    public record DailyBudget(int min, int max) {}
}