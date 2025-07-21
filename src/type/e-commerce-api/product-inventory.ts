import { ProductColor } from "@/type/e-commerce-api/product-color";

export type ProductInventory = {
  product_id: string;
  sku: string;
  color: ProductColor;
  size: string | number | null;
  list_price: number;
  discount: number | null;
  discount_percentage: number | null;
  sale_price: number;
  sold: number;
  stock: number;
};
