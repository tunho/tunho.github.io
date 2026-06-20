---
title: Junho Lee
summary: Undergraduate Student at Jeonbuk National University · Researcher at MacsLAB (Medical AI Laboratory)
date: 2025-10-05
---

<div class="text-justify">

Hello! I’m **Junho Lee**, an undergraduate researcher in the **Department of Computer & Artificial Intelligence** at **Jeonbuk National University (JBNU)**.  
At **MacsLAB (Medical AI Laboratory)** I pursue **two research tracks**:

- **① Medical Computer Vision (Medical CV)** — detecting lesions and analyzing pose from DICOM medical images
- **② LLM · RAG** — clinical decision support that retrieves and judges evidence and explains it in natural language

On top of these, I bring **FastAPI + Vue 3 (TypeScript)** full-stack skills to connect research models to real clinical use as **working products**.  
I design and implement the entire backend–frontend–inference-server pipeline myself, aiming not just for better metrics but for **systems people actually use**.

---

## 🔬 Research Areas

### ① Medical Computer Vision

- **AFF Diagnosis System — Medical Imaging AI · Full-stack:** Turned a lab-trained **Atypical Femoral Fracture (AFF)** detection model into a clinically usable web diagnostic system. Owned the **system engineering** end-to-end — Vue3 + TypeScript DICOM viewer (Window/Level, mm-scale measurement), FastAPI 3-stage inference serving, and AWS deployment *(model training provided by the lab)*
- **Knee-Angle Residual Correction — Pose Estimation:** Corrects the systematic knee-angle error of monocular 3D pose estimation via residual learning. Validated across 4 independent datasets (84 subjects) with LOSO/LODO; MAE 13.74° → 8.47° (+38.4%)

### ② LLM · RAG / Agentic

- **Thyroid Supplement CDSS — Clinical Decision Support:** Judges safety and evidence with a deterministic rule engine, using an LLM only for explanation (reproducible, auditable). Integrates PubMed and MFDS public data; Docker/Render deployment with GitHub Actions CI
- **Healthcare RAG — Retrieval-Augmented Generation:** Applies a RAPTOR (recursive tree-based retrieval) approach to medical-domain documents for evidence retrieval and summarization
- **Agentic CGR — Agent Self-Correction Pattern:** Proposes and implements a new agent design pattern that adaptively allocates reflection budget to problem difficulty via confidence gating

> Early work: implemented an MNIST handwritten-digit (0–9) MLP with a visualization dashboard (early undergraduate-researcher task)

---

## 🧭 Future Goals

- Improve the **explainability** and reliability of medical-imaging CV models
- Strengthen the evidence accuracy and safety of **LLM · RAG-based clinical decision support**
- Commercialize both research tracks into **working systems** usable in clinical practice

---

## 💡 References & Links

> [!NOTE]
> You can explore more details about my projects and research results through the links below.

- [View Projects](/#project)
- [GitHub](https://github.com/tunho) · [LinkedIn](https://linkedin.com/in/junho-lee-05a711310)

---

## 🗺️ Research Topic Mindmap

```markmap {height="250px"}
- Junho Lee
  - Medical Computer Vision
    - AFF Diagnosis System
      - DICOM Viewer (Vue3 + TS)
      - FastAPI Inference + AWS
    - Knee-Angle Residual Correction
      - Monocular Pose Estimation
      - LOSO / LODO Validation
  - LLM / RAG / Agentic
    - Thyroid Supplement CDSS
      - Rule Engine + LLM Explanation
      - PubMed Evidence
    - Healthcare RAG (RAPTOR)
    - Agentic CGR (Confidence-Gated Reflection)
  - Foundation
    - Full-Stack (Vue · FastAPI · AWS)

```

</div>
