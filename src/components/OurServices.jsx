import { Grid } from "@mui/system";
import React from "react";

const OurServices = () => {
  const Services = [
    {
      img: "imgs/doorstep-courier.png",
      heading: "Door-to-Door Service",
      para: "We pick up from your location and deliver directly to your destination",
    },
    {
      img: "imgs/schedule.png",
      heading: "Flexible Scheduling",
      para: "Book same-day, next-day, or schedule up to 30 days in advance.",
    },
    {
      img: "imgs/handling.png",
      heading: "Secure Handling",
      para: "Professional packing, handling, and full insurance coverage.",
    },
    {
      img: "imgs/customer-service.png",
      heading: "24/7 Support",
      para: "Round-the-clock Live chat and email assistance customer support for all your travel needs",
    },
  ];
  return (
    <>
      <div className="w-[90%] m-auto">
        <div className="flex flex-col justify-center items-center gap-[20px]">
          <h1 className="text-[40px] mt-[80px]">Why Choose Our Service?</h1>
          <p className='text-[grey] text-[20px]'>
            We make travel easier with our comprehensive luggage delivery
            service
          </p>
        </div>
        <Grid container spacing={4}>
          {Services.map((item, index) => (
            <Grid item size={3} key={index}>
              <div className=" ab-img bg-[#F5F5F5] flex flex-col items-center text-center mt-[90px]">
               
                <img src={ item.img} 
                className="w-[100px] h-[100px]"></img>
                <div className="text-center max-w-[220px]">
                <h4 className="text-[20px] text-[#1E1D4C] mt-[20px] ">{item.heading}</h4>
                <p className="text-[18px] text-[#5E6282] mt-[20px] leading-[28px]">{item.para}</p>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
};

export default OurServices;
