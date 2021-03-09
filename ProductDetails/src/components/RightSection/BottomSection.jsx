/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import StyleThumbnails from './StyleThumbnails.jsx';
import QuanityAndSize from './QuanityAndSize.jsx';
import {
  AddToBag, Bag, StarButton, FavStar, StyleValue, StyleLegend, ErrorMessage,
} from '../../elements/RightSection/BottomSection.element.jsx';

// eslint-disable-next-line react/prop-types
const BottomSection = ({
  styles, getSelectedStyle, selectedStyleId, getQuantitySizeSelected,
  getMainCurrent,
}) => {
  const [clicked, setClicked] = useState(false);
  const [likeClicked, setLikeClicked] = useState(false);
  const [sizeQuantitySelected, setSizeQuantitySelcted] = useState(false);
  const [errorMesShowed, setErrorMesShowed] = useState(false);

  if (!Array.isArray(styles) || styles.length <= 0) {
    return null;
  }
  const getClicked = (click) => {
    setClicked(click);
  };

  const getLikeClicked = (click) => {
    setLikeClicked(click);
  };

  const getSizeQuantitySelected = (selected) => {
    setSizeQuantitySelcted(selected);
  };

  const getErrorMessageShowed = (messageShowed) => {
    setErrorMesShowed(messageShowed);
  };
  console.log(styles[0].style_id);

  const styledThumbnails = styles.map(
    (item, index) => (
      <StyleThumbnails
        key={item.style_id}
        index={index}
        style={item}
        getSelectedStyle={getSelectedStyle}
        getClicked={getClicked}
        selectedStyleId={selectedStyleId}
        getMainCurrent={getMainCurrent}

      />
    ),
  );
  const styledQuanityAndSize = styles.map(
    (item) => (
      <QuanityAndSize
        key={item.style_id}
        style={item}
        getSelectedStyle={getSelectedStyle}
        selectedStyleId={selectedStyleId}
        clicked={clicked}
        getSizeQuantitySelected={getSizeQuantitySelected}
        getLikeClicked={getLikeClicked}
        getClicked={getClicked}
        getErrorMessageShowed={getErrorMessageShowed}
      />
    ),
  );

  const selectedStyleName = styles.filter((item) => item.style_id === selectedStyleId);

  const handleBagAdd = () => {
    if (!clicked) {
      setClicked(true);
    }
  };
  if (clicked && sizeQuantitySelected) {
    getQuantitySizeSelected(1);
    setClicked(false);
  }
  const handleClickLike = () => {
    setLikeClicked(!likeClicked);
    if (!sizeQuantitySelected) {
      setErrorMesShowed(true);
    }
  };

  return (
    <>
      <StyleLegend>
        style:
        {
          selectedStyleName.length !== 0 && (
            <StyleValue color={selectedStyleName[0].name}>
              {selectedStyleName[0].name.toUpperCase()}
            </StyleValue>
          )
        }
      </StyleLegend>
      <div className="style" style={{ display: 'flex', flexWrap: 'wrap' }}>
        {styledThumbnails}
      </div>
      <div>
        {styledQuanityAndSize}
        <AddToBag>
          <Bag onClick={handleBagAdd}>
            ADD TO BAG
          </Bag>
          <StarButton
            onClick={handleClickLike}
            sizeQuantitySelected={sizeQuantitySelected}
            disabled={errorMesShowed}
          >
            <FavStar
              likeClicked={likeClicked}
              sizeQuantitySelected={sizeQuantitySelected}
            />
          </StarButton>
          {
            !sizeQuantitySelected && likeClicked
            && (
              <ErrorMessage>
                Please select your Size to add this item to your wish list.
              </ErrorMessage>
            )
          }
        </AddToBag>
      </div>
    </ >
  );
};

export default BottomSection;
