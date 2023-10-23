import { prisma } from "@/services/prisma";
import { CategoryItem } from "./categoryItem";

export const Categories = async () => {
  const categories = await prisma.category.findMany();

  return (
    <div className="grid grid-cols-2 gap-y-2 gap-x-4">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};