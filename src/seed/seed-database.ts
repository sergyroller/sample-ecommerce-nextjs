import prisma from '../lib/prisma';
import {initialData} from './seed';

async function main() {
  // 1. Borrar registros previos

  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  // Category Add

  const {categories, products} = initialData;

  const categoriesData = categories.map((category) => ({
    name: category,
  }));

  await prisma.category.createMany({
    data: categoriesData,
  });

  const categoriesDB = await prisma.category.findMany();

  const categoriesMap = categoriesDB.reduce(
    (map, category) => {
      map[category.name.toLowerCase()] = category.id;

      return map;
    },
    {} as Record<string, string>
  ); // <string = shirt, string=categoryID>

  // Product Add

  products.forEach(async (product) => {
    const {type, images, ...rest} = product;
    const dbProduct = await prisma.product.create({
      data: {
        ...rest,
        categoryId: categoriesMap[type],
      },
    });

    // IMAGES

    const imagesData = images.map((image) => ({
      url: image,
      productId: dbProduct.id,
    }));

    await prisma.productImage.createMany({
      data: imagesData,
    });
  });

  console.log('Seed ejecutaedo correctamente');
}

(() => {
  if (process.env.NODE_ENV === 'production') return;

  main();
})();
