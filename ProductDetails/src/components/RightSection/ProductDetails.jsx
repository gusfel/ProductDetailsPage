/* eslint-disable react/prop-types */
// eslint-disable-next-line import/newline-after-import
import React from 'react';
// eslint-disable-next-line import/extensions
import BottomSection from '../../../server/BottomSection.jsx';
// eslint-disable-next-line import/extensions
import TopSection from './TopSection.jsx';

const ProductDetails = ({
  product, styles, getSelectedStyle, selectedStyleId, id, getQuantitySizeSelected,
}) => (
  <>
    <TopSection id={id} product={product} styles={styles} selectedStyleId={selectedStyleId} />
    <BottomSection
      styles={styles}
      getSelectedStyle={getSelectedStyle}
      selectedStyleId={selectedStyleId}
      getQuantitySizeSelected={getQuantitySizeSelected}
    />
  </>
);

export default ProductDetails;
