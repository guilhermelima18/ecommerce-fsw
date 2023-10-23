import { Product } from "@prisma/client";
import { formatCurrency } from "./format-currency";

export interface ProductWithTotalPrice extends Product {
  totalPrice?: number;
}

export const productWithTotalPrice = (product: ProductWithTotalPrice) => {
  if (product.discountPercentage === 0) {
    return {
      ...product,
      totalPrice: product.basePrice,
    };
  }

  const totalDiscount =
    Number(product.basePrice) * (product.discountPercentage / 100);

  return {
    ...product,
    basePrice: formatCurrency(Number(product.basePrice)),
    totalPrice: formatCurrency(Number(product.basePrice) - totalDiscount),
  };
};
