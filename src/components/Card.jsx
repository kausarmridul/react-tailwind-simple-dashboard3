import { assets } from "../assets";

export const Card = ({ iconBg, imgIcon, productName, description, price }) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div>
            <span
              className={`inline-flex h-12 w-12 items-center justify-center rounded-full ${iconBg}`}
            >
              <img src={imgIcon} alt="Icon" />
            </span>
          </div>
          <div>
            <h3 className="text-col-6 mb-1 text-base leading-6 font-medium tracking-[0.34px]">
              {productName}
            </h3>
            <p className="text-col-7 text-sm leading-5 font-normal tracking-[0.5px] opacity-50">
              {description}
            </p>
          </div>
        </div>
        <div>
          <p className="text-col-6 text-base leading-6 font-semibold tracking-[0.34px]">
            {price}
          </p>
        </div>
      </div>
    </>
  );
};

export const Heading = ({ title }) => {
  return (
    <>
      <div>
        <div className="flex justify-between pb-2">
          <h3 className="text-col-3 text-lg leading-7.5 font-normal tracking-[0.3px]">
            {title}
          </h3>
          <button>
            <img src={assets.three_dot} alt="" />
          </button>
        </div>
        <hr className="bg-col-5 h-px w-full opacity-10" />
      </div>
    </>
  );
};

export const Cost = ({ name, price, width }) => {
  return (
    <>
      <div>
        <div className="flex justify-between pb-2">
          <h3 className="text-col-6 text-[13px] leading-6 font-medium tracking-[0.46px]">
            {name}
          </h3>
          <p className="text-col-6 text-[13px] leading-6 font-normal tracking-[0.46px]">
            {price}
          </p>
        </div>
        <div className="bg-col-13 relative z-1 h-1.25 w-full overflow-hidden rounded-[5px]">
          <span
            className={`bg-col-14 absolute left-0 -z-1 h-full ${width} rounded-[5px]`}
          ></span>
        </div>
      </div>
    </>
  );
};
