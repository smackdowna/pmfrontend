import { TLecture } from "../../../types/lecture.types";

/* eslint-disable @typescript-eslint/no-explicit-any */
export type TCourse = {
  author: string;
  basePrice: number;
  category: string;
  courseObjective: string;
  courseOverview: string;
  createdAt: string;
  description: string;
  discountedPrice: number;
  lectures: TLecture[];
  numOfVideos: number;
  poster: {
    public_id: string;
    url: string;
  };
  title: string;
  totalDuration: string;
  totalEnrolled: number;
  __v: number;
  _id: string;
};
