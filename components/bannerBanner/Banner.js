'use client'

import LoginModal from "../modals/loginmodal/page";
import SignupModal from "../modals/signupmodal/page";

export default function BottomBanner() {
  return (
    <div className=" flex xl:space-x-[200px] justify-center items-center fixed w-full h-[80px] bg-[#1d9bf0] bottom-0">
      <div className="hidden xl:inline">
        <h1 className="text-2xl font-bold text-white">Don't miss what's happening</h1>
        <span className="text-[16px] font-normal text-white">
          People on Twitter are the first to know.
        </span>
      </div>
      <div>
        
        <LoginModal/>
        <SignupModal/>
      </div>
    </div>
  );
}
