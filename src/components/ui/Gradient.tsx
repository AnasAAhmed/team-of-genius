export const Gradient = () => {
    return (
        <div className="fixed light:hidden top-43 -left-10.5 opacity-30 w-226.5 mix-blend-color-dodge pointer-events-none">
            <div
                style={{ borderRadius: "100px", filter: 'blur(200px)' }}
                className=" bg-[radial-gradient(circle_at_center,rgba(255,255,0,0.5),rgba(255,255,0,0)_80%)] absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">

            </div>
        </div>
    );
};

export const GradientRight = () => {
    return (
        // <div style={{opacity:`${opacity}%`}} className="absolute top-73 -left-41.5 w-226.5 mix-blend-color-dodge pointer-events-none">
        //     <div className="absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2 
        //           bg-[radial-gradient(circle_at_center,rgba(255,255,0,0.5),rgba(255,255,0,0)_70%)]
        //           blur-3xl rounded-full">
        //     </div>
        // </div>
        <div className="fixed light:hidden top-43 left-121.5 w-226.5 mix-blend-color-dodge pointer-events-none">
            <div
                style={{ borderRadius: "100px", filter: 'blur(200px)' }}
                className=" bg-[radial-gradient(circle_at_center,rgba(255,255,0,0.5),rgba(255,255,0,0)_80%)] absolute top-1/2 left-1/2 w-[58.85rem] h-[58.85rem] -translate-x-3/4 -translate-y-1/2">

            </div>
        </div>
    );
};