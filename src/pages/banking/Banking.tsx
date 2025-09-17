import { Grid } from "@mui/material";
import LeftSide from "./LeftSide"
import RightSide from "./RightSide"
export default function Banking() {
  return <>
  <Grid container spacing={2}>
    <Grid size={{xs:12 , md:7 , lg:8}}>
        <LeftSide/>
    </Grid>
    <Grid size={{xs:12 , md:5 , lg:4}}>
        <RightSide />
    </Grid>
  </Grid>
  </>;
}
