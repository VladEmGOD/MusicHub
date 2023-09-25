import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import { AspectRatio, Grid, Stack } from '@mui/joy';

function App() {
  return (<>
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
  </>
  )
}

const OverflowCard = () => {
  return (
    <Card variant="outlined">
      <CardContent sx={{ marginBottom: "2 em" }} >
        <AspectRatio
          variant="outlined"
          ratio="4/3"
          sx={{
            width: 200,
            bgcolor: 'background.level2',
            borderRadius: 'md',
          }}>
          <img src='https://images.kerrangcdn.com/images/Rammstein_Rosenrot.jpg?auto=compress&fit=max&w=1200' />
        </AspectRatio>
        <Typography level='h3'>Rosenrot</Typography>
        <Link href="#" color="neutral" variant="plain">Rammstein</Link>
      </CardContent>
    </Card >
  );
}

export default App;
