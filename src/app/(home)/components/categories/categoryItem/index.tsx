import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { CategoriesIcon } from "@/helpers/categories-icons";
import { Category } from "@prisma/client";

interface CategoryItemProps {
  category: Category;
}

export const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`} passHref>
      <Badge
        variant="outline"
        className="py-3 flex justify-center items-center gap-2 rounded-lg"
      >
        {CategoriesIcon(category?.slug)}
        <span className="font-bold text-xs">{category.name}</span>
      </Badge>
    </Link>
  );
};
