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
        - statistic: '백엔드'
          description: |
            Fast API, Flask, express
        - statistic: '프론트'
          description: |
            vue, react, react-native, Flutter
        - statistic: 'AI'
          description: |
            Pytorch, Tensorflow, Sklearn
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
          text: ''

          feature_icon: check
          features:
            - '소속: 전북대학교 컴퓨터인공지능학부'
            - '전공: 컴퓨터인공지능 (의료 AI 연구)'
            - '이메일: tjens2322@gmail.com'
            - 'GitHub: github.com/tunho'
            - '소개: 전북대학교 컴퓨터인공지능학부 학부생으로, AI 기반 의료 영상 시스템과 통합 풀스택 개발에 관심이 있습니다.'

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
      text: 인공지능 기술을 기반으로 의미 있는 가치를 만드는 개발자이자 연구자입니다. 🤖
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
            - '의료영상 뷰어: Vue 3 + TypeScript, DICOM 파싱·렌더링, Window/Level·mm 단위 룰러 측정'
            - 'AI 추론 서버: FastAPI 3단계 파이프라인(부위 분류 → 대퇴골 검출 → AFF 병변 검출) 통합·서빙'
            - '배포: AWS EC2, Express 프록시, CORS·IP 화이트리스트 접근 제어'
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
            전북대학교 의공학과 MACS 연구실 (2025.07 - 현재)  
            • MNIST 손글씨 숫자 예측 모델 구현  
            • 딥러닝 관련 논문 리딩 및 발표  
            • 의료 영상 AI 프로젝트용 웹 서비스 배포 수행
    design:
      spacing:
        padding: ['6rem', 0, 0, 0]
  - block: markdown
    id: interest
    content:
      title: 관심사
      text: ''
    design:
      css_class: 'text-center pb-0'

  - block: markdown
    id: slider
    content:
      title: ''
      text: |
        <!-- ✅ 이미지 슬라이더 시작 -->
        <div class="slider-container">
          <div class="slider">
            <div class="slide">
              <img src="stock.png" alt="주식 투자">
              <div class="caption">
                <h3>💹 주식 투자</h3>
                <p>데이터 기반의 시장 분석과 가치 중심 투자</p>
              </div>
            </div>
            <div class="slide">
              <img src="design.png" alt="Design & UX">
              <div class="caption">
                <h3>🎨 Design & UX</h3>
                <p>심플하고 직관적인 사용자 경험 설계</p>
              </div>
            </div>
            <div class="slide">
              <img src="music.jpg" alt="Music & Sound">
              <div class="caption">
                <h3>🎵 Music & Sound</h3>
                <p>음악적 몰입과 감정의 흐름을 분석</p>
              </div>
            </div>
          </div>
          <button class="prev">❮</button>
          <button class="next">❯</button>
        </div>

        <style>
        .slider-container {
          position: relative;
          width: 100%;
          max-width: 900px;
          margin: 40px auto;
          overflow: hidden;
          border-radius: 12px;
          box-shadow: 0 0 15px rgba(0,0,0,0.2);
        }
        .slider {
          display: flex;
          transition: transform 0.6s ease;
        }
        .slide {
          position: relative;
          flex-shrink: 0;
          width: 100%;
        }
        .slide img {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border-radius: 12px;
        }
        .caption {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          background: rgba(0, 0, 0, 0.45);
          color: white;
          text-align: center;
          padding: 20px 10px;
        }
        .caption h3 {
          margin: 0;
          font-size: 1.4rem;
          font-weight: 600;
        }
        .caption p {
          margin: 4px 0 0;
          font-size: 1rem;
          opacity: 0.9;
        }
        button.prev, button.next {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: rgba(0,0,0,0.5);
          color: white;
          border: none;
          font-size: 2rem;
          padding: 0 0.6rem;
          cursor: pointer;
          border-radius: 8px;
          z-index: 5;
        }
        button.prev:hover, button.next:hover {
          background: rgba(0,0,0,0.7);
        }
        button.prev { left: 10px; }
        button.next { right: 10px; }

        @media (max-width: 768px) {
          .slide img { height: 300px; }
          .caption h3 { font-size: 1.1rem; }
          .caption p { font-size: 0.9rem; }
        }
        </style>

        <script>
        let index = 0;
        const slider = document.currentScript.parentElement.querySelector('.slider');
        const slides = slider.querySelectorAll('.slide');
        const total = slides.length;
        const prevBtn = slider.parentElement.querySelector('.prev');
        const nextBtn = slider.parentElement.querySelector('.next');

        function moveSlide(step) {
          index = (index + step + total) % total;
          slider.style.transform = `translateX(-${index * 100}%)`;
        }

        prevBtn.addEventListener('click', () => moveSlide(-1));
        nextBtn.addEventListener('click', () => moveSlide(1));
        setInterval(() => moveSlide(1), 4000);
        </script>
        <!-- ✅ 이미지 슬라이더 끝 -->

  - block: collection
    id: self-development
    content:
      title: '자기개발 및 성장 루틴'
      text: '꾸준한 루틴으로 스스로 성장합니다.'
      view: card
      count: 3
      filters:
        folder: 'ko/selfdev' # ✅ 복수형
    design:
      css_class: 'bg-gray-100 dark:bg-gray-900'

  - block: markdown
    id: values
    content:
      title: '나의 가치관'
      text: |
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          
          <!-- 카드 1: 진정성 -->
          <a href="/beliefs/sincerity" class="block bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center transition transform hover:-translate-y-2 hover:shadow-lg">
            <div class="text-4xl mb-3">💖</div>
            <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">진정성</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              모든 일에 진심을 담습니다. 결과보다 과정을 소중히 여기며,
              작은 프로젝트라도 책임감을 가지고 꾸준히 임합니다.
            </p>
          </a>

          <!-- 카드 2: 공감 -->
          <a href="/beliefs/empathy" class="block bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center transition transform hover:-translate-y-2 hover:shadow-lg">
            <div class="text-4xl mb-3">🤝</div>
            <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">공감</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              기술보다 사람을 먼저 생각합니다.  
              이해와 배려에서 좋은 서비스가 만들어진다고 믿습니다.
            </p>
          </a>

          <!-- 카드 3: 성장 -->
          <a href="/beliefs/growth" class="block bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center transition transform hover:-translate-y-2 hover:shadow-lg">
            <div class="text-4xl mb-3">🌱</div>
            <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">성장</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              실패를 두려워하지 않고, 오늘보다 더 나은 내가 되기 위해 꾸준히 배우고 나아갑니다.
            </p>
          </a>

        </div>
    design:
      css_class: 'bg-gray-100 dark:bg-gray-900 py-12'

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
          <a href="resume.pdf" class="fab" title="Resume" target="_blank" rel="noopener">📄</a>
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
