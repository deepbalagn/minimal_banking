import { Icon } from "@iconify/react";
import {
  Add,
  ArrowDownward,
  ArrowUpward,
  AttachMoney,
  InfoOutlineRounded,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Chip,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import {
  chartsGridClasses,
  LineChart,
  lineElementClasses,
} from "@mui/x-charts";
import { useState } from "react";

const margin = { right: 24 };
const incomeData = [5, 31, 33, 50, 99, 76, 72, 76, 89];
const expenseData = [10, 41, 35, 51, 49, 62, 69, 91, 148];
const xLabels = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep"];

export default function IncomeExpenensePaper() {
  const [isIncomeGraph, setIsIncomeGraph] = useState(true);
  return (
    <Paper
      sx={{
        p: 3,
        mb: 2,
        borderRadius: 5,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row", lg: "row" },
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 0.5,
            }}
          >
            <Typography variant="body1" color="textSecondary">
              {" "}
              Total Balance{" "}
            </Typography>{" "}
            <InfoOutlineRounded sx={{ fontSize: 16 }} color="inherit" />
          </Box>
          <Typography variant="h4" fontWeight={"bold"} mt={1.5}>
            $49,990
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 1,
            alignItems: "start",
          }}
        >
          <Button
            size="small"
            variant="contained"
            color="inherit"
            href="#"
            disableElevation
            startIcon={<ArrowUpward />}
            sx={{ textTransform: "none", fontWeight: "bold" }}
          >
            Send
          </Button>
          <Button
            size="small"
            variant="contained"
            color="inherit"
            href="#"
            disableElevation
            startIcon={<Add />}
            sx={{ textTransform: "none", fontWeight: "bold" }}
          >
            AddCard
          </Button>
          <Button
            size="small"
            variant="contained"
            color="inherit"
            href="/dashboard/tour/new"
            disableElevation
            startIcon={<ArrowDownward />}
            sx={{ textTransform: "none", fontWeight: "bold" }}
          >
            Request
          </Button>
        </Box>
      </Box>
      <Paper
        sx={{
          p: 1,
          backgroundColor: "#f4f6f8ff",
          borderRadius: 5,
        }}
      >
        <Grid container spacing={1}>
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  p: 3,
                  width: "100%",
                }}
              >
                <Avatar
                  sx={{
                    backgroundColor: "#004b50",
                    width: 56,
                    height: 56,
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  <Icon
                    icon="eva:diagonal-arrow-left-down-fill"
                    width="30"
                    height="30"
                  />
                </Avatar>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    padding: 1,
                  }}
                >
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
                  <Box
                    sx={{
                      position: { xs: "unset", sm: "absolute" },
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
                        width: "80px"
                      }}
                      icon={<ArrowUpward />}
                    />
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
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  p: 3,
                  width: "100%",
                }}
              >
                <Avatar
                  sx={{
                    backgroundColor: "#7a4100",
                    width: 56,
                    height: 56,
                    display: { xs: "none", md: "flex" },
                  }}
                >
                  <Icon
                    icon="eva:diagonal-arrow-right-up-fill"
                    width="30"
                    height="30"
                  />
                </Avatar>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    alignItems: "center",
                    padding: 1,
                  }}
                >
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
                  <Box
                    sx={{
                      position: { xs: "unset", sm: "absolute" },
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
                </Box>
              </Box>
            </Button>
          </Grid>
        </Grid>
      </Paper>
      <Box
        sx={{
          "& .css-13p1o4b-MuiChartsSurface-root": {
            width: { xs: "120%", md: "110%" },
          },
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
                stroke: "#027968",
                strokeWidth: 3,
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
                stroke: "#b76e00",
                strokeWidth: 3,
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
