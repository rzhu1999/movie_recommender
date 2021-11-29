import React, {useState} from 'react';
import { Helmet } from 'react-helmet';
import {
  Box, Container, Button, Input, Typography
} from '@material-ui/core';
import axios from 'axios';
// import RecResults from '../components/recommender/Contentrec';
import Ratingsrec from '../components/recommender/Ratingsrec';

const Ratings = (props) => {
  const { history } = props;
  // React hook state variable - Dimensions
  // const [dimensions, setDimensions] = React.useState(
  //   {
  //     number: '',
  //   }
  // );
  // React hook state variable - Prediction
  const [prediction, setPrediction] = useState([]);

  // Function to update the Dimensions state upon slider value change
  // const handleSliderChange = (e) => {
  //   const { name, value } = e.target;
  //   setDimensions((prevState) => (
  //     {
  //       ...prevState,
  //       [name]: value
  //     }));
  //   // console.log(dimensions);
  // };

  // Function to make the predict API call and update the state variable - Prediction
  const handlePredict = () => {
    // Submit Iris Flower measured dimensions as form data
    const userid = '16';
    const iFormData = new FormData();
    // iFormData.append('userid', dimensions.number); //original
    iFormData.append('userid', userid);

    // Axios variables required to call the predict API
    const headers = { 
      'Content-Type': 'application/json',
      'Authorization': `JWT ${localStorage.getItem('access')}`,
      'Accept': 'application/json'
  };
    const url = `${process.env.REACT_APP_API_URL}/ratings/`;
    const method = 'post';
    const config = {
      headers,
      method,
      url,
      data: iFormData
    };

    // Axios predict API call
    axios(config).then(
      (res) => {
        setPrediction(res.data);
      }
    )
    .catch(
      (error) => { console.log(error); }
    );


   

  };
  return (
    <>
      <Helmet>
        <title>Recommendation | Nextflex</title>
      </Helmet>
      {/* Recommendation list Result */}
      <Container maxWidth={false} style={{
      marginTop: '80px'}}>
        <Box
    sx={{
      marginTop: '30',
      display: 'flex',
    justifyContent: 'center'
    }}
  >
        <Typography variant='h1' 
        style={{
          marginBottom: '10px',
          textTransform: 'uppercase',
        }}>Our Top Picks for you</Typography>
    </Box>
      <Box
    sx={{
      marginTop: '30',
      display: 'flex',
    justifyContent: 'center'
    }}
  >
    
      {/* <Input
      placeholder="userid"
      value={dimensions.number}
      name="number"
      onChange={handleSliderChange}
    /> */}
    <Button
      color="primary"
      variant="contained"
      onClick={handlePredict}
    >
      Show me
    </Button>
    </Box>
    
    {prediction?
    
    (prediction.slice(0,10).map((mitem) =>

     (
       <Box sx={{ pt: 3 }}>
          <Ratingsrec dataObject={prediction} history={history}/>
      </Box>
     ) )
     )
     :<></>
     
     }
 </Container>
    </>
  );
}

export default Ratings;
