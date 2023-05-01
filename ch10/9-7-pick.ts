{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };
  // 원하는 타입만 제한적으로 재사용하고 싶을 때 사용
  type VideoMetaData = Pick<Video, "id" | "title">;

  function getVideo(id: string): Video {
    return {
      id,
      title: "video",
      url: "https://..",
      data: "byte-data..",
    };
  }

  function getVideoMetaData(id: string): VideoMetaData {
    return {
      id: id,
      title: "title",
    };
  }
}
