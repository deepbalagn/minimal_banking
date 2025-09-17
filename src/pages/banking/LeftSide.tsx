import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import {
  Add,
  AddAlarm,
  ArrowDownward,
  ArrowUpward,
  AttachMoney,
  Circle,
  InfoOutlineRounded,
} from "@mui/icons-material";
import { Icon } from "@iconify/react";
import {
  LineChart,
  lineElementClasses,
  markElementClasses,
} from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { useState } from "react";
import CustomizedMenus from "../../customizedComponents/StyledMenu";
import { PieChart } from "@mui/x-charts";


const margin = { right: 24 };
const incomeData = [5, 31, 33, 50, 99, 76, 72, 76, 89];
const expenseData = [5, 31, 33, 50, 99, 76, 72, 76, 89];
const xLabels = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep"];

const barIncomeData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const barSavingsData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const barInvestmentData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const yearlyBarxLabels = ["2018", "2019", "2020", "2021", "2022", "2023"];
const monthlyBarxLabels = ["2018", "2019", "2020", "2021", "2022", "2023"];
const weeklyBarxLabels = ["2018", "2019", "2020", "2021", "2022", "2023"];

export default function RightSide() {
  const [isIncomeGraph, setIsIncomeGraph] = useState(true);
  const [selectedBarChart] = useState("yearly");
  //   const [selectedBarChart, setSelectedBarChart] = useState('yearly');
  return (
    <>
      <Paper sx={{ p: 3, mb: 2, borderRadius: 5 }} elevation={5}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
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
              <Typography variant="body1">Total Balance </Typography>{" "}
              <InfoOutlineRounded sx={{ fontSize: 16 }} />
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
                49,990
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              gap: 2,
              alignItems: "start",
            }}
          >
            <Button
              size="small"
              variant="contained"
              color="inherit"
              href="/dashboard/tour/new"
              disableElevation
              startIcon={<ArrowUpward />}
            >
              Send
            </Button>
            <Button
              size="small"
              variant="contained"
              color="inherit"
              href="/dashboard/tour/new"
              disableElevation
              startIcon={<Add />}
            >
              Add Card
            </Button>
            <Button
              size="small"
              variant="contained"
              color="inherit"
              href="/dashboard/tour/new"
              disableElevation
              startIcon={<ArrowDownward />}
            >
              Request
            </Button>
          </Box>
        </Box>
        <Paper
          sx={{
            p: 3,
            m: 1,
            backgroundColor: "#F4F6F8",
          }}
        >
          <Grid container>
            <Grid size={6}>
              <Button
                color="inherit"
                fullWidth
                onClick={() => {
                  setIsIncomeGraph(true);
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "row" }}>
                  <Icon
                    icon="eva:diagonal-arrow-left-down-fill"
                    width="40"
                    height="40"
                  />
                  <Box paddingLeft={3}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                      }}
                    >
                      <Typography variant="body1">Income </Typography>{" "}
                      <InfoOutlineRounded sx={{ fontSize: 16 }} />
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
                        9,990
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Button>
            </Grid>
            <Grid size={6}>
              <Button
                color="inherit"
                fullWidth
                onClick={() => {
                  setIsIncomeGraph(false);
                }}
              >
                <Icon
                  icon="eva:diagonal-arrow-right-up-fill"
                  width="40"
                  height="40"
                />
                <Box paddingLeft={3}>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="body1">Expenses </Typography>{" "}
                    <InfoOutlineRounded sx={{ fontSize: 16 }} />
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
                      1989
                    </Typography>
                  </Box>
                </Box>
              </Button>
            </Grid>
          </Grid>
        </Paper>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {isIncomeGraph ? (
            <LineChart
              height={300}
              series={[{ data: incomeData, label: "income" }]}
              xAxis={[{ scaleType: "point", data: xLabels }]}
              yAxis={[{ width: 50 }]}
              margin={margin}
              sx={{
                [`& .${lineElementClasses.root}`]: {
                  stroke: "#1cca56ff",
                  strokeWidth: 2,
                },
                [`& .${markElementClasses.root}`]: {
                  stroke: "#07f3c0ff",
                  r: 4, // Modify the circle radius
                  fill: "#fff",
                  strokeWidth: 2,
                },
              }}
              disableAxisListener
            />
          ) : (
            <LineChart
              height={300}
              series={[{ data: expenseData, label: "expense" }]}
              xAxis={[{ scaleType: "point", data: xLabels }]}
              yAxis={[{ width: 50 }]}
              margin={margin}
              sx={{
                [`& .${lineElementClasses.root}`]: {
                  stroke: "#c2163bff",
                  strokeWidth: 2,
                },
                [`& .${markElementClasses.root}`]: {
                  stroke: "#f80021ff",
                  r: 4, // Modify the circle radius
                  fill: "#fff",
                  strokeWidth: 2,
                },
              }}
              disableAxisListener
            />
          )}
        </Box>
      </Paper>

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

      <Paper sx={{ p: 3, mb: 2, borderRadius: 5 }} elevation={5}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
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
          <Box width={'50%'}>
            <Grid container>
              <Grid size={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    gap: 1,
                  }}
                >
                  <Icon icon="mingcute:game-2-fill" width="24" height="24" color="purple" />
                  <Typography>Entertainment ($22)</Typography>
                </Box>
              </Grid>
              <Grid size={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    gap: 1,
                  }}
                >
                  <Icon icon="bi:fuel-pump-fill" width="16" height="16" color="red"/>
                  <Typography>Fuel ($18)</Typography>
                </Box>
              </Grid>
              <Grid size={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    gap: 1,
                  }}
                >
                  <Icon icon="ic:baseline-fastfood" width="24" height="24" color="green"/>
                  <Typography>Fast Food ($16)</Typography>
                </Box>
              </Grid>
              <Grid size={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    gap: 1,
                  }}
                >
                  <Icon icon="carbon:cafe" width="32" height="32" color="yellow"/>
                  <Typography>Cafe ($17)</Typography>
                </Box>
              </Grid>
              <Grid size={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    gap: 1,
                  }}
                >
                  <Icon icon="mynaui:speaker-solid" width="24" height="24" color="blue"/>
                  <Typography>Connection ($14)</Typography>
                </Box>
              </Grid>
              <Grid size={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    gap: 1,
                  }}
                >
                  <Icon icon="streamline-pixel:health-drug-medicine-bag-aid-1" width="32" height="32" color="blue" />
                  <Typography>Health Care ($22)</Typography>
                </Box>
              </Grid>
              <Grid size={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    gap: 1,
                  }}
                >
                  <AddAlarm />
                  <Typography>BALA ($22)</Typography>
                </Box>
              </Grid>
              <Grid size={6}>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "center",
                    gap: 1,
                  }}
                >
                  <AddAlarm />
                  <Typography>BALA ($22)</Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Paper>
    </>
  );
}
