import { Helmet } from 'react-helmet';
import React, { useState } from 'react';
import {
  Box, Container,
  CircularProgress,
} from '@material-ui/core';
import RecResults from '../components/recommender/Contentrec';
// import movies from '../__mocks__/movies';
import axios from 'axios';

const Explore = ({history}) => {
  const [prediction, setPrediction] = useState([]);
  const iFormData = new FormData();
    iFormData.append('num', 200);

    // Axios variables required to call the predict API
    const headers = { 
      'Content-Type': 'application/json',
      'Authorization': `JWT ${localStorage.getItem('access')}`,
      'Accept': 'application/json'
  };
    const url = `${process.env.REACT_APP_API_URL}/simple/`;
    const method = 'get';
    const config = {
      headers,
      method,
      url,
      data: iFormData
    };
    axios(config).then(
      (res) => {
        setPrediction(res.data);
      }
    );
return(
  <>
    <Helmet>
      <title>Recommendation | Nextflex</title>
    </Helmet>
    {/* Recommendation list Result */}
    
    
 {  iFormData ? 
  (<Box
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
          <RecResults dataObject={prediction} history={history}/>
        </Box>
      </Container>
    </Box>):(
      <Box sx={{ pt: 3 }}>
       <CircularProgress />
     </Box>

    )
    
    }
  </>
)};

export default Explore;
