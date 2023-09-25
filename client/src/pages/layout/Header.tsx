import EqualizerIcon from '@mui/icons-material/Equalizer';
import LogoutIcon from '@mui/icons-material/Logout';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActiveOutlined';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Button, Dropdown, Grid, IconButton, Input, ListDivider, ListItemDecorator, Menu, MenuButton, MenuItem, Stack, Typography } from "@mui/joy";

export const Header = () => {
  return <Grid container spacing={2} columns={14} direction="row" justifyContent="space-between" px={1}>
    <Grid xs={3} sm={3} md={2} lg={2} xl={2}>
      <Typography level="h3" startDecorator={<EqualizerIcon />}>MusicHub</Typography>
    </Grid>

    <Grid>
      <Input
        placeholder="Search"
        sx={{ borderRadius: "50px" }}
        endDecorator={
          <IconButton variant="plain" color="neutral">
            <SearchIcon />
          </IconButton>
        }
      />
    </Grid>

    <Grid>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing={2}
      >
        <Button variant="plain" color="neutral" sx={{ p: "10px", borderRadius: "100%" }}>
          <NotificationsActiveIcon />
        </Button>
        <Dropdown>
          <MenuButton sx={{ p: 0, borderRadius: "100%" }} variant="plain">
            <Avatar src="https://www.covermesongs.com/wp-content/uploads/2019/10/Proclaimers.jpg" />
          </MenuButton>
          <Menu placement="bottom-end">
            <MenuItem>
              <ListItemDecorator>
                <PersonIcon />
              </ListItemDecorator>
              My account
            </MenuItem>
            <ListDivider />
            <MenuItem>
              <ListItemDecorator>
                <LogoutIcon />
              </ListItemDecorator>
              Log out
            </MenuItem>
          </Menu>
        </Dropdown>
      </Stack>
    </Grid>

  </Grid >
}