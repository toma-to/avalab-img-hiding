import { setLazyListObserver } from './lazy-list-observer';
import { setupMaterialIcon, setupModeButton } from './setup';

function main() {
  setupMaterialIcon();
  setupModeButton();
  const observer = new MutationObserver((records) => {
    for (const record of records) {
      if (setLazyListObserver(record.addedNodes)) {
        observer.disconnect();
        return;
      }
    }
  });
  observer.observe(document, {
    childList: true,
    subtree: true,
  });
}

main();
