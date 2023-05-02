// motion
// type : image, video, note, task
// add, list, delete
// draggable

type Note = {
  type: "image" | "video" | "note" | "task";
  id?: number;
  title: string;
  content: string;
};

interface Motion {
  add(note: Note): void;
  remove(id: number): void;
  getList(): Note[];
}

class MotionImpl implements Motion {
  private list: Note[];
  constructor(list: Note[]) {
    this.list = list;
  }
  add(note: Note): Note {
    const n = { id: this.list.length, ...note };
    this.list.push(n);
    return n;
  }
  remove(id: number): void {
    this.list = this.list.filter((v) => v && v.id !== id);
  }
  getList(): Note[] {
    return this.list;
  }
}

// list & class
const motions: Note[] = [];
const actor: MotionImpl = new MotionImpl(motions);
let noteType: Note["type"];

// function
const layerToggle = (): void => {
  const layer: HTMLInputElement = document.querySelector(
    ".popup"
  ) as HTMLInputElement;
  if (layer.style.display === "block") layer.style.display = "none";
  else layer.style.display = "block";
};

const showLayer = (type: Note["type"]): void => {
  noteType = type;
  layerToggle();
  const content: HTMLElement = document.querySelector(
    ".popup .layer .title span.content"
  ) as HTMLElement;
  switch (type) {
    case "image":
    case "video":
      content.innerText = "URL";
      return;
    case "note":
    case "task":
      content.innerText = "BODY";
      return;
    default:
      const invalid: never = type;
      throw new Error(`${invalid} type is invalid`);
  }
};

const add = (): void => {
  const title: string = (<HTMLInputElement>(
    document.querySelector('[name="title"]')
  )).value;
  const content: string = (
    document.querySelector('[name="content"]') as HTMLInputElement
  ).value;

  if (title && content) {
    let note: Note = {
      type: noteType,
      title,
      content,
    };
    note = actor.add(note);
    draw(note);
    layerToggle();
  }
};

const remove = (id: number): void => {
  actor.remove(id);
  const dom = document.querySelector(`.note${id}`);
  if (dom) dom.remove();
};

const draw = (note: Note): void => {
  const list: HTMLElement = document.querySelector(".list") as HTMLElement;
  const dom = document.createElement("div");
  dom.classList.add(note.type, `note${note.id}`);
  dom.innerHTML = `${note.type} ${note.title} & ${note.content} <span onclick="remove(${note.id})">${note.id} x</span>`;
  list.appendChild(dom);
};
