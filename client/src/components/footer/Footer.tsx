import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import { Box, IconButton, Slider, Stack, useTheme } from "@mui/joy";

const Footer = () => {
  const theme = useTheme();
  const color = theme.colorSchemes.light.palette.background.body;

  return <Box sx={{ position: "fixed", bottom: 0, width: "100%", background: color, zIndex: "1000" }}>

    <Stack
      alignItems='center'>
      <Box sx={{ padding: "10px 0 0 0", margin: 0 }}>
        <IconButton>
          <SkipPreviousIcon fontSize="large" />
        </IconButton>
        <IconButton>
          <PlayCircleIcon fontSize="large" />
        </IconButton>
        <IconButton>
          <SkipNextIcon fontSize="large" />
        </IconButton>
      </Box>
      <Slider
        defaultValue={0}
        step={0.00000001}
        min={0}
        max={10}
        valueLabelDisplay="auto"
        sx={{ maxWidth: "500px", paddingTop: "0", paddingBottom: "30px" }}
      />
    </Stack>
  </Box >
}

export default Footer;