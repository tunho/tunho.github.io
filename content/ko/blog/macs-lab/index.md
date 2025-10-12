---
title: macs 연구실 소개
date: 2025-10-05
---

<div class="text-justify">

**MacsLAB(Medical AI & Computer Science Laboratory)**은  
전북대학교 **컴퓨터인공지능학부**의 **이경수 교수님**이 이끄는 연구실로,  
**의료영상 인공지능(Medical Imaging AI)**과 **딥러닝 기반 컴퓨터비전** 연구를 중심으로 활동하고 있습니다.

본 연구실은 의료 데이터를 분석·처리하여 질병 진단, 병변 탐지, 영상 품질 향상 등  
의료 현장에서 직접 활용 가능한 **AI 응용 기술**을 개발하는 것을 목표로 합니다.

---

## 🎯 연구 목표

MacsLAB은 단순한 모델 개발을 넘어,  
**임상에서 활용 가능한 AI 시스템의 실용화**를 지향합니다.

> [!NOTE]
> 인공지능이 의료 전문가의 판단을 보조할 수 있도록,  
> 정확성·설명가능성(Explainability)·신뢰성을 모두 고려한 AI를 연구합니다.

---

## 🧬 주요 연구 분야

### 1️⃣ 의료영상 분석 (Medical Image Analysis)

- **DICOM 기반 영상 처리 및 표준화**
- **골절·종양·이상 신호 자동 탐지 모델 개발**
- **CT / MRI / X-ray 영상 분할(Segmentation) 및 분류(Classification)**
- **정량적 영상 지표(Quantitative Imaging Biomarker) 계산**

---

### 2️⃣ 딥러닝 기반 컴퓨터비전 (Computer Vision for Medicine)

- **CNN, Vision Transformer(ViT)** 기반 병변 감지
- **Self-supervised 및 Few-shot 학습 기법 적용**
- **3D Medical Volume Reconstruction 및 Registration**
- **AI 시각화(Grad-CAM, SHAP, Saliency Map) 연구**

---

### 3️⃣ AI 모델의 임상 적용 및 해석 가능성 (Explainable & Deployable AI)

> [!WARNING]
> 의료 분야에서 AI의 오판은 생명을 위협할 수 있으므로,  
> **모델의 해석력, 재현성, 안전성 확보**가 무엇보다 중요합니다.

MacsLAB은 의료 데이터의 특성과 규제를 고려해  
**안정적이고 투명한 AI 모델 배포 및 시각화 체계**를 구축하고 있습니다.

---

## 🧩 연구 예시

### 의료영상 내 병변 탐지 모델

**예시 코드**

```python
import torch
import torch.nn as nn
import torchvision.models as models

class AFFDetector(nn.Module):
    def __init__(self, num_classes=2):
        super().__init__()
        self.backbone = models.resnet50(pretrained=True)
        self.fc = nn.Linear(1000, num_classes)

    def forward(self, x):
        x = self.backbone(x)
        return self.fc(x)

model = AFFDetector()
print(model(torch.randn(1, 3, 224, 224)).shape)
```

- MacsLAB (Medical AI & Computer Science Lab)
  - Research Fields
    - Medical Image Analysis
      - CT / X-ray / MRI
      - DICOM Parsing
    - Computer Vision
      - CNN / ViT
      - Segmentation
    - Explainable AI
      - Grad-CAM / SHAP
      - Model Reliability
  - Applications
    - AFF Detection
    - Bone Lesion Analysis
    - Clinical Integration
  - Tools - PyTorch - FastAPI / Vue3 - OpenCV / NumPy
  </div>
