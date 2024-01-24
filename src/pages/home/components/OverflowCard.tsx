import { AspectRatio, Card, CardContent, Link, Typography } from "@mui/joy"

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

export default OverflowCard;
