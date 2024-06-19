import { hideItem, isHide, showItem } from './storage';

export class ImageDeleteButton {
  private isHide: boolean = false;
  private readonly button: HTMLElement;

  constructor(
    parent: HTMLElement,
    private readonly id: string,
  ) {
    this.button = document.createElement('div');
    this.button.classList.add('image-delete-button');
    this.button.innerHTML =
      '<span class="material-icons md-36">delete_outline</span>';
    this.button.onclick = this.onClick.bind(this);
    parent.append(this.button);
    parent.classList.add('image-delete-parent');
    this.updateHide();
  }

  private async updateHide(): Promise<void> {
    this.isHide = await isHide(this.id);
    this.updateClass();
  }

  private updateClass(): void {
    if (this.isHide) {
      this.button.classList.add('image-delete-button-active');
    } else {
      this.button.classList.remove('image-delete-button-active');
    }
  }

  private async onClick(): Promise<void> {
    this.isHide = !this.isHide;
    this.updateClass();
    if (this.isHide) {
      await hideItem(this.id);
    } else {
      await showItem(this.id);
    }
  }
}
