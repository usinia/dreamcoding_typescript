{
  type Video = {
    title: string;
    author: string;
  };
  /*
  type VideoOptional = {
    title?: string;
    author?: string;
  };
  type VideoReadOnly = {
    readonly title: string;
    readonly author: string;
  };*/

  // map type
  //   [1, 2].map((item) => item * item); // [1,4]
  type Optional<T> = {
    // [] // for...in
    [P in keyof T]?: T[P];
  };
  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };
  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = {
    title: "devil wears prada",
    // animal: "", // error occurred
    // author is optional
  };

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = {
    name: "dog",
  };
  animal.name = "cat";

  const video: ReadOnly<Video> = {
    title: "willy wongka",
  };
  // video.title = "hello"; // errorr occurred

  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: null,
    author: null,
  };

  // typescript 문서
  type Proxy<T> = {
    get(): T;
    set(value: T): void;
  };
  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };
}
