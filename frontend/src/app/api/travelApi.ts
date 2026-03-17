/**
 * 여행 API 모의 함수
 * 실제 환경에서는 Spring 백엔드의 REST API를 호출합니다.
 * 
 * API 엔드포인트 가정:
 * - GET /api/destinations/{cityId}/analysis - 도시 분석 정보 조회
 * - GET /api/destinations/{cityId}/statistics?startDate={date}&endDate={date} - 통계 조회 (추후 구현)
 * 
 * 응답 형식:
 * {
 *   "success": true,
 *   "data": DestinationAnalysis,
 *   "timestamp": "2026-03-17T10:00:00Z"
 * }
 */

import type { DestinationAnalysis } from '../types';

/**
 * 도시 분석 정보를 조회합니다.
 * @param cityId 도시 ID
 * @returns Promise<DestinationAnalysis>
 * 
 * 실제 구현:
 * const response = await fetch(`${API_BASE_URL}/api/destinations/${cityId}/analysis`);
 * const result = await response.json();
 * return result.data;
 */
export async function fetchDestinationAnalysis(cityId: string): Promise<DestinationAnalysis> {
  // 실제 API 호출을 시뮬레이션하기 위한 딜레이
  await new Promise(resolve => setTimeout(resolve, 800));
  
  // Mock 데이터 - 실제로는 Spring 백엔드에서 AI가 생성한 JSON을 받아옵니다
  const mockData: Record<string, DestinationAnalysis> = {
    'tokyo': {
      cityId: 'tokyo',
      cityName: '도쿄',
      country: '일본',
      imageUrl: 'https://images.unsplash.com/photo-1673944083714-92ee2061e25c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMGNpdHklMjBza3lsaW5lfGVufDF8fHx8MTc3MzY1NTUzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      travelSuitabilityScore: 92,
      recommendation: 'highly-recommended',
      news: [
        {
          id: 'n1',
          title: '도쿄, 2026년 봄 벚꽃 축제 성황리 개최',
          summary: '올해 벚꽃 개화가 평년보다 2일 빠르게 시작되어 관광객들의 발길이 이어지고 있습니다.',
          source: 'Japan Times',
          publishedAt: '2026-03-15T09:00:00Z',
          sentiment: 'positive',
          url: '#'
        },
        {
          id: 'n2',
          title: '도쿄 메트로, 관광객을 위한 특별 패스 출시',
          summary: '외국인 관광객을 대상으로 72시간 무제한 이용 가능한 특별 교통 패스를 판매합니다.',
          source: 'NHK',
          publishedAt: '2026-03-14T14:30:00Z',
          sentiment: 'positive',
          url: '#'
        },
        {
          id: 'n3',
          title: '도쿄 관광명소, 혼잡도 완화 조치 시행',
          summary: '센소지와 시부야 스크램블 교차로 등 주요 관광지에서 인파 관리 시스템을 도입했습니다.',
          source: 'Asahi Shimbun',
          publishedAt: '2026-03-12T11:00:00Z',
          sentiment: 'neutral',
          url: '#'
        }
      ],
      socialMedia: [
        {
          id: 's1',
          platform: 'instagram',
          content: '도쿄 벚꽃이 만개했어요! 우에노 공원 강추 🌸✨',
          author: '@travel_enthusiast',
          engagementScore: 95,
          hashtags: ['#도쿄여행', '#벚꽃', '#일본'],
          createdAt: '2026-03-16T08:20:00Z'
        },
        {
          id: 's2',
          platform: 'twitter',
          content: '도쿄 라멘 투어 완성! 이치란, 이케부쿠로 모두 최고였습니다 🍜',
          author: '@foodie_traveler',
          engagementScore: 88,
          hashtags: ['#도쿄맛집', '#라멘'],
          createdAt: '2026-03-15T19:45:00Z'
        },
        {
          id: 's3',
          platform: 'youtube',
          content: '도쿄 3일 완벽 가이드 | 꼭 가봐야 할 곳 TOP 10',
          author: 'Travel Vlogger',
          engagementScore: 92,
          hashtags: ['#도쿄', '#여행가이드'],
          createdAt: '2026-03-13T16:00:00Z'
        }
      ],
      events: [
        {
          id: 'e1',
          name: '우에노 공원 벚꽃 축제',
          description: '도쿄 최대 규모의 벚꽃 축제로, 야간 조명과 함께 아름다운 벚꽃을 감상할 수 있습니다.',
          startDate: '2026-03-20T00:00:00Z',
          endDate: '2026-04-05T23:59:59Z',
          category: 'festival',
          estimatedCrowd: 'high'
        },
        {
          id: 'e2',
          name: '도쿄 디자인 위크',
          description: '세계적인 디자이너들의 작품을 만나볼 수 있는 디자인 전시회',
          startDate: '2026-03-25T10:00:00Z',
          endDate: '2026-03-30T18:00:00Z',
          category: 'exhibition',
          estimatedCrowd: 'medium'
        },
        {
          id: 'e3',
          name: '스모 토너먼트 (3월 장소)',
          description: '전통 스모 경기를 관람할 수 있는 연례 토너먼트',
          startDate: '2026-03-10T09:00:00Z',
          endDate: '2026-03-24T18:00:00Z',
          category: 'sports',
          estimatedCrowd: 'medium'
        }
      ],
      safety: {
        level: 'very-safe',
        score: 95,
        recentIncidents: [],
        travelAdvisories: [],
        safeAreas: ['시부야', '신주쿠', '아사쿠사', '긴자', '롯폰기'],
        areasToAvoid: ['일부 환락가는 밤늦은 시간 주의']
      },
      pros: [
        '세계 최고 수준의 대중교통 시스템',
        '깨끗하고 안전한 도시 환경',
        '다양한 미식 경험 (미슐랭 스타 레스토랑 세계 1위)',
        '전통과 현대가 조화로운 관광지',
        '친절한 현지인과 잘 정비된 관광 인프라'
      ],
      cons: [
        '높은 물가 (특히 숙박비)',
        '영어 소통이 제한적인 지역 존재',
        '주요 관광지의 높은 혼잡도',
        '복잡한 지하철 노선 (초보자에게 어려울 수 있음)'
      ],
      bestTimeToVisit: '3월 말 - 4월 초 (벚꽃 시즌) 또는 10월 - 11월 (단풍 시즌)',
      estimatedBudget: {
        currency: 'KRW',
        daily: { min: 150000, max: 300000 }
      },
      lastUpdated: '2026-03-17T10:00:00Z',
      dataVersion: '1.0.0'
    },
    'paris': {
      cityId: 'paris',
      cityName: '파리',
      country: '프랑스',
      imageUrl: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc3MzczNTUwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      travelSuitabilityScore: 85,
      recommendation: 'highly-recommended',
      news: [
        {
          id: 'n1',
          title: '파리, 관광객 유치를 위한 새로운 문화 프로그램 발표',
          summary: '파리 시청은 박물관과 역사 유적지에 대한 할인 패스를 제공합니다.',
          source: 'Le Monde',
          publishedAt: '2026-03-16T10:00:00Z',
          sentiment: 'positive',
          url: '#'
        },
        {
          id: 'n2',
          title: '에펠탑 야간 조명 시간 연장',
          summary: '봄 시즌을 맞아 에펠탑 야간 조명 쇼가 자정까지 연장 운영됩니다.',
          source: 'France 24',
          publishedAt: '2026-03-14T15:00:00Z',
          sentiment: 'positive',
          url: '#'
        }
      ],
      socialMedia: [
        {
          id: 's1',
          platform: 'instagram',
          content: '파리의 봄은 정말 로맨틱해요 🥐🗼',
          author: '@paris_lover',
          engagementScore: 90,
          hashtags: ['#파리', '#프랑스여행'],
          createdAt: '2026-03-15T12:30:00Z'
        }
      ],
      events: [
        {
          id: 'e1',
          name: '파리 패션 위크',
          description: '세계 4대 패션 위크 중 하나로, 최신 패션 트렌드를 선보입니다.',
          startDate: '2026-03-24T00:00:00Z',
          endDate: '2026-04-01T23:59:59Z',
          category: 'cultural',
          estimatedCrowd: 'high'
        }
      ],
      safety: {
        level: 'safe',
        score: 78,
        recentIncidents: [
          {
            type: '소매치기',
            description: '관광 명소 주변에서 소매치기 주의',
            date: '2026-03-10T00:00:00Z'
          }
        ],
        travelAdvisories: ['귀중품 관리 철저히', '밤늦은 시간 일부 지역 주의'],
        safeAreas: ['샹젤리제', '에펠탑 주변', '마레 지구'],
        areasToAvoid: ['일부 북부 교외 지역 야간 시간대']
      },
      pros: [
        '세계적인 예술과 문화의 중심지',
        '아름다운 건축물과 역사 유적',
        '뛰어난 미식 문화',
        '잘 연결된 대중교통'
      ],
      cons: [
        '높은 물가',
        '관광 명소 주변 소매치기 주의 필요',
        '일부 지역 영어 소통 제한적',
        '여름 성수기 극심한 혼잡'
      ],
      bestTimeToVisit: '4월 - 6월 또는 9월 - 10월 (온화한 날씨)',
      estimatedBudget: {
        currency: 'KRW',
        daily: { min: 180000, max: 350000 }
      },
      lastUpdated: '2026-03-17T10:00:00Z',
      dataVersion: '1.0.0'
    },
    'seoul': {
      cityId: 'seoul',
      cityName: '서울',
      country: '한국',
      imageUrl: 'https://images.unsplash.com/photo-1682090369590-c4c82f3cc065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW91bCUyMGNpdHklMjBuaWdodHxlbnwxfHx8fDE3NzM3NDAxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      travelSuitabilityScore: 88,
      recommendation: 'highly-recommended',
      news: [
        {
          id: 'n1',
          title: '서울, 벚꽃 개화 시작... 여의도·남산 인산인해',
          summary: '이번 주말부터 벚꽃이 만개할 예정으로 주요 명소에 관광객이 몰리고 있습니다.',
          source: '연합뉴스',
          publishedAt: '2026-03-17T08:00:00Z',
          sentiment: 'positive',
          url: '#'
        },
        {
          id: 'n2',
          title: 'K-POP 콘서트, 3월 잠실 올림픽 공원서 개최',
          summary: '인기 아이돌 그룹들의 합동 콘서트가 오는 주말 열립니다.',
          source: 'KBS',
          publishedAt: '2026-03-15T16:00:00Z',
          sentiment: 'positive',
          url: '#'
        }
      ],
      socialMedia: [
        {
          id: 's1',
          platform: 'instagram',
          content: '경복궁 야간 개장 너무 아름다워요 🏯✨',
          author: '@seoul_explorer',
          engagementScore: 93,
          hashtags: ['#서울여행', '#경복궁'],
          createdAt: '2026-03-16T20:00:00Z'
        }
      ],
      events: [
        {
          id: 'e1',
          name: '여의도 벚꽃 축제',
          description: '한강변을 따라 펼쳐진 벚꽃길을 산책하며 봄을 만끽할 수 있습니다.',
          startDate: '2026-04-01T00:00:00Z',
          endDate: '2026-04-10T23:59:59Z',
          category: 'festival',
          estimatedCrowd: 'high'
        }
      ],
      safety: {
        level: 'very-safe',
        score: 93,
        recentIncidents: [],
        travelAdvisories: [],
        safeAreas: ['강남', '명동', '이태원', '홍대', '종로'],
        areasToAvoid: []
      },
      pros: [
        '24시간 안전한 도시 환경',
        '발달된 IT 인프라 (무료 Wi-Fi 등)',
        '맛있고 다양한 음식 문화',
        '저렴한 대중교통',
        '쇼핑 천국'
      ],
      cons: [
        '일부 관광지의 높은 상업화',
        '미세먼지 주의 필요 (봄철)',
        '주말 주요 명소 혼잡'
      ],
      bestTimeToVisit: '3월 말 - 5월 (봄) 또는 9월 - 11월 (가을)',
      estimatedBudget: {
        currency: 'KRW',
        daily: { min: 80000, max: 200000 }
      },
      lastUpdated: '2026-03-17T10:00:00Z',
      dataVersion: '1.0.0'
    }
  };

  // 기본 템플릿 데이터 (다른 도시들에 대한 fallback)
  const defaultData: DestinationAnalysis = {
    cityId,
    cityName: cityId,
    country: 'Unknown',
    imageUrl: '',
    travelSuitabilityScore: 75,
    recommendation: 'neutral',
    news: [
      {
        id: 'n1',
        title: '현지 뉴스 업데이트 중',
        summary: 'AI가 최신 뉴스를 분석하고 있습니다.',
        source: 'Local News',
        publishedAt: new Date().toISOString(),
        sentiment: 'neutral',
        url: '#'
      }
    ],
    socialMedia: [
      {
        id: 's1',
        platform: 'instagram',
        content: '여행 정보 수집 중...',
        author: '@traveler',
        engagementScore: 70,
        hashtags: ['#여행'],
        createdAt: new Date().toISOString()
      }
    ],
    events: [],
    safety: {
      level: 'safe',
      score: 80,
      recentIncidents: [],
      travelAdvisories: [],
      safeAreas: ['시내 중심가'],
      areasToAvoid: []
    },
    pros: ['데이터 분석 중...'],
    cons: ['데이터 분석 중...'],
    bestTimeToVisit: '연중',
    estimatedBudget: {
      currency: 'KRW',
      daily: { min: 100000, max: 250000 }
    },
    lastUpdated: new Date().toISOString(),
    dataVersion: '1.0.0'
  };

  return mockData[cityId] || defaultData;
}

/**
 * 특정 기간의 여행지 통계를 조회합니다. (추후 구현)
 * @param cityId 도시 ID
 * @param startDate 시작 날짜
 * @param endDate 종료 날짜
 * 
 * 실제 구현:
 * const response = await fetch(
 *   `${API_BASE_URL}/api/destinations/${cityId}/statistics?startDate=${startDate}&endDate=${endDate}`
 * );
 */
/*
export async function fetchDestinationStatistics(
  cityId: string,
  startDate: string,
  endDate: string
): Promise<any> {
  // TODO: 통계 모달 기능 구현 시 사용
  await new Promise(resolve => setTimeout(resolve, 500));
  return {
    message: '통계 기능은 추후 구현 예정입니다.'
  };
}
*/