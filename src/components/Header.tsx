import { useState } from "react";
import { Link } from "react-router-dom"

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className=" flex justify-between items-center px-6 py-[30px]">
            <div className="flex gap-2 justify-center items-center cursor-pointer">
                <img className="h-[50px]" loading="lazy" src="/assets/icons/logo.webp" alt="tog" />
                <span className="tagline text-center text-[10px] font-normal">#1 Social Media <br />AI Agent</span>
            </div>
            <nav className="flex relative justify-center items-center">
                <Link className="font-medium max-sm:hidden text-lg mx-2" to="/#pricing">Pricing</Link>
                <Link className="font-medium max-sm:hidden text-lg mx-2" to="/auth/login">Login</Link>
                <button className="sm:flex hidden uppercase border-2 border-solid border-[#FEC007] text-[#FEC007] px-6 py-2 rounded-full">
                    Try it free
                </button>
                <div className="flex sm:hidden flex-col gap-[4.5px] cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    <span className={`w-6 h-1 rounded-[8px] bg-white ${isOpen && "rotate-45"} origin-left ease-in-out duration-300`} />
                    <span className={`w-6 h-1 rounded-[8px] bg-white ${isOpen && "opacity-0"}  ease-in-out duration-300`} />
                    <span className={`w-6 h-1 rounded-[8px] bg-white ${isOpen && "-rotate-45"} origin-left ease-in-out duration-300`} />
                </div>
                <div className={`fixed sm:hidden rounded-[8px] z-10 p-2 bg-linear-to-r min-w-36 from-[#8b6a07] to-gray-800 top-10 flex transition-transform duration-300 flex-col ${isOpen ? "-translate-x-9" : "translate-x-[200%]"}`}>
                    <div className="flex flex-col mx-2 gap-[4.5px] cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                        <span className={`w-6 h-1 rounded-[8px] bg-white ${isOpen && "rotate-45"} origin-left ease-in-out duration-300`} />
                        <span className={`w-6 h-1 rounded-[8px] bg-white ${isOpen && "opacity-0"}  ease-in-out duration-300`} />
                        <span className={`w-6 h-1 rounded-[8px] bg-white ${isOpen && "-rotate-45"} origin-left ease-in-out duration-300`} />
                    </div>
                    <Link className="font-medium  text-lg mx-2" to="/#pricing">Pricing</Link>
                    <Link className="font-medium  text-lg mx-2" to="/auth/login">Login</Link>
                    <button className="flex mt-1 uppercase border-2 border-solid border-[#FEC007] text-[#FEC007] px-3 py-2 rounded-full">
                        Try it free
                    </button>
                </div>
            </nav>
        </header>
    )
}

export default Header
