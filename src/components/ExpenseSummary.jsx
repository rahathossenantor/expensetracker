/* eslint-disable react/prop-types */
import RecordSummary from "./RecordSummary";

const ExpenseSummary = ({ financialStats = {} }) => {
    const { balance, totalIncome, totalExpense } = financialStats;

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl">
                <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
                    <RecordSummary amount={balance}>Balance</RecordSummary>
                    <RecordSummary amount={totalIncome}>Total Income</RecordSummary>
                    <RecordSummary amount={totalExpense}>Total Expense</RecordSummary>
                </dl>
            </div>
        </div>
    );
};

export default ExpenseSummary;
