// CartItems.jsx
import React, { useContext } from 'react';
import './CartItems.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';


const CartItems = () => {
    const { getTotalCartAmount, all_product, cartItems, removeFromCart } = useContext(ShopContext);

    return (
        <div className='CartItems'>
            <div className="Cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                const quantityInCart = cartItems[e.id] || 0;

                if (quantityInCart > 0) {
                    return (
                        <div key={e.id}>
                            <div className="classitems-format">
                                <img src={e.image} alt="" className="carticon-product-icon" />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className="cartitems-quantity">{quantityInCart}</button>
                                <p>${e.new_price * quantityInCart}</p>
                                <img src={remove_icon} onClick={() => removeFromCart(e.id)} alt="Remove" />
                            </div>
                            <hr />
                        </div>
                    );
                }

                return null;
            })}

            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Totals</h1>
                    <div>
                        <div className="cartitems-total-item">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-item">
                            <h3>
                                Total
                            </h3>
                            <h3>${getTotalCartAmount()}</h3>
                        </div>
                        <button>Proceed To Checkout</button>
                    </div>
                    <div className="cartitems-promocode">
                        <p>If you have a promo code enter it here</p>
                        <div className="cartitems-promobox">
                            <input type="text" placeholder='Promocode' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartItems;
