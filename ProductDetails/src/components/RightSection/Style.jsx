/* eslint-disable import/extensions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from 'react';
import Quantity from './Quantity.jsx';
import Size from './Size.jsx';
import { SelectedStyled, CircleCheckMark } from '../../elements/RightSection/BottomSection.element.jsx';
// eslint-disable-next-line react/prop-types
const Style = ({ style, getSelectedStyle, selectedStyleName }) => {
  // eslint-disable-next-line react/prop-types
  const { skus } = style;

  // list of objects keys
  const quantitySize = Object.keys(skus);

  // eslint-disable-next-line max-len
  const quantity = quantitySize.map((item, index) =>
    // console.log(skus[item])
    <Quantity key={index} quantity={skus[item].quantity} />);

  const size = quantitySize.map((item, index) =>
    // console.log(skus[item])
    <Size key={index} size={skus[item].size} />);


  return (
    <>
      {
        selectedStyleName === style.name ? (
          <CircleCheckMark />
        ) : null
      }
      <SelectedStyled color={style.name} onClick={() => getSelectedStyle(style.name)}>
        <h5>{style.name}</h5>
      </SelectedStyled>

      {/* <div className="quantiåty_size">
        {quantity}
        {size}
      </div> */}
    </>

  );
};

export default Style;
