export const isRestoreMode = async (): Promise<boolean> => {
  return (
    (await chrome.storage.local.get('RESTORE_MODE'))['RESTORE_MODE'] != null
  );
};

export const toggleRestoreMode = async (): Promise<void> => {
  if (await isRestoreMode()) {
    await chrome.storage.local.remove('RESTORE_MODE');
  } else {
    await chrome.storage.local.set({ RESTORE_MODE: 1 });
  }
};

export const isHide = async (id: string): Promise<boolean> => {
  const obj = await chrome.storage.local.get(id);
  return obj[id] != null;
};
export const hideItem = async (id: string): Promise<void> => {
  const obj: { [key: string]: any } = {};
  obj[id] = 1;
  await chrome.storage.local.set(obj);
};
export const showItem = async (id: string): Promise<void> => {
  await chrome.storage.local.remove(id);
};
