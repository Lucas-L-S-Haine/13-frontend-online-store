export async function getCategories() {
  // Implemente aqui
  const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(
  categoryId = '$CATEGORY_ID', query = '$QUERY',
) {
  console.log(query);
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const data = await response.json();
  console.log(data);
  return data;
}

// export async function getProductsFromQuery(query) {
//   // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
//   const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
//   const data = await response.json();
//   return data;
// }

// export async function getProductsFromCategory(categoryId) {
//   // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
//   const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`);
//   const data = await response.json();
//   return data;
// }
