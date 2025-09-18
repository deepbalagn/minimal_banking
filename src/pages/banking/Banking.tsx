import { Grid } from "@mui/material";
import LeftSide from "./LeftSide"
import RightSide from "./RightSide"
export default function Banking() {
  return <>
  <Grid container spacing={2} sx={{margin: 5}}>
    <Grid size={8.5}>
        <LeftSide/>
    </Grid>
    <Grid size={3}>
        <RightSide />
    </Grid>
  </Grid>
  </>;
}
