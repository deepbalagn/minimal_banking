import { Box, Paper, Typography } from "@mui/material";
import CustomizedMenus from "../../customizedComponents/StyledMenu";
import { AttachMoney, Circle } from "@mui/icons-material";
import { useState } from "react";
import { BarChart, chartsGridClasses } from "@mui/x-charts";

const barIncomeData = [76, 42, 29, 41, 27, 96];
const barSavingsData = [46, 44, 24, 43, 44, 43];
const barInvestmentData = [26, 22, 37, 38, 32, 25];


const monthlyBarIncomeData = [83, 112, 119, 88, 103, 112, 114, 108, 93];
const monthlyBarSavingsData = [46, 46, 43, 58, 40, 59, 54, 42, 51];
const monthlyBarInvestmentData = [25, 40, 38, 35, 20, 32, 27, 40, 21];


const weeklyBarIncomeData = [24, 41, 35, 151, 49];
const weeklyBarSavingsData = [24, 56, 77, 88, 99];
const weeklyBarInvestmentData = [40, 34, 77, 88, 99];
const yearlyBarxLabels = ["2018", "2019", "2020", "2021", "2022", "2023"];
const monthlyBarxLabels = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep"];
const weeklyBarxLabels = ["week1", "week2", "week3", "week4", "week5"];

export default function BalanceStatistics() {
  const [selectedBarChart,setSelectedBarChart] = useState("yearly");
  return (
    <Paper sx={{ p: 3, mb: 2, borderRadius: 5 }}>
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
          <CustomizedMenus handleSelect={setSelectedBarChart} selectedBarChart={selectedBarChart}/>
        </Box>
      </Box>
      <Box
        sx={{
          mt: 4,
          mb: 4,
          display: "flex",
          flexDirection: {xs:"column" , md:"row"} ,
          gap: 4,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap:4
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
              <Circle sx={{ color: "#007867" }} fontSize="small" />
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
              <Circle sx={{ color: "#ffab00" }} fontSize="small" />
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
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Circle sx={{ color: "#00b8d9" }} fontSize="small" />
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
          "& .css-13p1o4b-MuiChartsSurface-root": {
            width: { xs: "120%", md: "110%" },
          },
        }}
      >
        {selectedBarChart === "yearly" && (
          <BarChart
            height={300}
            borderRadius={6}
            series={[
              {
                data: barIncomeData,
                label: "income",
                id: "iId",
                color: "#007867",
              },
              {
                data: barSavingsData,
                label: "saving",
                id: "sId",
                color: "#ffab00",
              },
              {
                data: barInvestmentData,
                label: "investment",
                id: "invId",
                color: "#00b8d9",
              },
            ]}
            xAxis={[
              { data: yearlyBarxLabels, disableLine: true, disableTicks: true },
            ]}
            yAxis={[{ width: 50, disableLine: true, disableTicks: true }]}
            grid={{ horizontal: true }}
            sx={{
              [`& .${chartsGridClasses.line}`]: {
                strokeDasharray: "5 3",
                strokeWidth: 2,
              },
            }}
            disableAxisListener
            hideLegend
          />
        )}
        {selectedBarChart === "monthly" && (
          <BarChart
            height={300}
            borderRadius={6}
            series={[
              {
                data: monthlyBarIncomeData,
                label: "income",
                id: "iId",
                color: "#007867",
              },
              {
                data: monthlyBarSavingsData,
                label: "saving",
                id: "sId",
                color: "#ffab00",
              },
              {
                data: monthlyBarInvestmentData,
                label: "investment",
                id: "invId",
                color: "#00b8d9",
              },
            ]}
            xAxis={[
              {
                data: monthlyBarxLabels,
                disableLine: true,
                disableTicks: true,
              },
            ]}
            yAxis={[{ width: 30, disableLine: true, disableTicks: true }]}
            grid={{ horizontal: true }}
            sx={{
              [`& .${chartsGridClasses.line}`]: {
                strokeDasharray: "5 3",
                strokeWidth: 2,
              },
            }}
            disableAxisListener
            hideLegend
          />
        )}
        {selectedBarChart === "weekly" && (
          <BarChart
            height={300}
            borderRadius={6}
            series={[
              {
                data: weeklyBarIncomeData,
                label: "income",
                id: "iId",
                color: "#007867",
              },
              {
                data: weeklyBarSavingsData,
                label: "saving",
                id: "sId",
                color: "#ffab00",
              },
              {
                data: weeklyBarInvestmentData,
                label: "investment",
                id: "invId",
                color: "#00b8d9",
              },
            ]}
            xAxis={[
              { data: weeklyBarxLabels, disableLine: true, disableTicks: true },
            ]}
            yAxis={[{ width: 50, disableLine: true, disableTicks: true }]}
            grid={{ horizontal: true }}
            sx={{
              [`& .${chartsGridClasses.line}`]: {
                strokeDasharray: "5 3",
                strokeWidth: 2,
              },
            }}
            disableAxisListener
            hideLegend
          />
        )}
      </Box>
    </Paper>
  );
}
