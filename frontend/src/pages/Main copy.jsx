import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Grid
} from '@material-ui/core';
import { SwiperSlide, Swiper } from 'swiper/react/swiper-react';
// import ProductListToolbar from '../components/product/ProductListToolbar';
import MainCard from '../components/product/Maincard';
import Feat from '../components/product/Feat';
import tmdbApi, { movieType } from '../api/tmdbApi';

// import apiConfig from '../api/apiConfig';


const FavList = (props) => {
  const { history } = props;
  const [movieItems, setMovieItems] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      const params = {page: 2}
      try {
          const response = await tmdbApi.getMoviesList(movieType.popular, {params});
          setMovieItems(response.results.slice(0, 20));
          console.log(response.results);
      } catch {
          console.log('error');
      }
  };
  getMovies();

  }, []);

  return(
  <>
    <Helmet>
      <title> Nextflex</title>
    </Helmet>
    {/* =====featured===== */}
    
      <Container >
       
            <Swiper
                grabCursor={true}
                spaceBetween={10}
                slidesPerView={'auto'}
            >
            {movieItems.slice(0, 1).map((product) => (
               <SwiperSlide >
              
                <Feat 
                product={product}  history={history} 
                />
      
              </SwiperSlide>
            ))}

          </Swiper>
       
       
      </Container>
    
    {/* =====grids===== */}
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
            {movieItems.slice(1, 20).map((product) => (
              <Grid
                item
                key={product.id}
                lg={6}
                md={12}
                xs={12}
              >
                <MainCard 
                product={product}  history={history} 
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  </>
)};

export default FavList;
