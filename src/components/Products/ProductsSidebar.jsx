import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import "./ProductsSidebar.css";

const ProductsSidebar = () => {
  const { data: category, error, isLoading } = useFetch("/category");

  return (
    <>
      <aside className="product_sidebar">
        <h2 className="product_sidebar_title">Category</h2>

        <div className="category_links">
          {category &&
            category.map((category) => (
              <Link
                to={`/products?category=${category.name}`}
                key={category._id}
              >
                <img
                  src={`http://localhost:5000/category/${category.image}`}
                  alt={category.name}
                />
                <p>{category.name}</p>
              </Link>
            ))}
        </div>
      </aside>
    </>
  );
};

export default ProductsSidebar;
