import * as vscode from 'vscode';
import * as path from 'path';

/**
 * 절대 경로를 상대 경로로 변환
 */
export function getRelativePath(filePath: string): string {
  const workspaceFolder = vscode.workspace.workspaceFolders?.[0];
  if (!workspaceFolder) {
    return filePath;
  }

  const workspaceRoot = workspaceFolder.uri.fsPath;
  return path.relative(workspaceRoot, filePath);
}

/**
 * 현재 선택 상태 확인
 */
export function hasSelection(): boolean {
  const editor = vscode.window.activeTextEditor;
  if (!editor) return false;

  const selection = editor.selection;
  return !selection.isEmpty;
}

/**
 * 설정값 읽기
 */
export function getUseRelativePath(): boolean {
  const config = vscode.workspace.getConfiguration('vscodePathLinker');
  return config.get('useRelativePath', true);
}

/**
 * 파일 경로:줄번호 형식으로 텍스트 생성
 */
export function formatPathWithLine(
  filePath: string,
  startLine: number,
  endLine?: number,
  useRelative: boolean = true
): string {
  const displayPath = useRelative ? getRelativePath(filePath) : filePath;

  if (endLine && endLine > startLine) {
    return `${displayPath}:${startLine}-${endLine}`;
  }

  return `${displayPath}:${startLine}`;
}

/**
 * 현재 편집기의 경로와 줄번호 정보 가져오기
 */
export function getCurrentPathInfo(useRelative: boolean = true) {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return null;
  }

  const filePath = editor.document.fileName;
  const selection = editor.selection;
  const startLine = selection.start.line + 1;
  const endLine = selection.end.line + 1;

  return {
    filePath,
    startLine,
    endLine: startLine !== endLine ? endLine : undefined,
    formatted: formatPathWithLine(
      filePath,
      startLine,
      startLine !== endLine ? endLine : undefined,
      useRelative
    ),
  };
}
