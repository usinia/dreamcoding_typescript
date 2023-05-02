import { BaseComponent, Component } from "./../component.js";

export interface Composable {
  addChild(child: Component): void;
}

class PageItemComponent
  extends BaseComponent<HTMLElement>
  implements Composable
{
  constructor() {
    super(`<li class="page-item">
             <section class="page-item__body">
               <div class="page-item__controls">
                 <button class="close">&times;</button>
               </div>
             </section>
           </li>`);
  }
  addChild(child: Component): void {
    const container = this.element.querySelector(
      ".page-item__body"
    )! as HTMLElement;
    child.attachTo(container);
  }
}

export class PageComponent
  extends BaseComponent<HTMLUListElement>
  implements Composable
{
  constructor() {
    super(`<ul class="page"></ul>`);
  }
  addChild(child: Component): void {
    const item = new PageItemComponent();
    item.addChild(child);
    item.attachTo(this.element, "beforeend");
  }
}
