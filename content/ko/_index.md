---
date: 2023-10-24
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
            - '소속: 전북대학교'
            - '전공: 컴퓨터인공지능'
            - '연락처: 010-4825-3355'
            - '이메일: tjens2322@naver.com'
            - '인스타그램: jjjjjjj_111'
            - '나이 : 23세(03년생)'

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
      title: 프로젝트
      items:
        - title: Dicom 뷰어
          text: ''
          feature_icon: check
          features:
            - 'Dicom 파일을 해석하여 이미지로 보여준다.'
            - '이미지를 조작하여 크기와 밝기/대비를 조절한다.'
            - '백엔드에 파일을 보내서, 골절 부위를 반환한다.'
          # Upload image to `assets/media/` and reference the filename here
          image: dicom.jpg
          button:
            text: 자세히 보기
            url: /project/dicom
        - title: 옷 정리 및 코디 추천 웹앱
          text: ''
          feature_icon: check
          features:
            - '현재 소유 중인 옷을 등록 및 정리한다.'
            - '선호 스타일·날씨·장소를 고려해 코디를 추천한다.'
            - '사용자 일상을 공유하는 커뮤니티 기능을 제공한다.'
          image: cody.png
          button:
            text: 자세히 보기
            url: /project/cody
        - title: 뽀모도로 타이머 공부 앱
          text: ''
          feature_icon: check
          features:
            - '원하는 시간을 설정하여 타이머 기능을 한다.'
            - '특정 시간이 지나면, 표시된 시간의 색이 변한다.'
            - '시간이 끝나면 알람이 울린다.'
          image: tomato.png
          button:
            text: 자세히 보기
            url: /project/tomato

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
        - name: '**대학원(예정)'
          icon: computer-desktop
          description: |
            ??

        - name: '??'
          icon: computer-desktop
          description: |
            ??

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
    id: overlay-demo
    content:
      text: |
        <!-- 🔹 제목 오버레이 (다크모드 대응 + 투명도 효과) -->
        <div class="relative inline-block group mb-8">
          <h2 class="relative z-20 text-3xl font-bold text-center mb-6 
           text-gray-900 dark:text-white 
           transition-all duration-300 
           hover:scale-105 hover:text-white 
           before:absolute before:inset-0 before:rounded-lg 
           before:bg-black/50 before:opacity-0 hover:before:opacity-60 
           before:transition-opacity before:duration-300 overflow-hidden">
          <span class="relative z-10">연락 및 방문하기</span>
            <span class="relative z-10 block text-base font-normal mt-2 text-gray-600 dark:text-gray-300">
          (이미지 위에 투명도 레이어, 연락 및 방문하기 텍스트에 hover 시 오버레이를 적용(14번))
        </span>
        </h2>
          <div class="absolute inset-0 
                      bg-black/50 
                      rounded-xl z-10 
                      opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300"></div>
        </div>

        <!-- 🔹 이미지 오버레이 (투명도 + 텍스트 오버레이 적용 예시) -->
        <div class="relative group w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <img src="contact.png" alt="예시 이미지" 
              class="w-full transition-transform duration-300 group-hover:scale-105" />
          <!-- 🩶 투명도 레이어 -->
          <div class="absolute inset-0 
                      bg-black/50 
                      opacity-100 
                      transition-opacity duration-300"></div>
          <!-- ✍️ 텍스트 오버레이 -->
          <div class="absolute inset-0 flex items-center justify-center 
                      text-white font-semibold text-2xl text-center px-6">
            
          </div>
        </div>

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
        url: 'mailto:tjens2322@naver.com'
    design:
      card:
        css_class: 'bg-primary-300'
        css_style: ''
  - block: markdown
    id: fab
    content:
      title: ''
      text: |
          <!-- ✅ Floating Action Buttons (6개 이상) -->
          <div class="fab-container">
            <a href="mailto:tjens2322@gmail.com" class="fab" title="E-mail">📧</a>
            <a href="https://github.com/tunho" class="fab" title="GitHub">💻</a>
            <a href="#" class="fab" title="X"
               onclick="alert('X는 아직 준비 중입니다... (계정 없음)'); return false;">𝕏</a>
            <a href="https://linkedin.com/in/준호-이-05a711310" class="fab" title="LinkedIn">💼</a>
            <a href="#" class="fab" title="Instagram"
               onclick="alert('Instagram은 아직 준비 중입니다... (계정 없음)'); return false;">📷</a>
            <a href="resume.pdf" class="fab" title="Resume">📄</a>
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

  - block: markdown
    id: gallery
    content:
      title: '나의 목표 (출처: unsplash)'
      text: |
        <div class="grid grid-cols-3 gap-4">
          <img src="https://plus.unsplash.com/premium_photo-1681910241563-a3bd7a4c2ec9?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687">
          <img src="https://images.unsplash.com/photo-1550713450-94c9b4fc9f25?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1974" alt="marry" class="rounded-lg shadow-md">
          <img src="https://plus.unsplash.com/premium_photo-1681469490618-c24cc20bef1c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=785" alt="money" class="rounded-lg shadow-md">
        </div>
  - block: markdown
    id: theme-change-note
    content:
      title: ''
      text: |

  - block: markdown
    id: hover-test
    content:
      title: '🎨 Hover 테스트 버튼(30번) 다른 버튼들에도 적용'
      text: |
        <div class="text-center my-8">
          <button class="btn-test">(원래는 hover시 반투명,검정색 혹은 변화없음 -> red로 변경)</button>
        </div>

        <p class="text-center text-sm text-gray-500 dark:text-gray-400 mt-12">
          &lt;버튼 혹은 link 등 기본 테마 색상 <span class="text-primary-600">검정과 하늘색으로 변경(32번)</span>&gt;
        </p>

        <p class="text-center text-sm text-gray-500 dark:text-gray-400 mt-12">
          &lt;부가 정보와 프로젝트 자기개발 페이지들에<span class="text-primary-600"> 홈페이지에서 텍스트 양쪽 정렬이 최소 5군데 이상 적용되었는가 (후공개 14번) 적용</span>&gt;
        </p>



        <style>
        .btn-test {
          background-color: #2563eb;
          color: white;
          border: none;
          padding: 16px 30px;
          font-size: 1.1rem;
          border-radius: 12px;
          cursor: pointer;
          transition: background-color 0.3s ease, transform 0.2s ease;
        }
---

<hr class="mt-12 mb-6 opacity-30">

<p class="text-center text-sm text-gray-500 dark:text-gray-400">
  &lt;버튼 혹은 link 등 기본 테마 색상 <span style="color:#38bdf8;">보라색 → 하늘색 변경</span>&gt;
</p>
<style>
/* ===== 인라인 슬라이더 효과 ===== */
.slider-section .wc-block-content {
  display: flex;
  overflow: hidden;
  position: relative;
}

.slider-section .wc-block-content > div {
flex: 0 0 100%;
transition: transform 1s ease;
animation: slide 12s infinite;
}

@keyframes slide {
0% { transform: translateX(0); }
33% { transform: translateX(-100%); }
66% { transform: translateX(-200%); }
100% { transform: translateX(0); }
}
</style>
