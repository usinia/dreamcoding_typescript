{
  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };
  // 특정한 타입만 제외하고 재사용하고 싶을 때 사용
  type VideoMetaData = Omit<Video, "url" | "data">;

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
