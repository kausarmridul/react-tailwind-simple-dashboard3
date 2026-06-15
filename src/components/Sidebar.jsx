import { assets } from "../assets";
import Header from "./Header";

const Sidebar = () => {
  return (
    <>
      <div className="col-span-3 overflow-y-auto pt-15">
        <div>
          <div className="relative inline-block">
            <span className="leading-full bg-col-2 absolute right-0 inline-flex h-7.25 w-7.25 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full text-[13px] font-semibold tracking-[0.22px] text-white">
              4
            </span>
            <img
              src={assets.profile}
              alt="Profile"
              className="rounded-[13px]"
            />
          </div>
          <div>
            <h3 className="mt-5 text-3xl leading-8.75 font-semibold text-white">
              Samantha
            </h3>
            <p className="mt-1.25 text-[17px] leading-6.75 font-normal text-white opacity-60">
              samantha@email.com
            </p>
          </div>
        </div>
        <Header />
      </div>
    </>
  );
};

export default Sidebar;
