import {
  AppBar,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

export const SECTION_BRANDS = 'Brands';
export const SECTION_CAMPAIGNS = 'Campaigns';
export const SECTION_INFLUENCERS = 'Influencers';

interface Props {
  title: string;
  onChange: (section: string) => void;
}

const NavigationBar: React.FC<Props> = ({ title, onChange }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleMenu = (event: any) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const handleChange = (value: string) => {
    onChange(value);
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={handleMenu}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            id="appBar-label"
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            {title}
          </Typography>
        </Toolbar>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenu}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={() => handleChange(SECTION_BRANDS)}>
            Brands
          </MenuItem>
          <MenuItem onClick={() => handleChange(SECTION_CAMPAIGNS)}>
            Campaigns
          </MenuItem>
          <MenuItem onClick={() => handleChange(SECTION_INFLUENCERS)}>
            Influencers
          </MenuItem>
        </Menu>
      </AppBar>
    </Box>
  );
};

export default NavigationBar;
