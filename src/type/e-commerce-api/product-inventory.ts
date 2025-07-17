export type ProductInventory = {
  product_id: string;
  sku: string;
  color: string;
  size: string | number | null;
  list_price: number;
  discount: number | null;
  discount_percentage: number | null;
  sale_price: number;
  sold: number;
  stock: number;
};
