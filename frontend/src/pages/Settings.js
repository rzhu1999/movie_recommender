import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import SettingsNotifications from '../components/settings/SettingsNotifications';

const SettingsView = () => (
  <>
    <Helmet>
      <title>Settings | Nextflex</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth="lg">
        <SettingsNotifications />
      </Container>
    </Box>
  </>
);

export default SettingsView;
