import { useState } from "react";
import QuantityInput from "../Common/QuantityInput";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

import "./SingleProductPage.css";

const SingleProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [Quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const { data: product, error, isLoading } = useFetch(`/products/${id}`);
  console.log(product);

  return (
    <>
      {product && (
        <section className="single_product_section">
          <div className="single_products_images">
            <div className="single_product_thumbnails">
              {product.images.map((img, idx) => (
                <img
                  src={`http://localhost:5000/products/${img}`}
                  key={product._id}
                  alt={product.title}
                  onClick={() => setSelectedImage(idx)}
                  className={idx === selectedImage ? "active_img" : ""}
                />
              ))}
            </div>

            <div className="single_product_image_display">
              <img
                src={`http://localhost:5000/products/${product.images[selectedImage]}`}
                alt={product.images}
              />
            </div>

            <div className="single_product_details">
              <h1 className="single_product_title">{product.title}</h1>
              <p className="single_product_description">
                {product.description}
              </p>
              <p className="single_product_price">
                $ {product.price.toFixed(2)}
              </p>
              <div className="single_quantity_info">
                <p className="Quantity_title">Quantity: </p>
                <QuantityInput
                  Quantity={Quantity}
                  setQuantity={setQuantity}
                  stock={product.stock}
                />
              </div>
              <button className="add_Cart hero_link">Add to Cart</button>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default SingleProductPage;
