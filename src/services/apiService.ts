import axios from 'axios';

export const fetchDataFromExternalAPI = async () => {
  // Substitua pelas URLs das APIs externas
  const apiUrls = [
    'https://api.exemplo1.com/data',
    'https://api.exemplo2.com/data',
    'https://api.exemplo3.com/data',
  ];

  const dataPromises = apiUrls.map(url => axios.get(url));
  const responses = await Promise.all(dataPromises);

  return responses.map(response => response.data);
};
