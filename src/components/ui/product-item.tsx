import Image from "next/image";
import { ArrowDownIcon } from "lucide-react";
import { ProductWithTotalPrice } from "@/helpers/productWithTotalPrice";
import { Badge } from "./badge";
import Link from "next/link";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

export const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <Link href={`/product/${product.slug}`} passHref>
      <div className="flex flex-col gap-4">
        <div className="bg-accent rounded-lg w-full h-[170px] flex items-center justify-center relative">
          <Image
            src={product.imageUrls}
            alt={product.name}
            width={0}
            height={0}
            sizes="100vw"
            className="w-auto max-w-[70%] h-auto"
            style={{ objectFit: "contain" }}
          />

          {product.discountPercentage > 0 && (
            <Badge className="absolute left-2 top-2 px-2 py-[2px]">
              <ArrowDownIcon size={14} /> {product.discountPercentage}%
            </Badge>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <p className="w-full text-sm overflow-hidden whitespace-nowrap text-ellipsis">
            {product.name}
          </p>

          <div className="flex items-center gap-2">
            {product.discountPercentage > 0 ? (
              <>
                <p className="font-semibold text-md">{product.totalPrice}</p>
                <p className="opacity-75 line-through text-xs">
                  {product.basePrice as any}
                </p>
              </>
            ) : (
              <p className="opacity-75 text-xs">{product.basePrice as any}</p>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};
