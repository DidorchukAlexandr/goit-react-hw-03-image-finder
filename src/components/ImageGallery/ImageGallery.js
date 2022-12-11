import PropTypes from 'prop-types';
import { Component } from 'react';
import Modal from 'components/Modal/Modal';
import { ImageGalleryList } from './ImageGallery.style';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

export default class ImageGallery extends Component {
  state = {
    urlEl: '',
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  elementSearch = urlImg => {
    this.setState({ urlEl: urlImg });

    this.toggleModal();
  };

  resetUrl = () => {
    this.setState({ urlEl: '' });
  };

  render() {
    const { urlEl, showModal } = this.state;

    const { dataApi } = this.props;
    return (
      <>
        <ImageGalleryList>
          {dataApi.length !== 0
            ? dataApi.map(({ webformatURL, id, largeImageURL }) => (
                <ImageGalleryItem
                  key={id}
                  webformatURL={webformatURL}
                  largeImageURL={largeImageURL}
                  elementSearch={this.elementSearch}
                />
              ))
            : null}
        </ImageGalleryList>

        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={urlEl} alt="" />
          </Modal>
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  dataApi: PropTypes.arrayOf(PropTypes.object),
};
