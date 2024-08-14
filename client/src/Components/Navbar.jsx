import logo from "../assets/T T (1).png"



export default function NavigationBar(){

    return(
        <>
        <div className="w-full h-[10vh] bg-slate-800 flex ">
            <div className="w-[50%] h-full bg-transparent">
                <img className="h-full w-[20%] object-cover ml-4" src={logo} />
            </div>
            <div className="w-[50%] h-full bg-slate-500">
                <div></div>
            </div>
        </div>
        </>
    )
}