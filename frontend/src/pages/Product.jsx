import React from 'react';
import { useParams } from 'react-router-dom';
import ProductHd from '../components/ProductHd';
import all_products from '../assets/all_products';
import ProductDisplay from '../components/ProductDisplay';
import PopularProducts from '../components/PopularProducts';
import ProductDescription from '../components/ProductDescription';

const Product = () => {

  const { productId } = useParams();
  console.log("productId: ", productId);

  const product = all_products.find((e) => e.id === Number(productId));
  if (!product) {
    return <div>Product not found!</div>
  }

  return (
    <section>
      <div>
        <ProductHd product={product} />
        <ProductDisplay product={product} />
        <ProductDescription />
        <PopularProducts />
      </div>
    </section>
  )
}

export default Product;