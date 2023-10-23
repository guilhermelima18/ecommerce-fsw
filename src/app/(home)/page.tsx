import { prisma } from "@/services/prisma";
import { Categories } from "./components/categories";
import { ProductList } from "./components/product-list";
import { SectionTitle } from "./components/section-title";
import { PromoBanner } from "./components/promo-banner";

export default async function Home() {
  const productsDeals = await prisma.product.findMany({
    where: {
      discountPercentage: {
        gt: 0, // Maior que zero
      },
    },
  });

  const keyboards = await prisma.category.findMany({
    include: {
      products: true,
    },
    where: {
      slug: {
        equals: "keyboards",
      },
    },
  });

  const headphones = await prisma.category.findMany({
    include: {
      products: true,
    },
    where: {
      slug: {
        equals: "headphones",
      },
    },
  });

  return (
    <div className="flex flex-col gap-8 py-8">
      <PromoBanner
        src="/banner-home-01.png"
        alt="Até 55% de desconto esse mês"
      />

      <div>
        <Categories />
      </div>

      <div>
        <SectionTitle>Ofertas</SectionTitle>
        <ProductList products={productsDeals} />
      </div>

      <PromoBanner
        src="/banner-home-02.png"
        alt="Até 55% de desconto em mouses"
      />

      <div>
        <SectionTitle>Teclados</SectionTitle>
        <ProductList products={keyboards[0]?.products} />
      </div>

      <PromoBanner
        src="/banner-home-03.png"
        alt="Até 55% de desconto em headphones"
      />

      <div>
        <SectionTitle>Headphones</SectionTitle>
        <ProductList products={headphones[0]?.products} />
      </div>
    </div>
  );
}
