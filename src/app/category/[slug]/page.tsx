import { Badge } from "@/components/ui/badge";
import { ProductItem } from "@/components/ui/product-item";
import { CategoriesIcon } from "@/helpers/categories-icons";
import { productWithTotalPrice } from "@/helpers/productWithTotalPrice";
import { prisma } from "@/services/prisma";

interface CategoryPageProps {
  params: {
    slug: string;
  };
}

export default async function CategoryPage({
  params: { slug },
}: CategoryPageProps) {
  const category = await prisma.category.findMany({
    include: {
      products: true,
    },
    where: {
      slug,
    },
  });

  if (!category) {
    return null;
  }

  return (
    <div className="p-5 flex flex-col gap-8">
      <Badge
        className="w-fit gap-1 text-base uppercase border-2 border-primary px-3 py-2"
        variant="outline"
      >
        {CategoriesIcon(slug)}
        {slug}
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {category[0].products.map((product) => (
          <ProductItem
            key={product.id}
            product={productWithTotalPrice(product) as any}
          />
        ))}
      </div>
    </div>
  );
}
