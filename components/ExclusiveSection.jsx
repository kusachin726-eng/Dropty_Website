import React from "react";
import { Grid } from "@mui/material";

const ExclusiveSection = () => {
  const Exclusive = [
    {
      img: "imgs/bellboy.png",
      heading: "Dedicated  Concierge",
      para: "Personal travel assistant available 24/7 for premium experience management and hassle-free Journey",
    },
    {
      img: "imgs/support.svg.png",
      heading: "Customer Support",
      para: "Demonstrates commitment to user data security through encryption and secure payment practices",
    },
    {
      img: "imgs/policy.svg.png",
      heading: "Global Network",
      para: "Operations in 150+ cities worldwide with local expertise everywhere.",
    },
    {
      img: "imgs/location.png",
      heading: "Lightning Fast Services",
      para: "Average pickup time under 15 minutes with real-time coordination.",
    },
  ];
  return (
    <>
      <div className="w-[90%] m-auto bg-[#FAFBFC]">
        <div className="flex flex-col justify-center items-center gap-[20px] text-center">
          <h1 className="text-[40px] mt-[130px]">What makes Us Exclusive?</h1>
          <p className="text-[grey] text-[20px] max-w-[600px] leading-[28px]">
            {" "}
            Seamless, secure, and stress-free baggage service—right from your
            doorstep to your destination
          </p>
        </div>
        <Grid container specing={4}>
          <Grid item size={4}>
            <div className="pb-[80px] mt-[45px]">
              <img src="imgs/exclusive.image.png" alt="" className="w-full" />
            </div>
          </Grid>
          <Grid item size={8}>
            <Grid container spacing={2} className="">
              {Exclusive.map((item, index) => (
                // <Grid item size={6} key={index}>
                  <div key={index} className=" flex gap-[30px] mt-[45px] ">
                    <div className=" bg-[#FFFFFF]">
                      <img src={item.img} className="w-[40px] h-[40px] ml-[35px]"></img>
                    </div>
                    <div className="text-start max-w-[250px]">
                      <h4 className="text-[20px] text-[#1E1D4C] ">
                        {item.heading}
                      </h4>
                      <p className="text-[16px] text-[#5E6282] leading-[28px]">
                        {item.para}
                      </p>
                    </div>
                  </div>
                // </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ExclusiveSection;
