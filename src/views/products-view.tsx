import { ProductCard } from "@/components";
import { products } from "@/lib/products";

export default function ProductsView() {
  return (
    <div className="flex flex-col gap-y-4">
      <h1 className="flex justify-center items-center text-5xl p-2 italic">
        Catálogo Tienda UCN
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}