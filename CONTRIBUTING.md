# 기여하기 (Contributing)

VSCode Path Linker에 기여해주셔서 감사합니다! 🙏

## 시작하기

### 1. 저장소 포크 및 클론

```bash
git clone https://github.com/YOUR-USERNAME/vscode-path-linker.git
cd vscode-path-linker
```

### 2. 개발 환경 설정

```bash
npm install
npm run watch    # 파일 변경 감시 컴파일
```

### 3. 디버그 모드 실행

VSCode에서 `F5`를 누르거나 디버그 탭에서 "Run Extension" 선택

## 기여 방법

### 버그 보고

1. [Issues](https://github.com/beancodebox/vscode-path-linker/issues)에서 **"🐛 버그 보고"** 템플릿 선택
2. 상세하게 작성 (재현 방법, 예상 동작, 실제 동작)
3. 환경 정보 포함 (VSCode 버전, OS 등)

### 기능 요청

1. [Issues](https://github.com/beancodebox/vscode-path-linker/issues)에서 **"💡 기능 요청"** 템플릿 선택
2. 기능의 사용 사례 설명
3. 구현 방법 제안 (선택사항)

### 코드 기여

#### 단계별 가이드

1. **이슈 확인**: 작업하기 전에 관련 이슈가 있는지 확인
2. **새 브랜치 생성**:
   ```bash
   git checkout -b feature/your-feature-name
   # 또는
   git checkout -b fix/your-bug-fix
   ```
3. **코드 작성**
   - 기존 코드 스타일 준수
   - 주석 추가 (필요한 경우)
   - 불필요한 파일 커밋하지 않기

4. **테스트**:
   ```bash
   npm run compile
   # F5로 디버그 모드 실행 후 기능 테스트
   ```

5. **커밋**:
   ```bash
   git add .
   git commit -m "feat: 새로운 기능 설명"
   # 또는
   git commit -m "fix: 버그 수정 설명"
   ```

   커밋 메시지 규칙:
   - `feat:` 새로운 기능
   - `fix:` 버그 수정
   - `docs:` 문서 수정
   - `style:` 코드 스타일 (자동 포맷팅 등)
   - `refactor:` 코드 리팩토링
   - `test:` 테스트 추가

6. **푸시 및 PR 생성**:
   ```bash
   git push origin feature/your-feature-name
   ```
   GitHub에서 "Create Pull Request" 버튼 클릭

#### 코드 스타일

- **언어**: TypeScript
- **포매팅**: Prettier 권장
- **Linting**: ESLint 사용
- **들여쓰기**: 2 스페이스

실행:
```bash
npm run lint
```

## PR (Pull Request) 체크리스트

PR을 보내기 전에 다음을 확인해주세요:

- [ ] 코드가 컴파일 오류 없이 컴파일됨 (`npm run compile`)
- [ ] ESLint 검사를 통과함 (`npm run lint`)
- [ ] 기능이 예상대로 작동함 (F5 디버그 모드)
- [ ] 커밋 메시지가 명확함
- [ ] 관련 이슈에 링크함 (예: Closes #123)
- [ ] 기능 설명이 있음 (필요한 경우)

## 프로젝트 구조

```
src/
├── extension.ts      # 메인 진입점 (activate, deactivate)
├── statusBar.ts      # 상태바 관리
├── commands.ts       # 명령어 정의
└── utils.ts          # 유틸리티 함수들

.github/             # GitHub 템플릿
├── ISSUE_TEMPLATE/
│   ├── bug_report.md
│   └── feature_request.md

package.json         # 확장 메타데이터
CHANGELOG.md         # 변경사항
```

## 개발 팁

### VSCode 확장 디버깅

1. **중단점 설정**: 소스 코드 옆 줄 번호에 클릭
2. **콘솔 출력**: `console.log()` 사용 → 디버그 콘솔에서 확인
3. **명령어 실행**: `Ctrl+Shift+P` → 명령어 입력

### 상태바 업데이트 테스트

파일을 여러 개 열고, 각 파일에서 커서를 움직여서 상태바가 제대로 업데이트되는지 확인

### 클립보드 복사 테스트

1. 상태바 클릭 또는 단축키 누르기
2. 에디터에 우클릭 → 붙여넣기 (Ctrl+V)
3. 경로가 올바르게 복사되었는지 확인

## 질문이 있으신가요?

- [Issues](https://github.com/beancodebox/vscode-path-linker/issues)에서 질문 태그로 생성
- 토론이 필요하면 GitHub Discussions 이용

---

**감사합니다! 여러분의 기여가 이 프로젝트를 더 좋게 만듭니다! 💪**
