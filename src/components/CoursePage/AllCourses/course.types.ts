/* eslint-disable @typescript-eslint/no-explicit-any */
export type TCourse = {
  poster: {
    public_id: string;
    url: string;
  };
  _id: string;
  title: string;
  description: string;
  numOfVideos: number;
  category: string;
  basePrice: number;
  discountedPrice: number;
  createdAt: string;
  __v: number;
}
