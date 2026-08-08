import { PortfolioItem, PortfolioCategory } from '../types';

export const PORTFOLIO_CATEGORIES: { id: PortfolioCategory; name: string; count?: number }[] = [
  { id: 'all', name: '전체 (All)' },
  { id: 'production', name: '4K 미디어 프로덕션' },
  { id: 'edu', name: '교육 콘텐츠 & 컨설팅' },
  { id: 'press', name: '디지털 언론 & PR' },
  { id: 'hucampus', name: '후캠퍼스 평생교육' },
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: '0kHSItVXKOU',
    title: '능률 고등 영어',
    cat: 'edu',
    tag: 'NE능률',
    label: '교육콘텐츠',
    duration: '04:30',
    year: '2024',
    description: 'NE능률 고등 영어 교재 연계 스마트 이러닝 강좌 프로덕션 및 고화질 마스터링',
    imageUrl: 'https://img.youtube.com/vi/0kHSItVXKOU/hqdefault.jpg'
  },
  {
    id: '6xb2GYInARg',
    title: '능률 중등 영어',
    cat: 'edu',
    tag: 'NE능률',
    label: '교육콘텐츠',
    duration: '03:45',
    year: '2024',
    description: 'NE능률 중등 영어 교과 과정 맞춤형 인터랙티브 학습 영상 제작 및 교수설계',
    imageUrl: 'https://img.youtube.com/vi/6xb2GYInARg/hqdefault.jpg'
  },
  {
    id: 'rJ2U9T27WwU',
    title: '태진옥 홍보영상',
    cat: 'production',
    tag: '태진옥',
    label: '홍보영상',
    duration: '02:50',
    year: '2024',
    description: '브랜드 가치 제고를 위한 시네마틱 4K 기업 및 스토어 시그니처 홍보 영상',
    imageUrl: 'https://img.youtube.com/vi/rJ2U9T27WwU/hqdefault.jpg'
  },
  {
    id: 'PTqpVR-yIKg',
    title: '경희사이버대학 크로마키',
    cat: 'production',
    tag: '경희사이버대학교',
    label: '크로마키',
    duration: '05:15',
    year: '2024',
    description: '경희사이버대학교 전용 가상 크로마키 세트 활용 고품질 대학 강의 프로덕션',
    imageUrl: 'https://img.youtube.com/vi/PTqpVR-yIKg/hqdefault.jpg'
  },
  {
    id: 'AbeWeusmjws',
    title: '전자칠판',
    cat: 'production',
    tag: 'HOOMEDIA 스튜디오',
    label: '전자칠판',
    duration: '04:10',
    year: '2024',
    description: '86인치 4K UHD 전자칠판 및 최신 판서 시스템을 적용한 스마트 강좌 촬영',
    imageUrl: 'https://img.youtube.com/vi/AbeWeusmjws/hqdefault.jpg'
  },
  {
    id: 'PVVdU-CYowA',
    title: '웅진_전자칠판',
    cat: 'edu',
    tag: '웅진',
    label: '전자칠판',
    duration: '03:55',
    year: '2024',
    description: '웅진 스마트학습 연계 86인치 전자칠판 활용 디지털 교재 동영상 강의 제작',
    imageUrl: 'https://img.youtube.com/vi/PVVdU-CYowA/hqdefault.jpg'
  },
  {
    id: 'PxAZYrpdowU',
    title: '웅진_블랙보드',
    cat: 'edu',
    tag: '웅진',
    label: '블랙보드',
    duration: '04:05',
    year: '2024',
    description: '웅진 에듀테크 특수 무반사 블랙보드 세트 기반 프리미엄 강좌 시각화 구현',
    imageUrl: 'https://img.youtube.com/vi/PxAZYrpdowU/hqdefault.jpg'
  },
  {
    id: 'x4Cb5At6Z_M',
    title: 'CG 인터랙티브 강의',
    cat: 'production',
    tag: '인터랙티브미디어',
    label: 'CG/인터랙티브',
    duration: '03:30',
    year: '2024',
    description: '실시간 CG 모션 그래픽 및 인터랙티브 효과를 결합한 차세대 학습 몰입형 강의',
    imageUrl: 'https://img.youtube.com/vi/x4Cb5At6Z_M/hqdefault.jpg'
  },
  {
    id: 'JwCrB4dKgDU',
    title: '테블릿 강의',
    cat: 'edu',
    tag: '스마트에듀',
    label: '태블릿강의',
    duration: '03:15',
    year: '2024',
    description: '고해상도 태블릿 판서 및 디지털 에듀테크 솔루션 결합 모바일 최적화 강의',
    imageUrl: 'https://img.youtube.com/vi/JwCrB4dKgDU/hqdefault.jpg'
  },
  {
    id: '54m2LENAo68',
    title: '크로마키',
    cat: 'production',
    tag: '크로마키스튜디오',
    label: '크로마키',
    duration: '04:20',
    year: '2024',
    description: '대형 그린 스크린 세트 기반 가상 배경 및 3D 그래픽 합성 시네마 촬영',
    imageUrl: 'https://img.youtube.com/vi/54m2LENAo68/hqdefault.jpg'
  },
  {
    id: 'WaxhtAZLLV8',
    title: '크로마키 촬영',
    cat: 'production',
    tag: '4K스튜디오',
    label: '크로마키',
    duration: '03:50',
    year: '2024',
    description: '전문 라이팅 및 멀티 카메라 시스템을 활용한 4K 크로마키 맞춤 촬영 현장',
    imageUrl: 'https://img.youtube.com/vi/WaxhtAZLLV8/hqdefault.jpg'
  },
  {
    id: 'paYW3d0MRqk',
    title: 'EBS 올쏘 인트로',
    cat: 'production',
    tag: 'EBS',
    label: '모션/인트로',
    duration: '01:15',
    year: '2024',
    description: 'EBS 올쏘 시그니처 강좌 전용 감각적인 3D 모션 그래픽 및 시각 디자인 인트로',
    imageUrl: 'https://img.youtube.com/vi/paYW3d0MRqk/hqdefault.jpg'
  },
  {
    id: 'komXGh3TGSo',
    title: 'EBS 천일문 타이틀',
    cat: 'production',
    tag: 'EBS',
    label: '타이틀/CG',
    duration: '01:30',
    year: '2024',
    description: 'EBS 천일문 메인 시리즈 브랜딩을 강화하는 고품질 아트워크 타이틀 모션 그래픽',
    imageUrl: 'https://img.youtube.com/vi/komXGh3TGSo/hqdefault.jpg'
  },
  {
    id: 'cF7i6m9apsE',
    title: 'EBS 포텐시리즈 인트로',
    cat: 'production',
    tag: 'EBS',
    label: '모션/인트로',
    duration: '01:20',
    year: '2024',
    description: 'EBS 포텐시리즈 시그니처 강좌의 역동적인 분위기를 전달하는 오프닝 타이틀',
    imageUrl: 'https://img.youtube.com/vi/cF7i6m9apsE/hqdefault.jpg'
  },
  {
    id: '-Is7q7qD9Rc',
    title: '꽁강 유튜브 인트로',
    cat: 'press',
    tag: '유튜브/뉴미디어',
    label: '유튜브PR',
    duration: '00:45',
    year: '2024',
    description: '유튜브 뉴미디어 채널 브랜딩 강화를 위한 트렌디한 시그니처 오프닝 인트로',
    imageUrl: 'https://img.youtube.com/vi/-Is7q7qD9Rc/hqdefault.jpg'
  }
];

export const KEYWORDS = [
  '교육 콘텐츠 개발',
  '종합 미디어 솔루션',
  'AI·디지털 교육 솔루션',
  '4K 스마트 스튜디오',
  '기업·공공 미디어 브랜딩'
];
