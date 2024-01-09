"use client"
import React, { FC, useEffect, useState } from "react";
import Heading from "@/components/Heading/Heading";
import './SectionStatistic.css';
import Link from "next/link";
import axios from "axios";
import { baseUrl } from "@/Url";
import DownloadTender from "../tender/DownloadTender";
import TenderLink from "../tender/TenderLink";
import TextTender from "../tender/TextTender";


const FOUNDER_DEMO = [
  {
    id: "1",
    heading: "10 million",
    subHeading:
      "Tender notice for firewood ",
  },
  {
    id: "2",
    heading: "100,000",
    subHeading: "Tender for procurement of Firewood ",
  },
  {
    id: "3",
    heading: "220+",
    subHeading:
      "Tender Notice dry Cocoon Purchase ",
  },
];



const SectionStatistic = ({ className = "" }) => {

  const [data, setData] = useState('');

  useEffect(() => {
    axios.get(`${baseUrl}/getAnnouncementFormById`)
      .then((response) => {
        console.log('All Tender', response.data)
        setData(response.data.data)
      }).catch((error) => { console.log(error) })

  }, [])


  return (
    <div className={`nc-SectionStatistic relative ${className}`}>
      <Heading
        desc=" We’re impartial and independent, and every day we create distinctive,
          world-class programmes and content"
      >
        🚀 Updates
      </Heading>
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8">

        <div className="text-center">
          <h3 className="text-2xl font-semibold leading-none p-3 text-neutral-900 md:text-3xl dark:text-neutral-200">
            Latest News
          </h3>
          <div className="marquee-wrapper">
            <div className="container">
              <div className="marquee-block">
                <div className="marquee-inner to-left">
                  <span>


                    {data == null || data == '' ? '' :
                      data.map((info) => {
                        return (
                          <>
                            {
                              info.criteria == 3 && info.datatype === 1 && info.is_active === true ? <DownloadTender url={info.file} text={info.text} /> : ''}
                            {info.criteria == 3 && info.datatype === 2 && info.is_active === true ? <TenderLink link={info.text} /> : ''}
                            {info.criteria == 3 && info.datatype === 3 && info.is_active === true ? <TextTender txt={info.text} /> : ''}
                          </>
                        )
                      })}



                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold leading-none p-3 text-neutral-900 md:text-3xl dark:text-neutral-200">
            <a href="Facebook" className="cursor-pointer">Facebook</a>
          </h3>
          <div className="">
            <div className="container">
              <div className="">
                <div className="">
                  <span>
                    {/* {FOUNDER_DEMO.map((item) => (
                      <div
                        key={item.id}
                        className="marquee-item"
                      >
                        <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
                          <Link to={'/tender'} href={'/tender'}> {item.subHeading}</Link>
                        </span>
                      </div>
                    ))} */}
                    <div className="">
                      <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
                        <iframe className="m-auto w-full h-[400px]" name="f1b4a881d42795" data-testid="fb:page Facebook Social Plugin" title="fb:page Facebook Social Plugin" frameborder="0" allowtransparency="true" allowfullscreen="true" scrolling="no" allow="encrypted-media" src="https://www.facebook.com/v18.0/plugins/page.php?adapt_container_width=true&amp;app_id=&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Dfcf7784493df0c%26domain%3Diframely.net%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fiframely.net%252Ff2d06cca3d6ae28%26relation%3Dparent.parent&amp;container_width=0&amp;height=500&amp;hide_cover=false&amp;href=https%3A%2F%2Fwww.facebook.com%2FDOONSILK&amp;locale=en_US&amp;sdk=joey&amp;show_facepile=false&amp;show_posts=true&amp;small_header=false&amp;width=470" />
                      </span>
                    </div>

                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold leading-none p-3 text-neutral-900 md:text-3xl dark:text-neutral-200">
            <a href="https://instagram.com/doon.silk?igshid=b3Q2MTFyM2ExZ2tk" className="cursor-pointer">Instagram</a>
          </h3>
          <div className="">
            <div className="container">
              <div className="">
                <div className="">
                  <span>
                    {/* {FOUNDER_DEMO.map((item) => (
                      <div
                        key={item.id}
                        className="marquee-item"
                      >
                        <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
                          <Link to={'/tender'} href={'/tender'}> {item.subHeading}</Link>
                        </span>
                      </div>
                    ))} */}

                    <div className="">
                      <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
                        <iframe class="m-auto w-full h-[400px] instagram-media instagram-media-rendered" id="instagram-embed-1" src="https://www.instagram.com/doon.silk/embed/?cr=1&amp;v=12&amp;wp=540&amp;rd=https%3A%2F%2Fwww.instaembedcode.com&amp;rp=%2F#%7B%22ci%22%3A1%2C%22os%22%3A18995.20000000298%2C%22ls%22%3A8454.89999999106%2C%22le%22%3A8923.5%7D" allowtransparency="true" allowfullscreen="true" frameborder="0" data-instgrm-payload-id="instagram-media-payload-1" scrolling="no" />
                      </span>
                    </div>
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionStatistic;
