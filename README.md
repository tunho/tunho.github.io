<!-- Header -->
<h1 align="center">Junho Lee (이준호)</h1>
<p align="center">
  Undergraduate @ Jeonbuk National University (CS) · Member @ JBNU Medical AI Lab (MacsLAB)
  <br/>
  <a href="https://tunho.github.io">Portfolio</a> •
  <a href="dlwnsgh2322@jbnu.ac.kr">Email</a> •
  <a href="https://github.com/tunho">GitHub</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Focus-Medical%20Imaging%20AI-blue" />
  <img src="https://img.shields.io/badge/Stack-Vue3%20%7C%20TypeScript%20%7C%20FastAPI%20%7C%20PyTorch-brightgreen" />
  <img src="https://img.shields.io/badge/Deploy-AWS%20EC2%20%7C%20GitHub%20Pages-orange" />
</p>

---

## 👋 About Me
- JBNU 컴퓨터공학과 학부생, **MacsLAB**에서 의료영상 AI/웹 시스템 개발 중  
- **DICOM 뷰어 & 진단 시스템**(Vue3 + TS + FastAPI + PyTorch) 설계/구현  
- 프론트엔드 UX(측정자·윈도우레벨·다중 프레임), 백엔드 API/배포(AWS EC2, pm2, 프록시)까지 **풀스택** 진행  
- 관심사: **Medical Imaging AI**, **Full-stack for AI**, 성능·사용성 균형 잡힌 제품 만들기

---

## 🧰 Tech Stack
**Frontend**: Vue 3, TypeScript, Vite, Pinia, PWA  
**Backend**: FastAPI, Python 3.x, Uvicorn, pm2, CORS, static serving  
**ML/AI**: PyTorch, OpenCV, NumPy  
**DevOps**: AWS EC2, Nginx/Express Proxy, GitHub Actions, GitHub Pages (Hugo Blox)  
**Etc.**: DICOM Metadata (x0028,0030 / x0028,0010), SVG Overlay, Canvas/Transform

---

## 🗂️ Selected Projects

### 1) Medical Imaging **DICOM Viewer / Diagnosis-System**
Full-stack 의료영상 웹앱. DICOM 파싱·표시, **자/화살표 측정**, 윈도우 레벨, Pan/Zoom, 다중 프레임, 결과 토글(AI BBox).  
- Front: Vue3+TS, SVG 측정 오버레이(엔드포인트, 히트라인, 라벨 mm/px 자동 계산)  
- Back: FastAPI(이미지·메타 추출, 모델 추론 라우트), CORS/정적 파일  
- Deploy: AWS EC2(5000 Front, 8000 Proxy→Backend), pm2, Nginx/Express 프록시  
- AI: PyTorch 모델(AFF/골절 등) inference 연동  
**Links**: [Demo/Docs](https://tunho.github.io) · [Repo(front)](https://github.com/tunho/REPO_FRONT) · [Repo(server)](https://github.com/tunho/REPO_SERVER)

---

### 2) **Omok AI** (Pygame)
미니맥스 + 알파베타 가지치기 + **우선순위 기반 후보수 필터링**.  
- 방어 중심 평가(상대 3/4 즉시 차단, 열림(open) 정도 가중치)  
- 대각선/가로/세로 패턴 스코어링 정교화, 즉시 승리/방어 수 최우선  
**Links**: [Repo](https://github.com/tunho/REPO_OMOK)

---

### 3) **Wardrobe / EveryGame** (Campus App)
교내용 코디 추천·옷장 관리/커뮤니티 미니앱.  
- Pinia 스토어(게시글·댓글·옷장·즐겨찾기), 세션스토리지 로컬 퍼시스턴스  
- 라우팅 가드, 이미지 업로드/프리뷰, 기본 추천 로직, 날씨 박스 UI  
**Links**: [Repo](https://github.com/tunho/REPO_WARDROBE)

---

## 🔬 Research & Interests
- Medical Imaging AI (DICOM 기반 웹 뷰어·진단 워크플로우)  
- 모델 추론 파이프라인의 **프론트-백엔드 통합** 및 실제 사용성 개선  
- 성능 최적화(파싱/렌더링 루프, 측정 UI 반응성, AI inference latency)

---

## 📝 Highlights (What I Built)
- **정밀 측정 도구**: SVG 라인/화살표/라벨, 엔드포인트 드래그, 삭제 컨텍스트 메뉴, 히트라인 분리  
- **정확한 길이 계산**: DICOM Pixel Spacing(row/col) 기반 mm 변환, 실시간 라벨 표시  
- **UI/UX 디테일**: stroke/폰트 크기 동적, 라벨 가려짐 최소화 위치 조정, 결과 이미지 토글  
- **배포 실전**: EC2 프로세스 관리(pm2), 포트 매핑(Front 5000, Proxy 8000), 외부 백엔드 연동

---

## 📈 GitHub Stats
<p align="left">
  <img src="https://github-readme-stats.vercel.app/api?username=tunho&show_icons=true&hide_rank=false" height="150" />
  <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=tunho&layout=compact" height="150" />
</p>

---

## 🗺️ Roadmap (Near-Term)
- DICOM 뷰어: 다중 프레임 성능 향상, 주석/리포트 Export, 모델 결과 비교 뷰  
- Omok AI: 패턴 캐싱/Move Ordering 개선, 시간 제한 내 탐색깊이 동적 조절  
- Wardrobe: 추천 품질 향상, 간단한 A/B 테스트, PWA 오프라인 강화

---

## 📫 Contact
- Portfolio: https://tunho.github.io  
- Email: your_email@jbnu.ac.kr  
- LinkedIn: https://www.linkedin.com/in/your-link

<!-- Footer note -->
<p align="right"><i>Built with focus on practical AI × Product engineering.</i></p>
