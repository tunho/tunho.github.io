---
title: 이준호 (Junho Lee)
summary: 전북대학교 컴퓨터인공지능학부 학부생 · MacsLAB 의료 AI 연구실 연구원
date: 2025-10-05
---

<div class="text-justify">

안녕하세요. 전북대학교 **컴퓨터인공지능학부** 학부연구생 **이준호(Junho Lee)** 입니다.  
MacsLAB(의료 AI 연구실)에서 **두 축의 AI 연구**를 합니다.

- **① 의료 컴퓨터비전(Medical CV)** — DICOM 의료영상에서 병변을 검출하고 자세를 분석하는 연구
- **② LLM · RAG** — 임상 근거를 검색·판정하고 자연어로 설명하는 의사결정 지원 연구

여기에 **FastAPI + Vue 3(TypeScript)** 풀스택 개발 역량을 더해, 연구 모델을 실제 임상에서 쓸 수 있는 **동작하는 제품**으로 잇습니다.  
백엔드–프론트엔드–추론 서버 파이프라인 전체를 직접 설계·구현하며, 단순한 성능 향상을 넘어 **실제로 쓰이는 시스템**을 만드는 것을 목표로 합니다.

---

## 🔬 연구 영역

### ① 의료 컴퓨터비전 (Medical Computer Vision)

- **AFF 진단 시스템 — 의료영상 AI · 풀스택:** 연구실에서 학습한 **비전형 대퇴골골절(AFF)** 검출 모델을 임상용 웹 진단 시스템으로 구현. Vue3+TypeScript DICOM 뷰어(Window/Level·mm 단위 측정), FastAPI 3단계 추론 서빙, AWS 배포까지 **시스템 엔지니어링 전반**을 담당 *(모델 학습은 연구실 제공)*
- **무릎각 잔차 보정 연구 — 자세추정:** 단안 카메라 3D 자세추정의 체계적인 무릎각 오차를 잔차 학습으로 보정. 4개 독립 데이터셋(84명)에서 LOSO·LODO로 검증, MAE 13.74°→8.47°(+38.4%)

### ② LLM · RAG / Agentic

- **갑상선 영양제 CDSS — 임상 의사결정 지원:** 결정론적 규칙 엔진으로 안전성·근거를 판정하고 LLM은 설명 생성에만 사용(재현·추적 가능). PubMed·식약처 공공데이터 연동, Docker/Render 배포 + GitHub Actions CI
- **Healthcare RAG — 검색 증강 생성:** RAPTOR(재귀 트리 기반 검색) 구조를 의료 도메인 문서에 적용해 근거 검색·요약을 실험
- **Agentic CGR — 에이전트 자기교정 패턴:** 신뢰도 게이팅으로 reflection 횟수를 문제 난이도에 맞춰 적응 배분하는 새로운 에이전트 설계 패턴을 제안·구현

> 초기 학습: MNIST 손글씨 숫자(0~9) 인식 MLP 구현 및 시각화 대시보드 (학부연구생 초기 과제)

---

## 🎯 연구 관심사

제 관심사는 **임상에서 신뢰할 수 있는 의료 AI**입니다. 두 방향에서 접근합니다.

- **일반화되고 해석 가능한 의료 컴퓨터비전** — 단일 데이터셋 성능을 넘어 여러 기관·장비에서 견고하게 동작하고, 임상의가 판단 근거를 이해할 수 있는 모델. *무릎각 잔차 보정 연구*에서 LODO(Leave-One-Dataset-Out)로 도메인 간 일반화의 경계를 정량적으로 검증한 것이 그 출발점입니다.
- **근거에 정합된 임상 의사결정 지원 (LLM · RAG)** — 환각을 줄이고 답을 검증 가능한 근거에 묶는 시스템. *갑상선 CDSS*에서 LLM을 판정이 아닌 설명에만 제한한 결정론적 설계가 그 문제의식에서 나왔습니다.

궁극적으로 이 두 축을 잇는, **예측 불확실성을 정량화하고 임상의가 신뢰·검증할 수 있는 진단 보조 시스템**을 연구하고자 합니다.

---

## 💡 참고 및 링크

> [!NOTE]
> 아래 링크를 통해 프로젝트와 연구 결과를 더 자세히 확인할 수 있습니다.

- [프로젝트 보기](/#project)
- [GitHub](https://github.com/tunho) · [LinkedIn](https://linkedin.com/in/준호-이-05a711310)

---

## 🗺️ 연구 주제 Mindmap

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
