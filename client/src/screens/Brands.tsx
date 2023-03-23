import {
  Avatar,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { fetchBrands } from '../services/api';

const Brands: React.FC = () => {
  const [brands, setBrands] = useState<Brand[]>([]);

  useEffect(() => {
    (async () => {
      const data = await fetchBrands();
      if (data) {
        setBrands(data);
      }
    })();
  }, []);

  return (
    <Container maxWidth="xl">
      <List>
        {brands?.map((brand) => (
          <ListItem key={brand.id}>
            <ListItemAvatar>
              <Avatar src={brand.logo} />
            </ListItemAvatar>
            <ListItemText primary={brand.name} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Brands;
