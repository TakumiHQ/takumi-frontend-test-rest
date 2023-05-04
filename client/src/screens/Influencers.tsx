import {
  Avatar,
  Container,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@mui/material';
import { useEffect, useState } from 'react';

const Influencers: React.FC = () => {
  const [influencers, serInfluencers] = useState<Influencer[]>([]);

  return (
    <Container maxWidth="xl">
      <List>
        {influencers?.map((influencer) => (
          <ListItem key={influencer.id} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar src={influencer.avatar} />
            </ListItemAvatar>
            <ListItemText
              primary={`${influencer.firstName} ${influencer.lastName}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Influencers;
