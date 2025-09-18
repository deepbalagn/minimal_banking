import { Box, Paper, Typography } from "@mui/material";
import CustomizedMenus from "../../../customizedComponents/StyledMenu";
import { AttachMoney, Circle } from "@mui/icons-material";
import { useState } from "react";
import { BarChart } from "@mui/x-charts";


const barIncomeData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const barSavingsData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const barInvestmentData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const yearlyBarxLabels = ["2018", "2019", "2020", "2021", "2022", "2023"];
const monthlyBarxLabels = ["2018", "2019", "2020", "2021", "2022", "2023"];
const weeklyBarxLabels = ["2018", "2019", "2020", "2021", "2022", "2023"];

export default function BalanceStatistics() {
  const [selectedBarChart] = useState("yearly");
  return (
    <Paper sx={{ p: 3, mb: 2, borderRadius: 5 }} elevation={5}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography variant="h5">Balance statistics </Typography>{" "}
          <Typography variant="body1" fontWeight={"bold"}>
            Statistics on balance over time
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
            alignItems: "start",
          }}
        >
          <CustomizedMenus />
        </Box>
      </Box>
      <Box
        sx={{
          mt: 2,
          mb: 2,
          display: "flex",
          flexDirection: "row",
          gap: 4,
        }}
      >
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Circle sx={{ color: "blue" }} fontSize="small" />
            <Typography variant="body1">Income (+43%) </Typography>{" "}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <AttachMoney sx={{ fontWeight: "bold" }} />
            <Typography variant="h5" fontWeight={"bold"}>
              6,789
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Circle sx={{ color: "yellow" }} fontSize="small" />
            <Typography variant="body1">Savings (+3%) </Typography>{" "}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <AttachMoney sx={{ fontWeight: "bold" }} />
            <Typography variant="h5" fontWeight={"bold"}>
              1,234
            </Typography>
          </Box>
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Circle sx={{ color: "red" }} fontSize="small" />
            <Typography variant="body1">Investment (+8%) </Typography>{" "}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <AttachMoney sx={{ fontWeight: "bold" }} />
            <Typography variant="h5" fontWeight={"bold"}>
              1,012
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {selectedBarChart === "yearly" && (
          <BarChart
            height={300}
            series={[
              { data: barIncomeData, label: "income", id: "iId" },
              { data: barSavingsData, label: "saving", id: "sId" },
              { data: barInvestmentData, label: "investment", id: "invId" },
            ]}
            xAxis={[{ data: yearlyBarxLabels }]}
            yAxis={[{ width: 50 }]}
          />
        )}
        {selectedBarChart === "monthly" && (
          <BarChart
            height={300}
            series={[
              { data: barIncomeData, label: "income", id: "iId" },
              { data: barSavingsData, label: "saving", id: "sId" },
              { data: barInvestmentData, label: "investment", id: "invId" },
            ]}
            xAxis={[{ data: monthlyBarxLabels }]}
            yAxis={[{ width: 50 }]}
          />
        )}
        {selectedBarChart === "weekly" && (
          <BarChart
            height={300}
            series={[
              { data: barIncomeData, label: "income", id: "iId" },
              { data: barSavingsData, label: "saving", id: "sId" },
              { data: barInvestmentData, label: "investment", id: "invId" },
            ]}
            xAxis={[{ data: weeklyBarxLabels }]}
            yAxis={[{ width: 50 }]}
          />
        )}
      </Box>
    </Paper>
  );
}
