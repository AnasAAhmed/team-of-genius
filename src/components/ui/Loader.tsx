
const Loader = () => {
    return (
        <div className="flex justify-center items-center h-[80vh]">
            <div className="relative w-12 h-12">
                <div className="w-full h-full rounded-full border-4 border-yellow-400 border-t-transparent animate-spin"></div>
                <div className="absolute inset-0 w-full h-full rounded-full border-4 border-transparent border-l-yellow-400 rotate-45"></div>
            </div>
        </div>

    )
}

export default Loader
