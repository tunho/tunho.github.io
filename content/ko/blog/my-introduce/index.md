---
title: 이준호 (Junho Lee)
summary: 전북대학교 컴퓨터인공지능학부 학부생 · MacsLAB 의료 AI 연구실 연구원
date: 2025-10-05
---

<div class="text-justify">

안녕하세요. 전북대학교 **컴퓨터인공지능학부** 소속 학부생 **이준호(Junho Lee)** 입니다.  
현재 MacsLAB(의료 AI 연구실)에서 의료영상 분석과 딥러닝을 공부하며,  
**연구 모델을 실제 임상에서 쓸 수 있는 시스템으로 구현하는 일**과 **데이터 기반 머신러닝 연구**를 병행하고 있습니다.

**FastAPI + Vue3(TypeScript)** 기반의 풀스택 개발을 중심으로,  
연구실에서 개발한 AI 모델을 실제 임상 현장에서 활용 가능한 서비스로 연결하기 위해  
백엔드–프론트엔드–추론 서버 파이프라인 전체를 직접 설계·구현하고 있으며,  
동시에 **자세추정(Pose Estimation)·임상 의사결정 지원(CDSS)** 분야의 독립 연구도 수행하고 있습니다.

연구와 개발을 병행하며, 단순한 성능 향상을 넘어 **실제 사용성을 고려한 시스템 설계**를 목표로 합니다.  
특히 **DICOM 뷰어 및 의료영상 UX/UI 개선**, **AI 결과 시각화**, **측정 도구 인터랙션 구현** 등  
실제 의료 현장에서 사용할 수 있는 인터페이스를 지속적으로 개발하고 있습니다.

---

## 🔬 주요 연구 및 프로젝트

- **AFF 진단 시스템 (의료영상 AI · 풀스택):** 연구실에서 학습한 **비전형 대퇴골골절(AFF)** 검출 모델을 실제 임상에서 쓸 수 있는 웹 진단 시스템으로 구현. Vue3+TypeScript DICOM 뷰어(Window/Level·mm 단위 측정), FastAPI 3단계 추론 파이프라인 서빙, AWS 배포까지 **시스템 엔지니어링 전반**을 담당 *(모델 학습은 연구실 제공)*
- **무릎각 잔차 보정 연구 (자세추정 · 머신러닝):** 단안 카메라 3D 자세추정의 체계적인 무릎각 오차를 잔차 학습으로 보정. 4개 독립 데이터셋(84명)에서 LOSO·LODO로 검증, MAE 13.74°→8.47°(+38.4%)
- **갑상선 영양제 CDSS (임상 의사결정 지원):** 결정론적 규칙 엔진으로 안전성·근거를 판정하고 LLM은 설명 생성에만 사용. PubMed·식약처 공공데이터 연동, Docker/Render 배포 + GitHub Actions CI
- **MNIST 분류 모델:** 학부연구생 초기 과제로 손글씨 숫자(0~9) 인식 MLP 학습 및 시각화 대시보드 제작

---

## 🧭 앞으로의 목표

- AI 모델의 해석 가능성(Explainability)을 높이는 시각화 연구
- 의료영상용 **웹 기반 진단 보조 시스템**의 상용화 및 성능 최적화
- 다양한 의료 데이터셋에 적용 가능한 **범용 의료영상 플랫폼** 구축

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
  - Medical AI Systems
    - AFF Diagnosis System
      - DICOM Viewer (Vue3 + TS)
      - FastAPI Inference Serving
      - AWS Deployment
  - ML Research
    - Knee-Angle Residual Correction
      - Monocular Pose Estimation
      - LOSO / LODO Validation
    - Thyroid Supplement CDSS
      - Deterministic Rule Engine
      - PubMed Evidence
  - Future Work
    - Explainable AI
    - Clinical Deployment
```

</div>
