import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 번역 리소스
const resources = {
  ko: {
    translation: {
      // 네비게이션
      selectDeparture: '📍 출발지를 선택하세요',
      selectDestination: '✈️ 도착지를 선택하세요',
      route: '🎯 {{from}} → {{to}}',
      selectedRegion: '선택된 지역',
      
      // 브랜드
      brandName: 'TripE',
      brandTagline: 'AI 기반 안전 및 분쟁 분석 여행 플래너',
      
      // 컨트롤
      markerSize: '마커 크기',
      
      // 비행 애니메이션
      departure: '출발',
      arrival: '도착',
      
      // 사이드바
      travelSuitability: '여행 적합도',
      highlyRecommended: '강력 추천',
      recommended: '추천',
      neutral: '중립',
      caution: '주의',
      notRecommended: '비추천',
      
      // 섹션
      latestNews: '최신 뉴스',
      socialMediaTrends: 'SNS 트렌드',
      festivals: '축제 및 이벤트',
      safetyInfo: '치안 정보',
      
      // 뉴스 감정
      positive: '긍정',
      neutral_sentiment: '중립',
      negative: '부정',
      
      // 안전 레벨
      safe: '안전',
      moderate: '보통',
      risky: '위험',
      
      // 기타
      readMore: '더 보기',
      close: '닫기',
      loading: '로딩 중...',
    },
  },
  en: {
    translation: {
      // Navigation
      selectDeparture: '📍 Select departure city',
      selectDestination: '✈️ Select destination',
      route: '🎯 {{from}} → {{to}}',
      selectedRegion: 'Selected Region',
      
      // Brand
      brandName: 'TripE',
      brandTagline: 'Agentic Trip Planner with Safety & Conflict Engine',
      
      // Controls
      markerSize: 'Marker Size',
      
      // Flight Animation
      departure: 'Departure',
      arrival: 'Arrival',
      
      // Sidebar
      travelSuitability: 'Travel Suitability',
      highlyRecommended: 'Highly Recommended',
      recommended: 'Recommended',
      neutral: 'Neutral',
      caution: 'Caution',
      notRecommended: 'Not Recommended',
      
      // Sections
      latestNews: 'Latest News',
      socialMediaTrends: 'Social Media Trends',
      festivals: 'Festivals & Events',
      safetyInfo: 'Safety Information',
      
      // News sentiment
      positive: 'Positive',
      neutral_sentiment: 'Neutral',
      negative: 'Negative',
      
      // Safety levels
      safe: 'Safe',
      moderate: 'Moderate',
      risky: 'Risky',
      
      // Others
      readMore: 'Read More',
      close: 'Close',
      loading: 'Loading...',
    },
  },
  ja: {
    translation: {
      // ナビゲーション
      selectDeparture: '📍 出発地を選択してください',
      selectDestination: '✈️ 目的地を選択してください',
      route: '🎯 {{from}} → {{to}}',
      selectedRegion: '選択された地域',
      
      // ブランド
      brandName: 'TripE',
      brandTagline: 'AI安全・紛争分析旅行プランナー',
      
      // コントロール
      markerSize: 'マーカーサイズ',
      
      // 飛行アニメーション
      departure: '出発',
      arrival: '到着',
      
      // サイドバー
      travelSuitability: '旅行適合度',
      highlyRecommended: '強くお勧め',
      recommended: 'お勧め',
      neutral: '中立',
      caution: '注意',
      notRecommended: 'お勧めしません',
      
      // セクション
      latestNews: '最新ニュース',
      socialMediaTrends: 'SNSトレンド',
      festivals: 'フェスティバル＆イベント',
      safetyInfo: '治安情報',
      
      // ニュース感情
      positive: 'ポジティブ',
      neutral_sentiment: '中立',
      negative: 'ネガティブ',
      
      // 安全レベル
      safe: '安全',
      moderate: '普通',
      risky: '危険',
      
      // その他
      readMore: '続きを読む',
      close: '閉じる',
      loading: '読み込み中...',
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'ko', // 기본 언어
    fallbackLng: 'ko',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;