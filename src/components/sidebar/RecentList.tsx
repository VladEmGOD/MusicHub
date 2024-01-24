import { List, ListItem, ListItemButton, ListItemDecorator, ListItemContent, Avatar, Typography } from '@mui/joy';

const RecentList = () => {
  return <List
    aria-labelledby="ellipsis-list-demo"
    sx={{ '--ListItemDecorator-size': '56px' }}
  >
    <RecentItem
      avatarSrc=''
      title='Liked songs'
      type='Playlist'
    />

    <RecentItem
      avatarSrc='https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Rammstein_wallpaper_logo.png/1200px-Rammstein_wallpaper_logo.png?20131026234519'
      title='Rammstein'
      type='Artist'
    />

    <RecentItem
      avatarSrc='https://www.powerwolf.net/images/releases/interludium.jpg'
      title='Interludium'
      type='Ablum'
    />
  </List>
}

type RecentItemProps = {
  avatarSrc: string;
  title: string;
  type: string;
}

const RecentItem = ({ avatarSrc, title, type }: RecentItemProps) => {
  return <ListItem>
    <ListItemButton>
      <ListItemDecorator>
        <Avatar src={avatarSrc} />
      </ListItemDecorator>
      <ListItemContent>
        <Typography level="title-sm">{title}</Typography>
        <Typography level="body-sm" noWrap>{type}</Typography>
      </ListItemContent>
    </ListItemButton>
  </ListItem>
}

export default RecentList;