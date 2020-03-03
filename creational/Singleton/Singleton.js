const CreateProduct = (() => {
  let product;

  const assignProduct = () => {
    const product = new Object("Fidget Spinner");
    return product;
  };

  return {
    getInstance: () => {
      if (!product) {
        console.log("Creating the instance");
        product = assignProduct;
      }
      return product;
    }
  };
})();

const toyProduct = CreateProduct.getInstance();
const toyNewProduct = CreateProduct.getInstance();
const toyAnotherProduct = CreateProduct.getInstance();

if (toyNewProduct === toyProduct) {
  console.log("Created only one single toy");
}
