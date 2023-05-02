import { InputDialog } from "./components/dialog/dialog.js";
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

class App {
  private readonly page: Component & Composable;
  constructor(appRoot: HTMLElement) {
    this.page = new PageComponent(PageItemComponent);
    this.page.attachTo(appRoot);

    const image = new ImageComponent(
      "Image Title",
      "https://picsum.photos/600/300"
    );
    // image.attachTo(appRoot, "beforeend");
    this.page.addChild(image);

    const video = new VideoComponent(
      "video",
      "https://www.youtube.com/watch?v=F7PN-1EmJbI"
    );
    // video.attachTo(appRoot, "beforeend");
    this.page.addChild(video);

    const note = new NoteComponent("note", "notebody");
    // note.attachTo(appRoot, "beforeend");
    this.page.addChild(note);

    const todo = new TodoComponent("todo", "must todo");
    // todo.attachTo(appRoot, "beforeend");
    this.page.addChild(todo);

    // button dialog
    const imageBtn = document.querySelector("#new-image")! as HTMLButtonElement;
    imageBtn.addEventListener("click", () => {
      const dialog = new InputDialog();
      dialog.setOnCloseListener(() => {
        dialog.removeFrom(document.body);
      });
      dialog.setOnSubmitListener(() => {
        // 섹션을 만들어서 페이지에 추가
        dialog.removeFrom(document.body);
      });

      dialog.attachTo(document.body);
    });
  }
}

new App(document.querySelector(".document")! as HTMLElement);
