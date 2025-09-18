import {
  Box,
} from "@mui/material";

import { BankingCreditCard } from "../../components/banking/BankingCreditCard";
import { BankingQuickTransfer } from "../../components/banking/BankingQuickTransfer";
import { BankingContacts } from "../../components/banking/BankingContacts";
import { BankingInvite } from "../../components/banking/BankingInvite";



export default function RightSide() {
  return (
    <>
      <Box sx={{ gap: 3, display: "flex", flexDirection: "column" }}>
         {/*1st*/}
       <BankingCreditCard/>

        {/*2nd*/}
        <BankingQuickTransfer/>

        {/*3rd*/}
        <BankingContacts/>

        {/*4th*/}
        <BankingInvite/>
      </Box>
    </>
  );
}
