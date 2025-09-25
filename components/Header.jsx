import { TextField } from "@mui/material";
import React from "react";
import { MdLocationOn } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { MdDateRange } from "react-icons/md";

const Header = () => {
  const Falying = [
    {
      name: "Flying From",
      state: "Delhi",
    },
    {
      name: "Flying To",
      state: "Mumbai",
    },
    {
      name: "Departure Date",
      state: "02 march 2023",
    },
    {
      name: "Checkin Items",
      state: "Bags, Child equipment, Oversize item",
    },
  ];
  return (
    <>
      <div className="relative ">
        <div className="justify-between items-center flex mx-[90px]">
          <img src="imgs/dropty.logo.svg" alt="" className="p-[12px]" />
          <ul className=" flex ">
            <a
              href="#home"
              className="text-[#808080] px-[24px]  text-[18px] no-underline"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-[gray] px-[24px] text-[18px] no-underline"
            >
              About
            </a>
            <a
              href="#services"
              className="text-[gray] px-[24px] text-[18px] no-underline"
            >
              Services
            </a>
            <a
              href="#how it works"
              className="text-[gray] px-[24px] text-[18px] no-underline"
            >
              How It Works
            </a>
            <a
              href="#contact"
              className="text-[gray] px-[24px] text-[18px] no-underline"
            >
              Contact
            </a>
          </ul>
          {/* <div className="px-[54px] ">
            <button
              type="login"
              className="header_btn !text-[16px] !px-[30px] mr-[20px]"
            >
              Login
            </button>
            <button
              type="signup"
              className="header_btn !text-[16px] !px-[20px]"
            >
              Signup
            </button>
          </div> */}
        </div>
        <div className="relative">
          <img src="imgs/flight.png" alt="" className="w-[1535px] h-[700px]" />

          <div className="absolute top-[0px] text-[#FFFFFF] header_gradient w-[100%] h-[700px]">

            <div className="mt-[100px] ml-[100px]">
              <h1 className="text-[58px]">
                Check-In From Home <br /> Travel Hands-Free
              </h1>
              <p className="text-[22px]">
                Dropty picks up your luggage, completes your airline check-in,{" "}
                <br />
                and ensures a secure journey. Collect it at your destination or
                let <br />
                us deliver it straight to your doorstep
              </p>
            </div>

          </div>
        </div>
        <div className="main absolute bottom-[-50px] left-1/2 -translate-x-1/2 w-[99%] max-w-[1200px] bg-[#FFFFFF] px-[20px] py-[35px]">
          <div className="flex justify-end bg-[red ]">
            <span className="top-[2px]">coming soon</span>
          </div>
          <div>
            <h1 className="text-[18px] font-[500] text-[#404040] leading-[12px]">
              Book My Luggage
            </h1>
          </div>
          <div className="mt-[20px] flex gap-[40px]">
            <span className="main text-[#353F65] px-[18px] py-[8px] bg-[#F0F2F6]">
              Home Check-in
            </span>
            <span className="text-[#475073] pt-[5px]">Baggage Collect</span>
            <span className="text-[#475073]  pt-[5px]">Check-in & Collect</span>
          </div>
          <div className="main flex justify-between items-center border-[1px] border-[#E4E6E8] px-[30px] py-[20px] mt-[20px] ">
            {Falying.map((List, index) => (
              <>
                <div
                  key={index}
                  className="flex flex-col border-r border-r-[#E4E6E8] "
                >
                  <h4 className="text-[16px] text-[#737373] font-[500]">
                    {List.name}
                  </h4>
                  <div className="flex items-center gap-[5px] pt-[10px]">
                    {List.name === "Departure Date" ? (
                      <MdDateRange className="text-[#D6D7D8] text-[20px]" />
                    ) : List.name === "Checkin Items" ? (
                      <IoPersonOutline className="text-[#D6D7D8] text-[20px]" />
                    ) : (
                      <MdLocationOn className="text-[#D6D7D8] text-[20px]" />
                    )}
                    {/* <MdLocationOn className="text-[#D6D7D8] text-[20px]" /> */}
                    <span className="text-[16px] text-[#000000] font-[500]">
                      {List.state}
                    </span>
                    {List.name !== "Departure Date" &&
                      List.name !== "Checkin Items" && (
                        <MdKeyboardArrowDown className="text-[#000000] text-[20px]" />
                      )}
                  </div>
                </div>
              </>
            ))}
            <div className="flex gap-[10px] items-center site_btn">
              <IoSearch className="text-[#ffff] text-[20px]" />{" "}
              <span className="text-[#ffff]">Get a Quote</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
