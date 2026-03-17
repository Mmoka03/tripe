/**
 * FlightAnimation 컴포넌트
 * 출발지에서 도착지로 날아가는 비행기 애니메이션을 표시합니다.
 */

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Plane } from 'lucide-react';
import type { FlightRoute } from '../types';
import { useTranslation } from 'react-i18next';

interface FlightAnimationProps {
  route: FlightRoute;
  onComplete: () => void;
}

export function FlightAnimation({ route, onComplete }: FlightAnimationProps) {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // 애니메이션 완료 후 콜백 실행
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  // 비행기 회전 각도 계산
  const dx = route.to.coordinates[0] - route.from.coordinates[0];
  const dy = route.to.coordinates[1] - route.from.coordinates[1];
  const angle = Math.atan2(dy, dx) * (180 / Math.PI);

  return (
    <div className="fixed inset-0 z-50 pointer-events-none">
      {/* 오버레이 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        exit={{ opacity: 0 }}
        className="absolute inset-0 bg-black"
      />

      {/* 비행기 아이콘 */}
      <motion.div
        initial={{
          position: 'absolute',
          left: '30%',
          top: '50%',
          scale: 1,
        }}
        animate={{
          left: '70%',
          top: '50%',
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 2,
          ease: 'easeInOut',
        }}
        style={{
          transform: `translate(-50%, -50%) rotate(${angle}deg)`,
        }}
      >
        <div className="relative">
          {/* 비행기 그림자/후광 효과 */}
          <div className="absolute inset-0 blur-xl bg-blue-500 opacity-50 scale-150" />
          
          {/* 비행기 아이콘 */}
          <Plane className="w-16 h-16 text-white relative z-10" />
          
          {/* 비행 경로 효과 */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: [0, 1, 0], scaleX: 1 }}
            transition={{ duration: 2, ease: 'linear' }}
            className="absolute top-1/2 right-full w-32 h-1 bg-gradient-to-r from-transparent to-blue-400"
            style={{ transformOrigin: 'right' }}
          />
        </div>
      </motion.div>

      {/* 출발지 텍스트 - 대칭적으로 아래에 배치 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className="absolute left-[30%] top-[58%] transform -translate-x-1/2"
      >
        <div className="bg-green-500 text-white px-4 py-2 rounded-full shadow-lg">
          <p className="text-sm font-semibold">{t('departure')}: {route.from.name}</p>
        </div>
      </motion.div>

      {/* 도착지 텍스트 - 대칭적으로 아래에 배치 */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ delay: 0.3 }}
        className="absolute left-[70%] top-[58%] transform -translate-x-1/2"
      >
        <div className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-lg">
          <p className="text-sm font-semibold">{t('arrival')}: {route.to.name}</p>
        </div>
      </motion.div>
    </div>
  );
}