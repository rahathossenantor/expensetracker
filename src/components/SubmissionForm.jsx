/* eslint-disable react/prop-types */
import { useState } from "react";
import FormTab from "./FormTab";

const expenseCategories = ["Education", "Food", "Health", "Bill", "Insurance", "Tax", "Transport", "Telephone"];
const incomeCategories = ["Salary", "Outsourcing", "Bond", "Dividend"];

const SubmissionForm = ({ expenses, incomes, setExpenses, setIncomes }) => {
    const [activeTab, setActiveTab] = useState("Expense");

    const handleSubmit = (e) => {
        e.preventDefault();

        const record = {
            id: Date.now().toString(),
            category: e.target.category.value,
            amount: Number(e.target.amount.value),
            date: e.target.date.value
        };

        if (activeTab === "Expense") {
            setExpenses([...expenses, record]);
        } else {
            setIncomes([...incomes, record]);
        };
    };

    return (
        <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
            <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
                Expense Tracker
            </h2>
            <form onSubmit={handleSubmit}>
                <div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
                    <FormTab isActive={activeTab === "Expense"} setActiveTab={setActiveTab}>Expense</FormTab>
                    <FormTab isActive={activeTab === "Income"} setActiveTab={setActiveTab}>Income</FormTab>
                </div>
                <div className="mt-3">
                    <label
                        htmlFor="category"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Category
                    </label>
                    <div className="mt-2">
                        <select
                            id="category"
                            name="category"
                            autoComplete="category-name"
                            className="block w-full rounded-md border-0 pl-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        >
                            {
                                (activeTab === "Expense" ? expenseCategories : incomeCategories)
                                    .map((category) => <option key={category} value={category}>{category}</option>)
                            }
                        </select>
                    </div>
                </div>
                <div className="mt-3">
                    <label
                        htmlFor="amount"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Amount
                    </label>
                    <div className="mt-2">
                        <input
                            type="number"
                            name="amount"
                            id="amount"
                            autoComplete="off"
                            placeholder={12931}
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <div className="mt-3">
                    <label
                        htmlFor="date"
                        className="block text-sm font-medium leading-6 text-gray-900"
                    >
                        Date
                    </label>
                    <div className="mt-2">
                        <input
                            type="date"
                            name="date"
                            id="date"
                            autoComplete="off"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
                        />
                    </div>
                </div>
                <button
                    type="submit"
                    className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
                >
                    Save
                </button>
            </form>
        </div>
    );
};

export default SubmissionForm;
