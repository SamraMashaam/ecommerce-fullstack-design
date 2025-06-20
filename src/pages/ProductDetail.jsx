import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProductDetail() {
  const { id } = useParams(); // ID from URL (as string)
  const productId = parseInt(id); // Convert to number

  const products = [
    { id: 1, name: 'Wireless Headphones', price: '$89.99', image: 'https://via.placeholder.com/300x200', rating: 4.5, description: 'A Reliable product' },
    { id: 2, name: 'Smartwatch', price: '$129.00', image: 'https://via.placeholder.com/300x200', rating: 4.2, description: 'A Reliable product' },
    { id: 3, name: 'Action Camera', price: '$149.50', image: 'https://via.placeholder.com/300x200', rating: 4.7, description: 'A Reliable product' },
    { id: 4, name: 'Bluetooth Speaker', price: '$49.00', image: 'https://via.placeholder.com/300x200', rating: 4.0, description: 'A Reliable product' },
    { id: 5, name: 'Gaming Keyboard', price: '$69.99', image: 'https://via.placeholder.com/300x200', rating: 4.3, description: 'A Reliable product' },
    { id: 6, name: '1TB SSD', price: '$119.00', image: 'https://via.placeholder.com/300x200', rating: 4.8, description: 'A Reliable product' }
  ];

  const product = products.find(p => p.id === productId); // Find the product

  if (!product) {
    return (
      <div>
        <Header />
        <div className="p-8 text-center text-red-600 text-lg">
          Product not found.
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Header />
      <section className="px-4 py-8 max-w-6xl mx-auto flex flex-col md:flex-row gap-8">
        <div className="flex-1">
          <img src={product.image} alt={product.name} className="w-full h-auto object-contain rounded shadow" />
        </div>
        <div className="flex-1 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
          <p className="text-xl text-blue-600 font-semibold">{product.price}</p>
          <p className="text-yellow-500">⭐ {product.rating} / 5</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">Add to Cart</button>
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-2">Product Description</h3>
            <p className="text-gray-600 leading-relaxed">{product.description}</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
