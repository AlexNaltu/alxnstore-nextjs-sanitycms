export interface IPlaylist {
  _id: string;
  title: string;
  products: IProduct[];
}

export interface IProduct {
  _id: string;
  name: string;
  images: string[];
  description: string;
  category: string;
  colors: string[];
  thumbnail: string;
  sizes: ISize[];
  slug: string;
}

export interface ISize {
  size: string;
  price: number;
  _key: string;
}
