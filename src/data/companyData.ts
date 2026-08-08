import { PortfolioItem, DivisionItem, BusinessPillar, StudioPackage, StudioGalleryItem, ClientPartner } from '../types';

export const COMPANY_INFO = {
  name: '(주)후미디어',
  brandName: 'HOOMEDIA',
  phone: '02-6443-4222',
  email: 'whomedia6104@gmail.com',
  address: '서울특별시 금천구 가산디지털2로 53 (가산동) 한라시그마밸리 1102~1104호',
  ceo: '황광성',
  bizNum: '119-86-25861',
  mailOrderNum: '2020-서울금천-1102호',
  mapUrl: 'https://maps.google.com/?q=서울특별시+금천구+가산디지털2로+53'
};

export const DIVISIONS_DATA: DivisionItem[] = [
  {
    id: 'div-rd',
    code: 'R&D CENTER',
    name: '기업부설연구소',
    description: 'AI 에듀테크 · 미래 교육 콘텐츠 & 미디어 기술 연구 개발',
    subCategories: ['AI연구팀', '미디어기술팀']
  },
  {
    id: 'div-1',
    code: 'DIVISION 01',
    name: '교육사업부',
    description: '교육과정 맞춤 설계 및 사업 운영 총괄',
    subCategories: ['기획팀', '운영팀']
  },
  {
    id: 'div-2',
    code: 'DIVISION 02',
    name: '에듀테크부',
    description: 'AI 교육 콘텐츠 및 UI/UX 디자인 개발',
    subCategories: ['AI개발팀', '디자인팀']
  },
  {
    id: 'div-3',
    code: 'DIVISION 03',
    name: '영상미디어부',
    description: '고품질 교육 영상 촬영, 편집 및 연출',
    subCategories: ['촬영팀', '편집팀']
  },
  {
    id: 'div-4',
    code: 'DIVISION 04',
    name: '경영지원부',
    description: '언론 홍보, PR 및 경영 행정 관리',
    subCategories: ['홍보팀', '경영지원팀']
  }
];

export const BUSINESS_PILLARS: BusinessPillar[] = [
  {
    id: 'pillar-1',
    code: 'PRODUCTION & CREATIVE',
    title: '미디어 프로덕션 & 크리에이티브 스튜디오',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=80',
    description: '시네마 4K 카메라, 가상 크로마키 스튜디오 및 방송 인프라를 바탕으로 극대화된 교육 및 미디어 영상 콘텐츠를 제작합니다.',
    features: [
      '4K 전문 방송 카메라 & 크로마키 세트 운용',
      '전문 감독 배치 및 1:1 맞춤 모니터링',
      '실시간 모션 그래픽 및 CG 프롬프터 시스템'
    ]
  },
  {
    id: 'pillar-2',
    code: 'EDUTEM',
    title: '후미디어 X 에듀템의 교육혁신',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80',
    description: '교육 현장의 니즈를 분석하여 맞춤형 교육 솔루션과 혁신적 미디어 교육 환경을 원스톱으로 지원합니다.',
    features: [
      '86인치 최신형 전자칠판 강의 시스템',
      '맞춤형 모션 가상강의 및 판서 인프라',
      '하이브리드 온/오프라인 에듀테크 콘텐츠 개발'
    ]
  },
  {
    id: 'pillar-3',
    code: 'MEDIA & JOURNALISM',
    title: '디지털 신문 미디어 & 에듀뉴스',
    image: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=800&q=80',
    description: '에듀테크 뉴미디어 포털 \'EDUNEWS\'와 연계하여 교육 소식 및 스튜디오 솔루션 브랜딩을 신속하게 전파합니다.',
    features: [
      '최신 에듀테크 미디어 트렌드 분석 리포트',
      '브랜딩 홍보 영상 제작 및 미디어 유통',
      '전문가 인터뷰 및 스튜디오 기획 보도'
    ]
  }
];

export const STUDIO_PACKAGES: StudioPackage[] = [
  {
    id: 'studio-1-2',
    title: '스튜디오 1 & 2',
    badge: '86인치 전자칠판 세트',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=800&q=80',
    status: 'available',
    statusText: '오늘 바로 대여 가능',
    nextAvailableTime: '실시간 예약 접수 중',
    specs: [
      '86인치 4K UHD 전자칠판 및 최신 판서 소프트웨어',
      '4K 전문 방송용 카메라 1~2대 촬영 구성',
      '독립형 메이크업실 & 모니터링 룸 완비',
      '방음 및 최적 음향 시스템 (와이어리스 핀마이크)'
    ]
  },
  {
    id: 'studio-3-4',
    title: '스튜디오 3 & 4',
    badge: '크로마키 / 대형 세트',
    image: 'https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?auto=format&fit=crop&w=800&q=80',
    status: 'limited',
    statusText: '오늘 잔여 2슬롯 (마감 임박)',
    nextAvailableTime: '오후 15:00 이후 가능',
    specs: [
      '초대형 크로마키 벽면 및 전문 조명 셋업',
      '동일 공간 내 멀티 카메라 3대 연동',
      '프롬프터 및 실시간 크로마키 합성 모니터',
      '유튜브 대형 실시간 스튜디오 방송 가능'
    ]
  },
  {
    id: 'studio-5-6',
    title: '스튜디오 5 & 6',
    badge: '칠판강의 / 모션 세트',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80',
    status: 'reserved',
    statusText: '오늘 예약 마감 (내일 접수)',
    nextAvailableTime: '내일 오전 09:00 대여 가능',
    specs: [
      '5.6m x 4.0m 대형 아크릴/칠판 전면 세트',
      '분사형 무반사 특수 고휘도 조명 탑재',
      '인강 전문 프롬프터 & 음향 더빙 연동',
      '크로마키와 CCG를 동시에 활용 가능'
    ]
  }
];

export const STUDIO_GALLERY: StudioGalleryItem[] = [
  {
    id: 'gal-1',
    title: '메인 출입구',
    tag: '공용 공간',
    url: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
    description: 'DMC첨단산업센터 11층 HOOMEDIA 메인 출입구'
  },
  {
    id: 'gal-2',
    title: '로비 & 인포메이션',
    tag: '공용 공간',
    url: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80',
    description: '쾌적한 고객 대기실 및 라운지 휴게 공간'
  },
  {
    id: 'gal-3',
    title: '복도 갤러리',
    tag: '공용 공간',
    url: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=800&q=80',
    description: '160평 메인 스튜디오를 연결하는 모던 복도'
  },
  {
    id: 'gal-4',
    title: '편집실 & 모니터링룸',
    tag: '제작 시설',
    url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    description: '4K 스위칭 모니터링 및 실시간 종합 컷 편집 스위트'
  },
  {
    id: 'gal-5',
    title: '스튜디오 1 (86인치 전자칠판)',
    tag: '스튜디오 1',
    url: 'https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=800&q=80',
    description: '86인치 4K 전자칠판 전용 강좌 녹화 및 촬영 세트'
  },
  {
    id: 'gal-6',
    title: '스튜디오 2 (멀티미디어 인강)',
    tag: '스튜디오 2',
    url: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    description: '다목적 멀티미디어 인터랙티브 강좌 스튜디오'
  },
  {
    id: 'gal-7',
    title: '스튜디오 3 (대형 크로마키)',
    tag: '스튜디오 3',
    url: 'https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80',
    description: '가상 크로마키 방송 촬영 및 라이브 방송 세트'
  },
  {
    id: 'gal-8',
    title: '스튜디오 4 (칠판강의 & 모션)',
    tag: '스튜디오 4',
    url: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
    description: '무반사 특수 칠판 세트 및 방송용 프롬프터 인프라'
  }
];

import { PORTFOLIO_ITEMS } from './portfolioData';

export const PORTFOLIO_DATA: PortfolioItem[] = PORTFOLIO_ITEMS;

export const CLIENT_PARTNERS: ClientPartner[] = [
  { id: 'cp-1', name: '동아출판', logoText: '동아출판' },
  { id: 'cp-2', name: '좋은책신사고', logoText: '좋은책신사고' },
  { id: 'cp-3', name: 'Mirae N', logoText: 'Mirae N' },
  { id: 'cp-4', name: 'multicampus', logoText: 'multicampus' },
  { id: 'cp-5', name: 'HOME LEARN', logoText: 'i-Scream HOME LEARN' },
  { id: 'cp-6', name: '세종사이버대학교', logoText: '세종사이버대학교' },
  { id: 'cp-7', name: 'EBS', logoText: 'EBS' },
  { id: 'cp-8', name: 'NE능률', logoText: 'NE능률' },
  { id: 'cp-9', name: '비상교육', logoText: 'visang 비상교육' }
];
