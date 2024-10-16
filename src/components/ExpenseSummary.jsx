import RecordSummary from "./RecordSummary";

const ExpenseSummary = () => {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-7xl">
                <dl className="grid grid-cols-1 text-center lg:grid-cols-3 divide-x-2 border rounded-md overflow-hidden">
                    <RecordSummary amount={20000}>Balance</RecordSummary>
                    <RecordSummary amount={20000}>Total Income</RecordSummary>
                    <RecordSummary amount={20000}>Total Expense</RecordSummary>
                </dl>
            </div>
        </div>
    );
};

export default ExpenseSummary;
