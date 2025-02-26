import {getPaginatedProductsWithImages} from '@/actions';
import {ProductGrid, Title} from '@/components';

export default async function Home() {
  const {products} = await getPaginatedProductsWithImages();

  console.log(products);

  return (
    <>
      <Title
        title="Tienda"
        subtitle="Todos los productos"
        className="mb-2"
      ></Title>

      <ProductGrid products={products} />
    </>
  );
}
