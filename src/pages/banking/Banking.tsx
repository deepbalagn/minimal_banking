import { Grid } from "@mui/material";
import LeftSide from "./LeftSide"
import RightSide from "./RightSide"
export default function Banking() {
  return <>
  <Grid container spacing={2}>
    <Grid size={8}>
        <LeftSide/>
    </Grid>
    <Grid size={4}>
        <RightSide />
    </Grid>
  </Grid>
  </>;
}
