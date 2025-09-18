import IncomeExpenensePaper from "./components/incomeExpencePaper";
import BalanceStatistics from "./components/balanceStatistics";
import ExpenseCategory from "./components/expenseCategory";
import RecentTransaction from "./components/recentTransaction";

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
