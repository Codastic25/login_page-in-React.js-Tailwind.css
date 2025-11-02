import BoutonsLog from "./BoutonsLog"
import InputsLog from "./InputsLog"
import cadenas from "../assets/lock.png"
import personnage from "../assets/user.png"

function Cadre() {

  return (
    <>
    <div className="place-self-center min-w-[550px] max-w-md flex flex-col p-7 min-h-[570px] rounded-xl backdrop-blur-lg border border-blue-500 shadow-xl">
        <div className="text-5xl font-bold place-self-center py-8">
            Login
        </div>
        <div>
            <InputsLog text="Username" type="text" img={personnage}/>
            <InputsLog text="Password" type="password" img={cadenas}/>
        </div>
        <div className="flex items-center w-full">
            <input type="checkbox" className="ml-6 my-6 cursor-pointer w-6 h-6"/>
            <span className="pl-4">Remember me</span>
            <span className="ml-auto mr-9 cursor-pointer">Forgot Password ?</span>
        </div>
        <div>
            <BoutonsLog />
        </div>
        <div className="flex items-center justify-center w-full">
            <span className="pl-8 py-5 place-self-center">
                Don't have an account ? 
            </span>
            <span className="font-bold pl-2 cursor-pointer">
                Register
            </span>
        </div>
    </div>
    </>
  )
}

export default Cadre