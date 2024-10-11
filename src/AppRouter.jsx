import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

function AppRouter() {
  const [showModal, setShowModal] = useState(false);
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [productDetails, setProductDetails] = useState('');

  const handleAddProduct = () => {
    setShowModal(true);
  };

  const handleSubmit = () => {
    // ฟังก์ชันที่จะใช้จัดการการเพิ่มสินค้า
    console.log({ productName, price, productDetails });
    setShowModal(false); // ปิด modal หลังจาก submit
  };

  return (
    <Router>
      <div>
        <button onClick={handleAddProduct} className="bg-blue-500 text-white p-2 rounded">
          Add Product
        </button>

        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg">
              <h2 className="text-lg font-bold mb-4">Add New Product</h2>
              <div className="mb-4">
                <label>Product Name</label>
                <input
                  type="text"
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="border border-gray-300 p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label>Price</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="border border-gray-300 p-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label>Product Details</label>
                <textarea
                  value={productDetails}
                  onChange={(e) => setProductDetails(e.target.value)}
                  className="border border-gray-300 p-2 w-full"
                />
              </div>
              <div className="flex justify-end">
                <button
                  onClick={handleSubmit}
                  className="bg-green-500 text-white p-2 rounded mr-2"
                >
                  Submit
                </button>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-red-500 text-white p-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default AppRouter;
