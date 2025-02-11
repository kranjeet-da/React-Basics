import React, { useState, useEffect } from "react";

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => {
  //       if (!res.ok) throw new Error("Failed to fetch products");
  //       return res.json();
  //     })
  //     .then((data) => {
  //       setProducts(data);
  //       // setLoading(false);
  //     })
  //     // .catch((error) => {
  //     //   setError(error.message);
  //     //   setLoading(false);
  //     // });
  // }, []);

  const produ = fetch("https://fakestoreapi.com/products")
  console.log(produ)

  // if (loading) return <div className="text-center text-xl font-semibold">Loading...</div>;

  // if (error) return <div className="text-center text-red-500">{error}</div>;

  return (
    <div >
      {produ.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.title} className="object-contain" />
          <h3 className="text-lg font-semibold mt-2">{product.title}</h3>
          <p className="text-gray-700 mt-1">${product.price}</p>
          <button className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition">
            View Details
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;