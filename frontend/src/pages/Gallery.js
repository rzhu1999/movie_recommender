import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
// import ProductListToolbar from '../components/product/ProductListToolbar';
import MovieCard from '../components/product/MovieCard';
// import products from '../__mocks__/products';
import tmdbApi, { movieType } from '../api/tmdbApi';
// import apiConfig from '../api/apiConfig';


const Gallery = (props) => {
  const { history } = props;
  const [ movieItems, setMovieItems ] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      const params = {page: 1}
      try {
          const response = await tmdbApi.getMoviesList(movieType.top_rated, {params});
          setMovieItems(response.results.slice(0, 20));
          // console.log(response.results);
      } catch {
          console.log('error');
      }
  };
  getMovies();
  }, []);

  return(
  <>
    <Helmet>
      <title>Favorites | Nextflex</title>
    </Helmet>
    <Box
      sx={{
        // backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        {/* <ProductListToolbar /> */}
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {movieItems.map((item) => (
              <Grid
                item
                key={item.id}
                lg={4}
                md={6}
                xs={12}
              >
                <MovieCard product={item} history={history}/>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  </>
)};

export default Gallery;
