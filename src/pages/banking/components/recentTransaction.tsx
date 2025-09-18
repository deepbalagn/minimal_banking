import { ArrowRight } from "@mui/icons-material";
import { Box, Paper, Typography } from "@mui/material";

export default function RecentTransaction() {
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
  );
}
