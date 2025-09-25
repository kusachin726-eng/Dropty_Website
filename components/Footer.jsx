import React from "react";
import { Grid } from "@mui/material";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const Cont = [
    {
      title: "Product",
      link: ["Features", "Pricing", "Case studies", "Reviews", "Updates"],
    },
    {
      title: "Company",
      link: ["About", "Contact Us", "Careers", "Culture", "Blog"],
    },
    {
      title: "Support",
      link: [
        "Getting started",
        "Help center",
        "Server status",
        "Report a bug",
        "Chat Support",
      ],
    },
  ];
  const Contact = [
    { icon: <MdEmail />, text: "contact@company.com" },
    { icon: <MdPhone />, text: "(xx) xxxx-xxxx" },
    { icon: <MdLocationOn />, text: "794 Mcallister St,    San Francisco, 94102" },
  ];

  const SocialLink = [
    { icon: <FaFacebook /> },
    { icon: <FaInstagram /> },
    { icon: <FaTwitter /> },
    { icon: <FaLinkedin /> },
  ];
  return (
    <div className="flex  items-start justify-between py-[50px] mx-[99px]">
      <div className="">
        <img src="imgs/dropty.logo.svg" alt="" className="" />
        <p className="text-[#6F6C90] mt-[12px]">
          Lorem ipsum dolor sit amet <br /> consectetur adipiscing elit aliquam
        </p>
        <h3 className="mt-[46px] font-semibold ">Follow Us On Social</h3>
        <div className="mt-[10px]">
          {SocialLink.map((item, index) => (
            <a key={index} href="#" className="px-[12px]">
              {item.icon}
            </a>
          ))}
        </div>
      </div>

      {Cont.map((section, id) => (
        <div key={id}>
          <h4 className="text-[#170F49]">{section.title}</h4>
          <ul className="mt-[32px]  list-none">
            {section.link.map((link, i) => (
              <li key={i} className="mt-[10px] text-[18px]">
                <a href="#" className="no-underline hover:no-underline text-[#6F6C90]">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="">
        <h4 className="text-[#170F49]">Contacts us</h4>
        <ul className="mt-[32px]">
          {Contact.map((item, id) => (
            <li key={id} className="mt-[10px] text-[#6F6C90]">
              <span className="">{item.icon}</span>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
        {/* <div className="">
        © {new Date().getFullYear()} Dropty. All rights reserved.
      </div> */}
    </div>
  );
};

export default Footer;
