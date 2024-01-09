"use client"
import React, { useState } from "react";
import SocialsList from "@/shared/SocialsList/SocialsList";
import Label from "@/components/Label/Label";
import Input from "@/shared/Input/Input";
import Textarea from "@/shared/Textarea/Textarea";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import BackgroundSection from "@/components/BackgroundSection/BackgroundSection";
import SectionPromo1 from "@/components/SectionPromo1";
import ncNanoId from "@/utils/ncNanoId";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { baseUrl } from "@/Url";
import { Router, useRouter } from "next/router";


const info = [
  {
    title: "🗺 ADDRESS",
    desc: "Silk Park Bhawan, Premnagar, Dehradun, 248007 Uttarakhand",
  },
  {
    title: "💌 EMAIL",
    desc: "ucrf.silk@gmail.com",
  },
  {
    title: "☎ PHONE",
    desc: "0135-2770093",
  },
];


const ContactDetails = ({ className = '' }) => {
  return (
    <div className={`max-w-sm space-y-8 ${className}`}>
      {info.map((item, index) => (
        <div key={index}>
          <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
            {item.title}
          </h3>
          <span className="block mt-2 text-neutral-500 dark:text-neutral-400">
            {item.desc}
          </span>
        </div>
      ))}
      <div>
        <h3 className="uppercase font-semibold text-sm dark:text-neutral-200 tracking-wider">
          🌏 SOCIALS
        </h3>
        <SocialsList className="mt-2" />
      </div>
    </div>
  );
}



const ContactForm = ({ }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const onSubmit = () => {
    console.log('data : ', { email : email, name, message });
    console.log('name l : ', name.replace(' ', '').length < 3)
    if (name.replace(' ', '').length < 3) {
      toast.error('Name should not be empty');
      return false;
    }
    if (!email.match(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)) {
      toast.error('Email is not valid');
      return false;
    }
    if (message.replace(/ /gmi, '').length < 10) {
      toast.error('message should be a little longer');
      return false;
    }

    axios.post(`${baseUrl}/contactForm`, { email: email, name: name, message: message })
      .then((response) => {
        if (response.status === 200) {

          toast.success(response.data.message);

        } else {
          toast.error(response.data.message)
        }
        console.log(response)
      })
      .catch((err) => {
        toast.error('Server Down.\nTry Again Later.')
        // console.log(error)
      })


    return false;
  }



  return (
    <div>
      <ToastContainer />

      <form className="grid grid-cols-1 gap-6 mb-10" action="#" method="post" onSubmit={() => onSubmit()}>
        <label className="block">
          <Label>Full name</Label>

          <Input
            placeholder="Example Doe"
            type="text"
            className="mt-1"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="block">
          <Label>Email address</Label>

          <Input
            type="email"
            placeholder="example@example.com"
            className="mt-1"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="block">
          <Label>Message</Label>

          <Textarea
            className="mt-1"
            rows={6}
            onChange={(e) => setMessage(e.target.value)}
          />
        </label>
        <div className="mx-auto">
          <ButtonPrimary type="submit">Send Message</ButtonPrimary>
        </div>
      </form>
    </div>
  );
}

const PageContact = ({ }) => {
  return (
    <div className={`nc-PageContact overflow-hidden`}>
      <div className="">
        <h2 className="my-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          Contact
        </h2>
        <div className="container max-w-7xl mx-auto">
          <div className="flex-shrink-0 grid grid-cols-1 md: md:grid-cols-2 gap-12 ">

            <ContactDetails className='hidden md:block' />

            <ContactForm />

            <ContactDetails className='md:hidden' />
          </div>
        </div>
      </div>

      {/* OTHER SECTIONS */}
      <div className="container">
        <div className="relative py-20 lg:py-20">
          {/* <BackgroundSection />
          <SectionPromo1 /> */}
        </div>
      </div>
    </div>
  );
};

export default PageContact;
