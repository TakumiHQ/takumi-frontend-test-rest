import {
  Avatar,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { useState } from 'react';

const Brands: React.FC = () => {
  const [brands, setBrands] = useState<Brand[]>([]);

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
