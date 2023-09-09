import { Avatar, Grid, List, ListItem, ListItemButton, ListItemContent, ListItemDecorator, ListSubheader, Sheet, Typography } from "@mui/joy";
import type { FunctionComponent, ReactNode } from 'react'
import Sidebar from "./Sidebar";

type Props = {
  children: ReactNode
}

const Layout: FunctionComponent<Props> = (props) => {
  return <>
    <Grid container spacing={2}>
      <Grid
        md={2}
        lg={2}
      >
        <Sidebar />
      </Grid>
      <Grid
        md={10}
        lg={10}
      >
        {props.children}
      </Grid>
    </Grid >
  </>
}

export default Layout;