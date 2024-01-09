import React, { useEffect, useState } from 'react';
import './NewCollections.css';
import { fs } from '../../Config/Config';
import Item from '../item/item';

const NewCollections = () => {
    const [newCollection, setNewCollection] = useState([]);

    useEffect(() => {
        // Fetch data from Firebase
        const fetchData = async () => {
            try {
                const snapshot = await fs.collection('Products').get();
                const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setNewCollection(data);
            } catch (error) {
                console.error('Error fetching data from Firebase:', error);
            }
        };

        fetchData();
    }, []); // Empty dependency array to ensure the effect runs only once

    return (
        <div className='new-collection'>
            <h1>NEW COLLECTION</h1>
            <hr />
            <div className="collections">
                {newCollection.map((item, i) => (
                    <Item
                        key={i}
                        id={item.id}
                        name={item.name}
                        image={item.url} // Assuming the image URL is stored in the 'url' field
                        new_price={item.newPrice}
                        old_price={item.oldPrice}
                    />
                ))}
            </div>
        </div>
    );
};

export default NewCollections;
