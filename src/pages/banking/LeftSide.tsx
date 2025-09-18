import { Box,  Grid, Paper, Typography } from "@mui/material";
import {
  ArrowRight,
  AttachMoney,
  Circle,
} from "@mui/icons-material";
import { Icon } from "@iconify/react";

import { BarChart } from "@mui/x-charts/BarChart";
import { useState } from "react";
import CustomizedMenus from "../../customizedComponents/StyledMenu";
import { PieChart } from "@mui/x-charts";
import IncomeExpenensePaper from "./components/incomeExpencePaper";


const barIncomeData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const barSavingsData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const barInvestmentData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const yearlyBarxLabels = ["2018", "2019", "2020", "2021", "2022", "2023"];
const monthlyBarxLabels = ["2018", "2019", "2020", "2021", "2022", "2023"];
const weeklyBarxLabels = ["2018", "2019", "2020", "2021", "2022", "2023"];

export default function RightSide() {
  const [selectedBarChart] = useState("yearly");
  return (
    <>
      <IncomeExpenensePaper />

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
          <PieChart
            series={[
              {
                data: [
                  { value: 22, label: "Entertainment" },
                  { value: 18, label: "Fuel" },
                  { value: 16, label: "Fast food" },
                  { value: 17, label: "Cafe " },
                  { value: 14, label: "Сonnection " },
                  { value: 22, label: "Healthcare " },
                  { value: 10, label: "Fitness " },
                  { value: 21, label: "Supermarket " },
                ],
              },
            ]}
            width={200}
            height={200}
            hideLegend={true}
          />
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
                    color="purple"
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
                    color="red"
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
                    color="green"
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
                    color="yellow"
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
                    color="blue"
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
                    color="blue"
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
                    color="green"
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
                    color="brown"
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
            <Typography variant="h6">Recent transitions</Typography>{" "}
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            p: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">view all </Typography> <ArrowRight />
          </Box>
        </Box>
      </Paper>
    </>
  );
}
