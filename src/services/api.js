export async function getCategories() {
  // Implemente aqui
  const response = await fetch(
    'https://api.mercadolibre.com/sites/MLB/categories',
  );
  const data = await response.json();
  return data;
}

export async function getProductsFromCategoryAndQuery(
  categoryId = '$CATEGORY_ID',
  query = '$QUERY',
) {
  // Implemente aqui! Quando o fizer, descomente os parâmetros que essa função recebe
  const response = await fetch(
    `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`,
  );
  const data = await response.json();
  return data;
}

export function getCount() {
  const product = localStorage.getItem('product');
  const list = JSON.parse(product);

  return list.reduce((acc, { count }) => {
    acc += count;
    return acc;
  }, 0);
}
