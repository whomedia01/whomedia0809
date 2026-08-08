import React, { useState } from 'react';
import { ChevronDown, HelpCircle, Sparkles, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    id: 'faq-1',
    category: '사업 및 서비스',
    question: '(주)후미디어가 제공하는 대표 핵심 서비스는 무엇인가요?',
    answer: '(주)후미디어는 기업 및 교육 기관을 대상으로 ① 맞춤형 교육 콘텐츠 기획/개발 컨설팅, ② 160평 규모 최첨단 4K 방송 스튜디오 대여(전자칠판, 크로마키, 칠판세트), ③ 전문 미디어 프로덕션 고품질 영상 제작, ④ 후캠퍼스 평생교육원 직무 교육 과정, ⑤ 한국AI교육신문을 통한 디지털 언론 PR을 원스톱으로 제공합니다.'
  },
  {
    id: 'faq-2',
    category: '스튜디오 대여',
    question: '4K 스튜디오 대여 시 제공되는 기본 장비와 스펙이 어떻게 되나요?',
    answer: '스튜디오 1~6 전체 세트에 86인치 4K UHD 최신 전자칠판, 방송용 4K 카메라(1~3대 멀티캠), 대형 크로마키 벽면, 5.6m x 4.0m 아크릴 칠판 세트, 프롬프터, 특수 무반사 고휘도 LED 조명 시스템, 와이어리스 핀마이크, 프라이빗 대기실 및 무료 주차 공간을 기본 탑재하고 있습니다.'
  },
  {
    id: 'faq-3',
    category: '교육 및 마케팅',
    question: '후캠퍼스 평생교육원 및 한국AI교육신문 연계 혜택은 무엇인가요?',
    answer: '후미디어에서 제작된 우수 교육 영상 콘텐츠는 후캠퍼스 평생교육원의 맞춤형 이러닝 LMS 플랫폼과 연계하여 수강생 모집이 가능하며, 한국AI교육신문 공식 언론 기사 발행을 통해 기업의 브랜드 신뢰도 상승 및 SEO 마케팅 효과를 동시에 얻을 수 있습니다.'
  },
  {
    id: 'faq-4',
    category: '예약 및 견적',
    question: '스튜디오 예약 및 제작 견적 문의는 어떻게 진행하나요?',
    answer: '공식 웹사이트 하단의 [제작 문의 및 스튜디오 견적] 폼을 작성해 주시거나 대표 번호(02-1234-5678)로 문의해 주시면, 전문 전담 피디(PD)가 24시간 이내에 실시간 스튜디오 잔여 일정 확인 및 맞춤형 제작 견적서를 전달해 드립니다.'
  },
  {
    id: 'faq-5',
    category: '제작 솔루션',
    question: '초보 강사나 촬영이 익숙지 않은 출연자도 제작이 가능한가요?',
    answer: '네, 가능합니다. 전문 PD와 조연출이 세팅부터 프롬프터 자막 가이드, 마이크 음향 밸런싱, 실시간 모니터링 모니터링을 전담 보조하므로 부담 없이 고품질 강의 및 홍보 영상을 촬영하실 수 있습니다.'
  }
];

export const Faq: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section 
      id="faq" 
      itemScope 
      itemType="https://schema.org/FAQPage" 
      className="h-[100dvh] min-h-[100dvh] snap-start snap-always flex-shrink-0 flex flex-col justify-center items-center py-12 sm:py-16 bg-slate-900 text-white border-b border-slate-800 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 px-3.5 py-1 rounded-full text-blue-400 text-xs font-bold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>자주 묻는 질문 (AEO & GEO Verified FAQ)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
            궁금하신 점을 빠르게 확인하세요
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            스튜디오 대여, 맞춤형 영상 제작, 교육 컨설팅 및 언론 마케팅에 대한 대표 질문 모음입니다.
          </p>
        </div>

        {/* FAQ Accordion List with Microdata Schema */}
        <div className="space-y-3 sm:space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
                className="bg-slate-950/80 border border-slate-800 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between space-x-4 cursor-pointer hover:bg-slate-800/40 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-bold text-xs">
                      Q
                    </span>
                    <h3 itemProp="name" className="text-xs sm:text-sm font-bold text-slate-100">
                      {faq.question}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-blue-400' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                      itemScope
                      itemProp="acceptedAnswer"
                      itemType="https://schema.org/Answer"
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/80 flex items-start space-x-3">
                        <MessageSquare className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                        <p itemProp="text">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Helper */}
        <div className="mt-8 text-center text-xs text-slate-400 flex items-center justify-center space-x-2">
          <HelpCircle className="w-4 h-4 text-blue-400" />
          <span>추가 궁금하신 사항은 1:1 상담 문의를 이용해 주세요.</span>
        </div>
      </div>
    </section>
  );
};

export default Faq;
