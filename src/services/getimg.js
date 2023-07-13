const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '17074451-935a1dfdbcca0fa80856ea2a8';

export const getImg = async searchImg => {
  const url = `${BASE_URL}?q=${searchImg}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  try {
    const response = await fetch(url);
    const imgData = await response.json();
    const processedData = imgData.hits.map(img => ({
      id: img.id,
      webformatURL: img.webformatURL,
      largeImageURL: img.largeImageURL,
    }));
    return processedData;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};
