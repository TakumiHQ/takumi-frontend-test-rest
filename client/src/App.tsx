import { Container } from '@mui/material';
import Brands from './screens/Brands';
import NavigationBar, {
  SECTION_BRANDS,
  SECTION_INFLUENCERS,
} from './components/NavigationBar';
import { useState } from 'react';
import Influencers from './screens/Influencers';

function App() {
  const [sectionTitle, setSectionTitle] = useState(SECTION_BRANDS);

  const handleNavChange = (value: string) => setSectionTitle(value);

  return (
    <>
      <NavigationBar title={sectionTitle} onChange={handleNavChange} />
      <Container maxWidth="xl">
        {sectionTitle === SECTION_BRANDS && <Brands />}
        {sectionTitle === SECTION_INFLUENCERS && <Influencers />}
      </Container>
    </>
  );
}

export default App;
