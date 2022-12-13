import { Menu } from '@mui/material';

function MenuComponent({ anchorEl, handleClose, children }) {
  return (
    <Menu
      id='basic-menu'
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={handleClose}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
      {children}
    </Menu>
  );
}

export default MenuComponent;