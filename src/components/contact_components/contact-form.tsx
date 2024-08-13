"use client";
import React, { ReactNode, useRef } from "react";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const userSchema = z.object({
  user_name: z.string(),
  user_email: z.string().email(),
  message: z.string().min(10).max(500),
});

const ContactForm = () => {
  const ref: any = useRef();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(userSchema) });

  const onSubmit = (data: any) => {
    emailjs
      .sendForm(
        "service_r740fpu",
        "adelin-contact",
        ref.current,
        "9kAgROYSfFf9EA5Ey"
      )
      .then((result) => console.log("Success"))
      .catch((error) => console.log("Failed"));

    router.push("/contact/success");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      ref={ref}
      className="flex flex-col gap-3 my-4"
    >
      <div className="flex flex-col gap-1">
        <label htmlFor="">Full Name</label>
        <Input {...register("user_name")} placeholder="Your Name" />
        {errors.user_name && (
          <span>{errors.user_name.message as ReactNode}</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="">Email Address</label>
        <Input
          {...register("user_email")}
          placeholder="example: myemail@gmail.com"
        />
        {errors.user_name && (
          <span>{errors.user_name.message as ReactNode}</span>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="">Full Name</label>
        <Textarea {...register("message")} placeholder="Your Name" />
        {errors.user_name && (
          <span>{errors.message!.message as ReactNode}</span>
        )}
      </div>
      <Button className="text-white bg-black">Send Message</Button>
    </form>
  );
};

export default ContactForm;
