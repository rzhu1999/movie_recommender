const apiConfig = {
  baseUrl: 'https://api.themoviedb.org/3/',
  apiKey: '774f231bf9f878b9f0ced575da92bd20',
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
};

export default apiConfig;
