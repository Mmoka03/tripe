/**
 * 타입 정의 파일
 * 백엔드 API와의 데이터 구조를 정의합니다.
 */

// 도시/여행지 정보
export interface City {
  id: string;
  name: string;
  country: string;
  coordinates: [number, number]; // [경도, 위도]
  imageUrl?: string;
}

// 뉴스 정보
export interface NewsItem {
  id: string;
  title: string;
  summary: string;
  source: string;
  publishedAt: string; // ISO 8601 format
  sentiment: 'positive' | 'neutral' | 'negative'; // AI 감성 분석 결과
  url: string;
}

// SNS/소셜미디어 정보
export interface SocialMediaPost {
  id: string;
  platform: 'instagram' | 'twitter' | 'youtube' | 'tiktok';
  content: string;
  author: string;
  engagementScore: number; // 0-100
  hashtags: string[];
  createdAt: string;
}

// 이벤트/축제 정보
export interface Event {
  id: string;
  name: string;
  description: string;
  startDate: string; // ISO 8601 format
  endDate: string;
  category: 'festival' | 'concert' | 'exhibition' | 'sports' | 'cultural';
  estimatedCrowd: 'low' | 'medium' | 'high';
  imageUrl?: string;
}

// 치안 수준 정보
export interface SafetyInfo {
  level: 'very-safe' | 'safe' | 'moderate' | 'caution' | 'dangerous';
  score: number; // 0-100 (높을수록 안전)
  recentIncidents: {
    type: string;
    description: string;
    date: string;
  }[];
  travelAdvisories: string[];
  safeAreas: string[];
  areasToAvoid: string[];
}

// 여행 적합도 분석 결과 (AI 생성 데이터)
export interface DestinationAnalysis {
  cityId: string;
  cityName: string;
  country: string;
  imageUrl: string;
  
  // 종합 평가
  travelSuitabilityScore: number; // 0-100
  recommendation: 'highly-recommended' | 'recommended' | 'neutral' | 'not-recommended';
  
  // 세부 정보
  news: NewsItem[];
  socialMedia: SocialMediaPost[];
  events: Event[];
  safety: SafetyInfo;
  
  // AI 분석 결과
  pros: string[]; // 장점
  cons: string[]; // 단점
  bestTimeToVisit: string;
  estimatedBudget: {
    currency: string;
    daily: { min: number; max: number };
  };
  
  // 메타데이터
  lastUpdated: string; // ISO 8601 format
  dataVersion: string;
}

// 비행 경로 정보
export interface FlightRoute {
  from: City;
  to: City;
}
