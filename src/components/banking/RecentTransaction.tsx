import { ArrowRight } from "@mui/icons-material";
import { Box, Button, Paper, Typography } from "@mui/material";
import RecentTransactionTable from "../../customizedComponents/RecentTransactionTable";
import { bankRecentTransactionData } from "../../data/BankRecentTransactionData";

export default function RecentTransaction() {
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
          <Typography variant="h6">Recent transitions</Typography>{" "}
        </Box>
      </Box>
      <Box>
        <RecentTransactionTable recentTransactions={bankRecentTransactionData} />
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
          <Button
            size="small"
            variant="outlined"
            color="inherit"
            href="#"
            disableElevation
            endIcon={<ArrowRight />}
            sx={{ textTransform: "none", fontWeight: "bold" , border:0}}
          >
            View All
          </Button>
        </Box>
      </Box>
    </Paper>
  );
}
