import React from 'react';
import ReactDOM from 'react-dom';
import ReviewApp from '../Reviews/src/Components/ReviewApp.jsx';
import Products from '../ProductDetails/src/components/Products.jsx';
import RelatedProducts from '../RelatedProducts/src/components/RelatedProducts.jsx';
import QA from '../QandA/src/QA.jsx';
import {createGlobalStyle} from 'styled-components';

const id = 14936;

export const GlobalStyle = createGlobalStyle`
  #app>div{
    box-sizing: border-box;
    margin: 30px 10%;
  }
`;

const App = () => (
  <>
    <Products />
    <RelatedProducts />
    <QA />
    <ReviewApp productId={id} />
    <GlobalStyle />
  </>
)

ReactDOM.render (
  <App />,
  document.getElementById('app')
)

// ReactDOM.render(
//   <Products productId={id} />,
//   document.getElementById('products'),
// );

// ReactDOM.render(
//   <ReviewApp productId={id} />,
//   document.getElementById('reviews'),
// );