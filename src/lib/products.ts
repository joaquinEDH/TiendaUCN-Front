import { Product } from "@/models/product";

export const products: Product[] = [
  {
    id: 1,
    name: "Polera UCN",
    price: 19000,
    imageUrl: "/generic.png",
  },
  {
    id: 2,
    name: "Gorro Universitario",
    price: 15000,
    imageUrl: "/generic.png",
  },
  {
    id: 3,
    name: "Mochila UCN",
    price: 49000,
    imageUrl: "/generic.png",
  },
  {
    id: 4,
    name: "Botella Termo",
    price: 25000,
    imageUrl: "/generic.png",
  },
];

export function getProductById(id: number) {
  return products.find((p) => p.id === id);
}