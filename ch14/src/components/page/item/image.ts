export class ImageComponent {
  private element: HTMLElement;
  constructor(title: string, url: string) {
    const template = document.createElement("template");
    template.innerHTML = `<section class="image">
    <div class="image__holder">
      <img class="image__thumbnail" />
      <p class="image__title"></p>
    </div>
  </section>`;
    this.element = template.content.firstElementChild! as HTMLElement;

    console.log(url, title);
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
  attachTo(parent: HTMLElement, position: InsertPosition = "afterbegin") {
    parent.insertAdjacentElement(position, this.element);
  }
}
