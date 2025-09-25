import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";

const Questions = () => {
  const Que = [
    {
      heading: "How does Dropty content XX XXXXX?",
      para: "",
    },
    {
      heading: "What kind of support do you provide?",
      para: "We provide 24/7 technical support, dedicated account managers for enterprise clients, comprehensive  onboarding, and regular performance reports to ensure you get the most out of our platform.",
    },
    {
      heading: "How quickly can I see results?  ",
      para: "",
    },
    {
      heading: "What's your pricing model?",
      para: "",
    },
    {
      heading: "What's your pricing model?",
      para: "",
    },
  ];
  return (
    <div className=" overflow-hidden h-screen">
    <div className="w-[70%] m-auto mt-[85px]">
      <div className="flex flex-col justify-center items-center gap-[20px] ">
        <h1>Frequently Asked Questions</h1>
        <div className="">
          <span className="main bg-[#F0F2F6] text-[#353F65] px-[20px] p-[10px] mr-[24px]">
            Luggage Booking
          </span>
          <span className="text-[#475073]">Luxury Rental</span>
        </div>
      </div>
      {Que.map((item, index) => (
        <div  key={index} className="mt-[30px] border-t border-t-[#E1E1E1]">
          <h4 className="py-[20px] flex justify-between items-center">{item.heading}
             <MdKeyboardArrowDown className="text-[#000000] text-[20px]" />
          </h4>
          <p className="">{item.para}</p>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Questions;
