/* eslint-disable react/prop-types */

const RecordSummary = ({ children, amount = 0 }) => {
    return (
        <div className="bg-[#F9FAFB] flex lg:max-w-xs flex-col px-4 py-4">
            <dt className="text-base leading-7 text-gray-600">{children}</dt>
            <dd className="order-first text-xl font-semibold tracking-tight text-gray-700 sm:text-3xl">
                BDT <span className={amount < 0 ? "text-red-500" : ""}>{amount}</span>
            </dd>
        </div>
    );
};

export default RecordSummary;
