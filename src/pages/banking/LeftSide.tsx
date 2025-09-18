import IncomeExpenensePaper from "../../components/banking/IncomeExpencePaper";
import BalanceStatistics from "../../components/banking/BalanceStatistics";
import ExpenseCategory from "../../components/banking/ExpenseCategory";
import RecentTransaction from "../../components/banking/RecentTransaction";

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
