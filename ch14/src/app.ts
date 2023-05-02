import {
  InputDialog,
  MediaData,
  TextData,
} from "./components/dialog/dialog.js";
import { VideoComponent } from "./components/page/item/video.js";
import { TodoComponent } from "./components/page/item/todo.js";
import { NoteComponent } from "./components/page/item/note.js";
import { ImageComponent } from "./components/page/item/image.js";
import {
  Composable,
  PageComponent,
  PageItemComponent,
} from "./components/page/page.js";
import { Component } from "./components/component.js";
import { MediaSectionInput } from "./components/dialog/input/media-input.js";
import { TextSectionInput } from "./components/dialog/input/text-input.js";

type InputComponentConstructor<T = (MediaData | TextData) & Component> = {
  new (): T;
};
class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement, private root: HTMLElement) {
    // --- 1. 페이지 생성
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    // // --- 2. 아이템 추가
    // const image = new ImageComponent(
    //   "Image Title",
    //   "https://picsum.photos/600/300"
    // );
    // // image.attachTo(appRoot, "beforeend");
    // this.page.addChild(image);

    // const video = new VideoComponent(
    //   "video",
    //   "https://www.youtube.com/watch?v=F7PN-1EmJbI"
    // );
    // // video.attachTo(appRoot, "beforeend");
    // this.page.addChild(video);

    // const note = new NoteComponent("note", "notebody");
    // // note.attachTo(appRoot, "beforeend");
    // this.page.addChild(note);

    // const todo = new TodoComponent("todo", "must todo");
    // // todo.attachTo(appRoot, "beforeend");
    // this.page.addChild(todo);

    /*
    // --- 3. 버튼 다이어로그 생성
    // button dialog
    const imageBtn = document.querySelector("#new-image")! as HTMLButtonElement;
    imageBtn.addEventListener("click", () => {
      const dialog = new InputDialog();
      const inputSection = new MediaSectionInput();

      dialog.addChild(inputSection);
      dialog.attachTo(root);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(root);
      });
      dialog.setOnSubmitListener(() => {
        // 섹션을 만들어서 페이지에 추가
        const image = new ImageComponent(inputSection.title, inputSection.url);
        this.page.addChild(image);
        dialog.removeFrom(root);
      });
    });

    const videoBtn = document.querySelector("#new-video")! as HTMLButtonElement;
    videoBtn.addEventListener("click", () => {
      const dialog = new InputDialog();
      const inputSection = new MediaSectionInput();

      dialog.addChild(inputSection);
      dialog.attachTo(root);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(root);
      });
      dialog.setOnSubmitListener(() => {
        // 섹션을 만들어서 페이지에 추가
        const video = new VideoComponent(inputSection.title, inputSection.url);
        this.page.addChild(video);
        dialog.removeFrom(root);
      });
    });

    const noteBtn = document.querySelector("#new-note")! as HTMLButtonElement;
    noteBtn.addEventListener("click", () => {
      const dialog = new InputDialog();
      const inputSection = new TextSectionInput();

      dialog.addChild(inputSection);
      dialog.attachTo(root);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(root);
      });
      dialog.setOnSubmitListener(() => {
        // 섹션을 만들어서 페이지에 추가
        const note = new NoteComponent(inputSection.title, inputSection.body);
        this.page.addChild(note);
        dialog.removeFrom(root);
      });
    });

    const todoBtn = document.querySelector("#new-todo")! as HTMLButtonElement;
    todoBtn.addEventListener("click", () => {
      const dialog = new InputDialog();
      const inputSection = new TextSectionInput();

      dialog.addChild(inputSection);
      dialog.attachTo(root);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(root);
      });
      dialog.setOnSubmitListener(() => {
        // 섹션을 만들어서 페이지에 추가
        const todo = new TodoComponent(inputSection.title, inputSection.body);
        this.page.addChild(todo);
        dialog.removeFrom(root);
      });
    });
    */

    this.bindElementToDialog<MediaSectionInput>(
      "#new-image",
      MediaSectionInput,
      (input: MediaSectionInput) => new ImageComponent(input.title, input.url)
    );
    this.bindElementToDialog<MediaSectionInput>(
      "#new-video",
      MediaSectionInput,
      (input: MediaSectionInput) => new VideoComponent(input.title, input.url)
    );
    this.bindElementToDialog<TextSectionInput>(
      "#new-note",
      TextSectionInput,
      (input: TextSectionInput) => new NoteComponent(input.title, input.body)
    );
    this.bindElementToDialog<TextSectionInput>(
      "#new-todo",
      TextSectionInput,
      (input: TextSectionInput) => new TodoComponent(input.title, input.body)
    );
  }

  private bindElementToDialog<T extends (MediaData | TextData) & Component>(
    selector: string,
    InputComponent: InputComponentConstructor<T>,
    makeSection: (input: T) => Component
  ) {
    const btn = document.querySelector(selector)! as HTMLButtonElement;
    btn.addEventListener("click", () => {
      const dialog = new InputDialog();
      const input = new InputComponent();

      dialog.addChild(input);
      dialog.attachTo(this.root);

      dialog.setOnCloseListener(() => {
        dialog.removeFrom(this.root);
      });
      dialog.setOnSubmitListener(() => {
        const item = makeSection(input);
        this.page.addChild(item);
        dialog.removeFrom(this.root);
      });
    });
  }
}

new App(document.querySelector(".document")! as HTMLElement, document.body);
