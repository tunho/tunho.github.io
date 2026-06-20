<!-- Header -->
<h1 align="center">Junho Lee (이준호)</h1>
<p align="center">
  Undergraduate Researcher @ Jeonbuk National University · MacsLAB (Medical AI Lab)
  <br/>
  <a href="https://tunho.github.io">Portfolio</a> •
  <a href="https://github.com/tunho">GitHub</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Track%201-Medical%20Computer%20Vision-1f6feb" />
  <img src="https://img.shields.io/badge/Track%202-LLM%20%7C%20RAG%20%7C%20Agentic-8957e5" />
  <img src="https://img.shields.io/badge/Foundation-FastAPI%20%7C%20Vue3%20%7C%20PyTorch%20%7C%20AWS-2ea043" />
</p>

---

## 👋 About

전북대학교 컴퓨터인공지능학부 학부연구생(MacsLAB). **두 축의 AI 연구**를 합니다.

- **① 의료 컴퓨터비전 (Medical CV)** — DICOM 의료영상에서 병변 검출 · 자세추정
- **② LLM · RAG / Agentic** — 임상 근거를 검색·판정하고 설명하는 의사결정 지원(CDSS)

여기에 **풀스택 개발(Vue 3 · FastAPI · AWS)** 을 더해, 연구를 실제로 동작하는 제품으로 잇습니다.

---

## 🔬 Selected Projects

### ① Medical Computer Vision
- **[AFF Diagnosis System](https://github.com/tunho/aff-diagnosis-system)** — 비전형 대퇴골골절(AFF) 검출 모델을 임상용 웹 진단 시스템으로 구현. Vue3+TS DICOM 뷰어 · FastAPI 3단계 추론 서빙 · AWS 배포 *(모델 학습은 연구실 제공, 시스템 엔지니어링 담당)*
- **[Knee-Angle Residual Correction](https://github.com/tunho/squat-knee-residual-correction)** — 단안 3D 자세추정 무릎각 오차의 잔차 보정. 4개 독립 데이터셋 LOSO/LODO 검증, MAE 13.74° → 8.47° (+38.4%)

### ② LLM · RAG / Agentic
- **[Thyroid Supplement CDSS](https://github.com/tunho/thyroid-supplement-cdss)** — 결정론적 규칙 엔진 판정 + LLM 설명. PubMed·식약처 공공데이터 연동, Docker/Render 배포 + GitHub Actions CI
- **[Healthcare RAG](https://github.com/tunho/healthcare-rag-system)** — RAPTOR(재귀 트리 기반 검색) 구조를 의료 도메인 문서에 적용한 근거 검색·요약 실험
- **[Agentic CGR](https://github.com/tunho/agentic-cgr)** — 신뢰도 게이팅으로 reflection 예산을 난이도에 맞춰 배분하는 적응형 self-correction 에이전트 패턴 제안·구현

---

## 🧰 Tech Stack

**Medical CV** &nbsp; PyTorch · OpenCV · DICOM · Detection / Pose Estimation
**LLM / RAG** &nbsp; RAG (RAPTOR) · GPT-4o-mini · PubMed E-utilities · Agentic patterns
**Full-Stack** &nbsp; FastAPI · Vue 3 · TypeScript · Pinia · Firebase
**Infra** &nbsp; AWS EC2 · Docker · Render · GitHub Actions (CI)

---

## 📈 GitHub Stats
<p align="left">
  <img src="https://github-readme-stats.vercel.app/api?username=tunho&show_icons=true&hide_rank=false" height="150" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=tunho&layout=compact" height="150" />
</p>

---

## 📫 Contact
- Portfolio: https://tunho.github.io
- Email: tjens2322@gmail.com

<p align="right"><i>Medical Computer Vision × LLM/RAG, connected by full-stack engineering.</i></p>
