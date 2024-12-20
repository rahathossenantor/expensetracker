/* eslint-disable react/prop-types */
import { useState } from "react";
import SubmissionForm from "../components/SubmissionForm";
import ExpenseStats from "./ExpenseStats";

const Dashboard = ({
    isSorterOpen,
    isFilterOpen,
    setIsSorterOpen,
    setIsFilterOpen,
    sorterRef,
    filterRef
}) => {
    const [incomes, setIncomes] = useState([
        {
            id: Math.random().toString(36).substring(2, 9),
            category: "Salary",
            amount: 18000,
            date: "2023-04-10"
        },
        {
            id: Math.random().toString(36).substring(2, 9),
            category: "Outsourcing",
            amount: 2000,
            date: "2022-03-18"
        }
    ]);
    const [expenses, setExpenses] = useState([
        {
            id: Math.random().toString(36).substring(2, 9),
            category: "Food",
            amount: 700,
            date: "2021-07-13"
        },
        {
            id: Math.random().toString(36).substring(2, 9),
            category: "Health",
            amount: 3000,
            date: "2018-03-06"
        },
        {
            id: Math.random().toString(36).substring(2, 9),
            category: "Transport",
            amount: 300,
            date: "2023-12-16"
        }
    ]);

    const totalIncome = incomes.reduce((acc, curr) => acc + curr.amount, 0);
    const totalExpense = expenses.reduce((acc, curr) => acc + curr.amount, 0);
    const [financialStats, setFinancialStats] = useState({
        balance: totalIncome,
        totalIncome,
        totalExpense
    });

    const [activeTab, setActiveTab] = useState("Expense");
    const [defaltFormData, setDefaltFormData] = useState({});

    return (
        <main className="relative mx-auto mt-10 w-full max-w-7xl">
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SubmissionForm
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    defaltFormData={defaltFormData}
                    financialStats={financialStats}
                    incomes={incomes}
                    expenses={expenses}
                    setFinancialStats={setFinancialStats}
                    setExpenses={setExpenses}
                    setIncomes={setIncomes}
                />
                <ExpenseStats
                    financialStats={financialStats}
                    incomes={incomes}
                    expenses={expenses}
                    setActiveTab={setActiveTab}
                    setDefaltFormData={setDefaltFormData}
                    setFinancialStats={setFinancialStats}
                    setIncomes={setIncomes}
                    setExpenses={setExpenses}
                    isSorterOpen={isSorterOpen}
                    isFilterOpen={isFilterOpen}
                    setIsSorterOpen={setIsSorterOpen}
                    setIsFilterOpen={setIsFilterOpen}
                    sorterRef={sorterRef}
                    filterRef={filterRef}
                />
            </section>
        </main>
    );
};

export default Dashboard;
