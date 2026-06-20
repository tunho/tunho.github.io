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
        url: '/resume-en.pdf'
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
            OOD safety research · accepted
        - statistic: 'Medical CV'
          description: |
            Medical-image detection · pose · OOD safety
        - statistic: 'LLM · RAG'
          description: |
            Clinical decision support · retrieval · Agentic
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
          text: 'An undergraduate researcher studying trustworthy medical AI along two tracks — Medical Computer Vision (CV) and LLM · RAG.'

          feature_icon: check
          features:
            - '🏅 Accepted at KIISE 2026 — OOD (out-of-distribution) safety research'
            - 'Affiliation: Dept. of Computer & AI, JBNU · Undergraduate Researcher at MacsLAB (Medical AI Lab)'
            - 'Medical Computer Vision (CV): medical-image detection & pose estimation — OOD safety, AFF diagnosis, knee-angle correction'
            - 'LLM · RAG: clinical decision support & evidence retrieval — Thyroid CDSS, Healthcare RAG, Agentic CGR'
            - 'Email: tjens2322@gmail.com · GitHub: github.com/tunho'

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
      text: I’m a researcher and developer exploring trustworthy medical AI systems. 🤖
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
        - title: Squat OOD Safety Evaluation
          text: 'A safety-evaluation study for single-RGB-camera squat analysis that estimates predictive uncertainty with MC-Dropout (BCNN1D) to reject out-of-distribution (OOD) motions. I led this as **first author and presenter**; accepted at KIISE 2026. [📄 View the KIISE 2026 poster](/ood-poster-kiise2026.pdf)'
          feature_icon: check
          features:
            - '🏅 First author · Accepted at KIISE 2026 (Advisor: Prof. Kyungsu Lee)'
            - 'MC-Dropout (BCNN1D) T-sample inference estimates epistemic uncertainty → rejects OOD motions'
            - 'Key finding: ID accuracy ≠ OOD detection — top accuracy ConvNeXt1D (90.1%) vs top OOD AUROC BCNN1D (74.8/75.1%)'
            - 'Compared against 4 deterministic models (ResNet/ConvNeXt/Transformer/Mamba 1D), 5-fold (ID 712 + OOD 298)'
          image: proj-ood.png
          button:
            text: View on GitHub
            url: 'https://github.com/tunho/kiise_paper_2026'
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
          text: 'Research that corrects the systematic knee-angle error of monocular 3D pose estimation (MediaPipe) via residual learning, validated across 4 independent datasets (84 subjects) with LOSO and LODO protocols. In preparation for submission to IEEE JBHI.'
          feature_icon: check
          features:
            - '📝 In preparation for IEEE JBHI (J. Biomedical and Health Informatics)'
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
            JBNU MacsLAB · Medical AI Laboratory (Jul 2025 – Present)  
            • OOD (out-of-distribution) safety research — accepted at KIISE 2026  
            • Knee-angle residual-correction research — in preparation for IEEE JBHI  
            • Built AFF diagnosis web system · read and presented deep-learning papers
    design:
      spacing:
        padding: ['6rem', 0, 0, 0]

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
          <a href="/resume-en.pdf" class="fab" title="Resume" target="_blank" rel="noopener">📄</a>
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
