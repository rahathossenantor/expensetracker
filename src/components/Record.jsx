/* eslint-disable react/prop-types */

import Swal from "sweetalert2";

const getMonthName = (month) => {
    const date = new Date();
    date.setMonth(month);
    return date.toLocaleString("en-US", { month: "long" });
};

const Record = ({ tab, records, record, updaterFn, financialStats, setFinancialStats, setDefaltFormData, setActiveTab }) => {
    const { id, category, amount, date: dateString } = record;

    const date = new Date(dateString);
    const formattedDate = `${date.getDate()} ${getMonthName(date.getMonth())}, ${date.getFullYear()}`;

    const handleUpdate = () => {
        setActiveTab(tab);
        setDefaltFormData((prevState) => ({
            ...prevState,
            ...record,
            updatable: true
        }));
    };

    const handleRecordDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((userRes) => {
            if (userRes.isConfirmed) {
                const updatedRecords = records.filter(rd => rd.id !== id);
                updaterFn(updatedRecords);

                if (tab === "Income") {
                    const updatedIncome = updatedRecords.reduce((acc, curr) => acc + curr.amount, 0);
                    setFinancialStats({
                        ...financialStats,
                        balance: updatedIncome,
                        totalIncome: updatedIncome
                    });
                } else {
                    const updatedExpense = updatedRecords.reduce((acc, curr) => acc + curr.amount, 0);
                    setFinancialStats((prevState) => ({
                        ...prevState,
                        balance: prevState.balance + amount,
                        totalExpense: updatedExpense
                    }));
                };

                Swal.fire({
                    title: "Deleted!",
                    text: `Record has been deleted.`,
                    icon: "success",
                    timer: 2000
                });
            }
        });
    };

    return (
        <div className="flex justify-between items-center py-2 relative group cursor-pointer">
            <div>
                <h3 className="text-base font-medium leading-7 text-gray-600">
                    {category}
                </h3>
                <p className="text-xs text-gray-600">{formattedDate}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-base font-semibold text-gray-600 transition-all group-hover:-translate-x-14">
                    BDT {amount}
                </p>
                {/* 3 Dots */}
                <div className="translate-x-5 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 absolute right-0 top-1/2 -translate-y-1/2 transition-all">
                    <button
                        className="hover:text-teal-600"
                        role="button"
                        title="Edit Button"
                        onClick={handleUpdate}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
                            <path d="M13.5 6.5l4 4" />
                        </svg>
                    </button>
                    <button
                        className="hover:text-red-600"
                        role="button"
                        title="Delete"
                        onClick={() => handleRecordDelete(id)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M4 7l16 0" />
                            <path d="M10 11l0 6" />
                            <path d="M14 11l0 6" />
                            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Record;
