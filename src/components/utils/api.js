import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api';
const API_KEY = '30803999-2b9bdfa4d87cb87078f15d2d8';

export const fetchImagesWithQuery = async (searchQuery, pageNumber) => {
  try {
    const response = await axios.get(
      `/?q=${searchQuery}&page=${pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

// eslint-disable-next-line
export default { fetchImagesWithQuery };
