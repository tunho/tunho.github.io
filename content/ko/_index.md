---
date: 2025-10-14
type: landing
title: '전북대 이준호 – 포트폴리오(컴퓨터인공지능학부, MacsLAB)'
slug: 'jbnu-junho-lee' # URL: /ko/jbnu-junho-lee/
keywords:
  ['전북대', '전북대학교', 'JBNU', '컴퓨터인공지능학부', '이준호', '개발자']
header:
  image: 'my-image.png' # <-- svg가 아닌 png 파일 이름으로 변경
draft: false
design:
  # Default section spacing
  spacing: '6rem'

sections:
  - block: hero
    content:
      title: '<span style="white-space: nowrap;">안녕하세요, 이준호입니다.</span>'
      primary_action:
        text: '자세히 보기'
        url: /blog/my-introduce
        icon: user
      secondary_action:
        text: '이력서 보기'
        url: '/resume.pdf'
        icon: document-text

    design:
      css_class: 'dark'
      background:
        color: 'navy'
        image:
          filename: bg-triangles.svg
          filters:
            brightness: 0.5
          size: cover
          position: center
          parallax: false

  - block: stats
    content:
      items:
        - statistic: 'KIISE 2026'
          description: |
            OOD 안전성 연구 채택 · 발표 예정
        - statistic: '의료 CV'
          description: |
            의료영상 검출 · 자세추정 · OOD 안전성
        - statistic: 'LLM · RAG'
          description: |
            임상 의사결정 지원 · 근거 검색 · Agentic
    design:
      # Section background color (CSS class)
      css_class: 'bg-gray-100 dark:bg-gray-900'
      # Reduce spacing
      spacing:
        padding: ['1rem', 0, '1rem', 0]
  - block: cta-image-paragraph
    id: about
    content:
      items:
        # --- 👇 아이템을 이렇게 하나만 남깁니다 ---
        - title: '안녕하세요, 이준호입니다 👋'
          text: '의료 컴퓨터비전(CV)과 LLM·RAG, 두 축에서 신뢰할 수 있는 의료 AI를 연구하는 학부연구생입니다.'

          feature_icon: check
          features:
            - '🏅 KIISE 2026 채택 — OOD(분포 외) 안전성 연구 (2026 발표 예정)'
            - '소속: 전북대학교 컴퓨터인공지능학부 · MacsLAB(의료 AI 연구실) 학부연구생'
            - '의료 컴퓨터비전(CV): 의료영상 병변 검출 · 자세추정 — OOD 안전성, AFF 진단, 무릎각 보정'
            - 'LLM · RAG: 임상 의사결정 지원 · 근거 검색 — 갑상선 CDSS, Healthcare RAG, Agentic CGR'
            - '이메일: tjens2322@gmail.com · GitHub: github.com/tunho'

          # 'assets/media/' 폴더에 있는 본인 사진 파일명
          image: my-image.jpg

          # 버튼은 GitHub 프로필 등 원하는 링크로 연결
          button:
            text: 자세히 보기
            url: '/blog/my-introduce'

    design:
      # 섹션 배경색 등 필요에 따라 디자인을 추가할 수 있습니다.
      css_class: 'bg-gray-100 dark:bg-gray-900'

  - block: features
    id: features
    content:
      title: 주요 역량
      text: 인공지능으로 신뢰할 수 있는 의료 시스템을 탐구하는 연구자이자 개발자입니다. 🤖
      items:
        - name: 인공지능 연구
          icon: cpu-chip
          description: 의료 영상 분석과 진단 시스템 개발을 중심으로 딥러닝 모델을 설계하고 최적화합니다.
        - name: 풀스택 개발
          icon: computer-desktop
          description: FastAPI와 Vue를 활용하여 AI 모델을 실제 서비스로 구현하는 엔드투엔드 시스템을 구축합니다.
        - name: 데이터 분석
          icon: chart-bar
          description: 다양한 데이터 전처리 및 시각화 기법을 통해 모델 성능과 신뢰성을 높입니다.
        - name: 문제 해결력
          icon: light-bulb
          description: 복잡한 문제를 체계적으로 분석하고, 실험과 개선을 통해 해결책을 도출합니다.
        - name: 연구 협업
          icon: users
          description: 연구실 및 팀 프로젝트 환경에서 협업하며, 효율적이고 정확한 결과를 도출합니다.
        - name: 지속적인 학습
          icon: book-open
          description: 최신 AI 논문과 기술 트렌드를 탐구하며, 새로운 아이디어를 프로젝트에 적용합니다.
  - block: markdown
    id: project-title
    content:
      title: 프로젝트
      text: ''
    design:
      css_class: 'text-center pb-0'

  - block: cta-image-paragraph
    id: project
    content:
      title: ''
      items:
        - title: AFF 진단 시스템
          text: '비전형 대퇴골골절(AFF) 검출 딥러닝 모델을 의료진이 실제 임상에서 사용할 수 있는 웹 진단 시스템으로 구현한 풀스택 프로젝트입니다. 연구실에서 학습한 모델을 배포 가능한 제품으로 전환하는 시스템 엔지니어링을 담당했습니다.'
          feature_icon: check
          features:
            - '연구 연계: AFF 검출 연구(IEEE JBHI 저널 투고 준비)의 임상 적용 웹 시스템'
            - '의료영상 뷰어: Vue 3 + TypeScript, DICOM 파싱·렌더링, Window/Level·mm 단위 룰러 측정'
            - 'AI 추론 서버: FastAPI 3단계 파이프라인(부위 분류 → 대퇴골 검출 → AFF 병변 검출) 통합·서빙'
          image: proj-aff.png
          button:
            text: GitHub에서 보기
            url: 'https://github.com/tunho/aff-diagnosis-system'
        - title: 무릎각 잔차 보정 연구
          text: '단안 카메라 3D 자세추정(MediaPipe)의 체계적인 무릎각 오차를 잔차 학습으로 보정하는 연구입니다. 4개 독립 데이터셋(84명)에서 LOSO·LODO 프로토콜로 검증했습니다.'
          feature_icon: check
          features:
            - 'ExtraTrees 회귀로 (정답각 − 예측각) 잔차를 학습해 보정'
            - '무릎각 MAE 13.74° → 8.47°(+38.4%), 임상적으로 중요한 깊은 굴곡 구간(<110°)에서 +43.5%'
            - '80–130° 임계값 스윕에서 일관된 성능(Δ<3%p) — 체리피킹이 아닌 견고한 개선'
          image: proj-squat.png
          button:
            text: GitHub에서 보기
            url: 'https://github.com/tunho/squat-knee-residual-correction'
        - title: 갑상선 영양제 CDSS
          text: '갑상선 질환자의 영양제 복용 안전성·근거를 결정론적 규칙 엔진으로 판정하고, LLM은 판정 이후 자연어 설명 생성에만 사용하는 임상 의사결정 지원 서비스입니다.'
          feature_icon: check
          features:
            - '안전성 엔진: 24개 카테고리 / 34개 규칙, CRITICAL 경고는 판정 전 조기 차단'
            - '6-class 결정론적 판정으로 재현·추적 가능, 모든 판정을 감사 로그(JSONL)로 기록'
            - 'PubMed·식약처 공공데이터 연동, Docker·Render 배포 + GitHub Actions CI'
          image: proj-thyroid.png
          button:
            text: GitHub에서 보기
            url: 'https://github.com/tunho/thyroid-supplement-cdss'

    design:
      # Section background color (CSS class)
      css_class: 'bg-gray-100 dark:bg-gray-900'

  - block: features
    id: experience
    content:
      title: '경력'
      text: '데이터와 코드를 통해 가치를 만들어온 여정입니다.'
      items:
        - name: '메디컬 인공지능 학부연구생'
          icon: beaker
          description: |
            전북대학교 MacsLAB · 의료 AI 연구실 (2025.07 - 현재)  
            • OOD(분포 외) 안전성 연구 — KIISE 2026 채택 (2026 발표 예정)  
            • AFF 진단 모델 연구 — IEEE JBHI 저널 투고 준비 중  
            • 의료영상 AI 웹 서비스 배포 · 딥러닝 논문 리딩 및 발표
    design:
      spacing:
        padding: ['6rem', 0, 0, 0]
  - block: markdown
    id: location
    content:
      title: '오시는 길'
      text: |

        전북대학교 공과대학 7호관에 있습니다.  
        <br><br>

        <div class="flex justify-center">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.8039403927413!2d127.1345!3d35.84605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35702f78ad5e5c0b%3A0x6f5e5d36e189a0db!2z7KCc64Ko64yA6rSR7Jet7IucIOyngOyYgeyLnCDslYjrj5k!5e0!3m2!1sko!2skr!4v1698153912345"
            width="100%" height="450" style="border:0;"
            allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>

  - block: cta-card
    content:
      title: 함께 성장하는 AI 연구자
      text: 새로운 의료 AI 기술을 통해 세상을 조금 더 정확하게 이해하고자 합니다.
      button:
        text: 협업 제안하기
        url: 'mailto:tjens2322@gmail.com'
    design:
      card:
        css_class: 'bg-primary-300'
        css_style: ''
  - block: markdown
    id: fab
    content:
      title: ''
      text: |
        <!-- ✅ Floating Action Buttons -->
        <div class="fab-container">
          <a href="mailto:tjens2322@gmail.com" class="fab" title="E-mail">📧</a>
          <a href="https://github.com/tunho" class="fab" title="GitHub" target="_blank" rel="noopener">💻</a>
          <a href="https://linkedin.com/in/준호-이-05a711310" class="fab" title="LinkedIn" target="_blank" rel="noopener">💼</a>
          <a href="/resume.pdf" class="fab" title="Resume" target="_blank" rel="noopener">📄</a>
        </div>

        <style>
        .fab-container {
          position: fixed;
          bottom: 24px;
          right: 24px;
          display: flex;
          flex-direction: column;
          gap: 10px;
          z-index: 9999;
        }
        .fab {
          width: 52px;
          height: 52px;
          background: #2563eb;
          color: white;
          font-size: 24px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 8px rgba(0,0,0,0.2);
          transition: transform 0.2s ease, background 0.3s;
          text-decoration: none;
        }
        .fab:hover {
          transform: translateY(-4px);
          background: #1e40af;
        }
        </style>

---
