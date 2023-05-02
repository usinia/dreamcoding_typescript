import { BaseComponent } from "./../../component.js";

export class ImageComponent extends BaseComponent<HTMLImageElement> {
  constructor(title: string, url: string) {
    super(`<section class="image">
    <div class="image__holder">
      <img class="image__thumbnail" />
      <p class="image__title"></p>
    </div>
  </section>`);

    const imageElement = this.element.querySelector(
      ".image__thumbnail"
    )! as HTMLImageElement;
    imageElement.src = url;
    imageElement.alt = title;
    // 사용자에게 입력 받은 값을 innerHtml 에 바로 설정하는 것은 좋지 않다.
    // 필요한 부분만 update 해주는 것이 더 안전하다.

    const titleElement = this.element.querySelector(
      ".image__title"
    )! as HTMLParagraphElement;
    titleElement.textContent = title;
  }
}
