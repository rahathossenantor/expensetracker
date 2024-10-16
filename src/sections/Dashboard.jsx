import { useState } from "react";
import SubmissionForm from "../components/SubmissionForm";

const Dashboard = () => {
    const [expenses, setExpenses] = useState([]);
    const [incomes, setIncomes] = useState([]);

    return (
        <main className="relative mx-auto mt-10 w-full max-w-7xl">
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <SubmissionForm
                    expenses={expenses}
                    incomes={incomes}
                    setExpenses={setExpenses}
                    setIncomes={setIncomes}
                />
            </section>
        </main>
    );
};

export default Dashboard;
