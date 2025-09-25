import React from "react";
import { Grid, TextField } from "@mui/material";

const MobileServices = () => {
  return (
    <div className="main w-[80%] m-auto bg-[#E3F0FF] relative h-[600px] mt-[90px] ">
      <Grid container spacing={4}>
        <Grid item size={5}>
          <div className="absolute top-[-80px] left-[140px]">
            <img src="imgs/mobile.png" alt="" className="w-[280px] " />
          </div>
        </Grid>
        <Grid item size={7} className=" ">
          <div className="">
            <div className="mx-[240px] mt-[30px]">
              <img src="imgs/flight.Image.png" alt="" className="w-[450px]" />
            </div>
            <div className="pb-[20px] w-[600px]">
              <span className="mob_exp bg-[white] px-[22px] py-[14px] text-[14px] font-[500]">
                Experience Convenience at Your Fingertips:
              </span>

              <h1 className="pb-[20px] mt-[30px]">Get Our Mobile App!</h1>
              <p className="text-[19px] leading-[30px] text-[#737373]">
                Ready to take your travel plans to the next level of convenience
                and accessibility? Say hello to our mobile app – your ultimate
                travel companion right in the palm of your hand!
              </p>
            </div>
          </div>
          <div className=" px-[2px] pb-[20px]">
            <button type="Submit" className="site_btn !text-[16px] !px-[15px]">
              Download Now
            </button>
          </div>
          <div className="flex justify-center gap-[30px] mt-[60px]">
            <img src="imgs/iappstore.png" alt="" className="w-[170px]" />

            <img src="imgs/googleplay.png" alt="" className="w-[170px]" />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default MobileServices;
