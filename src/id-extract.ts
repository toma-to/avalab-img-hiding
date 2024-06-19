export const extractId = (url: string): string | null => {
  const result = /generated-images\/([0-9a-fA-F\-]+)/.exec(url);
  if (result == null) {
    return null;
  }
  return result[1];
};
