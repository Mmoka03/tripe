/**
 * WorldMap 컴포넌트
 * 세계 지도를 평면으로 표시하고 도시를 마커로 보여줍니다.
 * 확대/축소, 드래그 기능을 지원합니다.
 */

import { useState } from 'react';
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from 'react-simple-maps';
import type { City } from '../types';
import { ZoomIn, ZoomOut, RotateCcw, Maximize2, Minimize2 } from 'lucide-react';
import { Button } from './ui/button';
import { Slider } from './ui/slider';
import { useTranslation } from 'react-i18next';

const geoUrl = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

interface WorldMapProps {
  cities: City[];
  selectedDeparture: City | null;
  selectedDestination: City | null;
  onCityClick: (city: City) => void;
}

export function WorldMap({
  cities,
  selectedDeparture,
  selectedDestination,
  onCityClick,
}: WorldMapProps) {
  const { t } = useTranslation();
  const [zoom, setZoom] = useState(1);
  const [center, setCenter] = useState<[number, number]>([0, 20]);
  const [hoveredCity, setHoveredCity] = useState<string | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [markerScale, setMarkerScale] = useState(1); // 마커 크기 조절
  const [showMarkerControl, setShowMarkerControl] = useState(false);
  
  // 확대
  const handleZoomIn = () => {
    if (zoom < 4) setZoom(zoom * 1.5);
  };

  // 축소
  const handleZoomOut = () => {
    if (zoom > 1) setZoom(zoom / 1.5);
  };

  // 리셋
  const handleReset = () => {
    setZoom(1);
    setCenter([0, 20]);
    setSelectedCountry(null);
  };

  // 지역 클릭 시 확대 및 중심 이동
  const handleGeographyClick = (geo: any) => {
    const countryName = geo.properties.NAME || geo.properties.name || '알 수 없는 지역';
    setSelectedCountry(countryName);
    
    // 지역의 중심점 계산 (geoBounds 사용)
    const bounds = geo.geometry.coordinates;
    
    // 간단한 중심점 계산 (더 정확한 계산을 위해서는 d3-geo의 geoCentroid 사용 가능)
    let minLon = Infinity, maxLon = -Infinity;
    let minLat = Infinity, maxLat = -Infinity;
    
    const calculateBounds = (coords: any) => {
      if (Array.isArray(coords[0])) {
        coords.forEach((c: any) => calculateBounds(c));
      } else {
        const [lon, lat] = coords;
        if (lon < minLon) minLon = lon;
        if (lon > maxLon) maxLon = lon;
        if (lat < minLat) minLat = lat;
        if (lat > maxLat) maxLat = lat;
      }
    };
    
    calculateBounds(bounds);
    
    const centerLon = (minLon + maxLon) / 2;
    const centerLat = (minLat + maxLat) / 2;
    
    setCenter([centerLon, centerLat]);
    setZoom(3);
  };

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* 컨트롤 버튼 */}
      <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
        <Button
          size="icon"
          variant="secondary"
          onClick={handleZoomIn}
          className="bg-white/90 hover:bg-white shadow-lg"
        >
          <ZoomIn className="h-4 w-4" />
        </Button>
        <Button
          size="icon"
          variant="secondary"
          onClick={handleZoomOut}
          className="bg-white/90 hover:bg-white shadow-lg"
        >
          <ZoomOut className="h-4 w-4" />
        </Button>
        <Button
          size="icon"
          variant="secondary"
          onClick={handleReset}
          className="bg-white/90 hover:bg-white shadow-lg"
        >
          <RotateCcw className="h-4 w-4" />
        </Button>
        
        {/* 마커 크기 조절 토글 */}
        <Button
          size="icon"
          variant="secondary"
          onClick={() => setShowMarkerControl(!showMarkerControl)}
          className="bg-white/90 hover:bg-white shadow-lg"
        >
          {showMarkerControl ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
        </Button>
      </div>

      {/* 마커 크기 조절 슬라이더 */}
      {showMarkerControl && (
        <div className="absolute top-4 right-20 z-10 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg min-w-[200px]">
          <p className="text-xs font-medium text-gray-700 mb-2">{t('markerSize')}</p>
          <Slider
            value={[markerScale]}
            onValueChange={(value) => setMarkerScale(value[0])}
            min={0.5}
            max={2}
            step={0.1}
            className="w-full"
          />
          <div className="flex justify-between mt-1 text-xs text-gray-500">
            <span>0.5x</span>
            <span>{markerScale.toFixed(1)}x</span>
            <span>2.0x</span>
          </div>
        </div>
      )}

      {/* 안내 텍스트 */}
      <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg">
        <p className="text-sm font-medium">
          {!selectedDeparture ? (
            <span>{t('selectDeparture')}</span>
          ) : !selectedDestination ? (
            <span>{t('selectDestination')}</span>
          ) : (
            <span>{t('route', { from: selectedDeparture.name, to: selectedDestination.name })}</span>
          )}
        </p>
      </div>

      {/* 선택된 국가 정보 표시 */}
      {selectedCountry && (
        <div className="absolute top-20 left-4 z-10 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg border-2 border-blue-400 animate-in fade-in slide-in-from-top-2 duration-300">
          <p className="text-xs text-gray-500 font-medium">{t('selectedRegion')}</p>
          <p className="text-base font-bold text-gray-800">{selectedCountry}</p>
        </div>
      )}
      
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 147,
        }}
        style={{ width: '100%', height: '100%' }}
      >
        <ZoomableGroup
          zoom={zoom}
          center={center}
          onMoveEnd={({ coordinates, zoom: newZoom }) => {
            setCenter(coordinates as [number, number]);
            setZoom(newZoom);
          }}
        >
          {/* 지도 렌더링 */}
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill="#1e293b"
                  stroke="#334155"
                  strokeWidth={0.5}
                  style={{
                    default: { outline: 'none' },
                    hover: { outline: 'none', fill: '#334155' },
                    pressed: { outline: 'none' },
                  }}
                  onClick={() => handleGeographyClick(geo)}
                />
              ))
            }
          </Geographies>

          {/* 도시 마커 */}
          {cities.map((city) => {
            const isSelected =
              city.id === selectedDeparture?.id ||
              city.id === selectedDestination?.id;
            const isDeparture = city.id === selectedDeparture?.id;
            const isDestination = city.id === selectedDestination?.id;
            const isHovered = hoveredCity === city.id;

            // 줌 레벨에 따라 마커 크기 자동 조정 (줌이 커질수록 마커는 작아짐)
            const zoomAdjustment = 1 / Math.sqrt(zoom);
            const finalScale = markerScale * zoomAdjustment;

            return (
              <Marker
                key={city.id}
                coordinates={city.coordinates}
                onMouseEnter={() => setHoveredCity(city.id)}
                onMouseLeave={() => setHoveredCity(null)}
                onClick={() => onCityClick(city)}
              >
                {/* 깔끔한 도시 마커 디자인 */}
                <g className="transition-all duration-300" transform={`scale(${finalScale})`}>
                  {/* 선택된 경우 외곽 링 애니메이션 */}
                  {isSelected && (
                    <circle
                      r={12}
                      fill="none"
                      stroke={isDeparture ? '#10b981' : '#3b82f6'}
                      strokeWidth={2}
                      opacity={0.6}
                      className="animate-pulse"
                    />
                  )}
                  
                  {/* 메인 도트 - 미니멀한 디자인 */}
                  <circle
                    r={isSelected ? 6 : isHovered ? 5 : 4}
                    fill={isDeparture ? '#10b981' : isDestination ? '#3b82f6' : '#f59e0b'}
                    stroke="#ffffff"
                    strokeWidth={isSelected ? 2.5 : 2}
                    className="transition-all duration-200"
                    style={{
                      filter: isSelected || isHovered 
                        ? 'drop-shadow(0 0 8px rgba(255,255,255,0.6))' 
                        : 'drop-shadow(0 0 4px rgba(0,0,0,0.4))'
                    }}
                  />

                  {/* 도시 이름 라벨 - 호버 또는 선택 시에만 표시 */}
                  {(isHovered || isSelected) && (
                    <>
                      {/* 미니멀한 텍스트 (그림자 효과만 사용) */}
                      <text
                        textAnchor="middle"
                        y={-12}
                        style={{
                          fontFamily: 'system-ui',
                          fontSize: `${11 / finalScale}px`,
                          fontWeight: '700',
                          fill: '#ffffff',
                          pointerEvents: 'none',
                          filter: 'drop-shadow(0 1px 3px rgba(0,0,0,0.9)) drop-shadow(0 0 8px rgba(0,0,0,0.8))',
                          letterSpacing: '0.3px',
                        }}
                      >
                        {city.name}
                      </text>
                    </>
                  )}
                </g>
              </Marker>
            );
          })}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
}