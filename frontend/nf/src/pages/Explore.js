import { Helmet } from 'react-helmet';
import {
  Box, Container,
  // Button, Input
} from '@material-ui/core';
// import CustomerListResults from '../components/customer/CustomerListResults';
// import CustomerListToolbar from '../components/customer/CustomerListToolbar';
import RecResults from '../components/recommender/Contentrec';
import movies from '../__mocks__/movies';

const Explore = () => (
  <>
    <Helmet>
      <title>Recommendation | Nextflex</title>
    </Helmet>
    {/* Recommendation list Result */}
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>

        {/* <Box
          sx={{
            display: 'flex',
            // justifyContent: 'flex-end'
          }}
        > */}
        {/* input rec number */}
        {/* <Input placeholder="How Many movies?" />
          <Button
            color="primary"
            variant="contained"
          >
            Recommend
          </Button>
        </Box> */}
        {/* Search Bar */}
        {/* <RecToolbar /> */}
        {/* Recommendation list Result */}
        <Box sx={{ pt: 3 }}>
          <RecResults dataObject={movies} />
        </Box>
      </Container>
    </Box>
  </>
);

export default Explore;
