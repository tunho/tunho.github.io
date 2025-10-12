---
title: Introduction to MacsLAB
date: 2025-10-05
---

<div class="text-justify">
**MacsLAB (Medical AI & Computer Science Laboratory)**  
is a research lab led by **Professor Kyungsoo Lee** from the **Department of Computer & Artificial Intelligence** at **Jeonbuk National University (JBNU)**.  
The lab focuses on research in **Medical Imaging AI** and **Deep Learning-based Computer Vision**.

Our main goal is to develop **AI applications for real-world medical use**,  
including disease diagnosis, lesion detection, and image quality enhancement  
through medical data analysis and processing.

---

## 🎯 Research Goals

MacsLAB goes beyond simple model development —  
we aim for the **practical deployment of AI systems** that can be applied in clinical environments.

> [!NOTE]
> To ensure AI supports medical professionals’ decision-making,  
> we study AI systems that balance **accuracy, explainability, and reliability**.

---

## 🧬 Main Research Areas

### 1️⃣ Medical Image Analysis

- **DICOM-based image processing and standardization**
- **Automatic detection models for fractures, tumors, and abnormal signals**
- **Segmentation and classification of CT / MRI / X-ray images**
- **Quantitative imaging biomarker computation**

---

### 2️⃣ Deep Learning–based Computer Vision for Medicine

- **Lesion detection using CNN and Vision Transformer (ViT)**
- **Application of self-supervised and few-shot learning methods**
- **3D medical volume reconstruction and registration**
- **Research on AI visualization (Grad-CAM, SHAP, Saliency Map)**

---

### 3️⃣ Clinical Application and Explainability of AI Models

> [!WARNING]
> In the medical field, AI misjudgment can endanger lives.  
> Therefore, ensuring **interpretability, reproducibility, and safety** is crucial.

MacsLAB builds **stable and transparent AI deployment and visualization systems**,  
considering the unique characteristics and regulations of medical data.

---

## 🧩 Research Example

### Lesion Detection Model in Medical Imaging

**Example Code**

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

</div>
