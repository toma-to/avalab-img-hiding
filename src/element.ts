export const getParentLiElement = (
  element: HTMLElement,
): HTMLLIElement | null => {
  let current = element.parentElement;
  while (current != null) {
    if (current instanceof HTMLLIElement) {
      return current;
    } else {
      current = current.parentElement;
    }
  }
  return null;
};
