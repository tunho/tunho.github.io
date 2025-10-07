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
      title: '안녕하세요, 이준호입니다.'
      primary_action:
        text: '소개 페이지'
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
      title: Features
      text: Build your site with blocks 🧱
      items:
        - name: Optimized SEO
          icon: magnifying-glass
          description: Automatic sitemaps, RSS feeds, and rich metadata take the pain out of SEO and syndication.
        - name: Fast
          icon: bolt
          description: Super fast page load with Tailwind CSS and super fast site building with Hugo.
        - name: Easy
          icon: sparkles
          description: One-click deployment to GitHub Pages. Have your new website live within 5 minutes!
        - name: No-Code
          icon: code-bracket
          description: Edit and design your site just using rich text (Markdown) and configurable YAML parameters.
        - name: Highly Rated
          icon: star
          description: Rated 5-stars by the community.
        - name: Swappable Blocks
          icon: rectangle-group
          description: Build your pages with blocks - no coding required!
  - block: cta-image-paragraph
    id: project
    content:
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
            text: Get Started
            url: https://hugoblox.com/templates/
        - title: 옷 정리 및 코디 추천 웹앱
          text: ''
          feature_icon: check
          features:
            - '현재 소유 중인 옷을 등록 및 정리한다.'
            - '선호 스타일·날씨·장소를 고려해 코디를 추천한다.'
            - '사용자 일상을 공유하는 커뮤니티 기능을 제공한다.'
          image: cody.png
          button:
            text: Join Discord
            url: https://discord.gg/z8wNYzb
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
            url: https://discord.gg/z8wNYzb
    design:
    # Section background color (CSS class)
      css_class: 'bg-gray-100 dark:bg-gray-900'

    design:
      # Section background color (CSS class)
      css_class: 'bg-gray-100 dark:bg-gray-900'
  - block: testimonials
    content:
      title: ''
      text: ''
      items:
        - name: 'Hugo Smith'
          role: 'Marketing Executive at X'
          # Upload image to `assets/media/` and reference the filename here
          image: 'testimonial-1.jpg'
          text: 'Awesome, so easy to use and saved me so much work with the swappable pre-designed sections!'
    design:
      spacing:
        # Reduce bottom spacing so the testimonial appears vertically centered between sections
        padding: ['6rem', 0, 0, 0]
  - block: cta-card
    content:
      title: Build your future-proof website
      text: As easy as 1, 2, 3!
      button:
        text: Get Started
        url: https://hugoblox.com/templates/
    design:
      card:
        # Card background color (CSS class)
        css_class: 'bg-primary-300'
        css_style: ''
---
