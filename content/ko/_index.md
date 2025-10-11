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
      title: '웹사이트 업데이트 테스트 중입니다.'
      primary_action:
        text: '자세히 보기'
        url: /jbnu-junho-lee
        icon: user
      secondary_action:
        text: '이력서 보기'
        url: '/resume.pdf'
        icon: document-text

    design:
      #   spacing:
      #     padding: [0, 0, 0, 0]
      #     margin: [0, 0, 0, 0]
      # For full-screen, add `min-h-screen` below
      css_class: 'dark'
      background:
        color: 'navy'
        image:
          # Add your image background to `assets/media/`.
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
            url: '/jbnu-junho-lee'

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
    id: project-title
    content:
      title: 관심사
      text: ''
    design:
      css_class: 'text-center pb-0'
  - block: cta-image-paragraph
    id: interests
    content:
      title: '관심사 및 영감'
      text: '다양한 분야에서 아이디어와 기술을 탐구합니다.'
      items:
        - title: '주식 투자'
          text: '데이터 기반의 시장 분석과 가치 중심 투자'
          image: stock.png
        - title: 'Design & UX'
          text: '심플하고 직관적인 사용자 경험 설계'
          image: design.png
        - title: 'Music & Sound'
          text: '음악적 몰입과 감정의 흐름을 분석'
          image: music.jpg
    design:
      css_class: 'bg-gray-100 dark:bg-gray-900'

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
---
