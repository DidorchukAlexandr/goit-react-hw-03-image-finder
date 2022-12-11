import { Component } from "react";
import api from "./utils/api";
import { Searchbar } from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import ButtonLoadMore from './Button/Button';
import Loader from './Loader/Loader';

export class App extends Component {
  state = {
    searchQuery: '',
    pageNumber: 1,
    dataRequest: [],
    error: '',
    loader: false,
  };

onSearch = valueSearch => {
    const { searchQuery } = this.state;
    if (searchQuery !== valueSearch) {
      this.setState({ dataRequest: [], pageNumber: 1 });
    }

    this.setState({ searchQuery: valueSearch });
  };

 increaseNumberPages = () => {
    this.setState(prevState => ({
      pageNumber: prevState.pageNumber + 1,
    }));
  }; 

componentDidUpdate(_, prevState) {
    const { loader } = this.state;

    const { searchQuery, pageNumber } = this.state;
    if (
      prevState.searchQuery !== searchQuery ||
      prevState.pageNumber !== pageNumber
    ) {
      this.requestApi();
      this.setState({ loader: !loader });
    }
  }

requestApi = async () => {
    const { pageNumber, searchQuery } = this.state;

    try {
      const { dataRequest } = this.state;

      const request = await api.fetchImagesWithQuery(searchQuery, pageNumber);

      this.setState({
        dataRequest: [...dataRequest, ...request.hits],
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      const { loader } = this.state;
      this.setState({ loader: !loader });
    }
  };

render() {
    const { dataRequest, loader } = this.state;

    return (
      <div>
        {loader && <Loader />}
        <Searchbar onSearch={this.onSearch} />
        <ImageGallery dataApi={dataRequest} />
        {dataRequest.length > 11 ? (
          <ButtonLoadMore loadMore={this.increaseNumberPages} />
        ) : null}
      </div>
    );
  }
}

