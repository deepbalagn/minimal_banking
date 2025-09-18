import { Icon } from "@iconify/react";
import {
  Add,
  ArrowDownward,
  ArrowUpward,
  AttachMoney,
  InfoOutlineRounded,
} from "@mui/icons-material";
import { Box, Button, Chip, Grid, Paper, Typography } from "@mui/material";
import {
  chartsGridClasses,
  LineChart,
  lineElementClasses,
} from "@mui/x-charts";
import { useState } from "react";

const margin = { right: 24 };
const incomeData = [5, 31, 33, 50, 99, 76, 72, 76, 89];
const expenseData = [5, 3, 3.5, 5, 9, 6, 2, 7, 9];
const xLabels = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep"];

export default function IncomeExpenensePaper() {
  const [isIncomeGraph, setIsIncomeGraph] = useState(true);
  return (
    <Paper sx={{ p: 3, mb: 2, borderRadius: 5 }} >
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
          backgroundColor: "#f4f6f8ff",
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
              sx={{
                backgroundColor: isIncomeGraph ? "white" : "",
                borderRadius: 5,
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "row", p: 3 }}>
                <Box
                  sx={{
                    position: "absolute",
                    top: 2,
                    right: 5,
                  }}
                >
                  <Chip
                    label="+8.2%"
                    color="success"
                    size="small"
                    sx={{
                      borderRadius: "8px",
                      width: "80px",
                    }}
                    icon={<ArrowUpward />}
                  />
                </Box>
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
              sx={{
                backgroundColor: isIncomeGraph ? "" : "white",
                borderRadius: 5,
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "row", p: 3 }}>
                <Box
                  sx={{
                    position: "absolute",
                    top: 1,
                    right: 5,
                  }}
                >
                  <Chip
                    label="-6.6%"
                    color="error"
                    size="small"
                    sx={{
                      borderRadius: "8px",
                      width: "80px",
                    }}
                    icon={<ArrowDownward />}
                  />
                </Box>
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
            series={[
              {
                data: incomeData,
                showMark: false,
                shape: "circle",
                color: "#218670ff",
              },
            ]}
            xAxis={[
              {
                scaleType: "point",
                data: xLabels,
                disableLine: true,
                disableTicks: true,
              },
            ]}
            yAxis={[{ width: 50, disableLine: true, disableTicks: true }]}
            margin={margin}
            grid={{ horizontal: true }}
            sx={{
              [`& .${lineElementClasses.root}`]: {
                stroke: "#1cca56ff",
                strokeWidth: 2,
              },
              [`& .${chartsGridClasses.line}`]: {
                strokeDasharray: "5 3",
                strokeWidth: 2,
              },
            }}
            disableAxisListener
            hideLegend
          />
        ) : (
          <LineChart
            height={300}
            series={[
              {
                data: expenseData,
                showMark: false,
                color: "#b31c42ff",
              },
            ]}
            xAxis={[
              {
                scaleType: "point",
                data: xLabels,
                disableLine: true,
                disableTicks: true,
              },
            ]}
            yAxis={[{ width: 50, disableLine: true, disableTicks: true }]}
            margin={margin}
            grid={{ horizontal: true }}
            sx={{
              [`& .${lineElementClasses.root}`]: {
                stroke: "#c2163bff",
                strokeWidth: 2,
              },
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
