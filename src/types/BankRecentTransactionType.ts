export type BankRecentTransactionType = {
  img: string;
  type: string;
  name: string;
  date: string;
  time: string;
  amount: string;
  status: string;
  tran: string;
};


export type BankRecentTransactionListType = {
    recentTransactions : BankRecentTransactionType[]
}