import { Box, Chip, List, ListItem, Sheet } from '@mui/joy';

const ChipBar = () => {
  return <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Chip size="sm" onClick={function () { alert('clicked on chip') }} >Playlists</Chip>
    <Chip size="sm" onClick={function () { alert('clicked on chip') }} >Albums</Chip>
    <Chip size="sm" onClick={function () { alert('clicked on chip') }} >Artists</Chip>
  </Box>
}

export default ChipBar;