---
title: Medical Imaging DICOM Project
summary: An AI diagnostic system development project based on medical imaging (DICOM) data.
date: 2025-10-05
---

<div class="text-justify">

## Project Overview

This project aims to develop a **web-based platform for efficient visualization and analysis of medical imaging (DICOM) data**.  
To integrate AI diagnostic models from medical AI research into real clinical workflows,  
we implemented an **interface that allows simultaneous comparison and review of AI diagnostic results and original images**.

---

## Key Features

- 🩻 **DICOM Viewer**  
  Supports multi-frame (CT/MRI) images, zoom and pan functions, and window-level adjustments
- 📏 **Distance Measurement Tool**  
  Enables precise millimeter-scale measurement using pixel spacing metadata
- 🤖 **AI Prediction Visualization**  
  Displays predictions from PyTorch-based deep learning models as bounding box overlays
- 🔄 **Result Comparison Mode**  
  Switch between original and AI-analyzed images with a single button
- 🌐 **Web-Integrated System**  
  Built with FastAPI backend and Vue 3 frontend, enabling real-time data communication

---

## Tech Stack

- **Frontend:** Vue 3, TypeScript, Pinia, SVG-based interactive tools
- **Backend:** FastAPI, Python, Uvicorn, PM2 (AWS EC2 deployment)
- **AI Model:** PyTorch, OpenCV, NumPy
- **Others:** DICOM metadata parsing (x00280030, x00280010, etc.), REST API communication

---

## Project Significance

In medical imaging AI research, it is crucial not only to improve model accuracy  
but also to **develop tools that medical professionals can actually use**.  
This project goes beyond experimental AI development —  
it is evolving into a **“bridge” system connecting medical research and clinical practice**.

</div>
