import {redirect} from 'next/navigation';
import {getPaginatedProductsWithImages} from '@/actions';
import {ProductGrid, Title} from '@/components';

interface Props {
  searchParams: {
    page?: string;
    take?: string;
  };
}

export default async function Home({searchParams}: Props) {
  // Use 'await' to wait for the promise to resolve.

  // Retrieve the page value, for example: ?page=1.
  const page = searchParams.page ? parseInt(searchParams.page ?? '') : 1;
  /* console.log({searchParams}); */

  const {products, currentPage, totalPages} =
    await getPaginatedProductsWithImages({page});

  console.log(currentPage, totalPages);

  // If products are empty, redirect to the home page.
  if (products.length === 0) {
    redirect('/');
  }

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
