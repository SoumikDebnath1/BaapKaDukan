
import React, { useEffect, useState } from 'react';
import './Popular.css';
import { fs } from '../../Config/Config';

const Popular = () => {
    const [popularItems, setPopularItems] = useState([]);

    useEffect(() => {

        const fetchData = async () => {
            try {
                const snapshot = await fs.collection('Products').get();
                const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setPopularItems(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);
    return (
        <div className='popular'>
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-item">
                {popularItems.map((item, i) => (
                    <Item key={i} id={item.id} name={item.name} image={item.url} new_price={item.newPrice} old_price={item.oldPrice} />
                ))}
            </div>
        </div>
    );
}

export default Popular;
