export type Product = {
  title: string;
  reviews: number;
  price: number;
  image: string;
  discountedPrice: number;
  id: number;
  imgs?: {
    thumbnails: string[];
    previews: string[];
  };
};
