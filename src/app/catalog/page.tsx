import { ShapesIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { prisma } from "@/services/prisma";
import { CategoryItem } from "./components/category-item";

export default async function CatalogPage() {
  const categories = await prisma.category.findMany();

  return (
    <div className="flex flex-col p-5 gap-8">
      <Badge
        className="w-fit gap-1 text-base uppercase border-2 border-primary px-3 py-2"
        variant="outline"
      >
        <ShapesIcon size={16} />
        Catálogo
      </Badge>

      <div className="grid grid-cols-2 gap-8">
        {categories.map((category) => (
          <CategoryItem key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}
