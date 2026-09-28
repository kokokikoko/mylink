"use client";

import React, { useState } from "react";

// 심플하고 깔끔한 인라인 SVG 아이콘들
function GithubIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function MailIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function BookOpenIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function ShareIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.59" x2="15.42" y1="13.51" y2="17.49" />
      <line x1="15.41" x2="8.59" y1="6.51" y2="10.49" />
    </svg>
  );
}

function HeartIcon({ className = "w-4 h-4", filled = false }: { className?: string; filled?: boolean }) {
  return (
    <svg
      className={className}
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function SparklesIcon({ className = "w-3 h-3" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    </svg>
  );
}

function CodeIcon({ className = "w-3.5 h-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

function CheckIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ExternalLinkIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h6v6" />
      <path d="M10 14 21 3" />
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    </svg>
  );
}

export default function ProfilePage() {
  const [copied, setCopied] = useState(false);
  const [likes, setLikes] = useState(48);
  const [hasLiked, setHasLiked] = useState(false);

  // 링크 항목들
  const links = [
    {
      title: "GitHub 저장소",
      description: "바이브 코딩 프로젝트 & 공부 기록",
      icon: <GithubIcon className="w-5 h-5" />,
      url: "https://github.com",
      highlight: true,
    },
    {
      title: "기술 & 공부 블로그",
      description: "매일 배우는 개발 지식과 인사이트 기록",
      icon: <BookOpenIcon className="w-5 h-5" />,
      url: "https://velog.io",
      highlight: false,
    },
    {
      title: "인스타그램",
      description: "대학생의 일상과 캠퍼스 라이프",
      icon: <InstagramIcon className="w-5 h-5" />,
      url: "https://instagram.com",
      highlight: false,
    },
    {
      title: "이메일 보내기",
      description: "협업 제안이나 질문은 언제든 환영해요",
      icon: <MailIcon className="w-5 h-5" />,
      url: "mailto:contact@example.com",
      highlight: false,
    },
  ];

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleLike = () => {
    if (hasLiked) {
      setLikes((prev) => prev - 1);
      setHasLiked(false);
    } else {
      setLikes((prev) => prev + 1);
      setHasLiked(true);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-800 dark:text-zinc-100 flex flex-col items-center justify-center px-4 py-12 sm:py-16 selection:bg-indigo-500 selection:text-white transition-colors duration-300">
      {/* 은은한 배경 그라디언트 블러 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[500px] h-[340px] sm:h-[500px] bg-gradient-to-tr from-indigo-400/10 via-purple-400/10 to-pink-400/10 dark:from-indigo-600/15 dark:via-purple-600/15 dark:to-pink-600/15 rounded-full blur-3xl" />
      </div>

      {/* 중앙 프로필 카드 컨테이너 */}
      <div className="w-full max-w-md mx-auto z-10 flex flex-col items-center text-center">
        {/* 상단 액션 바 (공유 버튼) */}
        <div className="w-full flex justify-end mb-4">
          <button
            onClick={handleCopyLink}
            aria-label="링크 복사하기"
            className="p-2.5 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:shadow-md text-slate-600 dark:text-zinc-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-105 active:scale-95 transition-all"
            title="프로필 링크 복사"
          >
            {copied ? (
              <CheckIcon className="w-4 h-4 text-emerald-500" />
            ) : (
              <ShareIcon className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* 프로필 이미지 (아바타) */}
        <div className="relative mb-5 group">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full p-1 bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform duration-300">
            <div className="w-full h-full rounded-full bg-white dark:bg-zinc-900 flex items-center justify-center overflow-hidden">
              <span className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent select-none">
                JM
              </span>
            </div>
          </div>
          {/* 활동 상태 뱃지 */}
          <div
            className="absolute bottom-1 right-1 w-5 h-5 rounded-full bg-emerald-500 border-2 border-white dark:border-zinc-950 shadow-sm flex items-center justify-center"
            title="바이브 코딩 중!"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
          </div>
        </div>

        {/* 이름 */}
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
          <span>김지민</span>
          <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 text-xs" title="인증됨">
            <SparklesIcon className="w-3 h-3" />
          </span>
        </h1>

        {/* 뱃지 태그 */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-3 mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-300 border border-indigo-100 dark:border-indigo-900/40">
            <CodeIcon className="w-3.5 h-3.5" />
            바이브 코딩
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 border border-slate-200/60 dark:border-zinc-700/60">
            🎓 대학생
          </span>
        </div>

        {/* 소개글 */}
        <p className="text-slate-600 dark:text-zinc-400 text-base leading-relaxed max-w-sm px-2 mb-6 font-normal">
          안녕하세요! 바이브 코딩을 배우고 있는 대학생입니다.
        </p>

        {/* 응원하기 버튼 */}
        <button
          onClick={handleLike}
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold border transition-all duration-200 mb-8 ${
            hasLiked
              ? "bg-pink-500 text-white border-pink-500 shadow-md shadow-pink-500/25 scale-105"
              : "bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 border-slate-200 dark:border-zinc-800 hover:bg-slate-50 dark:hover:bg-zinc-800 shadow-sm hover:scale-105 active:scale-95"
          }`}
        >
          <HeartIcon
            filled={hasLiked}
            className={`w-4 h-4 transition-transform duration-200 ${
              hasLiked ? "scale-110" : "text-pink-500"
            }`}
          />
          <span>응원해요</span>
          <span className="opacity-80">({likes})</span>
        </button>

        {/* 링크 카드 리스트 */}
        <div className="w-full flex flex-col gap-3">
          {links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative flex items-center justify-between p-4 rounded-2xl border transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 ${
                link.highlight
                  ? "bg-white dark:bg-zinc-900 border-indigo-200 dark:border-indigo-900/60 hover:border-indigo-400 dark:hover:border-indigo-600"
                  : "bg-white dark:bg-zinc-900 border-slate-200/90 dark:border-zinc-800/90 hover:border-slate-300 dark:hover:border-zinc-700"
              }`}
            >
              <div className="flex items-center gap-3.5 text-left">
                <div
                  className={`p-2.5 rounded-xl transition-colors ${
                    link.highlight
                      ? "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white"
                      : "bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 group-hover:bg-slate-200 dark:group-hover:bg-zinc-700"
                  }`}
                >
                  {link.icon}
                </div>
                <div>
                  <div className="font-semibold text-sm sm:text-base text-slate-900 dark:text-zinc-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                    {link.title}
                  </div>
                  <div className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                    {link.description}
                  </div>
                </div>
              </div>

              <div className="text-slate-400 group-hover:text-indigo-500 group-hover:translate-x-0.5 transition-all pl-2">
                <ExternalLinkIcon className="w-4 h-4" />
              </div>
            </a>
          ))}
        </div>

        {/* 복사 완료 토스트 알림 */}
        {copied && (
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-xs sm:text-sm font-medium shadow-xl">
            <CheckIcon className="w-4 h-4 text-emerald-400 dark:text-emerald-600" />
            <span>프로필 링크가 복사되었습니다!</span>
          </div>
        )}

        {/* 푸터 */}
        <footer className="mt-12 text-xs text-slate-400 dark:text-zinc-500 flex flex-col items-center gap-1.5">
          <p>© 2026 김지민. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Powered by Vibe Coding</span>
            <span className="text-indigo-500">✨</span>
          </p>
        </footer>
      </div>
    </main>
  );
}
