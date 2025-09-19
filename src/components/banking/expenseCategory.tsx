import { Box, Grid, Paper, Typography } from "@mui/material";
import ExpenseCategoryItem from "../../customizedComponents/ExpenseCategoryItems";
import ApexChart from "../../customizedComponents/polarAreaChart";

export default function ExpenseCategory() {
  return (
    <Paper sx={{ mb: 2, borderRadius: 5 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          p: 3,
        }}
      >
        <Box>
          <Typography variant="h5">Expenses categories</Typography>{" "}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <ApexChart />
        <Box p={5} sx={{}}>
          <Grid container spacing={2}>
            <Grid size={6}>
              <ExpenseCategoryItem
                title={"Entertain ($22)"}
                iconText={"mingcute:game-2-fill"}
                iconColor="#794dc7"
              />
            </Grid>
            <Grid size={6}>
              <ExpenseCategoryItem
                title={"Fuel ($18)"}
                iconText={"bi:fuel-pump-fill"}
                iconColor="#ff7c5f"
              />
            </Grid>
            <Grid size={6}>
              <ExpenseCategoryItem
                title={"Fast Food ($16)"}
                iconText={"ic:baseline-fastfood"}
                iconColor="#3abb90"
              />
            </Grid>
            <Grid size={6}>
              <ExpenseCategoryItem
                title={"Cafe ($17)"}
                iconText={"carbon:cafe"}
                iconColor="#ffbe3a"
              />
            </Grid>
            <Grid size={6}>
              <ExpenseCategoryItem
                title={"Connection ($14)"}
                iconText={"mynaui:speaker-solid"}
                iconColor="#3a8db3"
              />
            </Grid>
            <Grid size={6}>
              <ExpenseCategoryItem
                title={"Health Care ($22)"}
                iconText={"streamline-pixel:health-drug-medicine-bag-aid-1"}
                iconColor="#3ac8e2"
              />
            </Grid>
            <Grid size={6}>
              <ExpenseCategoryItem
                title={"Fitness ($10)"}
                iconText={"material-symbols:fitness-center-rounded"}
                iconColor="#54d283"
              />
            </Grid>
            <Grid size={6}>
              <ExpenseCategoryItem
                title={"SuperMarket ($21)"}
                iconText={"fontisto:shopping-basket"}
                iconColor="#c78f3a"
              />
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Box>
        <Grid container>
          <Grid size={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                border: 1,
                borderLeft: 0,
                borderBottom: 0,
                borderStyle: "dotted",
                p: 3,
              }}
            >
              <Typography variant="body1">Categories</Typography>
              <Typography variant="h5" fontWeight="bold">
                9
              </Typography>
            </Box>
          </Grid>
          <Grid size={6}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                border: 1,
                borderRight: 0,
                borderBottom: 0,
                borderStyle: "dotted",
                p: 3,
              }}
            >
              <Typography variant="body1">Categories</Typography>
              <Typography variant="h5" fontWeight="bold">
                $18,765
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Paper>
  );
}
