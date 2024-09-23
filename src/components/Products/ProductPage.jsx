import ProductsSidebar from "./ProductsSidebar";

import "./ProductPage.css";
import ProductsList from "./ProductsList";

const ProductPage = () => {
  return (
    <>
      <div className="product_page">
        <ProductsSidebar />
        <ProductsList />
      </div>
    </>
  );
};

export default ProductPage;
