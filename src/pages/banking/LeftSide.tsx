import IncomeExpenensePaper from "../../components/banking/incomeExpencePaper";
import BalanceStatistics from "../../components/banking/balanceStatistics";
import ExpenseCategory from "../../components/banking/expenseCategory";
import RecentTransaction from "../../components/banking/recentTransaction";

export default function RightSide() {
  return (
    <>
      <IncomeExpenensePaper />

      <BalanceStatistics />

      <ExpenseCategory />

      <RecentTransaction />
    </>
  );
}
