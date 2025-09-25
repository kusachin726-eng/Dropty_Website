import React from "react";
import { useState, useEffect } from "react";
import { Grid, TextField } from "@mui/material";
import axios from "axios";

const InstantQuote = () => {
  const [data, setData] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile_number: "",
    subject: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");

  const handleInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        form
      );
      if (response.status === 200 || response.status === 201) {
        setSuccessMessage("Form submitted successfully!");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccessMessage("Something went wrong.");
    }
  };

  return (
    <div className="gradient_bg pt-[50px] h-[100vh] overflow-hidden">
      {/* Left side image + text */}
      <Grid container spacing={2} className="w-[80%] m-auto">
        <Grid item size={6}>
          <h1 className="text-[#EDEDED] font-semibold leading-[50px] w-[460px] pt-[40px]">
            Instant quote, <br></br>Hassle-free Luggage pickup Just a few clicks
            away
          </h1>
          <div className="relative mt-[20px]">
            <img
              src="imgs/layer.png"
              alt=""
              className=" w-[600px] absolute top-[80px] left-[-99px] z-0 "
            />
            <img
              src="imgs/luggage.svg"
              alt=""
              className=" pt-[40px] relative z-10 !important"
            />
          </div>
        </Grid>
        <Grid item size={6}>
          <div className="main bg-[#FFFFFF]">
            {data.map((curval, index) => (
              <div key={index}>
                <p>{curval.title}</p>
              </div>
            ))}

            <div className="flex flex-col justify-center relative ]">
              <form className=" " onSubmit={handleSubmit}>
                <div className="flex flex-col gap-[12px] px-[16px]  py-[30px]">
                  <h1>Get Instant Quote</h1>

                  <label>Name</label>
                  <TextField
                    fullWidth
                    id="name"
                    name="name"
                    placeholder="Vikas Raj"
                    value={form.name}
                    onChange={handleInput}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                      },
                      "& .MuiInputBase-input": {
                        padding: "10px 12px",
                      },
                    }}
                  />

                  <label>Email Address</label>
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    placeholder="vikasraj@gmail.com"
                    value={form.email}
                    onChange={handleInput}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                      },
                      "& .MuiInputBase-input": {
                        padding: "10px 12px",
                      },
                    }}
                  />

                  <label>Mobile Number</label>
                  <TextField
                    fullWidth
                    id="mobile_number"
                    name="mobile_number"
                    placeholder="+91"
                    value={form.mobile_number}
                    onChange={handleInput}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                      },
                      "& .MuiInputBase-input": {
                        padding: "10px 12px",
                      },
                    }}
                  />

                  <label>Subject</label>
                  <TextField
                    fullWidth
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={form.subject}
                    onChange={handleInput}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                      },
                      "& .MuiInputBase-input": {
                        padding: "10px 12px",
                      },
                    }}
                  />

                  {/* <label>Tell us your Requirement</label> */}
                  <TextField
                    id="message"
                    name="message"
                    placeholder="Tell us your Requirement"
                    value={form.message}
                    onChange={handleInput}
                    className=" "
                    multiline
                    rows={4}
                    fullWidth
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        borderRadius: "12px",
                      },
                      // "& .MuiInputBase-input": {
                      //   padding: "10px 10px",
                      // },
                    }}
                  />
                </div>
                <div className="px-[20px] pb-[20px] ">
                  <button type="submit" className=" site_btn">
                    Get a Quote
                  </button>
                </div>
              </form>
              {successMessage && (
                <p style={{ color: "green" }}>{successMessage}</p>
              )}
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default InstantQuote;
