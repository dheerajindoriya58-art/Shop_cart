import React from 'react'
import CartList from '../components/CartList';

function Product() {
    const products = [
        {
            id: 1,
            name: "Nike Air Max",
            price: 599,
            category: "Shoes",
            img: "https://m.media-amazon.com/images/I/51tSemtpLHL._SY500_.jpg",
            description: "Comfortable and stylish Nike Air Max shoes for everyday wear."
        },
        {
            id: 2,
            name: "Apple Watch Series 8",
            price: 399,
            category: "Electronics",
            img: "https://img5.gadgetsnow.com/gd/images/products/additional/large/G403258_View_1/accessories/smart-watches/apple-watch-series-8-gps-cellular-45mm-retina-oled-display-midnight-sport-band-smart-watch.jpg",
            description: "Latest Apple Watch Series 8 with health tracking and cellular features."
        },
        {
            id: 3,
            name: "Wooden Study Table",
            price: 799,
            category: "Furniture",
            img: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTq8QNVoo8XFpsb8oIjUgGXM4wwckh4zla9unGlqMPMn8XJSwkJNCWSbwb6A5_haG09MguryKAYibfg_kjakPRjrYNVoIBGyKD0jmjt130",
            description: "Elegant wooden study table perfect for home or office."
        },
        {
            id: 4,
            name: "Men's Cotton T-Shirt",
            price: 499,
            category: "Clothing",
            img: "https://m.media-amazon.com/images/I/71k-uB4eJOL._SY741_.jpg",
            description: "Soft and breathable men's cotton t-shirt in multiple colors."
        },
        {
            id: 5,
            name: "Samsung Galaxy Buds",
            price: 699,
            category: "Electronics",
            img: "https://m.media-amazon.com/images/I/41VvXzwPxGL._SX355_.jpg",
            description: "High-quality Samsung Galaxy Buds with immersive sound experience."
        }
    ];

    return (
        <div className="section">
            <p className="Check">Check Now</p>
            <h1 className="common-heading Featured">Our Feature Products</h1>

            <div className="container">
                <div className=" grid grid-four-cols product-card">
                    {products.map((p) => (
                        <CartList key={p.id} products={p} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Product;
