import { Icon } from "@iconify/react";
import { Box, Grid, Paper, Typography } from "@mui/material";
// import { PieChart } from "@mui/x-charts";
import ApexChart from "../../../customizedComponents/polarAreaChart";

export default function ExpenseCategory() {
  return (
    <Paper sx={{ mb: 2, borderRadius: 5 }} elevation={5}>
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
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <ApexChart />
        <Box width={"50%"}>
          <Grid container spacing={2}>
            <Grid size={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Icon
                  icon="mingcute:game-2-fill"
                  width="20"
                  height="20"
                  color="#794dc7"
                />
                <Typography>Entertainment ($22)</Typography>
              </Box>
            </Grid>
            <Grid size={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Icon
                  icon="bi:fuel-pump-fill"
                  width="20"
                  height="20"
                  color="#ff7c5f"
                />
                <Typography>Fuel ($18)</Typography>
              </Box>
            </Grid>
            <Grid size={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Icon
                  icon="ic:baseline-fastfood"
                  width="20"
                  height="20"
                  color="#3abb90"
                />
                <Typography>Fast Food ($16)</Typography>
              </Box>
            </Grid>
            <Grid size={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Icon
                  icon="carbon:cafe"
                  width="20"
                  height="20"
                  color="#ffbe3a"
                />
                <Typography>Cafe ($17)</Typography>
              </Box>
            </Grid>
            <Grid size={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Icon
                  icon="mynaui:speaker-solid"
                  width="20"
                  height="20"
                  color="#3a8db3"
                />
                <Typography>Connection ($14)</Typography>
              </Box>
            </Grid>
            <Grid size={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Icon
                  icon="streamline-pixel:health-drug-medicine-bag-aid-1"
                  width="20"
                  height="20"
                  color="#3ac8e2"
                />
                <Typography>Health Care ($22)</Typography>
              </Box>
            </Grid>
            <Grid size={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Icon
                  icon="material-symbols:fitness-center-rounded"
                  width="20"
                  height="20"
                  color="#54d283"
                />
                <Typography>Fitness ($10)</Typography>
              </Box>
            </Grid>
            <Grid size={6}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Icon
                  icon="fontisto:shopping-basket"
                  width="20"
                  height="20"
                  color="#c78f3a"
                />
                <Typography>SuperMarket ($21)</Typography>
              </Box>
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
