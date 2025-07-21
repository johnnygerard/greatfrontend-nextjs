import { ProductColor } from "@/type/e-commerce-api/product-color";

export type ProductImage = {
  product_id: string;
  color: ProductColor;
  image_url: string;
};
