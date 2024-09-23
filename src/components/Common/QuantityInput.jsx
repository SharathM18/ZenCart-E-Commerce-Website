import "./QuantityInput.jsx";

const QuantityInput = ({ Quantity, setQuantity, stock }) => {
  return (
    <>
      <div className="quantity_input">
        <button
          className="quantity_input_btn hero_link"
          onClick={() => setQuantity((prev) => prev - 1)}
          disabled={Quantity <= 0}
        >
          -
        </button>
        <span className="quantity_input_count">{Quantity}</span>
        <button
          className="quantity_input_btn hero_link"
          onClick={() => setQuantity((prev) => prev + 1)}
          disabled={Quantity >= stock}
        >
          +
        </button>
      </div>
    </>
  );
};

export default QuantityInput;
