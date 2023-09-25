import { Grid, useTheme } from "@mui/joy";
import type { FunctionComponent, ReactNode } from 'react';
import { Footer } from "./Footer";
import { Header } from "./Header";
import Sidebar from "./Sidebar";

type Props = {
  children: ReactNode
}

const Layout: FunctionComponent<Props> = (props) => {
  return <>
    <Header />
    <Grid container spacing={2} columns={14}>
      <Grid xs={3} sm={3} md={2} lg={2} xl={2}>
        <Sidebar />
      </Grid>
      <Grid xs={12} sm={12} md={12} lg={12} xl={12}>
        {props.children}
      </Grid>
    </Grid >
    <Footer />
  </>
}

export default Layout;