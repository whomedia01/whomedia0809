import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/companyData';
import { InquiryFormData } from '../types';
import { Phone, Mail, MapPin, ExternalLink, Send, CheckCircle2 } from 'lucide-react';

interface ContactProps {
  initialStudioSelect?: string;
}

export const Contact: React.FC<ContactProps> = ({ initialStudioSelect }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    clientName: '',
    contactPerson: '',
    phone: '',
    email: '',
    serviceType: initialStudioSelect || '칠판강의/전자칠판 인강 녹화',
    message: '',
    privacyAgreed: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.privacyAgreed) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }
    setSubmitted(true);
  };

  return (
    <section id="contact" className="h-[100dvh] min-h-[100dvh] snap-start snap-always flex-shrink-0 flex flex-col justify-center items-center py-12 sm:py-16 bg-white border-b border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Left Column - Company Contact Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-bold text-red-600 tracking-wider uppercase bg-red-50 px-3 py-1 rounded-full mb-3 inline-block">
                빠른 상담 문의
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4">
                영상 제작 &amp; 스튜디오 대여 문의
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8">
                스튜디오 대여 일정, 강의·홍보 영상 제작, 교육 컨설팅 등 필요하신 내용을 남겨주시면 담당 PD가 신속히 안내해 드립니다.
              </p>

              {/* Direct Info Action Cards */}
              <div className="space-y-4">
                {/* Phone Card */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase block">대표 전화</span>
                      <span className="text-base font-extrabold text-slate-900">{COMPANY_INFO.phone}</span>
                    </div>
                  </div>
                  <a
                    href={`tel:${COMPANY_INFO.phone}`}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors text-center flex items-center justify-center space-x-1"
                  >
                    <span>문의 전화 걸기</span>
                  </a>
                </div>

                {/* Email Card */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase block">대표 이메일</span>
                      <span className="text-xs font-extrabold text-slate-900 truncate max-w-[180px] sm:max-w-xs block">{COMPANY_INFO.email}</span>
                    </div>
                  </div>
                  <a
                    href={`mailto:${COMPANY_INFO.email}`}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors text-center flex items-center justify-center space-x-1"
                  >
                    <span>문의 이메일 작성</span>
                  </a>
                </div>

                {/* Location Card */}
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-500 uppercase block">사업장 주소 안내</span>
                      <span className="text-xs font-bold text-slate-800 line-clamp-1">{COMPANY_INFO.address}</span>
                    </div>
                  </div>
                  <a
                    href={COMPANY_INFO.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors text-center flex items-center justify-center space-x-1 flex-shrink-0"
                  >
                    <span>구글 지도 위치 확인</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Project Inquiry Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm">
              <h3 className="text-lg font-extrabold text-slate-900 mb-6">
                프로젝트 견적 및 임대 상담 신청
              </h3>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-8 text-center">
                  <div className="w-14 h-14 bg-emerald-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-extrabold text-slate-900 mb-2">견적 문의가 정상 접수되었습니다.</h4>
                  <p className="text-xs text-slate-600 mb-6">
                    담당 프로듀서가 작성해주신 연락처({formData.phone})로 24시간 이내에 신속하게 안내드리겠습니다.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        clientName: '',
                        contactPerson: '',
                        phone: '',
                        email: '',
                        serviceType: '칠판강의/전자칠판 인강 녹화',
                        message: '',
                        privacyAgreed: false,
                      });
                    }}
                    className="bg-slate-900 text-white text-xs font-bold px-4 py-2 rounded-lg"
                  >
                    새 문의 작성하기
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        회사 / 기관 / 학교 이름 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.clientName}
                        onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                        placeholder="예: (주)미래엔"
                        className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 transition-all duration-300 ease-in-out focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 focus:shadow-md"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        담당자 성함 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.contactPerson}
                        onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                        placeholder="홍길동 팀장"
                        className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 transition-all duration-300 ease-in-out focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 focus:shadow-md"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        담당자 연락처 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="010-0000-0000"
                        className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 transition-all duration-300 ease-in-out focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 focus:shadow-md"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        이메일 주소 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="example@company.com"
                        className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 transition-all duration-300 ease-in-out focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 focus:shadow-md"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      이용 목적 / 서비스 선택 <span className="text-red-500">*</span>
                    </label>
                    <select
                      value={formData.serviceType}
                      onChange={(e) => setFormData({ ...formData, serviceType: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 transition-all duration-300 ease-in-out focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 focus:shadow-md"
                    >
                      <option value="미디어 프로덕션 & 4K 스튜디오 제작/대여">미디어 프로덕션 &amp; 4K 스튜디오 제작/대여</option>
                      <option value="교육 과정 기획 & 맞춤형 컨설팅">교육 과정 기획 &amp; 맞춤형 컨설팅</option>
                      <option value="후캠퍼스 온·오프라인 평생교육 프로그램">후캠퍼스 온·오프라인 평생교육 프로그램</option>
                      <option value="디지털 언론 홍보 & PR (한국AI교육신문)">디지털 언론 홍보 &amp; PR (한국AI교육신문)</option>
                      <option value="기업 / 공공기관 브랜딩 & 홍보 영상 제작">기업 / 공공기관 브랜딩 &amp; 홍보 영상 제작</option>
                      <option value="기타 / 제휴 및 사업 협력 문의">기타 / 제휴 및 사업 협력 문의</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      상세 문의내용 <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="희망 촬영 일정, 예상 녹화 분량 및 요구사항을 작성해 주세요."
                      className="w-full bg-white border border-slate-300 rounded-lg px-3.5 py-2.5 text-xs text-slate-900 transition-all duration-300 ease-in-out focus:outline-none focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/20 focus:shadow-md resize-none"
                    />
                  </div>

                  <div className="flex items-center space-x-2 pt-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      checked={formData.privacyAgreed}
                      onChange={(e) => setFormData({ ...formData, privacyAgreed: e.target.checked })}
                      className="w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500"
                    />
                    <label htmlFor="privacy" className="text-xs text-slate-600 cursor-pointer">
                      개인정보 수집 및 이용에 동의합니다.
                    </label>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-sm py-3.5 rounded-lg transition-colors flex items-center justify-center space-x-2 shadow-md"
                  >
                    <Send className="w-4 h-4" />
                    <span>프로젝트 견적 문의하기</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
