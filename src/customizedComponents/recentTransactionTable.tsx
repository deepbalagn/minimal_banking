import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Box, Chip, Typography } from "@mui/material";
import { Icon } from "@iconify/react";
import Menu_Component from "./MenuComponent";
import type { BankRecentTransactionListType } from "../types/BankRecentTransactionType";

export default function RecentTransactionTable(data:BankRecentTransactionListType) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead sx={{ backgroundColor: "#f4f6f8" }}>
          <TableRow>
            <TableCell><Typography fontWeight="bold" color="textSecondary" >Description</Typography></TableCell>
            <TableCell align="left"><Typography fontWeight="bold" color="textSecondary" >Date</Typography></TableCell>
            <TableCell align="left"><Typography fontWeight="bold" color="textSecondary" >Amount</Typography></TableCell>
            <TableCell align="left"><Typography fontWeight="bold" color="textSecondary" >Status</Typography></TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.recentTransactions.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "left",
                    gap: 1,
                  }}
                >
                  <Avatar alt="avatar" src={row.img} />
                  <Avatar
                    sx={{
                      backgroundColor:
                        row.tran === "income" ? "green" : "orange",
                      width: 20,
                      height: 20,
                      position: "relative",
                      top: 25,
                      left: -20,
                    }}
                  >
                    {row.tran === "income" ? (
                      <Icon
                        icon="eva:diagonal-arrow-right-up-fill"
                        width="40"
                        height="40"
                      />
                    ) : (
                      <Icon
                        icon="eva:diagonal-arrow-left-down-fill"
                        width="40"
                        height="40"
                      />
                    )}
                  </Avatar>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography fontWeight="bold">{row.type}</Typography>
                    <Typography>{row.name}</Typography>
                  </Box>
                </Box>
              </TableCell>
              <TableCell align="left">
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Typography fontWeight="bold">{row.date}</Typography>
                    <Typography color="grey.500" fontSize={14}>{row.time}</Typography>
                  </Box>
              </TableCell>
              <TableCell align="left">{row.amount}</TableCell>
              <TableCell align="left">
                <Chip
                  label={row.status}
                  size="small"
                  sx={{
                    borderRadius: "8px",
                    backgroundColor:
                      row.status === "Completed"
                        ? "#dbf6e5"
                        : row.status === "Progress"
                        ? "#fff1d6"
                        : "#ffe4de",
                    color:
                      row.status === "Completed"
                        ? "#118d57"
                        : row.status === "Progress"
                        ? "#be6e00"
                        : "#ca2318",
                  }}
                />
              </TableCell>
              <TableCell align="left">
                <Menu_Component btnColor="black"/>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
