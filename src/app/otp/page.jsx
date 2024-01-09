"use client"
import React, { FC, useState } from "react";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Link from "next/link";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import Input from "@/shared/Input/Input";
import { baseUrl } from "../../Url";

const Otp = () => {
  const router = useRouter();
  const [OTP, setOTP] = useState("");
  var id;

  if (typeof window !== 'undefined') {
    id = window.localStorage.getItem('id')
  }




  const handleClick = (e) => {
    e.preventDefault();
    let id = window.localStorage.getItem('id');
    axios.post(`${baseUrl}/verifyOTP/${id}`, { otp: OTP })
      .then((response) => {
        console.log(response)
        if (response.status === 200) {
          toast.success('redirecting to set Password')
          router.push('/password');
        } else {
          console.log('bad:', response);
        }
      })
      .catch((error) => {
        toast.error('wrong OTP');
        console.log('err', error);
      })

  }
  return (
    <div className={`nc-PageSignUp `} data-nc-id="PageSignUp">
      <ToastContainer />
      <div className="container mb-24 lg:mb-32">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Enter OTP
        </h2>
        <div className="max-w-md mx-auto space-y-6 ">
          <div className="grid gap-3">
            {/* {loginSocials.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className=" flex w-full rounded-lg bg-primary-50 dark:bg-neutral-800 px-4 py-3 transform transition-transform sm:px-6 hover:translate-y-[-2px]"
              >
                <Image
                  sizes="40px"
                  className="flex-shrink-0"
                  src={item.icon}
                  alt={item.name}
                />
                <h3 className="flex-grow text-center text-sm font-medium text-neutral-700 dark:text-neutral-300 sm:text-sm">
                  {item.name}
                </h3>
              </a>
            ))} */}
          </div>
          {/* OR */}
          <div className="relative text-center">
            <span className="relative z-10 inline-block px-4 font-medium text-sm bg-white dark:text-neutral-400 dark:bg-neutral-900">
              OR
            </span>
            <span className="block text-center text-neutral-700 dark:text-neutral-300">
              Please enter the 6 digit verification code sent on you Registered Mobile Number.
            </span>
            <div className="absolute left-0 w-full top-1/2 transform -translate-y-1/2 "></div>
          </div>
          {/* FORM */}
          <div className="grid grid-cols-1 gap-6">
            <label className="block">
              <span className="text-neutral-800 dark:text-neutral-200">
                Check your Email
              </span>
              <Input onChange={(e) => setOTP(e.target.value)} value={OTP} />

            </label>
            <label className="block">

            </label>
            <ButtonPrimary type="submit" onClick={handleClick}>Continue</ButtonPrimary>
          </div>

          {/* ==== */}
          <span className="block text-center text-neutral-700 dark:text-neutral-300">
            Already have an account? {` `}
            <Link className="text-green-600" href="/login">
              Sign in
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Otp;
