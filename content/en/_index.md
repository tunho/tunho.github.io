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
        url: '/en/blog/my-introduce'
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
            - 'Affiliation: Department of Computer & AI, Jeonbuk National University'
            - 'Major: Computer & Artificial Intelligence (Medical AI)'
            - 'Email: tjens2322@gmail.com'
            - 'GitHub: github.com/tunho'
            - 'About: An undergraduate student in the Department of Computer & AI at Jeonbuk National University, interested in AI-based medical imaging systems and integrated full-stack development.'

          # Filename of your photo in the `assets/media/` folder
          image: my-image.jpg

          # Link the button to your GitHub profile or any desired page
          button:
            text: Learn more
            url: '/en/blog/my-introduce'

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
      title: ''
      items:
        - title: AFF Diagnosis System
          text: 'A full-stack project that turns a deep-learning model for detecting Atypical Femoral Fractures (AFF) into a web-based diagnostic system usable by clinicians. I owned the system engineering that converts a lab-trained model into a deployable product.'
          feature_icon: check
          features:
            - 'Medical viewer: Vue 3 + TypeScript, DICOM parsing/rendering, Window/Level and mm-scale ruler measurement'
            - 'Inference server: FastAPI 3-stage pipeline (region classification → femur detection → AFF lesion detection)'
            - 'Deployment: AWS EC2, Express proxy, CORS and IP-whitelist access control'
          image: proj-aff.png
          button:
            text: View on GitHub
            url: 'https://github.com/tunho/aff-diagnosis-system'
        - title: Knee-Angle Residual Correction (Research)
          text: 'Research that corrects the systematic knee-angle error of monocular 3D pose estimation (MediaPipe) via residual learning, validated across 4 independent datasets (84 subjects) with LOSO and LODO protocols.'
          feature_icon: check
          features:
            - 'An ExtraTrees regressor learns the residual (ground-truth angle − predicted angle) as a correction'
            - 'Knee-angle MAE 13.74° → 8.47° (+38.4%), and +43.5% in the clinically important deep-flexion range (<110°)'
            - 'Consistent across an 80–130° threshold sweep (Δ<3%p) — robust, not cherry-picked'
          image: proj-squat.png
          button:
            text: View on GitHub
            url: 'https://github.com/tunho/squat-knee-residual-correction'
        - title: Thyroid Supplement CDSS
          text: 'A clinical decision-support service that judges the safety and evidence of supplement use for thyroid patients with a deterministic rule engine, using an LLM only to generate natural-language explanations after the decision.'
          feature_icon: check
          features:
            - 'Safety engine: 24 categories / 34 rules, with CRITICAL warnings blocked before the decision'
            - 'Reproducible, traceable 6-class deterministic decisions, with every decision written to a JSONL audit log'
            - 'Integrates PubMed and MFDS public data; Docker/Render deployment with GitHub Actions CI'
          image: proj-thyroid.png
          button:
            text: View on GitHub
            url: 'https://github.com/tunho/thyroid-supplement-cdss'

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
        folder: '/en/selfdev' # ✅ plural
    design:
      css_class: 'bg-gray-100 dark:bg-gray-900'

  - block: markdown
    id: values
    content:
      title: 'My Values'
      text: |
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          
          <!-- Card 1: Sincerity -->
          <a href="beliefs/sincerity" class="block bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center transition transform hover:-translate-y-2 hover:shadow-lg">
            <div class="text-4xl mb-3">💖</div>
            <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Sincerity</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              I put my heart into everything I do.  
              I value the process more than the result and take every project seriously, no matter how small.
            </p>
          </a>

          <!-- Card 2: Empathy -->
          <a href="beliefs/empathy" class="block bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center transition transform hover:-translate-y-2 hover:shadow-lg">
            <div class="text-4xl mb-3">🤝</div>
            <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Empathy</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              I value people before technology.  
              I believe great services are born from understanding and consideration.
            </p>
          </a>

          <!-- Card 3: Growth -->
          <a href="beliefs/growth" class="block bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 text-center transition transform hover:-translate-y-2 hover:shadow-lg">
            <div class="text-4xl mb-3">🌱</div>
            <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Growth</h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              I am not afraid of failure.  
              I keep learning and improving to become a better version of myself every day.
            </p>
          </a>

        </div>
    design:
      css_class: 'bg-gray-100 dark:bg-gray-900 py-12'

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
