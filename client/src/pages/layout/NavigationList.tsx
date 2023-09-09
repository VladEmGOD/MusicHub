import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import { List, ListItem, ListItemButton, ListItemDecorator, ListItemContent } from '@mui/joy';

const NavigationList = () => {
  return <List>
    <ListItem>
      <ListItemButton>
        <ListItemDecorator>
          <HomeIcon />
        </ListItemDecorator>
        <ListItemContent>Home</ListItemContent>
        <KeyboardArrowRightIcon />
      </ListItemButton>
    </ListItem>
    <ListItem>
      <ListItemButton>
        <ListItemDecorator>
          <SearchIcon />
        </ListItemDecorator>
        <ListItemContent>Search</ListItemContent>
        <KeyboardArrowRightIcon />
      </ListItemButton>
    </ListItem>
  </List>
}

export default NavigationList;