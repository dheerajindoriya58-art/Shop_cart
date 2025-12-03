import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

function Product() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then(setProducts);
    }, []);

    return (
        <div className="container">

            {products.map((p) => (
                <div className="grid grid-four-cols " key={p.id}>
                    <ProductCard product={p} />
                </div>
            ))}
        </div>

    );
}

export default Product;
