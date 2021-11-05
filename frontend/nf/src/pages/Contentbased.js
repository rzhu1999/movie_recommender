import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Box, Container, Button, Input
} from '@material-ui/core';
import axios from 'axios';
import RecResults from '../components/recommender/Contentrec';
import * as settings from '../settingsdj';

function Contentbased() {
  // React hook state variable - Dimensions
  const [dimensions, setDimensions] = React.useState(
    {
      title: '',
      number: '',
    }
  );
  // React hook state variable - Prediction
  const [prediction, setPrediction] = React.useState([]);

  // Function to update the Dimensions state upon slider value change
  const handleSliderChange = (e) => {
    const { name, value } = e.target;
    setDimensions((prevState) => (
      {
        ...prevState,
        [name]: value
      }));
    // console.log(dimensions);
  };

  // Function to make the predict API call and update the state variable - Prediction
  const handlePredict = () => {
    // Submit Iris Flower measured dimensions as form data
    const iFormData = new FormData();
    iFormData.append('title', dimensions.title);
    iFormData.append('number', dimensions.number);

    // Axios variables required to call the predict API
    // const headers = { Authorization: `Token ${props.token}` };
    const url = `${settings.API_SERVER}/content/`;
    const method = 'post';
    const config = {
      // headers,
      method,
      url,
      data: iFormData
    };

    // Axios predict API call
    axios(config).then(
      (res) => {
        setPrediction(res.data);
      }
    );
    // .catch(
    //   (error) => { alert(error); }
    // );
  };
  return (
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

          <Box
            sx={{
              display: 'flex',
            // justifyContent: 'flex-end'
            }}
          >
            {/* input movie title */}
            <Input
              placeholder="A movie title here"
              value={dimensions.title}
              name="title"
              onChange={handleSliderChange}
            />
            {/* input number of movies to be recommended */}
            <Input
              placeholder="How Many movies?"
              value={dimensions.number}
              name="number"
              onChange={handleSliderChange}
            />
            <Button
              color="primary"
              variant="contained"
              onClick={handlePredict}
            >
              Recommend
            </Button>
          </Box>
          {/* Search Bar */}
          {/* <RecToolbar /> */}
          {/* Recommendation list Result */}
          <Box sx={{ pt: 3 }}>
            <RecResults dataObject={prediction} />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Contentbased;