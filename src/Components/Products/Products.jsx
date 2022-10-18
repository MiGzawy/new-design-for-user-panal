import './style.css'
import {popularProducts} from '../../assists/Data/Data'
import React from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import styled from '@emotion/styled';


const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {popularProducts.map((product) => (
        <SingleProduct product={product} key={product.id} />
      ))}
    </Container>
  );
};

export default Products;