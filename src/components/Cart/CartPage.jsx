import Table from "../Common/Table";
import QuantityInput from "../Common/QuantityInput";

import "./CartPage.css";

const CardPage = () => {
  return (
    <>
      <div className="cartPage_section">
        <div className="user_info">
          <div className="user_image">
            <img
              src="https://via.placeholder.com/500x500?text=Product+Image+1"
              alt=""
            />
          </div>
          <div>
            <p className="user_name">Sharath M</p>
            <p className="user_email">sharathm@gmail.com</p>
          </div>
        </div>

        <Table heading={["Item", "Price", "Quantity", "Total", "Remove"]}>
          <tbody>
            <tr>
              <td>iPhone 14 Pro</td>
              <td>$ 999</td>
              <td>
                <QuantityInput />
              </td>
              <td>1</td>
              <td>
                <i
                  className="bi bi-trash3-fill"
                  style={{ fontSize: "1rem" }}
                ></i>
              </td>
            </tr>
          </tbody>
        </Table>

        <table className="cart_bill">
          <tbody>
            <tr>
              <td>Subtotal</td>
              <td>$ 999</td>
            </tr>
            <tr>
              <td>Shipping Charge</td>
              <td>$ 6</td>
            </tr>
            <tr className="cart_bill_final">
              <td>Total</td>
              <td>$ 1005</td>
            </tr>
          </tbody>
        </table>

        <button className="cart_checkout hero_link">Checkout</button>
      </div>
    </>
  );
};

export default CardPage;
