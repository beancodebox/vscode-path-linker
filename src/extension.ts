import * as vscode from 'vscode';
import { initStatusBar } from './statusBar';
import { registerCommands } from './commands';

export function activate(context: vscode.ExtensionContext) {
  console.log('✓ VSCode Path Linker 확장이 활성화되었습니다.');

  // 상태바 초기화
  initStatusBar(context);

  // 명령어 등록
  registerCommands(context);
}

export function deactivate() {
  console.log('✓ VSCode Path Linker 확장이 비활성화되었습니다.');
}
