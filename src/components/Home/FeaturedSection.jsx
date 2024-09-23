import ProductsCard from "../Products/ProductsCard";
import "./FeaturedSection.css";

const FeaturedSection = () => {
  return (
    <>
      <section className="featured_section">
        <h1 className="featured_Product_title">Featured Products</h1>
        <div className="featured_products_list">
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
          <ProductsCard />
        </div>
      </section>
    </>
  );
};

export default FeaturedSection;
