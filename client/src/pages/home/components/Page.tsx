import { Button, Typography } from "@mui/joy"
import { increment } from '../behaviour/slice'
import { useDispatch, useSelector } from "react-redux"
import { HomePage } from "../behaviour/types";
import { Grid, Stack } from '@mui/joy';
import OverflowCard from "./OverflowCard";

export const Page = () => {
  const dispatch = useDispatch();
  const value = useSelector(s => (s as HomePage).value);

  return (<>
    <Typography level="body-lg">{value}</Typography>
    <Button onClick={() => dispatch(increment())}>CLICK ME!!</Button>
    <Typography level='h1'>{"Welcome :)"}</Typography>
    <Grid>
      <Typography level='h3'>For you</Typography>
      <Stack
        direction="row"
        flexWrap="wrap"
        width="100%"
        spacing={2}
      >
        <OverflowCard />
        <OverflowCard />
        <OverflowCard />
        <OverflowCard />
      </Stack>
    </Grid >
  </>)
}
