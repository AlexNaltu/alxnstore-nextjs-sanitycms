import ContactForm from "@/components/contact_components/contact-form";
import React from "react";

const ContactPage = () => {
  return (
    <div className="w-full h-screen bg-white">
      <div className="w-full h-[3rem] bg-slate-300" />
      <div className="px-2">
        <div>
          <h1 className="text-3xl">Contact Us</h1>
          <p className="text-sm text-slate-500">
            Do you have any questions or need help? Don't hesitate to contact us
            for anything you need.
          </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
