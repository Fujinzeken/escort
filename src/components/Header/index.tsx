import React from "react";

import { Img, Text } from "components";

type HeaderProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> &
  Partial<{}>;

const Header: React.FC<HeaderProps> = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="flex flex-col items-end justify-center px-[15px] w-full">
          <div className="flex flex-col items-center justify-center pl-2 py-2 w-[14%] md:w-full">
            <div className="bg-blue-500 border border-blue-500 border-solid flex flex-row items-center justify-center rounded-[20px] w-[99%] md:w-full">
              <div className="flex flex-col items-start justify-start ml-3 w-[38px]">
                <Img
                  className="h-[39px] md:h-auto object-cover rounded-[20px] w-[74%]"
                  src="images/img_bv7mozwnhchqrqp.png"
                  alt="bv7mozwnhchqrqp"
                />
              </div>
              <div className="flex flex-col items-center justify-start">
                <Text
                  className="capitalize text-[15px] text-white-A700"
                  size="txtMontserratMedium15WhiteA700"
                >
                  Hi, tekena
                </Text>
              </div>
              <Img
                className="h-[22px]"
                src="images/img_arrowdown.svg"
                alt="arrowdown"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header.defaultProps = {};

export default Header;
