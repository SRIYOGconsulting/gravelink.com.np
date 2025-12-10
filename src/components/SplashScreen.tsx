import React from "react"
import { AiOutlineClose } from "react-icons/ai";
import './SplashScreen.css'

interface Props{
  loading:boolean;
  setLoading:()=>void;
}

const SplashScreen = ({howSplash, setShowSplash}:Props) => {
    const crossClickHandler=()=>{
        setShowSplash(false);
    }
  return (
    <div className="splash-container">
        <div className="cross-icon">
        <AiOutlineClose size={22} onClick={crossClickHandler}  />
        </div>
      <div className="splash-img">
        <img src="/images/splash/splash-screen.jpg" alt="" />
      </div>
    </div>
  )
}

export default SplashScreen
