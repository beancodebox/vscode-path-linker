# VSCode Path Linker

> 파일 경로와 줄번호를 클릭 한 번에 복사하세요. Claude와 협업할 때 완벽합니다!

파일의 정확한 위치를 설명할 때, 더 이상 경로를 수동으로 입력하지 마세요. VSCode Path Linker는 커서 위치의 파일경로와 줄번호를 상태바에 실시간으로 표시하고, 클릭만 하면 클립보드에 복사됩니다.

## 🌟 핵심 기능

- **🎯 실시간 상태바**: 커서 위치의 파일경로와 줄번호를 하단 상태바에 실시간으로 표시
- **📊 범위 선택**: 코드를 선택하면 시작줄과 끝줄을 자동 감지 (예: `src/app.ts:10-20`)
- **📋 한 번에 복사**: 상태바 클릭 또는 단축키로 경로를 클립보드에 복사
- **🔀 경로 형식 선택**: 상대경로/절대경로 자유롭게 전환
- **🖱️ 우클릭 메뉴**: 컨텍스트 메뉴에서 빠르게 접근
- **⌨️ 단축키**: `Ctrl+Shift+C`로 빠르게 복사 (Mac: `Cmd+Shift+C`)

## 📦 설치

### VSCode 마켓플레이스 (권장)

1. VSCode 열기 → 확장 탭 (`Ctrl+Shift+X`)
2. "VSCode Path Linker" 검색
3. 설치 버튼 클릭

### 명령어 라인

```bash
code --install-extension beancodebox.vscode-path-linker
```

### 수동 설치 (VSIX)

1. [Releases](https://github.com/beancodebox/vscode-path-linker/releases)에서 VSIX 파일 다운로드

2. 설치 (방법 선택):

   **VSCode UI 사용** (권장):
   - VSCode 열기 → 확장 탭 (Ctrl+Shift+X)
   - 우측 상단 메뉴 (...) → "Install from VSIX..."
   - 다운로드한 VSIX 파일 선택

   **또는 명령어**:

   ```bash
   code --install-extension ~/Downloads/vscode-path-linker-0.2.0.vsix
   ```

   **또는 curl 사용** (자동 다운로드):

   ```bash
   # linux
   curl -L https://github.com/beancodebox/vscode-path-linker/releases/download/v0.2.0/vscode-path-linker-0.2.0.vsix -o /tmp/vscode-path-linker-0.2.0.vsix && code --install-extension /tmp/vscode-path-linker-0.2.0.vsix
   ```

   ```
   # windows (cmd)
   curl -L https://github.com/beancodebox/vscode-path-linker/releases/download/v0.2.0/vscode-path-linker-0.2.0.vsix -o "%TEMP%\vscode-path-linker-0.2.0.vsix" && code --install-extension "%TEMP%\vscode-path-linker-0.2.0.vsix"
   ```

   ```
   # windows (powershell)
   curl.exe -L https://github.com/beancodebox/vscode-path-linker/releases/download/v0.2.0/vscode-path-linker-0.2.0.vsix -o "$env:TEMP\vscode-path-linker-0.2.0.vsix"; code --install-extension "$env:TEMP\vscode-path-linker-0.2.0.vsix"
   ```

## 사용법

### 상태바

파일을 열면 상태바(하단 우측)에 현재 커서 위치가 표시됩니다:

```
$(file) src/components/Button.tsx:42
```

상태바를 클릭하면 경로가 자동으로 클립보드에 복사됩니다.

### 명령어

명령어 팔레트(`Ctrl+Shift+P` 또는 `Cmd+Shift+P`)에서:

- **"Copy Path with Line Number"**: 상대 경로 복사 (기본값)
- **"Copy Absolute Path with Line Number"**: 절대 경로 복사

### 단축키

- `Ctrl+Shift+C` (또는 `Cmd+Shift+C` on Mac): 경로 복사 (설정 기반)
- `Ctrl+Shift+Alt+C` (또는 `Cmd+Shift+Alt+C` on Mac): 절대 경로 복사

### 우클릭 메뉴

편집기 영역을 우클릭하면 컨텍스트 메뉴에 다음 항목들이 표시됩니다:

- Copy Path with Line Number
- Copy Absolute Path with Line Number

### 범위 선택

코드를 선택하면 상태바가 자동으로 업데이트됩니다:

```
$(file) src/components/Button.tsx:10-20
```

## 설정

VSCode 설정(`Ctrl+,`)에서 "VSCode Path Linker"를 검색하여 수정:

- **useRelativePath** (기본값: `true`): 상대 경로 사용 여부

## 📸 스크린샷

### 상태바 실시간 표시

커서 위치의 파일경로와 줄번호가 상태바(하단 우측)에 실시간으로 표시됩니다.

### 범위 선택 감지

코드를 선택하면 시작줄과 끝줄을 자동으로 감지합니다.

### 우클릭 메뉴

편집기에서 우클릭하면 컨텍스트 메뉴에 복사 옵션이 나타납니다.

> 더 자세한 스크린샷 준비 방법: [media/SCREENSHOTS.md](media/SCREENSHOTS.md)

---

## 💡 사용 예시

### Claude와 협업 (주 용도)

```
> 이 함수의 validateEmail 부분을 개선해주세요
> 파일: src/utils/validation.ts:42-55
```

상태바를 클릭하면 경로가 자동으로 복사됩니다! ✨

### 다양한 활용

- 📝 팀에 버그 위치 보고
- 🔍 코드 리뷰에서 정확한 라인 지정
- 🐛 이슈 트래킹에서 파일 위치 기록
- 📚 기술 문서 작성 시 코드 참조

## 개발

### 프로젝트 구조

```
vscode-path-linker/
├── src/
│   ├── extension.ts      # 메인 진입점
│   ├── statusBar.ts      # 상태바 관리
│   ├── commands.ts       # 명령어 정의
│   └── utils.ts          # 유틸리티 함수
├── package.json          # 확장 설정
└── tsconfig.json         # TypeScript 설정
```

### 빌드 및 실행

```bash
# 의존성 설치
npm install

# TypeScript 컴파일
npm run compile

# 파일 변경 감시 컴파일
npm run watch

# 디버그 모드 (VSCode에서 F5)
```

## 라이선스

MIT

## 피드백 및 이슈

- [GitHub Issues](https://github.com/beancodebox/vscode-path-linker/issues)

---

**Made with ❤️ for better collaboration with Claude**
