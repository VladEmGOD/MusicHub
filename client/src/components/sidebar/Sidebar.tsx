import { Sheet } from "@mui/joy";
import NavigationList from "./NavigationList";
import ChipBar from "./ChipBar";
import RecentList from "./RecentList";

const Sidebar = () => {
  return (
    <Sheet sx={{ height: "70vh" }}>
      <NavigationList />
      <ChipBar />
      <RecentList />
    </Sheet>
  )
}

export default Sidebar;