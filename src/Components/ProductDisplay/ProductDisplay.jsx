import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'
const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);
    return (
        <div className='productDisplay'>
            <div className="productDisplay-left">
                <div className="productDisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />


                </div>
                <div className="productDisplay-img">
                    <img src={product.image} alt="" className="prodictDisplay-main-img" />
                </div>
            </div>
            <div className="productDisplay-rignt">
                <h1>{product.name}</h1>
                <div className="prodictDisplay-right-star">
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className="productdisplay-right-price">

                    <div className="productdisplay-right-price-old">${product.old_price}</div>
                    <div className="prodicedisplay-right-price-new">${product.new_price}</div>
                </div>
                <div className="productdisplay-right-description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis accusamus, ipsum, recusandae magnam vero, unde distinctio voluptatum facilis quam est incidunt doloremque odio libero animi nihil ea laboriosam autem cumque ut tempora repellat sit accusantium. Incidunt repellat placeat natus optio.
                </div>
                <div className="productdisplay-right-size">
                    <h1>Select size</h1>
                    <div className="productdisplay-right-size">
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                <p className="productdisplay-right-category"><span>Categor:</span>Women,Tshirt,Crop top</p>
                <p className="productdisplay-right-category"><span>Tags:</span>Modern ,letest</p>
            </div>
        </div>
    )
}

export default ProductDisplay
