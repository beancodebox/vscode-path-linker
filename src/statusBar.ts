import * as vscode from 'vscode';
import { getCurrentPathInfo, getUseRelativePath } from './utils';

let statusBarItem: vscode.StatusBarItem;

export function initStatusBar(context: vscode.ExtensionContext) {
  // 상태바 생성
  statusBarItem = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );

  statusBarItem.command = 'vscode-path-linker.copyPath';
  statusBarItem.tooltip = '클릭하여 경로를 클립보드에 복사 (Ctrl+Shift+C)';

  context.subscriptions.push(statusBarItem);

  // 초기 업데이트
  updateStatusBar();

  // 커서 움직임 감지
  const cursorWatcher = vscode.window.onDidChangeTextEditorSelection(
    updateStatusBar
  );
  context.subscriptions.push(cursorWatcher);

  // 파일 변경 감지
  const fileWatcher = vscode.window.onDidChangeActiveTextEditor(
    updateStatusBar
  );
  context.subscriptions.push(fileWatcher);

  // 설정 변경 감지
  const configWatcher = vscode.workspace.onDidChangeConfiguration(
    updateStatusBar
  );
  context.subscriptions.push(configWatcher);
}

function updateStatusBar() {
  const useRelative = getUseRelativePath();
  const info = getCurrentPathInfo(useRelative);

  if (!info) {
    statusBarItem.hide();
    return;
  }

  statusBarItem.text = `$(file) ${info.formatted}`;
  statusBarItem.show();
}
