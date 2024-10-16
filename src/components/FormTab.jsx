/* eslint-disable react/prop-types */

const FormTab = ({ children, isActive, setActiveTab }) => {
    return (
        <div
            onClick={() => setActiveTab(children)}
            className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${isActive ? "active" : ""}`}
        >
            {children}
        </div>
    );
};

export default FormTab;
