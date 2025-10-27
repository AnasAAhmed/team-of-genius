import { Link } from "react-router-dom"

const Header = () => {
    return (
        // <div className=" flex justify-between">
        //     <div className="flex justify-center items-center">
        //         <Link to={'/'}>
        //             <img src="/logo.webp" alt=" logo" />
        //         </Link>
        //         <span className="tagline text-foreground text-center">#1 Social Media <br/>AI Agent</span>
        //     </div>
        //     <div>
        //         <Link to={'#pricing'}>

        //         </Link>
        //     </div>
        // </div>
        <header className=" flex justify-between items-center px-6 py-[30px]">
            <div className="flex gap-2 justify-center items-center cursor-pointer">
                <img className="h-[50px]" loading="lazy" src="/assets/logo.webp" alt="tog" />
                <span className="tagline text-center text-[10px] font-normal">#1 Social Media <br />AI Agent</span>
            </div>
            <nav className="flex justify-center items-center">
                <div className="absolute top-3 left-2 hamburger-menu ">
                </div>
                <Link className="font-medium text-lg mx-2" to="/#pricing">Pricing</Link>
                <Link  className="font-medium text-lg mx-2" to="/auth/login">Login</Link>
                <button className="flex md:hidden uppercase border-2 border-solid border-[#FEC007] text-[#FEC007] px-6 py-2 rounded-full">
                    Try it free
                </button>
                <button className="hidden md:flex uppercase border-2 border-solid border-[#FEC007] text-[#FEC007] px-6 py-2 rounded-full">Try it free
                </button>
            </nav>
        </header>
    )
}

export default Header
