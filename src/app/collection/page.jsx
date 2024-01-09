"use client";
import React, { useEffect, useState } from "react";
import Pagination from "@/shared/Pagination/Pagination";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import SectionSliderCollections from "@/components/SectionSliderLargeProduct";

import axios from "axios";
import { usePathname, useSearchParams, useParams } from 'next/navigation'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
import NewProduct from "../newProduct/page";
import { baseUrl } from "@/Url";

const LOAD_STATUS = {
  loading: 0,
  loaded: 2,
  failed: 3,
};

const Page = () => {


  const pathname = usePathname()
  const searchParams = useSearchParams()
  const Params = useParams()
  const [data, setData] = useState(null);
  const [pData, setPData] = useState(null);
  const [loadStatus, setLoadStatus] = useState(LOAD_STATUS.loading);

  useEffect(() => {
    const id = searchParams.get('id');
    setLoadStatus(LOAD_STATUS.loading);
    axios.get(`${baseUrl}/get_category/${id}`).then(
      (response) => {
        setData(response.data.data);
        setLoadStatus(LOAD_STATUS.loaded);
      }
    ).catch((error) => {
      setLoadStatus(LOAD_STATUS.failed);
      console.log(error);
    })

    axios.get(`${baseUrl}/getProductsByCategoryId/${id}`)
      .then((response) => {
        console.log('products', response)
        if (response.status === 200) {
          if ("data" in response.data) {
            setPData(response.data.data);
            setLoadStatus(LOAD_STATUS.loaded);
          } else {
            setPData(null);
            toast.error(response.data.message);
            setLoadStatus(LOAD_STATUS.failed);
          }
        }
        // toast.success('products updated')
      })
      .catch((error) => {
        console.log('product err', error);
        setLoadStatus(LOAD_STATUS.failed);
      })
    // console.log('p-data', pData)
  },

    [pathname, searchParams]);

  return (
    <div className={`nc-PageCollection`}>
      <ToastContainer />
      <div className="container py-16 lg:pb-28 lg:pt-20 space-y-16 sm:space-y-20 lg:space-y-28">
        <div className="space-y-10 lg:space-y-14">
          {/* HEADING */}
          {(loadStatus == LOAD_STATUS.loading) ?
            (
              <div className="flex flex-col mt-12 lg:mt-16 space-y-5 sm:space-y-0 sm:space-x-3 sm:flex-row justify-center items-center">
                {/* <Pagination /> */}
                <ButtonPrimary loading>Loading</ButtonPrimary>
              </div>
            ) : null
          }



          <div className="max-w-screen-sm">
            <h2 className="block text-2xl sm:text-3xl lg:text-4xl font-semibold">
              {data == null ? '' : data.category_name}
            </h2>
            <span className="block mt-4 text-neutral-500 dark:text-neutral-400 text-sm sm:text-base">
              {data == null ? '' : data.description}
            </span>
          </div>

          <hr className="border-slate-200 dark:border-slate-700" />
          <main>
            {/* TABS FILTER */}
            {/* <TabFilters /> */}

            {/* LOOP ITEMS */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-10 mt-8 lg:mt-10">
              {/* {PRODUCTS.map((item, index) => (
                <ProductCard data={item} key={index} />
              ))} */}
              {(pData===null || pData=='') ? "" : pData.map((item, index) => (
                <NewProduct item={item} key={index} />
              ))}
            </div>

            {/* PAGINATION */}
            {
              (loadStatus == LOAD_STATUS.failed) ?
                (
                  <div className="flex my-10 w-full align-center justify-center opacity-50 text-2xl sm:text-3xl lg:text-4xl font-semibold">
                    {/* <div className="m-auto opacity-50 text-2xl sm:text-3xl lg:text-4xl font-semibold">  */}
                    No {data?.category_name} Found.
                    {/* </div> */}
                  </div>
                ) : null
            }

          </main>
        </div>

        {/* === SECTION 5 === */}
        {/* <hr className="border-slate-200 dark:border-slate-700" /> */}

        {/* <SectionSliderCollections /> */}
        <hr className="border-slate-200 dark:border-slate-700" />

        {/* SUBCRIBES */}
        {/* <SectionPromo1 /> */}
      </div>
    </div>
  );

};


export default Page;
