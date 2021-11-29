import { Helmet } from 'react-helmet';
import {
  Box,
  // Container,
  // Grid
} from '@material-ui/core';
// import AccountProfile from '../components/account/AccountProfile';
// import AccountProfileDetails from '../components/account/AccountProfileDetails';
import Myratings from '../components/recommender/Myratings';
import urat from   '../__mocks__/uratings';

const Account = ({history}) => (
  <>
    <Helmet>
      <title>Account | Nextflex</title>
    </Helmet>
    <Box sx={{ pt: 3 }}>
          <Myratings dataObject={urat} history={history}/>
    </Box>
  </>
);

export default Account;
