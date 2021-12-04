import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Box, Container, Button, Input
} from '@material-ui/core';
import axios from 'axios';
import RecResults from '../components/recommender/Contentrec';
const Simple = (props) => {
  const { history } = props;
  // React hook state variable - Dimensions
  const [dimensions, setDimensions] = React.useState(
    {
      num: '',
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
    iFormData.append('num', dimensions.num);

    // Axios variables required to call the predict API
    const headers = { 
      'Content-Type': 'application/json',
      'Authorization': `JWT ${localStorage.getItem('access')}`,
      'Accept': 'application/json'
  };
    const url = `${process.env.REACT_APP_API_URL}/simple/`;
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
    );
    // .catch(
    //   (error) => { alert(error); }
    // );
  };
  return (
    <>
      <Helmet>
        <title>Trending | Nextflex</title>
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
            justifyContent: 'center'
            }}
          >
            {/* input movie title */}

            {/* input number of movies to be recommended */}
            <Input
              placeholder="How Many movies?"
              value={dimensions.num}
              name="num"
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

      {      prediction ?
         ( <Box sx={{ pt: 3 }}>
            <RecResults dataObject={prediction} history={history}/>
          </Box>) : (
            <></>
          )
      }
        </Container>
      </Box>
    </>
  );
}


// const Simple = ({history}) => {
//   // React hook state variable - Dimensions
//   const [num, setNum] = React.useState('');
//   // React hook state variable - Prediction
//   const [prediction, setPrediction] = React.useState([]);

//   // Function to make the predict API call and update the state variable - Prediction
//   const handlePredict = () => {
//     // Submit Iris Flower measured dimensions as form data
//     const iFormData = new FormData();
//     iFormData.append('num', num);

//     // Axios variables required to call the predict API
//     const headers = { 
//       'Content-Type': 'application/json',
//       'Authorization': `JWT ${localStorage.getItem('access')}`,
//       'Accept': 'application/json'
//     };
//     const url = `${process.env.REACT_APP_API_URL}/simple/`;
//     const method = 'post';
//     const config = {
//       headers,
//       method,
//       url,
//       data: iFormData
//     };

//     // Axios predict API call
//     axios(config).then(
//       (res) => {
//         setPrediction(res.data);
//       }
//     );
//     // .catch(
//     //   (error) => { alert(error); }
//     // );
//   };
//   return (
//     <>
//       <Helmet>
//         <title>Recommendation | Nextflex</title>
//       </Helmet>
//       {/* Recommendation list Result */}
//       <Box
//         sx={{
//           backgroundColor: 'background.default',
//           minHeight: '100%',
//           py: 3
//         }}
//       >
//         <Container maxWidth={false}>

//           <Box
//             sx={{
//               display: 'flex',
//             justifyContent: 'center'
//             }}
//           >
//             {/* input number of movies to be recommended */}
//             <Input
//               placeholder="How Many movies?"
//               value={num}
//               onChange={(e) => setNum(e.target.value)}
//             />
//             <Button
//               color="primary"
//               variant="contained"
//               onClick={handlePredict}
//             >
//               Recommend
//             </Button>
//           </Box>
//           {/* Search Bar */}
//           {/* <RecToolbar /> */}
//           {/* Recommendation list Result */}
//           <Box sx={{ pt: 3 }}>
//             <RecResults dataObject={prediction} history={history} />
//           </Box>
//         </Container>
//       </Box>
//     </>
//   );
// }

export default Simple;
