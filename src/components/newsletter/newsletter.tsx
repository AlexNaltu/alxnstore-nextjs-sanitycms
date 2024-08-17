"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Socials } from "@/lib/constants";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const requiredSchema = z.object({
  email: z.string().email("Invalid email address"),
});

const Newsletter = () => {
  const [status, setStatus] = useState<number | null>(null);
  const [message, setMessage] = useState<string>("");
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [run, setRun] = useState<boolean>(false);
  const [totalCounts, setTotalCounts] = useState<number>(400);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(requiredSchema) });

  // Handle form submission and send the email to the server
  const onSubmit = async () => {
    setButtonDisabled(true);
    try {
      const response = await fetch("/api/newsletter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: "email" }),
      });
      const data = await response.json();
      if (data.status >= 400) {
        setStatus(data.status);
        setMessage(
          "Error joining the newsletter. You can directly contact me at alxnbusiness1@gmail.com"
        );
        setTimeout(() => {
          setMessage("");
          setButtonDisabled(false);
        }, 2000);
        return;
      }
      setStatus(201);
      setMessage("Successfully joined the newsletter");
      setTimeout(() => {
        setTotalCounts(0);
        setMessage("");
        setButtonDisabled(false);
      }, 4000);
      setTotalCounts(400);
    } catch (error) {
      setStatus(500);
      setMessage(
        "Error joining the newsletter. You can directly contact me at alxnbusiness1@gmail.com"
      );
      setTimeout(() => {
        setMessage("");
        setButtonDisabled(false);
      }, 2000);
    }
  };

  return (
    <>
      <div className="tracking-tighter sm:my-10 text-white custom-bg pt-14 lg:pt-16 min-[1500px]:pt-24">
        <div className="max-w-[1600px] px-1 mx-auto">
          <h1 className="uppercase font-extrabold text-2xl min-[470px]:text-3xl sm:text-4xl">
            Newsletter
          </h1>
          <h2 className=" text-[17px] min-[470px]:text-base sm:text-lg">
            Stay Updated with Our Latest Products
          </h2>
          <form
            className="flex flex-col gap-2 min-[450px]:flex-row min-[450px]:items-center mt-3 max-w-[600px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              placeholder="Enter your email"
              className="rounded-none  border-black max-w-[500px] text-black"
              type="email"
              {...register("email")}
            />
            <Button
              disabled={buttonDisabled}
              type="submit"
              className="text-black bg-white hover:text-white hover:bg-black hover:border-white border-2 transition-all ease-linear duration-200 uppercase tracking-tighter w-fit rounded-sm"
            >
              {submitting ? "Submitting" : "Submit"}
            </Button>
            {message && (
              <p
                className={`${status !== 201 ? "text-red-500" : "text-green-500"} font-black`}
              >
                {message}
              </p>
            )}
          </form>
          <div className="flex items-center mt-2 gap-3">
            {Socials.map((social, i) => (
              <Link href={social.href} key={i}>
                <Image src={social.image} width={30} height={30} alt="/" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
