/* eslint-disable react/prop-types */
import ExpenseIcon from "../assets/icons/ExpenseIcon";
import IncomeIcon from "../assets/icons/IncomeIcon";
import ExpenseSummary from "../components/ExpenseSummary";
import HistoryDisplay from "./HistoryDisplay";

const ExpenseStats = ({ financialStats, incomes = [], expenses = [] }) => {
    return (
        <div className="lg:col-span-2">
            <ExpenseSummary financialStats={financialStats} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
                <HistoryDisplay title="Income" records={incomes}>
                    <IncomeIcon />
                </HistoryDisplay>
                <HistoryDisplay title="Expense" records={expenses}>
                    <ExpenseIcon />
                </HistoryDisplay>
            </div>
        </div>
    );
};

export default ExpenseStats;
