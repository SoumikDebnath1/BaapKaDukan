import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import Item from '../item/item'
const RelatedProducts = () => {
    return (
        <div className='relatedProducts'>
            <h1>Related products</h1>
            <hr />
            <div className="relatedproduct-item">
                {data_product.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price
                        ={item.new_price} old_price={item.old_price} />

                })}
            </div>
        </div>
    )
}

export default RelatedProducts
