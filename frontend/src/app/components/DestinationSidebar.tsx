/**
 * DestinationSidebar 컴포넌트
 * 도착지의 여행 정보를 임팩트 있게 표시하는 사이드바
 */

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { X, TrendingUp, TrendingDown, AlertTriangle, CheckCircle, Calendar, Shield, DollarSign, MapPin, Newspaper, Instagram, PartyPopper } from 'lucide-react';
import type { DestinationAnalysis } from '../types';
import { fetchDestinationAnalysis } from '../api/travelApi';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';
import { Separator } from './ui/separator';

interface DestinationSidebarProps {
  cityId: string;
  onClose: () => void;
}

export function DestinationSidebar({ cityId, onClose }: DestinationSidebarProps) {
  const [data, setData] = useState<DestinationAnalysis | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const result = await fetchDestinationAnalysis(cityId);
        setData(result);
      } catch (error) {
        console.error('Failed to load destination data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [cityId]);

  if (loading) {
    return (
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
        className="fixed right-0 top-0 h-full w-2/3 bg-white shadow-2xl z-40 overflow-y-auto"
      >
        <div className="flex items-center justify-center h-full">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4" />
            <p className="text-gray-600">여행지 정보를 분석하는 중...</p>
          </div>
        </div>
      </motion.div>
    );
  }

  if (!data) return null;

  // 추천 레벨에 따른 색상
  const getRecommendationColor = () => {
    switch (data.recommendation) {
      case 'highly-recommended':
        return 'bg-green-500';
      case 'recommended':
        return 'bg-blue-500';
      case 'neutral':
        return 'bg-yellow-500';
      case 'not-recommended':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  // 치안 레벨에 따른 색상과 아이콘
  const getSafetyBadge = () => {
    const { level, score } = data.safety;
    const colors = {
      'very-safe': 'bg-green-100 text-green-800 border-green-300',
      'safe': 'bg-blue-100 text-blue-800 border-blue-300',
      'moderate': 'bg-yellow-100 text-yellow-800 border-yellow-300',
      'caution': 'bg-orange-100 text-orange-800 border-orange-300',
      'dangerous': 'bg-red-100 text-red-800 border-red-300',
    };
    const labels = {
      'very-safe': '매우 안전',
      'safe': '안전',
      'moderate': '보통',
      'caution': '주의 필요',
      'dangerous': '위험',
    };
    return {
      color: colors[level],
      label: labels[level],
      score,
    };
  };

  const safetyBadge = getSafetyBadge();

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed right-0 top-0 h-full w-2/3 bg-white shadow-2xl z-40 overflow-y-auto"
    >
      {/* 닫기 버튼 */}
      <Button
        variant="ghost"
        size="icon"
        onClick={onClose}
        className="absolute top-4 right-4 z-50 bg-white/80 backdrop-blur-sm hover:bg-white"
      >
        <X className="h-5 w-5" />
      </Button>

      {/* 헤더 이미지 및 제목 */}
      <div className="relative h-64 overflow-hidden">
        {data.imageUrl && (
          <img
            src={data.imageUrl}
            alt={data.cityName}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* 제목 */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <div className="flex items-center gap-2 mb-2">
            <MapPin className="h-5 w-5" />
            <span className="text-sm opacity-90">{data.country}</span>
          </div>
          <h1 className="text-4xl font-bold mb-2">{data.cityName}</h1>
        </div>
      </div>

      {/* 메인 콘텐츠 */}
      <div className="p-6">
        {/* 여행 적합도 점수 */}
        <Card className="p-6 mb-6 border-2">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold mb-1">여행 적합도 분석</h2>
              <p className="text-sm text-gray-600">AI 기반 실시간 데이터 분석</p>
            </div>
            <div className="text-right">
              <div className="text-4xl font-bold text-blue-600">{data.travelSuitabilityScore}</div>
              <div className="text-sm text-gray-500">/ 100</div>
            </div>
          </div>
          
          <Progress value={data.travelSuitabilityScore} className="mb-4 h-3" />
          
          <div className={`inline-block px-4 py-2 rounded-full text-white font-semibold ${getRecommendationColor()}`}>
            {data.recommendation === 'highly-recommended' && '✨ 강력 추천'}
            {data.recommendation === 'recommended' && '👍 추천'}
            {data.recommendation === 'neutral' && '😐 보통'}
            {data.recommendation === 'not-recommended' && '⚠️ 비추천'}
          </div>
        </Card>

        {/* 치안 정보 */}
        <Card className="p-6 mb-6">
          <div className="flex items-center gap-2 mb-4">
            <Shield className="h-5 w-5 text-blue-600" />
            <h3 className="text-lg font-bold">치안 및 안전</h3>
          </div>
          
          <div className="flex items-center justify-between mb-4">
            <Badge className={`${safetyBadge.color} border px-4 py-2 text-sm font-semibold`}>
              {safetyBadge.label}
            </Badge>
            <div className="text-2xl font-bold text-gray-700">
              {safetyBadge.score}/100
            </div>
          </div>

          {data.safety.safeAreas.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-semibold text-green-700 mb-2">✅ 안전 지역</p>
              <div className="flex flex-wrap gap-2">
                {data.safety.safeAreas.map((area, idx) => (
                  <Badge key={idx} variant="outline" className="bg-green-50">
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {data.safety.areasToAvoid.length > 0 && (
            <div className="mt-4">
              <p className="text-sm font-semibold text-orange-700 mb-2">⚠️ 주의 지역</p>
              <div className="flex flex-wrap gap-2">
                {data.safety.areasToAvoid.map((area, idx) => (
                  <Badge key={idx} variant="outline" className="bg-orange-50">
                    {area}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </Card>

        {/* 장점과 단점 */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="p-6 bg-green-50 border-green-200">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="h-5 w-5 text-green-600" />
              <h3 className="font-bold text-green-900">장점</h3>
            </div>
            <ul className="space-y-2">
              {data.pros.map((pro, idx) => (
                <li key={idx} className="text-sm flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>{pro}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="p-6 bg-red-50 border-red-200">
            <div className="flex items-center gap-2 mb-3">
              <TrendingDown className="h-5 w-5 text-red-600" />
              <h3 className="font-bold text-red-900">단점</h3>
            </div>
            <ul className="space-y-2">
              {data.cons.map((con, idx) => (
                <li key={idx} className="text-sm flex items-start gap-2">
                  <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
                  <span>{con}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* 추가 정보 */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-blue-600" />
              <span className="font-semibold text-sm">최적 여행 시기</span>
            </div>
            <p className="text-sm text-gray-700">{data.bestTimeToVisit}</p>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign className="h-4 w-4 text-blue-600" />
              <span className="font-semibold text-sm">예상 일일 경비</span>
            </div>
            <p className="text-sm text-gray-700">
              {data.estimatedBudget.daily.min.toLocaleString()} - {data.estimatedBudget.daily.max.toLocaleString()} {data.estimatedBudget.currency}
            </p>
          </Card>
        </div>

        <Separator className="my-6" />

        {/* 상세 정보 탭 */}
        <Tabs defaultValue="news" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="news">
              <Newspaper className="h-4 w-4 mr-2" />
              뉴스
            </TabsTrigger>
            <TabsTrigger value="social">
              <Instagram className="h-4 w-4 mr-2" />
              SNS
            </TabsTrigger>
            <TabsTrigger value="events">
              <PartyPopper className="h-4 w-4 mr-2" />
              이벤트
            </TabsTrigger>
          </TabsList>

          <TabsContent value="news" className="space-y-4 mt-4">
            {data.news.map((newsItem) => (
              <Card key={newsItem.id} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-sm flex-1">{newsItem.title}</h4>
                  <Badge
                    variant="outline"
                    className={
                      newsItem.sentiment === 'positive'
                        ? 'bg-green-50 text-green-700 border-green-300'
                        : newsItem.sentiment === 'negative'
                        ? 'bg-red-50 text-red-700 border-red-300'
                        : 'bg-gray-50 text-gray-700 border-gray-300'
                    }
                  >
                    {newsItem.sentiment === 'positive' ? '긍정' : newsItem.sentiment === 'negative' ? '부정' : '중립'}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-2">{newsItem.summary}</p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>{newsItem.source}</span>
                  <span>{new Date(newsItem.publishedAt).toLocaleDateString('ko-KR')}</span>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="social" className="space-y-4 mt-4">
            {data.socialMedia.map((post) => (
              <Card key={post.id} className="p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{post.platform}</Badge>
                    <span className="text-sm font-semibold">@{post.author}</span>
                  </div>
                  <div className="text-sm text-gray-600">
                    참여도: {post.engagementScore}/100
                  </div>
                </div>
                <p className="text-sm mb-2">{post.content}</p>
                <div className="flex flex-wrap gap-2">
                  {post.hashtags.map((tag, idx) => (
                    <span key={idx} className="text-xs text-blue-600">
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="events" className="space-y-4 mt-4">
            {data.events.length === 0 ? (
              <p className="text-center text-gray-500 py-8">현재 진행 중인 이벤트가 없습니다.</p>
            ) : (
              data.events.map((event) => (
                <Card key={event.id} className="p-4 hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold flex-1">{event.name}</h4>
                    <Badge
                      className={
                        event.estimatedCrowd === 'high'
                          ? 'bg-red-100 text-red-800'
                          : event.estimatedCrowd === 'medium'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-green-100 text-green-800'
                      }
                    >
                      혼잡도: {event.estimatedCrowd === 'high' ? '높음' : event.estimatedCrowd === 'medium' ? '보통' : '낮음'}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                  <div className="text-xs text-gray-500">
                    <div>📅 {new Date(event.startDate).toLocaleDateString('ko-KR')} - {new Date(event.endDate).toLocaleDateString('ko-KR')}</div>
                    <div className="mt-1">🏷️ {event.category}</div>
                  </div>
                </Card>
              ))
            )}
          </TabsContent>
        </Tabs>

        {/* 마지막 업데이트 시간 */}
        <div className="mt-6 text-center text-xs text-gray-500">
          마지막 업데이트: {new Date(data.lastUpdated).toLocaleString('ko-KR')}
        </div>
      </div>
    </motion.div>
  );
}
