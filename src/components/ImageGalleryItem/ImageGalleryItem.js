import PropTypes from 'prop-types';

import {
  ImageGalleryItemLi,
  ImageGalleryItemImage,
} from './ImageGalleryItem.styled';

export default function ImageGalleryItem({
  webformatURL,
  largeImageURL,
  elementSearch,
}) {
  return (
    <>
      <ImageGalleryItemLi onClick={() => elementSearch(largeImageURL)}>
        <ImageGalleryItemImage src={webformatURL} />
      </ImageGalleryItemLi>
    </>
  );
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string,
  largeImageURL: PropTypes.string,
  elementSearch: PropTypes.func,
};
