/* eslint-disable react/prop-types */
import Record from "../components/Record";

const HistoryDisplay = ({ children, title, records = [], updaterFn, financialStats, setFinancialStats, setDefaltFormData, setActiveTab }) => {
    return (
        <div className="border rounded-md relative">
            {/* Header */}
            <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
                <div className="flex items-center gap-2">
                    {children}
                    <div>
                        <h3 className="text-xl font-semibold leading-7 text-gray-800">
                            {title}
                        </h3>
                    </div>
                </div>
                {/* Sorting and Filtering Column */}
                <div>
                    {/* Sorting */}
                    {/* <div className="relative inline-block text-left mr-1">
                        <div>
                            <button
                                type="button"
                                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                id="menu-button"
                                aria-expanded="true"
                                aria-haspopup="true"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-sort-descending"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 6l9 0" />
                                    <path d="M4 12l7 0" />
                                    <path d="M4 18l7 0" />
                                    <path d="M15 15l3 3l3 -3" />
                                    <path d="M18 6l0 12" />
                                </svg>
                            </button>
                        </div>
                        <div
                            className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="menu-button"
                            tabIndex={-1}
                        >
                            <div className="py-1" role="none">
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                                    role="menuitem"
                                    tabIndex={-1}
                                    id="menu-item-0"
                                >
                                    Low to High
                                </a>
                                <a
                                    href="#"
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                                    role="menuitem"
                                    tabIndex={-1}
                                    id="menu-item-0"
                                >
                                    High to Low
                                </a>
                            </div>
                        </div>
                    </div> */}
                    {/* Filtering */}
                    {/* <div className="relative inline-block text-left">
                        <div>
                            <button
                                type="button"
                                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                id="filter-button"
                                aria-expanded="true"
                                aria-haspopup="true"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={18}
                                    height={18}
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="icon icon-tabler icons-tabler-outline icon-tabler-adjustments-alt"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M4 8h4v4h-4z" />
                                    <path d="M6 4l0 4" />
                                    <path d="M6 12l0 8" />
                                    <path d="M10 14h4v4h-4z" />
                                    <path d="M12 4l0 10" />
                                    <path d="M12 18l0 2" />
                                    <path d="M16 5h4v4h-4z" />
                                    <path d="M18 4l0 1" />
                                    <path d="M18 9l0 11" />
                                </svg>
                            </button>
                        </div>
                        <div
                            className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu"
                            aria-orientation="vertical"
                            aria-labelledby="filter-button"
                            tabIndex={-1}
                            id="filter-dropdown"
                        >
                            <div className="py-1" role="none">
                                <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                                        id="filter-option-1"
                                    />
                                    <span className="ml-2">Salary</span>
                                </label>
                                <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                                        id="filter-option-2"
                                    />
                                    <span className="ml-2">Outsourcing</span>
                                </label>
                                <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                                        id="filter-option-3"
                                    />
                                    <span className="ml-2">Bond</span>
                                </label>
                                <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
                                    <input
                                        type="checkbox"
                                        className="form-checkbox h-4 w-4 rounded-md text-gray-600"
                                        id="filter-option-3"
                                    />
                                    <span className="ml-2">Dividend</span>
                                </label>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
            <div className="p-4 divide-y">
                {
                    records.map(record => (
                        <Record
                            key={record.id}
                            tab={title}
                            records={records}
                            record={record}
                            updaterFn={updaterFn}
                            financialStats={financialStats}
                            setFinancialStats={setFinancialStats}
                            setDefaltFormData={setDefaltFormData}
                            setActiveTab={setActiveTab}
                        />
                    ))
                }
            </div>
        </div>
    );
};

export default HistoryDisplay;
