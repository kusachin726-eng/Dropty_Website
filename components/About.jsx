import React from "react";
import { Grid } from "@mui/material";

const About = () => {
  return (
    <>
      <div className="w-[90%] m-auto">
        <div className="flex flex-col justify-center items-center gap-[40px]">
          <h1 className="text-[40px] mt-[70px]">About Dropty</h1>
          <p className="text-[grey] text-[20px]">
            Eliminates the need to carry bags to the airport and wait in long
            check-in lines. 
          </p>
        </div>
        <div className="w-[85%] m-auto mt-[50px]">
          <Grid container spacing={6}>
            <Grid item size={6}>
              <div className="">
                <img
                  src="imgs/image.about.png"
                  alt=""
                  className="ab-img w-[530px] h-auto"
                />
              </div>
            </Grid>
            <Grid item size={6}>
              <div className="pb-[80px]">
                <p className="text-[20px] text-[#4E4E4E] leading-[38px]">
                  Dropty is an Indian smart luggage concierge service, a
                  tech-driven platform that handles airline baggage from the
                  traveler's doorstep to the airport and then delivers it to
                  their final destination post-flight. Founded by former Meta
                  VP Amit Kumar, it offers a seamless, stress-free travel
                  experience by eliminating airport check-in queues and
                  providing secure, real-time tracking of luggage. The company
                  is working with leading airlines to ensure compliance with
                  aviation security standards, aiming to transform airport
                  logistics and provide a customer-first travel solution in
                  India. {" "}
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};

export default About;
