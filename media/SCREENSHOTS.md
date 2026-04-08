# 스크린샷 준비 가이드

마켓플레이스 배포를 위한 스크린샷 준비 방법입니다.

## 필요한 스크린샷

마켓플레이스에서는 최소 1개, 최대 5개의 스크린샷을 추천합니다.

### 1. 상태바 표시 (screenshot1.png)

**내용**: 파일 열기 → 상태바에 경로:줄번호 표시

**준비 방법**:
1. VSCode에서 임의의 프로젝트 폴더 열기
2. 아무 파일 열기 (예: `src/app.ts`)
3. 하단 우측 상태바 영역 스크린샷 캡처
4. 파일명: `screenshot1.png` (또는 `screenshot-statusbar.png`)

**크기**: 1024x768px 이상 권장

### 2. 범위 선택 (screenshot2.png)

**내용**: 코드 범위 선택 → 상태바에 시작줄-끝줄 표시

**준비 방법**:
1. 코드 파일 열기
2. 여러 줄 선택 (예: 10줄~20줄)
3. 상태바 표시 스크린샷 캡처
4. 파일명: `screenshot2.png`

### 3. 우클릭 메뉴 (screenshot3.png)

**내용**: 편집기에서 우클릭 → 컨텍스트 메뉴 표시

**준비 방법**:
1. 코드 파일에서 우클릭
2. "Copy Path with Line Number" 메뉴 항목 보이는 스크린샷 캡처
3. 파일명: `screenshot3.png`

## 스크린샷 생성 방법

### Windows

```bash
# 전체 화면
Win + Shift + S

# 또는 Snipping Tool 사용
Snipping Tool
```

### macOS

```bash
# 전체 화면
Cmd + Shift + 3

# 선택 영역
Cmd + Shift + 4
```

### Linux

```bash
# GNOME
Gnome Screenshot / Shift + PrtSc

# 또는 ImageMagick
import screenshot.png
```

## 스크린샷 최적화

### 크기 조정

ImageMagick 사용:
```bash
convert screenshot.png -resize 1024x768 screenshot-optimized.png
```

또는 온라인 도구 사용:
- [TinyPNG](https://tinypng.com/) - 압축
- [Pixlr](https://pixlr.com/) - 편집

### 명시성 향상

- 중요 부분 원형 하이라이트 추가
- 텍스트 레이블 추가
- 화살표로 기능 설명

도구:
- [Skitch](https://evernote.com/products/skitch) (Mac/Windows)
- [Shutter](https://shutter-project.org/) (Linux)

## 배치

1. `media/` 폴더에 이미지 저장
   ```
   media/
   ├── icon.svg
   ├── screenshot1.png
   ├── screenshot2.png
   └── screenshot3.png
   ```

2. README.md에서 참조:
   ```markdown
   ## 스크린샷

   ### 상태바 표시
   ![상태바](media/screenshot1.png)

   ### 범위 선택
   ![범위 선택](media/screenshot2.png)
   ```

3. package.json에 `icon` 필드 확인:
   ```json
   "icon": "media/icon.svg"
   ```

## 마켓플레이스 업로드

vsce로 게시할 때 자동으로 감지됩니다.

```bash
vsce package
# 또는
vsce publish
```

---

**팁**: 스크린샷은 마켓플레이스 페이지 품질에 크게 영향을 줍니다. 깨끗하고 명확한 이미지를 준비해주세요!
