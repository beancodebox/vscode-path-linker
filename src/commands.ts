import * as vscode from 'vscode';
import { getCurrentPathInfo, getUseRelativePath } from './utils';

export function registerCommands(context: vscode.ExtensionContext) {
  // copyPath 명령어 (상대 경로)
  const copyPathCmd = vscode.commands.registerCommand(
    'vscode-path-linker.copyPath',
    copyPath
  );
  context.subscriptions.push(copyPathCmd);

  // copyAbsolutePath 명령어 (절대 경로)
  const copyAbsolutePathCmd = vscode.commands.registerCommand(
    'vscode-path-linker.copyAbsolutePath',
    copyAbsolutePath
  );
  context.subscriptions.push(copyAbsolutePathCmd);
}

async function copyPath() {
  const useRelative = getUseRelativePath();
  const info = getCurrentPathInfo(useRelative);

  if (!info) {
    vscode.window.showErrorMessage('편집기를 활성화해주세요.');
    return;
  }

  await vscode.env.clipboard.writeText(info.formatted);
  vscode.window.showInformationMessage(`✓ 복사됨: ${info.formatted}`);
}

async function copyAbsolutePath() {
  const info = getCurrentPathInfo(false);

  if (!info) {
    vscode.window.showErrorMessage('편집기를 활성화해주세요.');
    return;
  }

  await vscode.env.clipboard.writeText(info.formatted);
  vscode.window.showInformationMessage(`✓ 복사됨: ${info.formatted}`);
}
