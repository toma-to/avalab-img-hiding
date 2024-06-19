import { isRestoreMode, toggleRestoreMode } from './storage';

export const setupMaterialIcon = (): void => {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/icon?family=Material+Icons';
  link.rel = 'stylesheet';
  const head = document.getElementsByTagName('head')[0];
  head.append(link);
};

const modeClick = async (): Promise<void> => {
  await toggleRestoreMode();
  location.reload();
};

export const setupModeButton = async (): Promise<void> => {
  const button = document.createElement('div');
  button.id = 'restore-mode-button';
  if (await isRestoreMode()) {
    button.classList.add('restore-mode-active');
  }
  button.onclick = modeClick;
  button.innerHTML = '<span class="material-icons md-48">delete</span>';
  const body = document.getElementsByTagName('body')[0];
  body.append(button);
};
