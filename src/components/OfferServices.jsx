import React from "react";
import { Grid } from "@mui/material";

const OfferServices = () => {
  return (
    <>
      <div className="w-[90%] m-auto">
        <div className="flex flex-col justify-center items-center gap-[40px]">
          <h1 className="text-[40px] mt-[70px]">What Service we offers</h1>
          <p className="text-[grey] text-[16px] mt-[-20px]">
            The best booking platform you can trust
          </p>
        </div>
        <div className="w-[85%] m-auto mt-[50px]">
            <Grid container spacing={6}>
            <Grid item size={6}>
              <div
                className=" relative offer-img h-[380px] flex items-end  bg-cover bg-center rounded-[20px] overflow-hidden"
                style={{ backgroundImage: `url("imgs/offerservices.png")` }}
              >
                <div className="bg-[#00000075] w-[100%] h-[100px] ">
                  <p className="text-[25px] text-[#FFFFFF] m-[25px]  ">
                    Home Baggage <br /> Check-in
                  </p>
                </div>
              </div>
            </Grid>
            <Grid item size={6}>
               <div
                className=" relative offer-img h-[380px] flex items-end  bg-cover bg-center rounded-[20px] overflow-hidden"
                style={{ backgroundImage: `url("imgs/offerservices2.png")` }}
              >
                <div className="bg-[#00000075] w-[100%] h-[100px]">
                  <p className="text-[25px] text-[#FFFFFF] m-[25px]">
                    Baggage <br />Collect
                  </p>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default OfferServices;
