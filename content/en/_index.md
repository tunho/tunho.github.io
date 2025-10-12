---
date: 2023-10-24
type: landing
title: 'JBNU Junho Lee – Portfolio (Department of Computer & AI, MacsLAB)'
slug: 'jbnu-junho-lee' # URL: /ko/jbnu-junho-lee/
keywords:
  [
    'JBNU',
    'Jeonbuk National University',
    'Department of Computer & AI',
    'Junho Lee',
    'Developer',
  ]
header:
  image: 'my-image.png' # <-- change to a PNG filename instead of SVG
draft: false
design:
  # Default section spacing
  spacing: '6rem'

sections:
  - block: hero
    content:
      title: '<span style="white-space: nowrap;">Hello, I’m Junho Lee.</span>'
      primary_action:
        text: 'Learn more'
        url: /blog/my-introduce
        icon: user
      secondary_action:
        text: 'View Resume'
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
        - statistic: 'Backend'
          description: |
            FastAPI, Flask, Express
        - statistic: 'Frontend'
          description: |
            Vue, React, React Native, Flutter
        - statistic: 'AI'
          description: |
            PyTorch, TensorFlow, scikit-learn
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
        # --- 👇 Keep a single item like this ---
        - title: 'Hello, I’m Junho Lee 👋'
          text: ''

          feature_icon: check
          features:
            - 'Affiliation: Jeonbuk National University'
            - 'Major: Computer & Artificial Intelligence'
            - 'Phone: 010-4825-3355'
            - 'Email: tjens2322@naver.com'
            - 'Instagram: jjjjjjj_111'
            - 'Age: 23 (born in 2003)'

          # Filename of your photo in the `assets/media/` folder
          image: my-image.jpg

          # Link the button to your GitHub profile or any desired page
          button:
            text: Learn more
            url: '/blog/my-introduce'

    design:
      # You can add section background color and other design options here.
      css_class: 'bg-gray-100 dark:bg-gray-900'

  - block: features
    id: features
    content:
      title: Core Competencies
      text: I’m a developer and researcher who creates meaningful value with AI technology. 🤖
      items:
        - name: AI Research
          icon: cpu-chip
          description: I design and optimize deep learning models with a focus on medical image analysis and diagnostic systems.
        - name: Full-Stack Development
          icon: computer-desktop
          description: I build end-to-end systems that bring AI models into real services using FastAPI and Vue.
        - name: Data Analysis
          icon: chart-bar
          description: I improve model performance and reliability through diverse data preprocessing and visualization techniques.
        - name: Problem Solving
          icon: light-bulb
          description: I analyze complex problems systematically and derive solutions through experimentation and iteration.
        - name: Research Collaboration
          icon: users
          description: I collaborate in lab and team project environments to deliver efficient and accurate outcomes.
        - name: Continuous Learning
          icon: book-open
          description: I explore the latest AI papers and tech trends and apply new ideas to projects.

  - block: markdown
    id: project-title
    content:
      title: Projects
      text: ''
    design:
      css_class: 'text-center pb-0'

  - block: cta-image-paragraph
    id: project
    content:
      title: Projects
      items:
        - title: DICOM Viewer
          text: ''
          feature_icon: check
          features:
            - 'Parses DICOM files and displays images.'
            - 'Manipulates images to adjust size and brightness/contrast.'
            - 'Sends files to the backend and returns fracture regions.'
          # Upload image to `assets/media/` and reference the filename here
          image: dicom.jpg
          button:
            text: Learn more
            url: /project/dicom
        - title: Wardrobe Organizer & Outfit Recommendation Web App
          text: ''
          feature_icon: check
          features:
            - 'Register and organize currently owned clothes.'
            - 'Recommend outfits considering preferred style, weather, and occasion.'
            - 'Provide a community feature for sharing daily looks.'
          image: cody.png
          button:
            text: Learn more
            url: /project/cody
        - title: Pomodoro Study Timer App
          text: ''
          feature_icon: check
          features:
            - 'Set desired times and use the timer function.'
            - 'Change the displayed time color after a specific duration.'
            - 'Play an alarm when time is up.'
          image: tomato.png
          button:
            text: Learn more
            url: /project/tomato

    design:
      # Section background color (CSS class)
      css_class: 'bg-gray-100 dark:bg-gray-900'

  - block: features
    id: experience
    content:
      title: 'Experience'
      text: 'A journey of creating value through data and code.'
      items:
        - name: 'Undergraduate Researcher in Medical AI'
          icon: beaker
          description: |
            JBNU MACS Lab, Department of Biomedical Engineering (Jul 2025 – Present)  
            • Implemented an MNIST handwritten digit prediction model  
            • Read and presented deep learning papers  
            • Deployed web services for medical imaging AI projects
        - name: '**Graduate School (Planned)'
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
      title: Interests
      text: ''
    design:
      css_class: 'text-center pb-0'

  - block: markdown
    id: slider
    content:
      title: ''
      text: |
        <!-- ✅ Image Slider Start -->
        <div class="slider-container">
          <div class="slider">
            <div class="slide">
              <img src="stock.png" alt="Stock Investing">
              <div class="caption">
                <h3>💹 Stock Investing</h3>
                <p>Data-driven market analysis and value-oriented investing</p>
              </div>
            </div>
            <div class="slide">
              <img src="design.png" alt="Design & UX">
              <div class="caption">
                <h3>🎨 Design & UX</h3>
                <p>Designing simple, intuitive user experiences</p>
              </div>
            </div>
            <div class="slide">
              <img src="music.jpg" alt="Music & Sound">
              <div class="caption">
                <h3>🎵 Music & Sound</h3>
                <p>Analyzing musical immersion and emotional flow</p>
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
        <!-- ✅ Image Slider End -->

  - block: collection
    id: self-development
    content:
      title: 'Self-Development & Growth Routines'
      text: 'I grow through consistent routines.'
      view: card
      count: 3
      filters:
        folder: 'en/selfdev' # ✅ plural
    design:
      css_class: 'bg-gray-100 dark:bg-gray-900'

  - block: markdown
    id: overlay-demo
    content:
      text: |
        <!-- 🔹 Title overlay (dark-mode support + transparency effect) -->
        <div class="relative inline-block group mb-8">
          <h2 class="relative z-20 text-3xl font-bold text-center mb-6 
           text-gray-900 dark:text-white 
           transition-all duration-300 
           hover:scale-105 hover:text-white 
           before:absolute before:inset-0 before:rounded-lg 
           before:bg-black/50 before:opacity-0 hover:before:opacity-60 
           before:transition-opacity before:duration-300 overflow-hidden">
          <span class="relative z-10">Contact & Visit</span>
            <span class="relative z-10 block text-base font-normal mt-2 text-gray-600 dark:text-gray-300">
          (Apply a transparency layer over the image; on hover over “Contact & Visit,” show the overlay — item 14)
        </span>
        </h2>
          <div class="absolute inset-0 
                      bg-black/50 
                      rounded-xl z-10 
                      opacity-0 group-hover:opacity-100 
                      transition-opacity duration-300"></div>
        </div>

        <!-- 🔹 Image overlay (transparency + text overlay example) -->
        <div class="relative group w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-lg">
          <img src="contact.png" alt="Sample Image" 
              class="w-full transition-transform duration-300 group-hover:scale-105" />
          <!-- 🩶 Transparency layer -->
          <div class="absolute inset-0 
                      bg-black/50 
                      opacity-100 
                      transition-opacity duration-300"></div>
          <!-- ✍️ Text overlay -->
          <div class="absolute inset-0 flex items-center justify-center 
                      text-white font-semibold text-2xl text-center px-6">
            
          </div>
        </div>

  - block: markdown
    id: location
    content:
      title: 'Getting Here'
      text: |

        We are located at JBNU College of Engineering, Building 7.  
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
      title: An AI Researcher Growing Together
      text: I aim to help the world understand more precisely through new medical AI technologies.
      button:
        text: Propose Collaboration
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
        <!-- ✅ Floating Action Buttons (6 or more) -->
        <div class="fab-container">
          <a href="mailto:tjens2322@gmail.com" class="fab" title="E-mail">📧</a>
          <a href="https://github.com/tunho" class="fab" title="GitHub">💻</a>
          <a href="https://x.com/BuildLore" class="fab" title="X">𝕏</a>
          <a href="https://linkedin.com/in/준호-이-05a711310" class="fab" title="LinkedIn">💼</a>
          <a href="https://www.instagram.com/" class="fab" title="Instagram">📷</a>
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
      title: 'My Goals (Source: Unsplash)'
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
      title: '🎨 Hover Test Button (Item 30) — Apply to other buttons as well'
      text: |
        <div class="text-center my-8">
          <button class="btn-test">(Originally semi-transparent/black or no change on hover → change to red)</button>
        </div>

        <p class="text-center text-sm text-gray-500 dark:text-gray-400 mt-12">
          &lt;Change the base theme colors for buttons or links to <span class="text-primary-600">black and sky blue (Item 32)</span>&gt;
        </p>

        <p class="text-center text-sm text-gray-500 dark:text-gray-400 mt-12">
          &lt;Apply across additional info and self-development/project pages: <span class="text-primary-600">ensure text-justify is used in at least five places on the site (Post-release item 14)</span>&gt;
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
  &lt;Base theme colors for buttons or links: <span style="color:#38bdf8;">Purple → Sky Blue</span>&gt;
</p>
<style>
/* ===== Inline slider effect ===== */
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
