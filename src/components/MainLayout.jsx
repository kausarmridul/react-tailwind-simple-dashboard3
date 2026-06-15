import { assets } from "../assets";
import { Card, Cost, Heading } from "./Card";

const MainLayout = () => {
  return (
    <>
      <div className="col-span-9 grid grid-cols-12 gap-6 overflow-y-auto rounded-[30px] bg-white pl-15">
        <div className="col-span-8 pt-15">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-col-3 mb-2.5 text-[40px] leading-12.5 font-semibold tracking-[0.67px]">
                Expenses
              </h1>
              <p className="text-col-1 text-base leading-6 font-normal tracking-[0.34px] opacity-50">
                01 - 25 March, 2020
              </p>
            </div>
            <div className="mt-3 flex items-center gap-3">
              <img src={assets.avatar_group} alt="Avatar Group" />
              <button className="text-col-4 border-col-4 inline-flex h-6 w-6 items-center justify-center rounded-full border-2 text-xl">
                +
              </button>
            </div>
          </div>
          <div className="py-11.5">
            <img src={assets.graph} alt="Graph" className="w-full" />
          </div>
          <div>
            <div className="space-y-6">
              <Heading title="Today" />
              <Card
                imgIcon={assets.icon1}
                iconBg={"bg-col-8"}
                productName={"Grocery"}
                description={"5:12 pm  •  Belanja di pasar"}
                price={"-326.800"}
              />
              <Card
                imgIcon={assets.icon2}
                iconBg={"bg-col-9"}
                productName={"Transportation"}
                description={"5:12 pm  •  Naik bus umum"}
                price={"-15.000"}
              />
              <Card
                imgIcon={assets.icon3}
                iconBg={"bg-col-10"}
                productName={"Housing"}
                description={"5:12 pm  •  Bayar Listrik"}
                price={"-185.750"}
              />
            </div>
            <div className="space-y-6 pt-15">
              <Heading title="Monday, 23 March 2020" />
              <Card
                imgIcon={assets.icon4}
                iconBg={"bg-col-2"}
                productName={"Food and Drink"}
                description={"5:12 pm  •  Makan Steak"}
                price={"-156.000"}
              />
              <Card
                imgIcon={assets.icon5}
                iconBg={"bg-col-11"}
                productName={"Entertainment"}
                description={"5:12 pm  •  Nonton Bioskop"}
                price={"-35.200"}
              />
            </div>
          </div>
        </div>
        <div className="bg-col-12 col-span-4 px-8 pt-15">
          <div>
            <h3 className="text-col-3 mt-4 mb-7.5 text-xl leading-7.5 font-normal tracking-[0.33px]">
              Where your money go?
            </h3>
            <div className="space-y-7.5">
              <Cost
                name={"Food and Drinks"}
                price={"872.400"}
                width={"w-[25%]"}
              />
              <Cost name={"Shopping"} price={"1.378.200"} width={"w-[42%]"} />
              <Cost name={"Housing"} price={"928.500"} width={"w-[30%]"} />
              <Cost
                name={"Transportation"}
                price={"420.700"}
                width={"w-[22%]"}
              />
              <Cost name={"520.000"} price={"520.000"} width={"w-[35%]"} />
            </div>
            <div className="bg-col-15 mt-25 rounded-2xl p-6.25 pt-0">
              <div className="flex -translate-y-5 justify-between">
                <img src={assets.right_photo1} alt="" className="img-fluid" />
                <img src={assets.right_photo2} alt="" className="img-fluid" />
              </div>
              <div>
                <h3 className="text-col-6 mb-1 text-base leading-6 font-semibold tracking-[0.34px]">
                  Save more money
                </h3>
                <p className="text-col-7 mb-5 text-xs leading-5.25 font-normal tracking-[0.43px]">
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim.
                </p>
                <button className="bg-col-1 w-full rounded-lg text-[13px] leading-11.25 font-semibold tracking-[1.5px] text-white">
                  VIEW TIPS
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
