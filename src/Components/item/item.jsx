// Item.js
import React from 'react';
import './Item.css';
import { Link } from 'react-router-dom'; // Assuming you are using React Router

const Item = (props) => {
    return (
        <div className='item'>
            <Link to={`/product/${props.id}`} className="item-link">
                <img
                    onClick={() => window.scrollTo(0, 0)}
                    src={props.image}
                    alt={props.name}
                    className="item-image"
                />
            </Link>
            <p className="item-name">{props.name}</p>
            <div className='item-prices'>
                <div className="item-price-new">
                    Rs.{props.new_price}
                </div>
                <div className="item-price-old">
                    Rs.{props.old_price}
                </div>
            </div>
        </div>
    );
}

export default Item;
