import { setImageObserver } from './image-observer';

const lazyListObserver = new MutationObserver(async (records) => {
  for (const record of records) {
    setImageObserver(record.addedNodes);
  }
});

export const setLazyListObserver = (nodes: NodeList): boolean => {
  for (const node of nodes) {
    if (node instanceof HTMLUListElement && node.id === 'lazyList') {
      lazyListObserver.observe(node, {
        childList: true,
      });
      return true;
    }
  }
  return false;
};
