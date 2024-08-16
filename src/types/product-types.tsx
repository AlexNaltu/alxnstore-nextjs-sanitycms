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
  category: Category[];
  colors: IColors[];
  thumbnail: string;
  variants: IVariants[];
  slug: string;
  quantity: number;
  variant_id: string;
  size: string;
  price: string;
  color_: string;
  color_Id: string;
  url: string;
}

export interface IColors {
  color: string;
  colorId: string;
}
export interface IVariants {
  size: string;
  price: number;
  variant_id: string;
}

export interface StateProps {
  shopping: {
    productData: IProduct[];
    userInfo: {};
    orderData: {
      order: IProduct[];
    };
  };
}

export interface Category {
  category: string;
}
