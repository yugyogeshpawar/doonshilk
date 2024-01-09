'use client'
import React, { useEffect, useState } from "react";
import Input from "@/shared/Input/Input";
import ButtonPrimary from "@/shared/Button/ButtonPrimary";
import Link from "next/link";
import axios from "axios";
import { baseUrl } from "@/Url";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const PageForgotPass = ({ }) => {
    const [pass, setPass] = useState('');
    const [query, setQuery] = useState(null);
    useEffect(async () => {
        const qry = (window.location.href.indexOf('?') != -1) && window.location.href.split('?').reverse()[0].split('&').map(e => {
            let [k, v] = e.split('=');
            return { [k]: v };
        });
        setQuery(qry);
        console.log(qry);
    }, []);
    // const [params,setParams] = useSearchParams();

    // console.log(params);
    if (!query || !query[0] || !query[1] || !query[0]?.tok || !query[1]?.id) {
        return (
            <div className="container mb-24 lg:mb-32">
                <header className="text-center max-w-2xl mx-auto - mb-14 sm:mb-16 lg:mb-20">
                    <h2 className="mt-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
                        Wrong Token. Try Resending Email
                    </h2>
                </header>
            </div>
        )
    }
    const tok = query[0].tok;
    const id = query[1].id;

    return (
        <div className="container mb-24 lg:mb-32">
            <ToastContainer />
            <header className="text-center max-w-2xl mx-auto - mb-14 sm:mb-16 lg:mb-20">
                <h2 className="mt-20 flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
                    Forgot password
                </h2>
                <span className="block text-sm mt-4 text-neutral-700 sm:text-base dark:text-neutral-200">
                    Welcome to our Community
                </span>
            </header>

            <div className="max-w-md mx-auto space-y-6">
                {/* FORM */}
                <div className="grid grid-cols-1 gap-6">
                    <label className="block">
                        <span className="text-neutral-800 dark:text-neutral-200">
                            New Password
                        </span>
                        <Input
                            type="password"
                            placeholder="new password"
                            className="mt-1"
                            onChange={(e) => {
                                setPass(e.target.value);
                            }}
                        />
                    </label>
                    <ButtonPrimary type="submit" onClick={(e) => {
                        e.preventDefault();

                        console.log('sending', {
                            id: id,
                            token: tok,
                            newPassword: pass,
                        });

                        axios.post(`${baseUrl}/changePassword`, {
                            id: id,
                            token: tok,
                            newPassword: pass,
                        }).then(res => {
                            console.log('ok');
                            if (res.status == 200) {
                                toast.success(res.data.message);
                            } else {
                                toast.error(res.data.message);
                            }
                        }).catch(err => {
                            console.log(err);
                            toast.error('Server Down. Try Again Later.');
                        });
                    }}>Continue</ButtonPrimary>
                </div>

                {/* ==== */}
                <span className="block text-center text-neutral-700 dark:text-neutral-300">
                    Go back for {` `}
                    <Link href="/login" className="text-green-600">
                        Sign in
                    </Link>
                    {` / `}
                    <Link href="/signup" className="text-green-600">
                        Sign up
                    </Link>
                </span>
            </div>
        </div>
    );
};

export default PageForgotPass;
