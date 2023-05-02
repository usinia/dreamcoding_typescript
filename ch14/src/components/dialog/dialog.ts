import { Composable } from "./../page/page.js";
import { BaseComponent, Component } from "../component.js";

type OnCloseListener = () => void;
type OnSubmitListener = () => void;

export interface MediaData {
  readonly title: string;
  readonly url: string;
}

export interface TextData {
  readonly title: string;
  readonly body: string;
}

export class InputDialog
  extends BaseComponent<HTMLElement>
  implements Composable
{
  closeListener?: OnCloseListener;
  submitListener?: OnSubmitListener;
  constructor() {
    super(`<dialog class="dialog">
             <div class="dialog__container">
               <button class="close">&times;</button>
               <div id="dialog__body"></div>
               <button class="dialog__submit">ADD</button>
             </div>
           </dialog>`);
    const closeBtn = this.element.querySelector(".close")! as HTMLButtonElement;
    const submitBtn = this.element.querySelector(
      ".dialog__submit"
    )! as HTMLButtonElement;

    // closeBtn.addEventListener("click", () => {});    // event 를 여러 개 등록 가능
    closeBtn.onclick = () => {
      // click event 를 덮어씀
      this.closeListener && this.closeListener();
    };
    submitBtn.onclick = () => {
      this.submitListener && this.submitListener();
    };
  }

  setOnCloseListener(listener: OnCloseListener) {
    this.closeListener = listener;
  }
  setOnSubmitListener(listener: OnSubmitListener) {
    this.submitListener = listener;
  }

  addChild(child: Component): void {
    const body = this.element.querySelector("#dialog__body")! as HTMLElement;
    child.attachTo(body);
  }
}
