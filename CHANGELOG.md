# Changelog

모든 주요 변경사항이 이 파일에 문서화됩니다.

## [0.1.0] - 2026-02-04

### 초기 릴리스 ✨

#### 추가됨 (Added)
- ✅ 상태바에 파일경로:줄번호 실시간 표시
- ✅ 커서 위치 자동 감지
- ✅ 코드 범위 선택 감지 (시작줄-끝줄)
- ✅ 클립보드 복사 명령어
- ✅ 상대 경로 / 절대 경로 자동 변환
- ✅ 단축키 지원 (`Ctrl+Shift+C`, `Ctrl+Shift+Alt+C`)
- ✅ 우클릭 컨텍스트 메뉴
- ✅ 사용자 설정 (상대/절대 경로 선택)

#### 기술 (Technical)
- TypeScript 기반 구현
- VSCode Extension API 활용
- Node.js 런타임
- 간소화된 모듈 구조 (extension, statusBar, commands, utils)

---

## 향후 계획

### [0.2.0] - 계획 중
- 🎯 마켓플레이스 공식 출시
- 📊 추가 포맷 템플릿 (마크다운, JSON 등)
- 🌐 다국어 지원 (en, ko, ja)
- 📸 IDE 내 스크린샷 저장

### [0.3.0] - 아이디어
- 💾 경로 히스토리 관리
- 🔗 선택 코드 스니펫 자동 포함
- 📝 함수/클래스명 자동 추가
- 🚀 성능 최적화

---

## 버전 정책

이 프로젝트는 [Semantic Versioning](https://semver.org/)을 따릅니다.

- **MAJOR** (0.x.0): 주요 기능 추가 또는 호환성 깨지는 변경
- **MINOR** (0.0.x): 새로운 기능 추가 (호환성 유지)
- **PATCH**: 버그 수정

---

## 기여 (Contributing)

버그 보고 및 기능 요청은 [Issues](https://github.com/beancodebox/vscode-path-linker/issues)에서 해주세요.

---

**더 자세한 내용**: [README.md](./README.md) 참조
