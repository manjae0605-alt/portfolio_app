const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
] as const;

export default function Home() {
  return (
    <div className="min-h-screen text-sm text-slate-200 md:text-base">
      <header className="sticky top-0 z-20 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3 md:px-6 md:py-4">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-sky-500/90 ring-2 ring-sky-400/60 ring-offset-2 ring-offset-slate-950" />
            <div className="flex flex-col leading-tight">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300/90">
                Portfolio
              </span>
              <span className="text-sm font-medium text-slate-100 md:text-base">
                Your Name
              </span>
            </div>
          </div>
          <nav className="hidden gap-6 text-xs font-medium text-slate-300 md:flex md:text-sm">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="relative transition-colors hover:text-sky-300"
              >
                {item.label}
                <span className="absolute inset-x-0 -bottom-1 h-px scale-x-0 bg-gradient-to-r from-sky-400 to-cyan-300 transition-transform duration-200 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-5 pb-16 pt-10 md:px-6 md:pb-24 md:pt-16">
        {/* Hero Section */}
        <section
          id="home"
          className="grid gap-10 pb-20 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-center md:gap-16 md:pb-28"
        >
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-sky-300/90">
              Frontend Developer
            </p>
            <h1 className="mb-4 text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl">
              <span className="text-yellow-400">한 페이지로 보는</span>
              <br />
              <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-emerald-200 bg-clip-text text-transparent">
                우리의 경력과 역량
              </span>
            </h1>
            <p className="mb-8 max-w-xl text-sm leading-relaxed text-slate-300 md:text-base">
              모던 웹 기술과 사용자 경험을 중심으로 제품의 가치를 극대화하는
              프론트엔드 개발자입니다. 직관적인 인터페이스와 유지보수 가능한
              코드를 통해 비즈니스 목표 달성에 기여합니다.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#portfolio"
                className="inline-flex items-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
              >
                작업물 보러가기
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-slate-600/80 px-5 py-2.5 text-sm font-medium text-slate-100 transition hover:border-sky-400/80 hover:text-sky-200"
              >
                연락하기
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-800/80 bg-slate-900/40 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.8)] md:p-6">
            <div className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              Profile Snapshot
            </div>
            <dl className="space-y-3 text-sm text-slate-200/90">
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-slate-400">이름</dt>
                <dd className="font-medium">Your Name</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-slate-400">경력</dt>
                <dd className="font-medium">N년 (Frontend / Web)</dd>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <dt className="text-slate-400">주요 역할</dt>
                <dd className="max-w-[14rem] text-right">
                  UI 개발, 디자인 시스템, 성능 최적화, 협업 리딩
                </dd>
              </div>
            </dl>
          </aside>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="scroll-mt-20 border-t border-slate-800/70 pt-12 md:pt-16"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                About
              </h2>
              <p className="mt-1 text-lg font-medium text-slate-50 md:text-xl">
                문제를 구조적으로 해결하는 개발자
              </p>
            </div>
          </div>
          <div className="grid gap-8 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:gap-12">
            <p className="max-w-2xl text-sm leading-relaxed text-slate-300 md:text-base">
              복잡한 요구사항을 사용자가 쉽게 이해할 수 있는 인터페이스로
              풀어내는 데 관심이 많습니다. 기획·디자인·백엔드와의 협업을
              통해, 서비스의 전체 흐름 속에서 프론트엔드가 해야 할 역할을
              고민합니다. 코드는 읽기 쉽고 변경에 강해야 한다는 원칙을
              바탕으로, 재사용 가능한 컴포넌트와 명확한 구조를 지향합니다.
            </p>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>웹 서비스 및 사내 도구 Frontend 개발 경험</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>디자인 시스템·컴포넌트 라이브러리 구축 및 운영</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-400" />
                <span>성능·접근성 개선 및 코드 품질 향상에 꾸준한 관심</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="scroll-mt-20 border-t border-slate-800/70 pt-12 md:pt-16"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                Skills
              </h2>
              <p className="mt-1 text-lg font-medium text-slate-50 md:text-xl">
                기술 스택 & 강점 영역
              </p>
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Frontend
              </h3>
              <ul className="space-y-1.5 text-sm text-slate-200">
                <li>TypeScript / JavaScript (ESNext)</li>
                <li>React, Next.js</li>
                <li>Tailwind CSS, CSS-in-JS</li>
                <li>반응형 UI, 접근성 고려 마크업</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Backend & Infra
              </h3>
              <ul className="space-y-1.5 text-sm text-slate-200">
                <li>RESTful API 연동</li>
                <li>간단한 Node.js 기반 API</li>
                <li>인증/인가 플로우 이해</li>
                <li>CI/CD 파이프라인 협업 경험</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                Tools & Collaboration
              </h3>
              <ul className="space-y-1.5 text-sm text-slate-200">
                <li>Git / GitHub, Jira</li>
                <li>Figma 기반 디자인 협업</li>
                <li>코드 리뷰 문화, 문서화</li>
                <li>애자일 스프린트 참여 경험</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section
          id="portfolio"
          className="scroll-mt-20 border-t border-slate-800/70 pt-12 md:pt-16"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                Portfolio
              </h2>
              <p className="mt-1 text-lg font-medium text-slate-50 md:text-xl">
                주요 프로젝트
              </p>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <article className="group flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 transition hover:border-sky-500/70 hover:bg-slate-900/70">
              <header>
                <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-sky-300/90">
                  Web Application
                </p>
                <h3 className="mb-2 text-base font-semibold text-slate-50 md:text-lg">
                  프로젝트 A - 관리형 대시보드
                </h3>
                <p className="text-sm text-slate-300">
                  내부 운영 인력을 위한 대시보드로, 복잡한 데이터와 워크플로우를
                  직관적으로 관리할 수 있도록 정보 구조를 재설계했습니다.
                  반응형 레이아웃과 접근성을 고려한 컴포넌트 기반 UI를
                  구현했습니다.
                </p>
              </header>
              <footer className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                <span>Next.js · TypeScript · Tailwind CSS</span>
                <a
                  href="#"
                  className="text-xs font-medium text-sky-300 hover:text-sky-200"
                >
                  자세히 보기
                </a>
              </footer>
            </article>

            <article className="group flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 transition hover:border-sky-500/70 hover:bg-slate-900/70">
              <header>
                <p className="mb-1 text-xs font-medium uppercase tracking-[0.2em] text-sky-300/90">
                  Landing Page
                </p>
                <h3 className="mb-2 text-base font-semibold text-slate-50 md:text-lg">
                  프로젝트 B - 제품 소개 랜딩
                </h3>
                <p className="text-sm text-slate-300">
                  제품 가치가 한눈에 들어오도록 스토리텔링 중심의 단일 페이지
                  랜딩을 설계했습니다. 스크롤에 따라 자연스럽게 이어지는 섹션과
                  가벼운 인터랙션으로 전환율 향상을 목표로 했습니다.
                </p>
              </header>
              <footer className="mt-4 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
                <span>React · Styled Components</span>
                <a
                  href="#"
                  className="text-xs font-medium text-sky-300 hover:text-sky-200"
                >
                  자세히 보기
                </a>
              </footer>
            </article>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="scroll-mt-20 border-t border-slate-800/70 pt-12 md:pt-16"
        >
          <div className="mb-6 flex items-center justify-between gap-4">
            <div>
              <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
                Contact
              </h2>
              <p className="mt-1 text-lg font-medium text-slate-50 md:text-xl">
                함께 이야기 나누고 싶으시다면
              </p>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] md:gap-16">
            <div className="space-y-4 text-sm text-slate-300 md:text-base">
              <p>
                새로운 기회나 협업 제안, 혹은 단순한 커피챗이라도 언제든
                환영합니다. 아래 폼 또는 이메일로 편하게 연락 주세요.
              </p>
              <div>
                <div className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Email
                </div>
                <a
                  href="mailto:your.email@example.com"
                  className="mt-1 inline-flex text-sm font-medium text-sky-300 hover:text-sky-200"
                >
                  your.email@example.com
                </a>
              </div>
              <div className="space-x-4 text-sm text-slate-300">
                <a
                  href="#"
                  className="hover:text-sky-300"
                  aria-label="GitHub 프로필로 이동"
                >
                  GitHub
                </a>
                <a
                  href="#"
                  className="hover:text-sky-300"
                  aria-label="LinkedIn 프로필로 이동"
                >
                  LinkedIn
                </a>
              </div>
            </div>

            <form className="space-y-4 rounded-2xl border border-slate-800/80 bg-slate-900/40 p-5 md:p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="text-xs font-medium text-slate-200"
                  >
                    이름
                  </label>
                  <input
                    id="name"
                    name="name"
                    className="w-full rounded-lg border border-slate-700/80 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none ring-sky-500/0 transition focus:border-sky-500/80 focus:ring-2 focus:ring-sky-500/50"
                    placeholder="이름을 입력해 주세요"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="text-xs font-medium text-slate-200"
                  >
                    이메일
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full rounded-lg border border-slate-700/80 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none ring-sky-500/0 transition focus:border-sky-500/80 focus:ring-2 focus:ring-sky-500/50"
                    placeholder="답변을 받을 이메일 주소"
                  />
                </div>
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-medium text-slate-200"
                >
                  메시지
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full resize-none rounded-lg border border-slate-700/80 bg-slate-950/60 px-3 py-2 text-sm text-slate-100 outline-none ring-sky-500/0 transition focus:border-sky-500/80 focus:ring-2 focus:ring-sky-500/50"
                  placeholder="간단한 문의 내용 또는 소개를 남겨 주세요."
                />
              </div>
              <button
                type="button"
                className="inline-flex w-full items-center justify-center rounded-full bg-sky-500 px-5 py-2.5 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/30 transition hover:bg-sky-400"
              >
                전송하기
              </button>
              <p className="text-xs text-slate-500">
                * 데모용 폼으로, 실제 메일 전송은 구현되어 있지 않습니다.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800/70 py-6 text-xs text-slate-500 md:py-8">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-5 md:flex-row md:px-6">
          <p className="order-2 md:order-1">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
          <p className="order-1 text-[11px] text-slate-400 md:order-2 md:text-xs">
            작은 개선을 꾸준히 쌓아가는 개발자가 되기 위해 노력합니다.
          </p>
        </div>
      </footer>
    </div>
  );
}
