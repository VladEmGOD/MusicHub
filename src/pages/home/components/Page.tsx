import { Button, Typography, Grid, Stack } from "@mui/joy"
import { increment, HomePageState } from '../behaviour/slice'
import { useDispatch } from "react-redux"
import OverflowCard from "./OverflowCard";
import { useAppSelector } from "store/hooks";

export const Page = () => {
  const dispatch = useDispatch();
  const { value } = useAppSelector(s => s.page as HomePageState);

  return (<>
    <Button onClick={() => dispatch(increment())}>CLICK ME!!</Button>
    <Typography level='h1'>{"Welcome :)"}</Typography>
    <Typography level="h2">{value}</Typography>
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
