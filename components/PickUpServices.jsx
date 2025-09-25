import React from "react";
import { LuBaggageClaim } from "react-icons/lu";
import { IoIdCard } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FaPersonSnowboarding } from "react-icons/fa6";
import { BiBriefcaseAlt2 } from "react-icons/bi";
import { IoMdQrScanner } from "react-icons/io";
import { IoCalendarClearOutline } from "react-icons/io5";
import { LuHandHeart } from "react-icons/lu";
import { Grid } from "@mui/material";

const PickUpServices = () => {
  const Services = [
    {
      icons: <LuBaggageClaim size={30} />,
      title: "Step 1",
      para: " Book home Baggage Services",
    },
    {
      icons: <IoIdCard size={30} />,
      title: "Step 2",
      para: "Dropty executive arrives at your doorstep",
    },
    {
      icons: <IoPersonOutline size={30} />,
      title: "Step 3",
      para: "Executive verifies ID and educates about baggage  regulations.",
    },
    {
      icons: <FaPersonSnowboarding size={30} />,
      title: "Step 4",
      para: " Receive boarding pass and hand-over your bags to our executives.",
    },
    {
      icons: <BiBriefcaseAlt2 size={30} />,
      title: "Step 8",
      para: "Bags are Handed over to the airlines in a secured and Soft manner.",
    },
    {
      icons: <IoMdQrScanner size={30} />,
      title: "Step 7",
      para: "Cleared Baggage is sent to the  airport for the last and final Handover",
    },
    {
      icons: <IoCalendarClearOutline size={30} />,
      title: "Step 6",
      para: " Bags undergo  X- ray Screening at the Hub for security checking ",
    },
    {
      icons: <LuHandHeart size={30} />,
      title: "Step 5",
      para: " Bags are Handed over to the airlines in a secured and Soft manner.",
    },
  ];
  return (
    <div>
      <div className="">
        <div className="flex flex-col justify-center items-center gap-[40px]">
          <div className="flex flex-col items-center gap-[12px]">
            <h1 className="text-[30px] mt-[20px]">
              How Luggage Pick-Up Service Works?
            </h1>
            <p className="text-[#737373] text-[14px]">
              We make travel easier with our comprehensive luggage delivery
              service
            </p>
          </div>
          <div className="">
            <span className="main bg-[#F0F2F6] text-[#353F65] px-[20px] p-[10px] mr-[24px]">
              Home Baggage Check-in
            </span>
            <span className="text-[#475073]">Baggage Collect</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <Grid container rowSpacing={4}>
          {Services.map((item, index) => (
            <Grid item size={3} className="flex justify-center">
              <div key={index} className="relative w-[150px] h-[150px] bg-[white] pick_up  items-center mt-[60px]">
                <div className="absolute w-[110px] h-[110px] bg-[#EEEEFF] top-[20px] left-[20px] pick_up ">
                  <div className="absolute w-[90px] h-[90px] bg-[#FFFFFF] top-[8px] left-[6px] pick_up flex justify-center items-center ">
                    {item.icons}
                  </div>
                </div>
                <div className="absolute bottom-[-80px] flex flex-col gap-[10px]">
                  <h3 className=" text-[#737373] text-[18px] mt-[0px] text-center">
                    {item.title}
                  </h3>
                  <p className="text-[12px] text-[#737373] text-center">
                    {item.para}
                  </p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default PickUpServices;
