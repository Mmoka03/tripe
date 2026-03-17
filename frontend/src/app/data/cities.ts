/**
 * 도시 데이터
 * 새로운 도시를 추가하려면 이 배열에 객체를 추가하면 됩니다.
 * coordinates는 [경도, 위도] 형식입니다.
 */

import type { City } from '../types';

export const cities: City[] = [
  {
    id: 'tokyo',
    name: '도쿄',
    country: '일본',
    coordinates: [139.6917, 35.6895],
    imageUrl: 'https://images.unsplash.com/photo-1673944083714-92ee2061e25c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMGNpdHklMjBza3lsaW5lfGVufDF8fHx8MTc3MzY1NTUzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'paris',
    name: '파리',
    country: '프랑스',
    coordinates: [2.3522, 48.8566],
    imageUrl: 'https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc3MzczNTUwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'new-york',
    name: '뉴욕',
    country: '미국',
    coordinates: [-74.0060, 40.7128],
    imageUrl: 'https://images.unsplash.com/photo-1529408466330-f2732a30eac6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXclMjB5b3JrJTIwY2l0eXNjYXBlfGVufDF8fHx8MTc3MzY4MDYyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'london',
    name: '런던',
    country: '영국',
    coordinates: [-0.1276, 51.5074],
    imageUrl: 'https://images.unsplash.com/photo-1745016176874-cd3ed3f5bfc6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb25kb24lMjBiaWclMjBiZW58ZW58MXx8fHwxNzczNzAzMDgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'seoul',
    name: '서울',
    country: '한국',
    coordinates: [126.9780, 37.5665],
    imageUrl: 'https://images.unsplash.com/photo-1682090369590-c4c82f3cc065?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW91bCUyMGNpdHklMjBuaWdodHxlbnwxfHx8fDE3NzM3NDAxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'sydney',
    name: '시드니',
    country: '호주',
    coordinates: [151.2093, -33.8688],
    imageUrl: 'https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeWRuZXklMjBvcGVyYSUyMGhvdXNlfGVufDF8fHx8MTc3MzczNTc3N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'dubai',
    name: '두바이',
    country: '아랍에미리트',
    coordinates: [55.2708, 25.2048],
  },
  {
    id: 'singapore',
    name: '싱가포르',
    country: '싱가포르',
    coordinates: [103.8198, 1.3521],
  },
  {
    id: 'barcelona',
    name: '바르셀로나',
    country: '스페인',
    coordinates: [2.1734, 41.3851],
  },
  {
    id: 'rome',
    name: '로마',
    country: '이탈리아',
    coordinates: [12.4964, 41.9028],
  },
  {
    id: 'bangkok',
    name: '방콕',
    country: '태국',
    coordinates: [100.5018, 13.7563],
  },
  {
    id: 'hong-kong',
    name: '홍콩',
    country: '중국',
    coordinates: [114.1694, 22.3193],
  },
  {
    id: 'berlin',
    name: '베를린',
    country: '독일',
    coordinates: [13.4050, 52.5200],
    imageUrl: 'https://images.unsplash.com/photo-1704471504038-5443d863e3a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZXJsaW4lMjBicmFuZGVuYnVyZyUyMGdhdGV8ZW58MXx8fHwxNzczNzQxMjE3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'amsterdam',
    name: '암스테르담',
    country: '네덜란드',
    coordinates: [4.9041, 52.3676],
    imageUrl: 'https://images.unsplash.com/photo-1534203137048-137aa03c692e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbXN0ZXJkYW0lMjBjYW5hbCUyMGhvdXNlc3xlbnwxfHx8fDE3NzM3MDIxODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'istanbul',
    name: '이스탄불',
    country: '터키',
    coordinates: [28.9784, 41.0082],
    imageUrl: 'https://images.unsplash.com/photo-1670738390805-7b748b2d580f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpc3RhbmJ1bCUyMGhhZ2lhJTIwc29waGlhfGVufDF8fHx8MTc3MzY1NDM2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'toronto',
    name: '토론토',
    country: '캐나다',
    coordinates: [-79.3832, 43.6532],
    imageUrl: 'https://images.unsplash.com/photo-1693448922430-21324bde8646?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3JvbnRvJTIwY24lMjB0b3dlcnxlbnwxfHx8fDE3NzM3NDEyMTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'los-angeles',
    name: '로스앤젤레스',
    country: '미국',
    coordinates: [-118.2437, 34.0522],
    imageUrl: 'https://images.unsplash.com/photo-1705547914719-9358fe34c483?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3MlMjBhbmdlbGVzJTIwaG9sbHl3b29kfGVufDF8fHx8MTc3Mzc0MTIxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'rio-de-janeiro',
    name: '리우데자네이루',
    country: '브라질',
    coordinates: [-43.1729, -22.9068],
    imageUrl: 'https://images.unsplash.com/photo-1599128971079-281d0da05544?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyaW8lMjBqYW5laXJvJTIwY2hyaXN0fGVufDF8fHx8MTc3Mzc0MTIxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'prague',
    name: '프라하',
    country: '체코',
    coordinates: [14.4378, 50.0755],
    imageUrl: 'https://images.unsplash.com/photo-1672573679838-f867f94e25be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmFndWUlMjBjYXN0bGUlMjBuaWdodHxlbnwxfHx8fDE3NzM3NDEyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'vienna',
    name: '빈',
    country: '오스트리아',
    coordinates: [16.3738, 48.2082],
    imageUrl: 'https://images.unsplash.com/photo-1639512823524-da888c501765?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWVubmElMjBzY2hvbmJydW5uJTIwcGFsYWNlfGVufDF8fHx8MTc3Mzc0MTIyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'cairo',
    name: '카이로',
    country: '이집트',
    coordinates: [31.2357, 30.0444],
    imageUrl: 'https://images.unsplash.com/photo-1667852976103-54718f19d453?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWlybyUyMHB5cmFtaWRzJTIwZWd5cHR8ZW58MXx8fHwxNzczNjgzMTk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'mumbai',
    name: '뭄바이',
    country: '인도',
    coordinates: [72.8777, 19.0760],
    imageUrl: 'https://images.unsplash.com/photo-1667849521367-61c7f5662163?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdW1iYWklMjBnYXRld2F5JTIwaW5kaWF8ZW58MXx8fHwxNzczNzE5ODEzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'shanghai',
    name: '상하이',
    country: '중국',
    coordinates: [121.4737, 31.2304],
    imageUrl: 'https://images.unsplash.com/photo-1757843298369-6e5503c14bfd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGFuZ2hhaSUyMHNreWxpbmUlMjBuaWdodHxlbnwxfHx8fDE3NzM3MzMwNjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'vancouver',
    name: '밴쿠버',
    country: '캐나다',
    coordinates: [-123.1207, 49.2827],
    imageUrl: 'https://images.unsplash.com/photo-1756441890993-9d6c4c2ebf69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW5jb3V2ZXIlMjBkb3dudG93biUyMGNhbmFkYXxlbnwxfHx8fDE3NzM3NDEyMjN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 'melbourne',
    name: '멜버른',
    country: '호주',
    coordinates: [144.9631, -37.8136],
  },
  {
    id: 'lisbon',
    name: '리스본',
    country: '포르투갈',
    coordinates: [-9.1393, 38.7223],
  },
  {
    id: 'mexico-city',
    name: '멕시코시티',
    country: '멕시코',
    coordinates: [-99.1332, 19.4326],
  },
  {
    id: 'buenos-aires',
    name: '부에노스아이레스',
    country: '아르헨티나',
    coordinates: [-58.3816, -34.6037],
  },
  {
    id: 'cape-town',
    name: '케이프타운',
    country: '남아프리카공화국',
    coordinates: [18.4241, -33.9249],
  },
];

/**
 * ID로 도시 찾기
 */
export function getCityById(id: string): City | undefined {
  return cities.find(city => city.id === id);
}

/**
 * 이름으로 도시 찾기
 */
export function getCityByName(name: string): City | undefined {
  return cities.find(city => city.name.toLowerCase() === name.toLowerCase());
}