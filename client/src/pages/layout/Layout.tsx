import { Avatar, Box, Button, Dropdown, Grid, IconButton, Input, ListDivider, ListItemDecorator, Menu, MenuButton, MenuItem, Slider, Stack, Typography, useTheme } from "@mui/joy";
import type { FunctionComponent, ReactNode } from 'react'
import Sidebar from "./Sidebar";
import EqualizerIcon from '@mui/icons-material/Equalizer';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActiveOutlined';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

type Props = {
  children: ReactNode
}

const Layout: FunctionComponent<Props> = (props) => {
  const theme = useTheme();
  const color = theme.colorSchemes.light.palette.neutral[50];
  return <>
    <Grid container spacing={2} columns={14} direction="row" justifyContent="space-between" px={1}>
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
    <Grid container spacing={2} columns={14}>
      <Grid xs={3} sm={3} md={2} lg={2} xl={2}>
        <Sidebar />
      </Grid>
      <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
        {props.children}
      </Grid>
    </Grid >
    <Box sx={{ position: "fixed", bottom: 0, width: "100%", background: color, zIndex: "1000" }}>

      <Stack
        alignItems='center'>
        <Box sx={{ padding: "10px 0 0 0", margin: 0 }}>
          <IconButton>
            <SkipPreviousIcon fontSize="large" />
          </IconButton>
          <IconButton>
            <PlayCircleIcon fontSize="large" />
          </IconButton>
          <SkipNextIcon fontSize="large" />
          <IconButton>
          </IconButton>
        </Box>
        <Slider
          defaultValue={0}
          step={0.00000001}
          min={0}
          max={10}
          valueLabelDisplay="auto"
          sx={{ maxWidth: "500px", padding: "10px 0 30px 0" }}
        />
      </Stack>
    </Box >
  </>
}

export default Layout;