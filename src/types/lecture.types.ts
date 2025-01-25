export type TLecture = {
    _id: string;
    title: string;
    description: string;
    video: {
      public_id: string;
      url: string;
    };
    videoDuration: string;
  };