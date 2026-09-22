import type { Product } from "../../app/models/product";

type Props = {
  products: Product[];
};

export default function Catalog({ products }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {products.map((item) => (
        <div key={item.id} className="border p-4 rounded-lg bg-white shadow-sm">
          <h3 className="font-semibold text-lg">{item.name}</h3>
          <p className="text-gray-500 text-sm">SKU: {item.sku}</p>
          <p className="text-red-600 font-bold mt-2">
            {item.price.toLocaleString("vi-VN")}₫
          </p>
        </div>
      ))}
    </div>
  );
}