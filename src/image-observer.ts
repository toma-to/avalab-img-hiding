import { isRestoreMode, isHide } from './storage';
import { extractId } from './id-extract';
import { getParentLiElement } from './element';
import { ImageDeleteButton } from './image-delete-button';

const imageObserver = new MutationObserver(async (records) => {
  for (const record of records) {
    if (record.target instanceof HTMLImageElement) {
      const li = getParentLiElement(record.target);
      const id = extractId(record.target.src);
      if (li == null || id == null) {
        return;
      }
      if (!(await isRestoreMode())) {
        if (await isHide(id)) {
          li.remove();
          continue;
        }
      }
      new ImageDeleteButton(li, id);
    }
  }
});

export const setImageObserver = (nodes: NodeList): void => {
  for (const node of nodes) {
    setObserver(node);
  }
};

export const setObserver = (node: Node): void => {
  if (node instanceof HTMLImageElement) {
    imageObserver.observe(node, {
      attributes: true,
      attributeFilter: ['src'],
    });
    return;
  }
  setImageObserver(node.childNodes);
};
