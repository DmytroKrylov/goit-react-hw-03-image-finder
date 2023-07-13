const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '935a1dfdbcca0fa80856ea2a8';

export const getImg = searchImg => {
  const url = `${BASE_URL}?q=${searchImg}&page=1&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

  fetch(url)
    .then(response => response.json())
    .then(img => {
      console.log(img);
    })
    .catch(error => {
      console.error('Error:', error);
    });
};
