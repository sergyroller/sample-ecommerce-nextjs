import { notFound } from "next/navigation";

import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";

const SeedProduct = initialData.products;


interface Props {
   params: {
      id: Category;
   }
}


export default async function Default({ params }: Props) {

   const { id } = await params;
   const products = SeedProduct.filter(product => product.gender === id);
   const labels: Record<Category, string>= {
      'men' : 'para hombres',
      'women' : 'para mujeres',
      'kid' : 'para niños',
      'unisex' : 'para todos'
   }

   if (!(id in labels)) {
      notFound();
   }


  const subtitles: Record<Category, string> = {
      'men': 'Encuentra lo último en moda masculina con nuestra selección de ropa para hombre. Desde camisetas y pantalones hasta chaquetas elegantes, ofrecemos prendas de calidad para cualquier ocasión.',
      'women': 'Descubre nuestra colección de ropa para mujer, diseñada para realzar tu estilo. Con opciones para el día a día o eventos especiales, aquí encontrarás moda versátil y actual.',
      'kid': ' Ropa cómoda y divertida para los más pequeños. Desde conjuntos casuales hasta prendas elegantes, tenemos todo lo que necesitan para cualquier ocasión.',
      'unisex': 'Moda inclusiva para todos los estilos y edades. Encuentra prendas versátiles y modernas para cada miembro de la familia en un solo lugar.'
  }

   return (
      <>
         <Title title={`Articulos ${ labels[id]}`}  subtitle={`${subtitles[id]}`} className="mb-2"></Title>
         <ProductGrid products={ products } />
         <h1>CategoryPage {id}</h1>
      </>
   );
}
