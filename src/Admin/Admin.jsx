import React, { useState, useEffect } from 'react';
import './Admin.css';
import { fs, storage } from '../Config/Config';

const Admin = () => {
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [oldPrice, setOldPrice] = useState('');
    const [uploadImage, setUploadImage] = useState(null);

    const [successMsg, setSuccessMsg] = useState('');
    const [uploadError, setUploadError] = useState('');

    const [products, setProducts] = useState([]); // State to store the products
    const [deleteProductId, setDeleteProductId] = useState('');

    const type = ['image/jpeg', 'image/jpg', 'image/png'];

    // Function to fetch products from Firestore
    const fetchProducts = () => {
        fs.collection('Products')
            .get()
            .then((querySnapshot) => {
                const productsArray = [];
                querySnapshot.forEach((doc) => {
                    productsArray.push({ id: doc.id, ...doc.data() });
                });
                setProducts(productsArray);
            })
            .catch((error) => console.error('Error fetching products: ', error));
    };

    // Fetch products on component mount
    useEffect(() => {
        fetchProducts();
    }, []);

    const handleImageChange = (e) => {
        let selectedFile = e.target.files[0];

        if (selectedFile) {
            if (type.includes(selectedFile.type)) {
                setUploadImage(selectedFile);
                setUploadError('');
            } else {
                setUploadImage(null);
                setUploadError('Please select a valid image (JPG format)');
            }
        }
    };

    const handleAddProduct = (e) => {
        e.preventDefault();

        // Validation check
        if (!id || !name || !category || !newPrice || !oldPrice || !uploadImage) {
            setUploadError('Please fill in all the fields');
            return;
        }

        const uploadTask = storage.ref(`product-images/${uploadImage.name}`).put(uploadImage);

        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log(progress);
            },
            (error) => setUploadError(error.message),
            () => {
                storage
                    .ref('product-images')
                    .child(uploadImage.name)
                    .getDownloadURL()
                    .then((url) => {
                        fs.collection('Products')
                            .add({
                                id,
                                name,
                                category,
                                newPrice,
                                oldPrice,
                                url,
                            })
                            .then(() => {
                                setSuccessMsg('Product added successfully');
                                setId('');
                                setName('');
                                setCategory('');
                                setNewPrice('');
                                setOldPrice('');
                                setUploadImage(null);
                                setUploadError('');
                                // After adding a product, fetch and update the product list
                                fetchProducts();
                            })
                            .catch((error) => setUploadError(error.message));
                    })
                    .catch((error) => setUploadError(error.message));
            }
        );
    };

    const handleDeleteProduct = (productId) => {
        fs.collection('Products')
            .doc(productId)
            .delete()
            .then(() => {
                setSuccessMsg('Product deleted successfully');
                // After deletion, fetch and update the product list
                fetchProducts();
            })
            .catch((error) => setUploadError(error.message));
    };

    return (
        <div className="admin-panel">
            <h2>Welcome to the Admin Panel</h2>
            {successMsg && <p className="success-message">{successMsg}</p>}

            <div className="input-group">
                <label htmlFor="id">ID:</label>
                <input type="text" id="id" placeholder="Enter ID" onChange={(e) => setId(e.target.value)} value={id} />
            </div>

            <div className="input-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" placeholder="Enter Name" onChange={(e) => setName(e.target.value)} value={name} />
            </div>

            <div className="input-group">
                <label htmlFor="category">Category:</label>
                <input type="text" id="category" placeholder="Enter Category" onChange={(e) => setCategory(e.target.value)} value={category} />
            </div>

            <div className="input-group">
                <label htmlFor="newPrice">New Price:</label>
                <input type="text" id="newPrice" placeholder="Enter New Price" onChange={(e) => setNewPrice(e.target.value)} value={newPrice} />
            </div>

            <div className="input-group">
                <label htmlFor="oldPrice">Old Price:</label>
                <input type="text" id="oldPrice" placeholder="Enter Old Price" onChange={(e) => setOldPrice(e.target.value)} value={oldPrice} />
            </div>

            <div className="input-group">
                <label htmlFor="file">Upload Image:</label>
                <input type="file" id="file" accept="image/*" onChange={handleImageChange} />
            </div>

            <button type="button" onClick={handleAddProduct}>
                Submit
            </button>

            {uploadError && <p className="error-message">{uploadError}</p>}

            {/* Product List Section with Delete Buttons */}
            <div className="product-list-section">
                <h3>Product List</h3>
                {products.map((product) => (
                    <div key={product.id} className="product-item">
                        <p>ID: {product.id}</p>
                        <p>Name: {product.name}</p>
                        <p>Category: {product.category}</p>

                        {/* Delete Button for each product */}
                        <button type="button" onClick={() => handleDeleteProduct(product.id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>

            {uploadError && <p className="error-message">{uploadError}</p>}
        </div>
    );
};

export default Admin;
