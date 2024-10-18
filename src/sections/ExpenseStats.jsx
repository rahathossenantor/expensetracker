/* eslint-disable react/prop-types */
import ExpenseIcon from "../assets/icons/ExpenseIcon";
import IncomeIcon from "../assets/icons/IncomeIcon";
import ExpenseSummary from "../components/ExpenseSummary";
import HistoryDisplay from "./HistoryDisplay";

const ExpenseStats = ({ setActiveTab, financialStats, incomes = [], expenses = [], setIncomes, setExpenses, setFinancialStats, setDefaltFormData }) => {
    const histories = [
        {
            id: 1,
            icon: <IncomeIcon />,
            title: "Income",
            records: incomes,
            updaterFn: setIncomes
        },
        {
            id: 2,
            icon: <ExpenseIcon />,
            title: "Expense",
            records: expenses,
            updaterFn: setExpenses
        }
    ];

    return (
        <div className="lg:col-span-2">
            <ExpenseSummary financialStats={financialStats} />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
                {
                    histories.map((history) => (
                        <HistoryDisplay
                            key={history.id}
                            title={history.title}
                            records={history.records}
                            updaterFn={history.updaterFn}
                            financialStats={financialStats}
                            setFinancialStats={setFinancialStats}
                            setDefaltFormData={setDefaltFormData}
                            setActiveTab={setActiveTab}
                        >
                            {history.icon}
                        </HistoryDisplay>
                    ))
                }
            </div>
        </div>
    );
};

export default ExpenseStats;
