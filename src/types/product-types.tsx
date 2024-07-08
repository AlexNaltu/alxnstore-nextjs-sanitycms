export interface IPlaylist {
  _id: string;
  title: string;
  products: IProduct[];
}

export interface IProduct {
  _id: string;
  name: string;
  images: string[];
  price: number;
  description: string;
  thumbnail: string;
  sizes: ISize[];
}

export interface ISize {
  size: string;
  price: string;
  colors: string[];
  _key: string;
}
