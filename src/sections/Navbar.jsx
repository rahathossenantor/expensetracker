import logo from "../assets/image/logo.svg";

const Navbar = () => {
    return (
        <nav>
            <div className="flex max-w-7xl items-center bg-[#F9FAFB] w-full justify-between py-1 mt-2 border px-4 rounded-md mx-auto">
                {/* Logo */}
                <div>
                    <img src={logo} className="h-14" />
                </div>
                {/* Menu */}
                <div className="hidden md:block">
                    <ul className="flex gap-4 text-gray-500 font-medium">
                        <li className="cursor-pointer">Home</li>
                        <li className="cursor-pointer">App</li>
                        <li className="cursor-pointer">Account</li>
                        <li className="cursor-pointer">Export</li>
                    </ul>
                </div>
                {/* Button */}
                <div className="px-6 py-2 bg-teal-600 cursor-pointer text-white w-fit rounded-md">
                    Get App
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
