import { Box, Grid, Paper, Typography } from "@mui/material";
import ApexChart from "../../customizedComponents/PolarAreaChart";
import ExpenseCategoryItem from "../../customizedComponents/ExpenseCategoryItems";
import { expenseCategoryItemList } from "../../data/ExpenseCategoryItemList";



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
        }}
      >
        <ApexChart />
        <Box p={1}>
          <Grid container spacing={2}>
            {expenseCategoryItemList.map((data) => (
              <Grid size={6}>
                <ExpenseCategoryItem
                  title={data.title}
                  iconText={data.iconText}
                  iconColor={data.iconColor}
                />
              </Grid>
            ))}
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
