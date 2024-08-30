const searchByName = (products, search) => {
  if (!search) return products;
  const searchedNameProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search)
  );

  return searchedNameProducts;
};
const SearchByPrice = (products, search) => {
  if (!search) return products;
  const searchedByPrice = products.filter(
    (product) => product.price === search
  );
  return searchedByPrice;
};

const filterProducts = (products, category) => {
  if (!category) return products;
  const filteredProducts = products.filter(
    (product) => product.type === category
  );
  return filteredProducts;
};

export { searchByName, SearchByPrice, filterProducts };
