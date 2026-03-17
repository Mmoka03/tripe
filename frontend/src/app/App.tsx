/**
 * 메인 App 컴포넌트
 * AI 기반 여행 설계 플랫폼
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { WorldMap } from './components/WorldMap';
import { FlightAnimation } from './components/FlightAnimation';
import { DestinationSidebar } from './components/DestinationSidebar';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import type {City, FlightRoute} from './types';
import { cities } from './data/cities';
import '../i18n/config'; // i18n 초기화
import { useTranslation } from 'react-i18next';

export default function App() {
  const { t } = useTranslation();
  const [selectedDeparture, setSelectedDeparture] = useState<City | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<City | null>(null);
  const [flightRoute, setFlightRoute] = useState<FlightRoute | null>(null);
  const [showSidebar, setShowSidebar] = useState(false);

  // 도시 클릭 핸들러
  const handleCityClick = (city: City) => {
    if (!selectedDeparture) {
      // 첫 번째 클릭: 출발지 선택
      setSelectedDeparture(city);
    } else if (selectedDeparture.id === city.id) {
      // 같은 도시 재클릭: 선택 취소
      setSelectedDeparture(null);
    } else {
      // 두 번째 클릭: 도착지 선택 및 비행 애니메이션 시작
      setSelectedDestination(city);
      setFlightRoute({
        from: selectedDeparture,
        to: city,
      });
    }
  };

  // 비행 애니메이션 완료 후 사이드바 표시
  const handleFlightComplete = () => {
    setFlightRoute(null);
    setShowSidebar(true);
  };

  // 사이드바 닫기
  const handleCloseSidebar = () => {
    setShowSidebar(false);
    setSelectedDeparture(null);
    setSelectedDestination(null);
  };

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {/* 세계 지도 */}
      <WorldMap
        cities={cities}
        selectedDeparture={selectedDeparture}
        selectedDestination={selectedDestination}
        onCityClick={handleCityClick}
      />

      {/* 비행기 애니메이션 */}
      <AnimatePresence>
        {flightRoute && (
          <FlightAnimation
            route={flightRoute}
            onComplete={handleFlightComplete}
          />
        )}
      </AnimatePresence>

      {/* 사이드바 오버레이 - 클릭하면 닫힘 */}
      <AnimatePresence>
        {showSidebar && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 z-30"
            onClick={handleCloseSidebar}
          />
        )}
      </AnimatePresence>

      {/* 도착지 정보 사이드바 */}
      <AnimatePresence>
        {showSidebar && selectedDestination && (
          <DestinationSidebar
            cityId={selectedDestination.id}
            onClose={handleCloseSidebar}
          />
        )}
      </AnimatePresence>

      {/* 브랜드 로고 (좌측 하단) */}
      <div className="absolute bottom-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          ✈️ {t('brandName')}
        </h1>
        <p className="text-xs text-gray-600 mt-1">
          {t('brandTagline')}
        </p>
      </div>

      {/* 언어 전환 버튼 (우측 하단) */}
      <div className="absolute bottom-4 right-4 z-10">
        <LanguageSwitcher />
      </div>
    </div>
  );
}